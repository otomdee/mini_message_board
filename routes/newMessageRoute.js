const express = require("express");
const { Router } = require("express");
const { insertMessage } = require("../db/queries");


const formatDateISO = (date) => {
  // Convert the date to ISO string
  const isoString = date.toISOString();
  // Split at the "T" character to get the date part
  const formattedDate = isoString.split("T")[0];
  return formattedDate;
};

const newMessageRouter = Router();
newMessageRouter.use(express.urlencoded({ extended: true }));

newMessageRouter.get('/', (req, res) => {
    res.render("form");
})

newMessageRouter.post('/', (req, res) => {
    const currentDate = formatDateISO(new Date());

    insertMessage(req.body.message, req.body.userName, currentDate);

    res.redirect('/');
})

module.exports = newMessageRouter;
