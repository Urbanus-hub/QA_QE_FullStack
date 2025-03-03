// types.test.ts - Tests for our TypeScript module

// import { expect, test, describe } from ;
import {
  // Rectangle
  Rectangle,
  getRectangleArea,
  getRectanglePerimeter,
  
  // Recipe
  Recipe,
  processRecipe,
  
  // Shopping cart
  ShoppingCart,
  processCart,
  
  // Album formats
  DigitalFormat,
  PhysicalFormat,
  getAlbumFormats,
  
  // Username
  getUsername,
  validateUsername,
  
  // Direction
  Direction,
  move,
  
  // Size record
  recordOfSizes,
  logSize,
  
  // Error handling
  somethingDangerous,
  
  // API response
  APIResponse,
  handleResponse,
  
  // Value parsing
  parseValue
} from '../src/index';

// Rectangle tests
describe('Rectangle functions', () => {
  test('getRectangleArea calculates area correctly', () => {
    const rectangle: Rectangle = { width: 5, height: 10 };
    expect(getRectangleArea(rectangle)).toBe(50);
  });

  test('getRectanglePerimeter calculates perimeter correctly', () => {
    const rectangle: Rectangle = { width: 20, height: 40 };
    expect(getRectanglePerimeter(rectangle)).toBe(120);
  });

  test('Rectangle functions with zero values', () => {
    const rectangle: Rectangle = { width: 0, height: 10 };
    expect(getRectangleArea(rectangle)).toBe(0);
    expect(getRectanglePerimeter(rectangle)).toBe(20);
  });
});

// Recipe tests
describe('Recipe processing', () => {
  test('processRecipe accepts valid recipe', () => {
    const validRecipe: Recipe = {
      title: "Chocolate Chip Cookies",
      ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" },
      ],
      instructions: "Mix and bake.",
    };
    
    // Since processRecipe doesn't return anything, we just verify it doesn't throw
    expect(() => processRecipe(validRecipe)).not.toThrow();
  });

  test('processRecipe with empty ingredients array', () => {
    const recipeWithNoIngredients: Recipe = {
      title: "Empty Recipe",
      ingredients: [],
      instructions: "Do nothing."
    };
    
    expect(() => processRecipe(recipeWithNoIngredients)).not.toThrow();
  });
});

// ShoppingCart tests
describe('Shopping cart processing', () => {
  test('processCart accepts valid cart', () => {
    const cart: ShoppingCart = {
      userId: "user123",
      items: ["item1", "item2", "item3"]
    };
    
    expect(() => processCart(cart)).not.toThrow();
  });

  test('processCart with empty items array', () => {
    const emptyCart: ShoppingCart = {
      userId: "user456",
      items: []
    };
    
    expect(() => processCart(emptyCart)).not.toThrow();
  });
});

// AlbumFormat tests
describe('Album formats', () => {
  test('getAlbumFormats accepts digital formats', () => {
    const digitalFormats: DigitalFormat[] = ["MP3", "FLAC"];
    
    digitalFormats.forEach(format => {
      expect(() => getAlbumFormats(format)).not.toThrow();
    });
  });

  test('getAlbumFormats accepts physical formats', () => {
    const physicalFormats: PhysicalFormat[] = ["LP", "CD", "Cassette"];
    
    physicalFormats.forEach(format => {
      expect(() => getAlbumFormats(format)).not.toThrow();
    });
  });
});

// Username tests
describe('Username handling', () => {
  test('getUsername with valid username', () => {
    expect(getUsername("Alice")).toBe("User: Alice");
  });

  test('getUsername with null returns Guest', () => {
    expect(getUsername(null)).toBe("Guest");
  });

  test('validateUsername with valid username', () => {
    expect(validateUsername("kiokoki")).toBe(true);
  });

  test('validateUsername with short username', () => {
    expect(validateUsername("short")).toBe(false);
  });

  test('validateUsername with null', () => {
    expect(validateUsername(null)).toBe(false);
  });
});

// Direction tests
describe('Direction handling', () => {
  test('move function with valid directions', () => {
    // Mock console.log for testing
    const originalConsoleLog = console.log;
    const mockConsoleLog = jest.fn();
    console.log = mockConsoleLog;

    move('up', 10);
    expect(mockConsoleLog).toHaveBeenCalledWith('up', 10);

    move('down', 15);
    expect(mockConsoleLog).toHaveBeenCalledWith('down', 15);

    move('left', 5);
    expect(mockConsoleLog).toHaveBeenCalledWith('left', 5);

    move('right', 20);
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

    logSize('small');
    expect(mockConsoleLog).toHaveBeenCalledWith('small');

    logSize('large');
    expect(mockConsoleLog).toHaveBeenCalledWith('large');

    // Restore original console.log
    console.log = originalConsoleLog;
  });
});

// Error handling tests
describe('Error handling', () => {
  test('somethingDangerous might throw or return string', () => {
    try {
      const result = somethingDangerous();
      // If no error was thrown
      expect(result).toBe('all good');
    } catch (error) {
      // If an error was thrown
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Something went wrong');
    }
  });
});

// API response tests
describe('API response handling', () => {
  test('handleResponse with data response', () => {
    const dataResponse: APIResponse = {
      data: {
        id: "123"
      }
    };
    
    expect(handleResponse(dataResponse)).toBe("123");
  });

  test('handleResponse with error response', () => {
    const errorResponse: APIResponse = {
      error: "Something went wrong"
    };
    
    expect(() => handleResponse(errorResponse)).toThrow("Something went wrong");
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
    
    expect(parseValue(validObj)).toBe("abc123");
  });

  test('parseValue with invalid object throws error', () => {
    const invalidObj = {
      someField: "value"
    };
    
    expect(() => parseValue(invalidObj)).toThrow("Parsing error!");
  });

  test('parseValue with primitive values throws error', () => {
    expect(() => parseValue("string")).toThrow("Parsing error!");
    expect(() => parseValue(123)).toThrow("Parsing error!");
    expect(() => parseValue(null)).toThrow("Parsing error!");
    expect(() => parseValue(undefined)).toThrow("Parsing error!");
  });
});