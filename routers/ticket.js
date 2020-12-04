const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

router.get("/", async (req, res) => {
  try {
    const allTickets = await Ticket.find();
    res.json(allTickets);
  } catch (err) {}
});

router.post("/add", async (req, res) => {
  try {
    const newTicket = new Ticket({
      number: req.body.number,
      owner: {
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        avatar: req.body.avatar,
        specialities: req.body.specialities,
      },
      status: req.body.status,
      description: req.body.description,
      asset: {
        assetId: req.body.assetId,
        name: req.body.name,
        geoCode: req.body.geoCode,
        kmFrom: req.body.kmFrom,
        kmTo: req.body.kmTo,
      },
    });
    const saveTicket = await newTicket.save();
    res.json(saveTicket);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tickets = await Ticket.findById(req.params.id);
    res.json(tickets);
  } catch (err) {
    console.log("Read one ticket error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tickets = await Ticket.remove({ _id: req.params.id });
    res.json(tickets);
  } catch (err) {
    console.log("Delete one ticket error");
  }
});

module.exports = router;

// {
//   "number": "PU-OV-1",
//   "userId": 2,
//   "firstName": "Bruce",
//   "lastName": "Wayne",
//   "avatar": "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/bruceWayne.png",
//   "specialities":"Woodworking",
//   "status": "assigned",
//   "description": "Ticket description",
//   "assetId": 1,
//   "name": "Sign",
//   "geoCode": "137",
//   "kmFrom": 7,
//   "kmTo": 20
// }
