// custom.d.ts

// Declare for SVG imports
declare module '*.svg' {
  const content: string;
  export default content;
}

// Declare for data.js file
declare module './lendsor/data' {
  export const images: {
      twoUsers: string;
      threeUsers: string;
      fileSave: string;
      moneySave: string;
  };
}
