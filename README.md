# Subscription-Pricing-Calculator
This web application allows users to upload a CSV file, display the data with pagination, and calculate subscription prices based on specific criteria. The application provides a user-friendly interface for data management and price calculation, ensuring a seamless and efficient user experience.

## Try Demo : 
https://ambikesh-jha.github.io/SubscriptionPricingCalculator/

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Files and Structure

- `index.html`: Main HTML file containing the structure of the application.
- `style.css`: CSS file for styling the application.
- `script.js`: JavaScript file containing the logic for CSV upload, data display, and price calculation.

### Steps to Set Up

1. **Clone or Download the Repository:**
   - Ensure you have the project files: `index.html`, `style.css`, and `script.js`.

2. **Open the Application:**
   - Open `index.html` in a web browser to run the application locally.

## Usage Guide

### Uploading a CSV File

1. **Select a CSV File:**
   - Click on the file input field under "Upload CSV File Here" to select a CSV file from your device.

2. **Upload the File:**
   - Click the "Upload" button to start the upload process.
   - The progress bar will display the upload status, and the upload status message will indicate when the upload is complete.

### Displaying Uploaded Data

1. **View Data:**
   - After the upload is complete, the data section will become visible.
   - The uploaded data will be displayed in a table with pagination controls.

2. **Search Data:**
   - Use the search input field to filter the data by email.

3. **Pagination:**
   - Navigate through the data using the "Previous" and "Next" buttons.

### Subscription Pricing Calculator

1. **Set Pricing Parameters:**
   - Input the base price, price per credit line, and price per credit score point in the respective fields.

2. **Calculate Prices:**
   - Click the "Calculate Prices" button to compute subscription prices based on the uploaded data and specified pricing parameters.

### Viewing Pricing Results

1. **View Results:**
   - The pricing results section will display the calculated prices in a table with pagination controls.

2. **Search Prices:**
   - Use the search input field to filter the pricing results by email.

3. **Pagination:**
   - Navigate through the pricing results using the "Previous" and "Next" buttons.

## Detailed Features

### Functionality

- **CSV Upload:** Users can upload a CSV file containing user data (email, name, credit score, credit lines, phone number).
- **Data Display:** Uploaded data is displayed in a table with pagination and search functionality.
- **Subscription Pricing Calculator:** Calculates subscription prices based on user-defined pricing parameters and uploaded data.
- **Masking Phone Numbers:** Phone numbers are masked for privacy, displaying only partial information.

### User Experience

- **Intuitive UI:** The application provides a clear and straightforward interface with sections for uploading, viewing data, and calculating prices.
- **Real-time Feedback:** Users receive real-time feedback during the file upload process through progress indicators and status messages.
- **Responsive Design:** The application is responsive and adapts to different screen sizes for an optimal user experience.

### Performance

- **Efficient Data Handling:** The application efficiently handles large datasets, displaying data in manageable chunks with pagination.
- **Fast Calculations:** Subscription pricing calculations are performed quickly, ensuring minimal delay for the user.

### Innovation

- **Dynamic Data Masking:** The phone number masking feature enhances privacy and security by partially hiding sensitive information.
- **Interactive Elements:** Table cells highlight on hover, providing a dynamic and engaging user experience.

### Presentation

- **Demo and Explanation:**
   - The application's features and functionality are demonstrated effectively through an intuitive interface.
   - Detailed documentation provides clear setup instructions, usage guidelines, and feature descriptions.
   - To try demo ,click here -> https://ambikesh-jha.github.io/SubscriptionPricingCalculator/

## Additional Information

### Technical Details

- **CSV Parsing:** The application uses JavaScript to parse CSV data and populate the data table.
- **Pagination Logic:** Data is displayed in pages with controls to navigate between pages.
- **Price Calculation:** Subscription prices are calculated based on the formula:
```
SubscriptionPrice = BasePrice + (PricePerCreditLine * CreditLines) + (PricePerCreditScorePoint * CreditScore)
```

## Conclusion

The CSV Upload and Subscription Pricing Calculator application is a comprehensive tool for managing user data and calculating subscription prices. With its intuitive interface, real-time feedback, and efficient data handling, it provides an excellent user experience. This documentation serves as a guide for setting up, using, and understanding the application's features and functionalities.

