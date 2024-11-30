const express = require("express");
const { Router } = require("express");
const { editMessages } = require("./indexRoute");

const newMessageRouter = Router();
newMessageRouter.use(express.urlencoded({ extended: true }));

newMessageRouter.get('/', (req, res) => {
    res.render("form");
})

newMessageRouter.post('/', (req, res) => {
    newCard = {
      text: req.body.message,
      user: req.body.userName,
      added: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    }

    editMessages(newCard);

    res.redirect('/');
})

module.exports = newMessageRouter;
