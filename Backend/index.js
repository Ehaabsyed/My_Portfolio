import express from 'express';
import cors from 'cors';
import sendMail from "./middleware/sendMail.js";
const app = express();
const port = 3000;

app.use(cors({
    origin: 'https://my-portfolio-one-umber-99.vercel.app',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const generateEmailTemplate = (name, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f9fc;
      padding: 20px;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    h2 {
      color: #4CAF50;
      margin-bottom: 10px;
    }
    p {
      line-height: 1.6;
    }
    .message-box {
      background: #f1f1f1;
      padding: 15px;
      border-left: 4px solid #4CAF50;
      margin-top: 10px;
      border-radius: 5px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>📩 New Message Received</h2>
    <p><strong>From:</strong> ${name}</p>
    <div class="message-box">
      ${message}
    </div>
  </div>
</body>
</html>
`;

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body.data;

    const htmlTemplate = generateEmailTemplate(name, message);

    const mailResponse = await sendMail(
        email,
        "syedehaab12@gmail.com",
        `New Message from ${name}`,
        message,
        htmlTemplate
    );

    res.json(mailResponse);
});


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
