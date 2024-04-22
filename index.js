import app from "./app.js";
const port = 3000;

// Handle the root path (`/api`) to return the current date and time
app.get('/api', (req, res) => {
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
      hour12: false // Use 24-hour format
    });

    res.send({
      unix: currentDate.getTime(),
      utc: formattedDate + " GMT" // Append "GMT" explicitly
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ error: "Invalid date" }); // Send a more informative error response
  }
});

// Handle requests with a date parameter (`/api/:date`)
app.get('/api/:date', (req, res) => {
  try {
    const dateString = req.params.date;

    // Validate the date format using a regular expression (optional)
    const isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(dateString);

    if (!isValidDateFormat) {
      return res.status(400).send({ message: "Invalid date format. Please use YYYY-MM-DD." });
    }

    const targetDate = new Date(dateString);

    if (isNaN(targetDate.getTime())) {
      return res.status(400).send({ message: "Invalid date. Please provide a valid date string." });
    }

    const formattedDate = targetDate.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
      hour12: false // Use 24-hour format
    });

    res.send({
      unix: targetDate.getTime(),
      utc: formattedDate + " GMT" // Append "GMT" explicitly
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ message: "Internal Server Error" }); // Send a more informative error response
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
