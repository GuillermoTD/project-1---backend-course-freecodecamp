import app from "./app.js";
const port = 3010;

app.get('/', (req, res) => {
  try {
    res.send({
      // time: new Date(),
      "hola": "klk"
    });
    console.log("hola mundo con express")
  } catch (error) {
    res.send(error)
  }
});

app.listen(() => {
  console.log(`Example app listening`);
});
