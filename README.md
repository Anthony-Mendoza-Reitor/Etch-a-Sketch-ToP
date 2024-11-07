# Etch-a-Sketch Project

This project is part of The Odin Project's curriculum, specifically under "Project: Etch-a-Sketch." It simulates a simple sketching application using HTML, CSS, and JavaScript, where users can draw by hovering over a grid of squares. The grid size can be adjusted by the user.

[Live Demo](https://anthony-mendoza-reitor.github.io/Etch-a-Sketch-ToP/)

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Pseudo Code](#pseudo-code)
- [Approach](#approach)

## Overview

The Etch-a-Sketch project creates a dynamic grid of squares using JavaScript. The grid's size can be customized, and squares change color when hovered over, mimicking an "etch-a-sketch" effect. This project explores foundational skills in JavaScript DOM manipulation and CSS layout techniques without relying on CSS Grid.

## Features

- **Dynamic Grid Creation**: The grid is created dynamically based on a set number of squares per row and column.
- **User-Defined Grid Size**: Users can specify the grid size (up to a maximum of 640) to create a custom sketch area.
- **Mouseover Effect**: Squares change color to white upon mouseover, allowing users to draw by hovering over the grid.
- **Responsive Design**: The layout adapts to different screen sizes, providing a consistent user experience.

## Technologies Used

- HTML
- CSS (Flexbox for layout)
- JavaScript (DOM manipulation)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/anthony-mendoza-reitor/Etch-a-Sketch-ToP.git
    ```
2. Open the ```index.html``` file in your browser to view the project.

3. Click the "Change Size" button to input a custom grid size and start drawing by hovering over the squares.

## Pseudo Code
1. Create a 16x16 grid of squares using JavaScript.
- Use nested loops to add rows and columns as individual ```div``` elements.
- Each row should contain 16 square cells.

2. Place the generated grid inside a container div with the ID ```grid```.

3. Use Flexbox in CSS to align and layout the squares in a grid pattern.

4. Ensure the grid size is responsive to changes, especially when using borders or margins.

## Approach
The approach to solving this project involves breaking down the task into the following steps:

1. Initialize Variables: Define the default grid size and calculate individual cell dimensions.
2. Grid Creation: Create a function (```addRows```) that generates rows and squares dynamically based on the chosen grid size.
3. Clear and Resize Grid: Add an event listener to the button that allows users to enter a new grid size, which clears the previous grid and creates a new one.
4. Color Change on Hover: Use JavaScript to detect mouseover events on each square and change its color to simulate drawing.

This project showcases fundamental DOM manipulation and layout techniques. The Etch-a-Sketch provides a fun and interactive way to practice JavaScript and CSS.
