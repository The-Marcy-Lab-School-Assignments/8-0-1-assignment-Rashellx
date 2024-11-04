/** FEEDBACK: I love the use of comments to document your code here! Great job! */
const express = require('express')  //getting express 
const app = express()  //making a server application 
const path = require('path')

const pathToDist = path.join(__dirname, '../vite-project/dist')
const serveStatic = express.static(pathToDist) // 

// app.get("/", (req, res) => {
//   res.send('<h1>Hello<h1>')
// })

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};

app.use(logRoutes)  // using .use is used for middleware 
app.use(serveStatic)

const port = 1234 // making a port number 
app.listen(port, () => { // code that starts the server, requests to the server (listening to request)
  console.log(`Listening at http://localhost:${port}`)
})