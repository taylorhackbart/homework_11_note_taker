//  add in all paths required
const express = require("express");
const apiRoutes = require("./routes/apiroutes")
const htmlRoutes = require("./routes/htmlroutes")

// create PORT to use
const app = express();
const PORT = process.env.PORT || 3000;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // server once you start it goes into public folder and looks for html file

app.use(apiRoutes); 
app.use(htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));




