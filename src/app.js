const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs')

// public static path 
const static_path = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views")
const partials_path= path.join(__dirname,"../templates/partials")
app.use(express.static(static_path));
app.set("views",views_path);
app.set("view engine","hbs");
hbs.registerPartials(partials_path);

// routing 
app.get("/",(req,res) => {
    res.render('index');
});
app.get("/about",(req,res) => {
    res.render('about');
});
app.get("/weather",(req,res) => {
    res.render('weather');
});
app.get("/about/*",(req,res) => {
    res.render("404"); 
});
app.get("/weather/*",(req,res) => {
    res.render("404"); 
});
app.get("*",(req,res) => {
    res.render("404"); 
});

app.listen(port,"127.0.0.1", () =>{
    console.log(`server - http://127.0.0.1:${port}`);   
});