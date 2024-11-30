const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    }
  ];
  
function editMessages(newCard){
  messages.push(newCard);
  console.log(messages);
}

indexRouter.get('/', (req, res) => {
    res.render("index", { messages : messages })
})

module.exports = {indexRouter, editMessages, messages};