# ASCII art generator
This project allows you to create ASCII art from an input image using JavaScript. It utilizes the p5.js library for canvas manipulation and pixel processing.

# How It Works

- ## Image Loading:
  - The script begins by loading an image file (e.g., naruto128.png) using the `loadImage()` function from p5.js.
  - Make sure to place your image file in the project directory.
- ## Canvas Setup:
  -  A square canvas is created using `createCanvas(windowHeight, windowHeight)`.
  -  The background is set to black (`background(0)`).
- ## Pixel Processing:
  - The image pixels are accessed using `myImg.loadPixels()`.
  - For each pixel, the average of its red, green, and blue values is calculated.
  - Based on this average value, a corresponding character from the `characters` array is chosen. This array contains symbols representing different shades of gray.
- ## Rendering ASCII Art:
  - The chosen character is displayed at the appropriate position on the canvas using `text()` and `textSize()`.
  - The canvas is divided into a grid, and each cell corresponds to a pixel in the image.
  - Adjust the characters array to customize the appearance of your ASCII art.
- ## Responsive Design:
  - The `windowResized()` function ensures that the canvas size adjusts when the window is resized.
 
# Customization

- Modify the `characters` array to use different symbols for your ASCII art.
- Experiment with canvas size, font size, and other parameters to achieve the desired effect.


