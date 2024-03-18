const express = require("express");

const app = express();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000

// Replace with your user ID (full name and date of birth)
const userId = "john_doe_17091999";
const email = "john@xyz.com"; // Replace with your email (optional)
const rollNumber = "ABCD123"; // Replace with your roll number (optional)

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid request: data must be an array");
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (const item of data) {
      if (typeof item === "string") {
        alphabets.push(item.toUpperCase());
      } else if (typeof item === "number") {
        if (item % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else {
        throw new Error("Invalid data type in array");
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email, // Include email if provided
      roll_number: rollNumber, // Include roll number if provided
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: error.message });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
