const express = require("express"); // Importing the Express library to create the server
const router = express.Router(); // Creating an Express router to define routes
const cors = require("cors"); // Importing CORS to allow cross-origin requests
const nodemailer = require("nodemailer"); // Importing Nodemailer for email functionality

// server used to send emails
const app = express(); // Initializing the Express app
app.use(cors()); // Enabling CORS for all requests to the server
app.use(express.json()); // Allowing the server to parse JSON payloads
app.use("/", router); // Using the router for handling requests to the root URL
app.listen(3000, () => console.log("Server Running")); // Starting the server on port 5000 and logging a message
console.log(process.env.EMAIL_USER); // Logging the email user from environment variables (for debugging)
console.log(process.env.EMAIL_PASS); // Logging the email password from environment variables (for debugging)

const contactEmail = nodemailer.createTransport({ // Creating a transport for Nodemailer to send emails
  service: 'gmail', // Using Gmail as the email service
  auth: {
    user: "********@gmail.com", // The email address sending the emails
    pass: "" // The email password (usually kept in environment variables for security)
  },
});

contactEmail.verify((error) => { // Verifying the email transporter configuration
  if (error) {
    console.log(error); // Logging an error if verification fails
  } else {
    console.log("Ready to Send"); // Logging confirmation if the transporter is ready
  }
});

router.post("/contact", (req, res) => { // Defining a POST route for /contact to handle contact form submissions
  const name = req.body.firstName + req.body.lastName; // Concatenating first and last name from the request body
  const email = req.body.email; // Extracting the sender's email from the request body
  const message = req.body.message; // Extracting the message from the request body
  const phone = req.body.phone; // Extracting the phone number from the request body
  const mail = { // Creating an email object with all the information to send
    from: name, // Setting the sender's name
    to: "********@gmail.com", // Email address receiving the message
    subject: "Contact Form Submission - Portfolio", // Email subject line
    html: `<p>Name: ${name}</p> // Email body in HTML format, including name, email, phone, and message
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => { // Sending the email using the Nodemailer transporter
    if (error) {
      res.json(error); // Sending error response if the email fails
    } else {
      res.json({ code: 200, status: "Message Sent" }); // Sending success response if the email is sent
    }
  });
});
