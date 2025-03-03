"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
};
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
const rect1 = {
    width: 20,
    height: 40
};
console.log(getRectanglePerimeter(rect1));
const processRecipe = (recipe) => {
    // Do something with the recipe in here
};
processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
});
const processCart = (cart) => {
    // Do something with the cart in here
};
processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
});
const getAlbumFormats = (format) => {
    // function body
    console.log(format);
};
getAlbumFormats('MP3');
