const Activity = require("../Model/activityModel");

module.exports = {
  allActivity: (req, res) => {
    Activity.find().then((data) => {
      res.render("all-activities", { activityData: data });
    });
  },
  addActivity: (req, res) => {
    res.render("add-activity");
  },

  addedActivity: (req, res) => {
    const activity = new Activity({
      activityName: req.body.activityName,
      activityDailyPoints: req.body.activityDailyPoints,
      activityNotes: req.body.activityNotes,
      days: req.body.days,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      status: "In-Progress",
    });
    activity.save().then((data) => {
      res.render("view-activity", { activity: data });
    });
  },
  removeActivity: (req, res) => {
    Activity.findByIdAndDelete(req.params.id).then((data) => {
      res.render("remove-activity");
    });
  },
  editActivity: (req, res) => {
    Activity.findById(req.params.id).then((data) => {
      res.render("edit-activity", { activity: data });
    });
  },

  editedActivity: (req, res) => {
    Activity.findByIdAndUpdate(req.params.id, {
      activityName: req.body.activityName,
      status: req.body.status,
      activityNotes: req.body.activityNotes,
      days: req.body.days,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    }).then(() => {
      Activity.findById(req.params.id).then((data) => {
        res.render("view-activity", { activity: data });
      });
    });
  },

  viewActivity: (req, res) => {
    Activity.findById(req.params.id).then((data) => {
      res.render("view-activity", { activity: data });
    });
  },
  completeActivity: (req, res) => {
    console.log("complete activity");
    Activity.findByIdAndUpdate(req.params.id, {
      status: "Completed",
    }).then(() => {
      Activity.findById(req.params.id).then((data) => {
        res.render("view-activity", { activity: data });
      });
    });
  },
};
