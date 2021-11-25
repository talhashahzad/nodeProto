const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    activityName: {
      type: String,
      required: true,
    },
    activityNotes: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  },
  { timestamp: true }
);

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
