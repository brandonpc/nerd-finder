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
// MOST LIKELY ISSUE: 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);
        var user = req.body;
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestMatch = 0;
        var minDiff = 40;

        for (var i = 0; i < friendsData.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                var diff = Math.abs(user.scores[j] - friendsData[i].scores[j]);
                totalDiff += diff;
            }
            if (totalDiff < minDiff) {
                bestMatch = i;
                minDiff = totalDiff;
            }
        }
        friendsData.push(user);
        res.json(friendsData[bestMatch]);
    });
};
// display result as modal pop-up: name and pic of closest match

// **Potential problems (time pending): 
//          - what if there's a tie?
// ----------------------------------------------------------------------
// 