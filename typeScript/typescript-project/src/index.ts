// types.ts - Type definitions and functions

// Rectangle related
export type Rectangle = {
  width: number;
  height: number;
};

export const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};

export const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

// Recipe related
export type Ingredient = {
  name: string;
  quantity: string;
};

export type Recipe = {
  title: string;
  ingredients: Array<Ingredient>;
  instructions: string;
};

export const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
};

// Shopping cart related
export type ShoppingCart = {
  userId: string;
  items: string[];
};

export const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

// Album formats related
export type DigitalFormat = "MP3" | "FLAC";
export type PhysicalFormat = "LP" | "CD" | "Cassette";
export type AlbumFormat = DigitalFormat | PhysicalFormat;
export const getAlbumFormats = (format: AlbumFormat) => {
  // function body
  console.log(format);
};

// Username related
export function getUsername(username: string | null) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return "Guest";
  }
}

export function validateUsername(username: string | null): boolean {
  if (typeof username === 'string') {
    return username.length > 5;
  }
  return false;
}

// Direction related
export type Direction = 'up' | 'down' | 'left' | 'right';

export function move(direction: Direction, distance: number) {
  // Move the specified distance in the given direction
  console.log(direction, distance);
}

// Size record related
export const recordOfSizes = {
  small: 'small',
  large: 'large',
};

export const logSize = (size: 'small' | 'large') => {
  console.log(recordOfSizes[size]);
};

// Error handling related
export const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error('Something went wrong');
  }
  return 'all good';
};

// API response related
export type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

export const handleResponse = (response: APIResponse) => {
  if ('data' in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};

// Value parsing related
export const parseValue = (value: unknown) => {
  if (typeof value === 'object' && value !== null && 'data' in value) {
    return (value as { data: { id: string } }).data.id;
  }
  throw new Error('Parsing error!');
};