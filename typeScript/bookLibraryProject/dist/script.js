"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", function () {
    const booksContainer = document.getElementById("books-container");
    const genreFilter = document.getElementById("genre-filter");
    const yearFilter = document.getElementById("year-filter");
    const sortBy = document.getElementById("sort-by");
    const applyFiltersBtn = document.getElementById("apply-filters");
    const searchInput = document.querySelector(".search-bar input");
    const loadingContainer = document.getElementById("loading-container");
    const cartCountElement = document.querySelector(".cart-count");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartEmptyMessage = document.querySelector(".cart-empty-message");
    const cartTotalItems = document.querySelector(".cart-total span:last-child");
    const cartTotalPrice = document.createElement("div");
    cartTotalPrice.className = "cart-total";
    cartTotalPrice.innerHTML = "<span>Total Price:</span><span>$0.00</span>";
    const checkoutBtn = document.querySelector(".checkout-btn");
    const cartFooter = document.querySelector(".cart-footer");
    // Add the total price element to cart footer
    cartFooter.insertBefore(cartTotalPrice, checkoutBtn);
    let cartItems = [];
    let allBooks = [];
    function fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (loadingContainer) {
                    loadingContainer.style.display = "flex";
                }
                const data = yield fetch("http://localhost:3000/Books");
                const dataJson = yield data.json();
                if (loadingContainer) {
                    loadingContainer.style.display = "none";
                }
                return dataJson;
            }
            catch (error) {
                console.error("Error fetching data:", error);
                if (loadingContainer) {
                    loadingContainer.style.display = "none";
                }
                return [];
            }
        });
    }
    // Initialize the app
    fetchData().then((books) => {
        allBooks = books;
        displayBooks(books);
        updateStats(books);
    });
    // Add event listener for filter button
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener("click", function () {
            filterAndSortBooks();
        });
    }
    // Add event listener for search input
    if (searchInput) {
        searchInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                filterAndSortBooks();
            }
        });
    }
    function filterAndSortBooks() {
        if (loadingContainer) {
            loadingContainer.style.display = "flex";
        }
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const genre = genreFilter ? genreFilter.value : "";
        const yearRange = yearFilter ? yearFilter.value : "";
        const sortOption = sortBy ? sortBy.value : "";
        // Filter books
        let filteredBooks = allBooks.filter(book => {
            // Search filter
            const matchesSearch = searchTerm === '' ||
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.description.toLowerCase().includes(searchTerm);
            // Genre filter
            const matchesGenre = genre === '' || book.genre === genre;
            // Year filter
            let matchesYear = true;
            if (yearRange === 'pre-1900') {
                matchesYear = parseInt(book.year) < 1900;
            }
            else if (yearRange === '1900-1950') {
                matchesYear = parseInt(book.year) >= 1900 && parseInt(book.year) <= 1950;
            }
            else if (yearRange === 'post-1950') {
                matchesYear = parseInt(book.year) > 1950;
            }
            return matchesSearch && matchesGenre && matchesYear;
        });
        // Sort books
        switch (sortOption) {
            case 'title-asc':
                filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'year-asc':
                filteredBooks.sort((a, b) => parseInt(a.year) - parseInt(b.year));
                break;
            case 'year-desc':
                filteredBooks.sort((a, b) => parseInt(b.year) - parseInt(a.year));
                break;
            case 'pages-asc':
                filteredBooks.sort((a, b) => parseInt(a.pages) - parseInt(b.pages));
                break;
            case 'pages-desc':
                filteredBooks.sort((a, b) => parseInt(b.pages) - parseInt(a.pages));
                break;
        }
        displayBooks(filteredBooks);
        updateStats(filteredBooks);
        if (loadingContainer) {
            loadingContainer.style.display = "none";
        }
    }
    function displayBooks(books) {
        if (booksContainer) {
            booksContainer.innerHTML = "";
            if (books.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.textContent = 'No books match your filters. Try adjusting your search criteria.';
                booksContainer.appendChild(noResults);
                return;
            }
            books.forEach((result) => {
                const bookCard = document.createElement("div");
                bookCard.className = "book-card";
                const bookImage = document.createElement("div");
                bookImage.className = "book-image";
                const image = document.createElement("img");
                image.className = "image";
                image.src = result.image;
                image.alt = result.title;
                const bookCategory = document.createElement("div");
                bookCategory.className = "book-category";
                bookCategory.textContent = result.genre;
                bookImage.appendChild(image);
                bookImage.appendChild(bookCategory);
                const bookInfo = document.createElement("div");
                bookInfo.className = "book-info";
                const bookTitle = document.createElement("h3");
                bookTitle.className = "book-title";
                bookTitle.textContent = result.title;
                const bookAuthor = document.createElement("p");
                bookAuthor.className = "book-author";
                bookAuthor.textContent = result.author;
                const bookMeta = document.createElement("div");
                bookMeta.className = "book-meta";
                const year = document.createElement("span");
                year.id = "year";
                year.textContent = result.year;
                const pages = document.createElement("span");
                pages.id = "pages";
                pages.textContent = `${result.pages} pages`;
                // Add price display
                const price = document.createElement("span");
                price.id = "price";
                price.textContent = `$${result.price.toFixed(2)}`;
                price.style.color = "var(--primary)";
                price.style.fontWeight = "bold";
                bookMeta.appendChild(year);
                bookMeta.appendChild(pages);
                bookMeta.appendChild(price);
                const description = document.createElement("p");
                description.className = "book-description";
                description.textContent = result.description;
                const bookPublisher = document.createElement("p");
                bookPublisher.className = "book-publisher";
                bookPublisher.textContent = result.publisher;
                const bookId = document.createElement("p");
                bookId.className = 'id-book';
                bookId.textContent = result.id;
                bookId.style.display = 'none';
                const buyBook = document.createElement("button");
                buyBook.className = "buy-book";
                buyBook.textContent = `Buy Now • $${result.price.toFixed(2)}`;
                // Add to cart click handler
                buyBook.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const target = e.target;
                    let bookId = '';
                    if (target && target.parentNode) {
                        const idElement = target.parentNode.querySelector('.id-book');
                        if (idElement) {
                            bookId = idElement.textContent || '';
                        }
                    }
                    addToCart(bookId, books);
                });
                bookInfo.appendChild(bookTitle);
                bookInfo.appendChild(bookAuthor);
                bookInfo.appendChild(bookMeta);
                bookInfo.appendChild(description);
                bookInfo.appendChild(bookPublisher);
                bookInfo.appendChild(bookId);
                bookInfo.appendChild(buyBook);
                // Add click handler for book details modal
                bookCard.addEventListener('click', () => {
                    showBookModal(result);
                });
                bookCard.appendChild(bookImage);
                bookCard.append(bookInfo);
                booksContainer.appendChild(bookCard);
            });
        }
    }
    function updateStats(books) {
        const totalBooks = document.getElementById("total-books");
        if (totalBooks) {
            totalBooks.textContent = books.length.toString();
        }
        if (books.length === 0) {
            const avgPagesElement = document.getElementById("avg-pages");
            if (avgPagesElement) {
                avgPagesElement.textContent = "0";
            }
            const oldestBookElement = document.getElementById("oldest-book");
            if (oldestBookElement) {
                oldestBookElement.textContent = "N/A";
            }
            const genresCountElement = document.getElementById("genres-count");
            if (genresCountElement) {
                genresCountElement.textContent = "0";
            }
            return;
        }
        // Calculate average pages
        const totalPages = books.reduce((sum, book) => sum + parseInt(book.pages), 0);
        const avgPages = Math.round(totalPages / books.length);
        const avgPagesElement = document.getElementById("avg-pages");
        if (avgPagesElement) {
            avgPagesElement.textContent = avgPages.toString();
        }
        // Find oldest book
        const oldestYear = Math.min(...books.map(book => parseInt(book.year)));
        const oldestBookElement = document.getElementById("oldest-book");
        if (oldestBookElement) {
            oldestBookElement.textContent =
                oldestYear < 0 ? `${Math.abs(oldestYear)} BCE` : oldestYear.toString();
        }
        // Count unique genres
        const uniqueGenres = new Set(books.map(book => book.genre));
        const genresCountElement = document.getElementById("genres-count");
        if (genresCountElement) {
            genresCountElement.textContent = uniqueGenres.size.toString();
        }
    }
    function showBookModal(book) {
        var _a;
        const modal = document.getElementById("book-modal");
        if (modal) {
            modal.style.display = "flex";
            // Populate modal content
            const modalImg = modal.querySelector(".modal-book-image img");
            if (modalImg) {
                modalImg.src = book.image;
                modalImg.alt = book.title;
            }
            const modalTitle = modal.querySelector(".modal-title");
            if (modalTitle) {
                modalTitle.textContent = book.title;
            }
            const modalAuthor = modal.querySelector(".modal-author");
            if (modalAuthor) {
                modalAuthor.textContent = `By ${book.author}`;
            }
            // Update meta info
            const metaValues = modal.querySelectorAll(".meta-value");
            if (metaValues.length >= 4) {
                metaValues[0].textContent = book.year;
                metaValues[1].textContent = book.genre;
                metaValues[2].textContent = book.pages;
                metaValues[3].textContent = `#${book.id || '1'}`;
            }
            // Add price to modal
            if (modal.querySelector('.meta-item.price')) {
                const priceMetaValue = modal.querySelector('.meta-item.price .meta-value');
                if (priceMetaValue) {
                    priceMetaValue.textContent = `$${book.price.toFixed(2)}`;
                }
            }
            else {
                const priceItem = document.createElement('div');
                priceItem.className = 'meta-item price';
                priceItem.innerHTML = `
          <span class="meta-label">Price</span>
          <span class="meta-value">$${book.price.toFixed(2)}</span>
        `;
                const modalMeta = modal.querySelector('.modal-meta');
                if (modalMeta) {
                    modalMeta.appendChild(priceItem);
                }
            }
            const modalDescription = modal.querySelector(".modal-description");
            if (modalDescription) {
                modalDescription.textContent = book.description;
            }
            const publisherElement = modal.querySelector(".book-publisher strong");
            if (publisherElement) {
                publisherElement.textContent = `Publisher: ${book.publisher}`;
            }
            // Add to cart button in modal
            const addToCartBtn = modal.querySelector(".primary-btn");
            if (addToCartBtn) {
                addToCartBtn.textContent = `Add to Cart • $${book.price.toFixed(2)}`;
                // Remove previous event listeners
                const newAddToCartBtn = addToCartBtn.cloneNode(true);
                (_a = addToCartBtn.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newAddToCartBtn, addToCartBtn);
                // Add new event listener
                newAddToCartBtn.addEventListener("click", function () {
                    addToCart(book.id, allBooks);
                });
            }
            // Close modal event
            const closeModal = document.getElementById("close-modal");
            if (closeModal) {
                closeModal.addEventListener("click", function () {
                    modal.style.display = "none";
                });
            }
            // Close when clicking outside
            modal.addEventListener("click", function (e) {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
    }
    // Cart functionality
    function addToCart(bookId, booksArray) {
        const bookToAdd = booksArray.find(book => book.id == bookId);
        if (!bookToAdd)
            return;
        // Check if book is already in cart
        const existingItemIndex = cartItems.findIndex(item => item.id == bookId);
        if (existingItemIndex !== -1) {
            // Book already in cart, increment quantity
            cartItems[existingItemIndex].quantity += 1;
        }
        else {
            // Add new book to cart
            cartItems.push(Object.assign(Object.assign({}, bookToAdd), { quantity: 1 }));
        }
        // Update cart UI
        updateCartUI();
        // Show feedback
        showNotification(`Added "${bookToAdd.title}" to cart`);
    }
    function updateCartUI() {
        // Update cart count
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems.toString();
        cartTotalItems.textContent = `${totalItems} ${totalItems === 1 ? 'book' : 'books'}`;
        // Calculate total price
        const totalPrice = cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
        // Update total price display
        const priceElement = cartTotalPrice.querySelector('span:last-child');
        if (priceElement) {
            priceElement.textContent = `$${totalPrice.toFixed(2)}`;
        }
        // Update cart items display
        renderCartItems();
    }
    function renderCartItems() {
        // Clear current cart items (except empty message)
        const itemElements = cartItemsContainer.querySelectorAll('.cart-item');
        itemElements.forEach(item => item.remove());
        // Show/hide empty message
        if (cartItems.length === 0) {
            cartEmptyMessage.style.display = 'block';
            checkoutBtn.disabled = true;
            return;
        }
        else {
            cartEmptyMessage.style.display = 'none';
            checkoutBtn.disabled = false;
        }
        // Add each cart item
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-title">${item.title}</h3>
          <p class="cart-item-author">${item.author}</p>
          <p class="cart-item-price">$${item.price.toFixed(2)} each</p>
          <div class="cart-item-controls">
            <div class="quantity-controls">
              <button class="quantity-btn decrease-quantity" data-id="${item.id}">
                <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn btn2 increase-quantity" data-id="${item.id}">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <span class="item-total">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-item" data-id="${item.id}">
              <i class="fa fa-trash" aria-hidden="true"></i>
              Remove
            </button>
          </div>
        </div>
      `;
            cartItemsContainer.appendChild(cartItem);
        });
        addCartItemEventListeners();
    }
    function addCartItemEventListeners() {
        // Increment quantity
        const increaseButtons = document.querySelectorAll('.increase-quantity');
        increaseButtons.forEach(button => {
            button.addEventListener('click', function (event) {
                const id = this.getAttribute('data-id');
                if (id)
                    incrementCartItem(id);
            });
        });
        // Decrement quantity
        const decreaseButtons = document.querySelectorAll('.decrease-quantity');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                if (id)
                    decrementCartItem(id);
            });
        });
        // Remove item
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                if (id)
                    removeCartItem(id);
            });
        });
    }
    function incrementCartItem(id) {
        const itemIndex = cartItems.findIndex(item => item.id == id);
        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity += 1;
            updateCartUI();
        }
    }
    function decrementCartItem(id) {
        const itemIndex = cartItems.findIndex(item => item.id == id);
        if (itemIndex !== -1) {
            if (cartItems[itemIndex].quantity > 1) {
                cartItems[itemIndex].quantity -= 1;
            }
            else {
                // If quantity would be 0, remove the item
                removeCartItem(id);
                return;
            }
            updateCartUI();
        }
    }
    function removeCartItem(id) {
        cartItems = cartItems.filter(item => item.id != id);
        updateCartUI();
        showNotification("Item removed from cart");
    }
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--primary);
      color: white;
      padding: 10px 15px;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 1000;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s, transform 0.3s;
    `;
        document.body.appendChild(notification);
        // Show notification
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        // Hide after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(10px)';
            // Remove from DOM after fade out
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    // Cart modal functionality
    const cartButton = document.getElementById('cart-button');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartModal = document.querySelector('.cart-modal');
    const closeCart = document.getElementById('close-cart');
    if (cartButton && cartOverlay && cartModal && closeCart) {
        // Open cart modal
        cartButton.addEventListener('click', () => {
            cartOverlay.classList.add('active');
            cartModal.classList.add('active');
        });
        // Close cart modal
        const closeCartModal = () => {
            cartOverlay.classList.remove('active');
            cartModal.classList.remove('active');
        };
        closeCart.addEventListener('click', closeCartModal);
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) {
                closeCartModal();
            }
        });
        // Close cart on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cartOverlay.classList.contains('active')) {
                closeCartModal();
            }
        });
    }
    // Add checkout button functionality
    checkoutBtn.addEventListener('click', function () {
        if (cartItems.length > 0) {
            const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            alert(`Proceeding to checkout!\nTotal: $${totalPrice.toFixed(2)}\nNumber of books: ${cartItems.reduce((count, item) => count + item.quantity, 0)}`);
            // Here you would redirect to a checkout page in a real application
        }
    });
    updateCartUI();
});
//# sourceMappingURL=script.js.map