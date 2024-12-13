const { Router } = require("express");
const { getAllMessages } = require("../db/queries");
const { loadedMessages } = require("./fullMessageRoute");
const indexRouter = Router();

async function indexController(req, res) {
  const response = await getAllMessages();

    const fullMessages = response.map((item) => {
      
      return ({
        id: item.id,
        text: item.message,
        user: item.username,
        added: (item.date).toISOString().slice(0, 10)
      });
    });

    //load messages into loaded array
    fullMessages.forEach((item) => {
      loadedMessages.push(item);
    })
    res.render("index", { messages : fullMessages });
}

indexRouter.get('/', indexController);

module.exports = {indexRouter};