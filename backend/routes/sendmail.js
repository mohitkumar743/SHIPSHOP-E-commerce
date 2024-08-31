const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { email, subject, body } = req.body;
    let transporter = nodemailer.createTransport({
      service: "gmail", // mail platform
      host: "smtp.gmail.com",
      auth: {
        user:process.env.EMAIL, // you email process.env.EMAIL
        pass:process.env.EMAILPASSWORD, // you email app password
      },
    });

    //sendmail
    await transporter.sendMail({
      from: process.env.EMAIL, // you email
      to: email, // to email
      subject,
      text: "Hello world?",
      html: body,
    });
    res.status(200).json("send mail success");
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = sendMail;