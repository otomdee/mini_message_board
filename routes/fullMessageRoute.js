const { Router } = require("express");

const fullMessageRouter = Router();

//add a local array to store messages instead of querying the db again.
loadedMessages = [];

fullMessageRouter.get("/:messageId", (req, res) => {
    const { messageId } = req.params;
    //find user in loaded messages
    const fullObj = loadedMessages.find((item) => {
        return (item.id == messageId); 
    })
    res.render("fullCard", { item: fullObj });
})

module.exports = {fullMessageRouter, loadedMessages};