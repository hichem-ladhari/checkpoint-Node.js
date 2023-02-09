var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "noone@hotmail.com",
    pass: "noone",
  },
});

var mailOptions = {
  from: "noone@hotmail.com",
  to: "nobody",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
