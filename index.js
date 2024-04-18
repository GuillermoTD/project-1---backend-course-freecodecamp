const express = require('express');

const app = express();
const port = 3010;

app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    time: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
