const nodemailer = require('nodemailer');

async function sendEmail(subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ganti sesuai provider email kamu
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject,
    text,
  });

  console.log('Email terkirim!');
}

// Ambil argumen command line
const subject = process.argv[2] || 'Playwright Test Result';
const text = process.argv[3] || 'Test selesai. Cek hasil di GitHub Actions.';

sendEmail(subject, text).catch(console.error);
