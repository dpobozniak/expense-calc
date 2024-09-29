# Net Value Calculator

## Overview

This project is a web-based application that calculates the net value from the gross value provided by the user. It allows users to input a gross value and optionally calculate a travel allowance based on a number of kilometers. The app then displays detailed calculations, including costs of obtaining income, taxation base, tax, and net value, with the results presented in a table.

The app is built using HTML, CSS, and JavaScript (with ES6 modules).

<img width="366" alt="Screenshot 2024-09-29 at 11 53 53" src="https://github.com/user-attachments/assets/8d3718b4-a2fb-4eea-8b4c-2b1f974b179b">

## Features

- Input fields for **gross value** (required) and **kilometers** (optional).
- Calculates the following:
  1. **Gross Value**: The input value.
  2. **Costs of Obtaining Income**: 20% of the gross value.
  3. **Taxation Base**: Gross value minus the costs of obtaining income.
  4. **Tax**: 12% of the taxation base, rounded.
  5. **Net Value**: Gross value minus tax.
  6. **Travel Allowance**: Number of kilometers multiplied by 1.15.
  7. **Final Net Value**: Net value plus travel allowance (if provided).
- Displays a table with the calculated results.
- Modular structure with separate JavaScript modules.

## Installation and Setup

### Prerequisites

- A local web server is required to run the app without CORS issues (e.g., Python HTTP server, Node.js, or VS Code Live Server).

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dpobozniak/expense-calc.git
   cd expense-calc
   ```

2. **Start a Local Development Server**:

   - **Python (3.x)**:
     Run the following command in your project directory to start a local server:
     ```bash
     python -m http.server 8000
     ```
     Open your browser and go to `http://localhost:8000/index.html`.

   - **Node.js**:
     If you have Node.js installed, you can use the `http-server` package:
     ```bash
     npm install -g http-server
     http-server
     ```
     Open your browser and go to `http://localhost:8080/index.html`.

   - **VS Code Live Server**:
     If you're using VS Code, you can use the **Live Server** extension. Simply right-click on `index.html` and select **"Open with Live Server"**.

## Usage

1. Open the app in your browser after starting your local server.
2. Enter the **Gross Value** in the input field.
3. Optionally, enter the **Kilometers** if you wish to calculate the travel allowance.
4. Click the **"Calculate"** button.
5. The detailed results will be displayed in a table format under the input section.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the app.
- `styles.css`: The stylesheet for styling the application.
- `script.js`: The main JavaScript file that handles the interaction with the DOM and imports the `calculateNetValue` function.
- `calculate.js`: The JavaScript module containing the core calculation logic, which is exported to `script.js`.

## Calculation Details

1. **Gross Value**: This is the user-input value.
2. **Cost of Obtaining Income**: Calculated as 20% of the gross value.
3. **Taxation Base**: Gross value minus the cost of obtaining income, rounded based on the 0.50 rule.
4. **Tax**: 12% of the taxation base, rounded to the nearest value.
5. **Net Value**: The gross value minus the calculated tax.
6. **Travel Allowance**: Calculated as the number of kilometers (optional) multiplied by 1.15.
7. **Final Net Value**: The net value plus the travel allowance (if kilometers are provided).

## Example

If you input a **Gross Value** of `1000` and **Kilometers** of `50`, the app will calculate the following:

- **Gross Value**: `1000.00`
- **Cost of Obtaining Income**: `200.00`
- **Taxation Base**: `800.00`
- **Tax (12%)**: `96.00`
- **Net Value**: `904.00`
- **Travel Allowance**: `57.50`
- **Final Net Value**: `961.50`
