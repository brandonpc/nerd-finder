// '/api/friends' GET and POST
var friendsData = require("../data/friends");

// GET: display JSON of all possible friends
// POST: incoming survey results and compatibility logic

// INCOMING SURVEY RESULTS ----------------------------------------------
app.get("/api/friends", function (req, res) {
    res.json(friendsData);
});
// ----------------------------------------------------------------------


// COMPATABILITY LOGIC --------------------------------------------------
// Convert user's results into a simple array of numbers
// Compare difference between current user's scores to other users 
//      (same question = same index)
// Add differences between and calculate "totalDifference" 
//      (use absolute value of numbers!)


// display result as modal pop-up: name and pic of closest match

// **Potential problems (time pending): 
//          - what if there's a tie?
// ----------------------------------------------------------------------
// 