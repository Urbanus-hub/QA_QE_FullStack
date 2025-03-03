"use strict";
// types.ts - Type definitions and functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValue = exports.handleResponse = exports.somethingDangerous = exports.logSize = exports.recordOfSizes = exports.move = exports.validateUsername = exports.getUsername = exports.getAlbumFormats = exports.processCart = exports.processRecipe = exports.getRectanglePerimeter = exports.getRectangleArea = void 0;
const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
};
exports.getRectangleArea = getRectangleArea;
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
exports.getRectanglePerimeter = getRectanglePerimeter;
const processRecipe = (recipe) => {
    // Do something with the recipe in here
};
exports.processRecipe = processRecipe;
const processCart = (cart) => {
    // Do something with the cart in here
};
exports.processCart = processCart;
const getAlbumFormats = (format) => {
    // function body
    console.log(format);
};
exports.getAlbumFormats = getAlbumFormats;
// Username related
function getUsername(username) {
    if (username !== null) {
        return `User: ${username}`;
    }
    else {
        return "Guest";
    }
}
exports.getUsername = getUsername;
function validateUsername(username) {
    if (typeof username === 'string') {
        return username.length > 5;
    }
    return false;
}
exports.validateUsername = validateUsername;
function move(direction, distance) {
    // Move the specified distance in the given direction
    console.log(direction, distance);
}
exports.move = move;
// Size record related
exports.recordOfSizes = {
    small: 'small',
    large: 'large',
};
const logSize = (size) => {
    console.log(exports.recordOfSizes[size]);
};
exports.logSize = logSize;
// Error handling related
const somethingDangerous = () => {
    if (Math.random() > 0.5) {
        throw new Error('Something went wrong');
    }
    return 'all good';
};
exports.somethingDangerous = somethingDangerous;
const handleResponse = (response) => {
    if ('data' in response) {
        return response.data.id;
    }
    else {
        throw new Error(response.error);
    }
};
exports.handleResponse = handleResponse;
// Value parsing related
const parseValue = (value) => {
    if (typeof value === 'object' && value !== null && 'data' in value) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
exports.parseValue = parseValue;
