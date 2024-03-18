// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint for /bfhl route
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    // Your logic to process the data and generate the response
    const response = processRequest(data);

    // Send the response
    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
});

// Function to process the request and generate the response
function processRequest(data) {
  const user_id = "Jyotiraditya Mishra"; // Placeholder for user ID
  const email = "jyotiraditya0709.be21@chitkara.edu.in"; // Placeholder for email
  const roll_number = "2110990709"; // Placeholder for roll number

  const is_success = true;
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];

  // Logic to separate data into odd numbers, even numbers, and alphabets
  data.forEach((item) => {
    if (typeof item === "number") {
      if (item % 2 === 0) {
        even_numbers.push(item.toString());
      } else {
        odd_numbers.push(item.toString());
      }
    } else if (typeof item === "string" && item.match(/[a-zA-Z]/)) {
      alphabets.push(item.toUpperCase());
    }
  });

  // Construct and return the response object
  return {
    is_success,
    user_id,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
  };
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
