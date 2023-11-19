const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Configure nodemailer with your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'emmanuelgodsown56@gmail.com',
      to: 'recipient@example.com',
      subject: 'New Message from your website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

