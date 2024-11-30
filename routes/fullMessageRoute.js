const { Router } = require("express");
const { messages } = require("./indexRoute");

const fullMessageRouter = Router();

fullMessageRouter.get("/:username", (req, res) => {
    const { username } = req.params;
    //find user object in messages
    const fullObj = messages.find(item => (item.user === username));

    res.render("fullCard", { item: fullObj });
})

module.exports = fullMessageRouter;