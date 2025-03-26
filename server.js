const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

async function sub(email, fname, lname, phone, text) {

  const response = await fetch(`https://us12.api.mailchimp.com/3.0/lists/${process.env.AUDIENCE_ID}/members`, {
    method: "POST",
    headers: {
      "Authorization": `apikey ${process.env.TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      email_type: 'html',
      status: "subscribed",
      merge_fields: {
        FNAME: fname,
        LNAME: lname,
        PHONE: phone,
        MESSAGE: text,
      }
    }),
  });

  return response.json();
};

app.post("/contact", async (req, res) => {
  const fname = req.body.firstName
  const lname = req.body.LastName
  const email = req.body.email;
  const text = req.body.message;
  const phone = req.body.phone;
  try {
    const subemail = await sub(email, fname, lname, phone, text)
    res.status(200).json({sucesso: true})
  } catch (error) {
    res.status(400).json({sucesso: false})
  }
});


app.listen(process.env.PORT, () => console.log("Server Running"));