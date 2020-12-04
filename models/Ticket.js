const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema(
  {
    number: String,
    owner: {
      userId: Number,
      firstName: String,
      lastName: String,
      avatar: String,
      specialities: String,
    },
    status: String,
    description: String,
    asset: {
      assetId: Number,
      name: String,
      geoCode: String,
      kmFrom: String,
      kmTo: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", TicketSchema);
