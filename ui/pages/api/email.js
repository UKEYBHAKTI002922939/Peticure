// pages/api/email.js
import { SMTPClient } from "emailjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email } = req.body;

  // Replace these values with your SMTP server details
  const client = new SMTPClient({
    user: "peticureInc@gmail.com",
    password: "ynvn zjvx ykiz smvm",
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    const message = await client.sendAsync({
      text:
        `Hi there!\n\nWelcome to Compassionate Paws, where every furry friend matters! 🐾\nYou're now part of a community dedicated to making a difference in the lives of animals. Get ready to explore adoption options, support through donations, find shelter information, learn about fostering, and report abuse—all at your fingertips.\nThank you for joining us in our mission to give every pet a loving home and a happy, wagging tail.\n\nBest Regards,\nTeam Peticure 🐾`,
      from: "peticureInc@gmail.com",
      to: email,
      subject:
        "Welcome to Peticure!",
    });

    console.log("Email sent:", message);

    res.status(200).json({ message: "Send Mail" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(400).json({ message: "Error sending email" });
  }
}
