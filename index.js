const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.cookie('cookieName', 'cookieValue', {
    maxAge: 900000,
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.cookie('cookieName2', 'cookieValue2');
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://127.0.0.1:${PORT}`);
});
