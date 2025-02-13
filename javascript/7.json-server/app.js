document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('productsContainer').innerHTML = `
            <div style="color: red; text-align: center;">
                Error loading products. Please make sure json-server is running.
            </div>
        `;
    }
}

function displayProducts(products) {
    const container = document.getElementById('productsContainer');
    
    const productsHTML = products.map(product => `
        <div class="product-card">
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-details">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-stock">In Stock: ${product.stock} units</div>
        </div>
    `).join('');
    
    container.innerHTML = productsHTML;
}