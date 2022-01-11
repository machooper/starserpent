import nodemailer from "nodemailer";

const handler = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.SEND_TO,
      subject: "New message from Star Serpent Records contact form",
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.status(204).end()
  } catch (e) {
    res.status(500).json({ error: e.message });
    console.log(e);
  }
};

export default handler;
