"use strict";
// types.test.ts - Tests for our TypeScript module
Object.defineProperty(exports, "__esModule", { value: true });
// import { expect, test, describe } from ;
const index_1 = require("../src/index");
// Rectangle tests
describe('Rectangle functions', () => {
    test('getRectangleArea calculates area correctly', () => {
        const rectangle = { width: 5, height: 10 };
        expect((0, index_1.getRectangleArea)(rectangle)).toBe(50);
    });
    test('getRectanglePerimeter calculates perimeter correctly', () => {
        const rectangle = { width: 20, height: 40 };
        expect((0, index_1.getRectanglePerimeter)(rectangle)).toBe(120);
    });
    test('Rectangle functions with zero values', () => {
        const rectangle = { width: 0, height: 10 };
        expect((0, index_1.getRectangleArea)(rectangle)).toBe(0);
        expect((0, index_1.getRectanglePerimeter)(rectangle)).toBe(20);
    });
});
// Recipe tests
describe('Recipe processing', () => {
    test('processRecipe accepts valid recipe', () => {
        const validRecipe = {
            title: "Chocolate Chip Cookies",
            ingredients: [
                { name: "Flour", quantity: "2 cups" },
                { name: "Sugar", quantity: "1 cup" },
            ],
            instructions: "Mix and bake.",
        };
        // Since processRecipe doesn't return anything, we just verify it doesn't throw
        expect(() => (0, index_1.processRecipe)(validRecipe)).not.toThrow();
    });
    test('processRecipe with empty ingredients array', () => {
        const recipeWithNoIngredients = {
            title: "Empty Recipe",
            ingredients: [],
            instructions: "Do nothing."
        };
        expect(() => (0, index_1.processRecipe)(recipeWithNoIngredients)).not.toThrow();
    });
});
// ShoppingCart tests
describe('Shopping cart processing', () => {
    test('processCart accepts valid cart', () => {
        const cart = {
            userId: "user123",
            items: ["item1", "item2", "item3"]
        };
        expect(() => (0, index_1.processCart)(cart)).not.toThrow();
    });
    test('processCart with empty items array', () => {
        const emptyCart = {
            userId: "user456",
            items: []
        };
        expect(() => (0, index_1.processCart)(emptyCart)).not.toThrow();
    });
});
// AlbumFormat tests
describe('Album formats', () => {
    test('getAlbumFormats accepts digital formats', () => {
        const digitalFormats = ["MP3", "FLAC"];
        digitalFormats.forEach(format => {
            expect(() => (0, index_1.getAlbumFormats)(format)).not.toThrow();
        });
    });
    test('getAlbumFormats accepts physical formats', () => {
        const physicalFormats = ["LP", "CD", "Cassette"];
        physicalFormats.forEach(format => {
            expect(() => (0, index_1.getAlbumFormats)(format)).not.toThrow();
        });
    });
});
// Username tests
describe('Username handling', () => {
    test('getUsername with valid username', () => {
        expect((0, index_1.getUsername)("Alice")).toBe("User: Alice");
    });
    test('getUsername with null returns Guest', () => {
        expect((0, index_1.getUsername)(null)).toBe("Guest");
    });
    test('validateUsername with valid username', () => {
        expect((0, index_1.validateUsername)("kiokoki")).toBe(true);
    });
    test('validateUsername with short username', () => {
        expect((0, index_1.validateUsername)("short")).toBe(false);
    });
    test('validateUsername with null', () => {
        expect((0, index_1.validateUsername)(null)).toBe(false);
    });
});
// Direction tests
describe('Direction handling', () => {
    test('move function with valid directions', () => {
        // Mock console.log for testing
        const originalConsoleLog = console.log;
        const mockConsoleLog = jest.fn();
        console.log = mockConsoleLog;
        (0, index_1.move)('up', 10);
        expect(mockConsoleLog).toHaveBeenCalledWith('up', 10);
        (0, index_1.move)('down', 15);
        expect(mockConsoleLog).toHaveBeenCalledWith('down', 15);
        (0, index_1.move)('left', 5);
        expect(mockConsoleLog).toHaveBeenCalledWith('left', 5);
        (0, index_1.move)('right', 20);
        expect(mockConsoleLog).toHaveBeenCalledWith('right', 20);
        // Restore original console.log
        console.log = originalConsoleLog;
    });
});
// Size record tests
describe('Size record handling', () => {
    test('logSize with valid sizes', () => {
        // Mock console.log for testing
        const originalConsoleLog = console.log;
        const mockConsoleLog = jest.fn();
        console.log = mockConsoleLog;
        (0, index_1.logSize)('small');
        expect(mockConsoleLog).toHaveBeenCalledWith('small');
        (0, index_1.logSize)('large');
        expect(mockConsoleLog).toHaveBeenCalledWith('large');
        // Restore original console.log
        console.log = originalConsoleLog;
    });
});
// Error handling tests
describe('Error handling', () => {
    test('somethingDangerous might throw or return string', () => {
        try {
            const result = (0, index_1.somethingDangerous)();
            // If no error was thrown
            expect(result).toBe('all good');
        }
        catch (error) {
            // If an error was thrown
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Something went wrong');
        }
    });
});
// API response tests
describe('API response handling', () => {
    test('handleResponse with data response', () => {
        const dataResponse = {
            data: {
                id: "123"
            }
        };
        expect((0, index_1.handleResponse)(dataResponse)).toBe("123");
    });
    test('handleResponse with error response', () => {
        const errorResponse = {
            error: "Something went wrong"
        };
        expect(() => (0, index_1.handleResponse)(errorResponse)).toThrow("Something went wrong");
    });
});
// Value parsing tests
describe('Value parsing', () => {
    test('parseValue with valid object', () => {
        const validObj = {
            data: {
                id: "abc123"
            }
        };
        expect((0, index_1.parseValue)(validObj)).toBe("abc123");
    });
    test('parseValue with invalid object throws error', () => {
        const invalidObj = {
            someField: "value"
        };
        expect(() => (0, index_1.parseValue)(invalidObj)).toThrow("Parsing error!");
    });
    test('parseValue with primitive values throws error', () => {
        expect(() => (0, index_1.parseValue)("string")).toThrow("Parsing error!");
        expect(() => (0, index_1.parseValue)(123)).toThrow("Parsing error!");
        expect(() => (0, index_1.parseValue)(null)).toThrow("Parsing error!");
        expect(() => (0, index_1.parseValue)(undefined)).toThrow("Parsing error!");
    });
});
