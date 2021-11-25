const express = require("express");
const Activity = require("../Controller/activityController");
const activityRouter = express.Router();

activityRouter.get("/all-activities", Activity.allActivity);

activityRouter.get("/add-activity", Activity.addActivity);
activityRouter.post("/added-activity", Activity.addedActivity);

activityRouter.get("/remove-activity/:id", Activity.removeActivity);

activityRouter.get("/view-activity/:id", Activity.viewActivity);

activityRouter.get("/edit-activity/:id", Activity.editActivity);
activityRouter.post("/edited-activity/:id", Activity.editedActivity);

activityRouter.get("/complete-activity/:id", Activity.completeActivity);

module.exports = activityRouter;
