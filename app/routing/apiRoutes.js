//required
var friendData = require("../data/friends.js");


// ROUTING
module.exports = function(app) {
 
    // API GET Requests
    app.get("/api/friends", function(req, res) {
    res.json(friendData);

  });

  // API POST Requests  
  app.post("/api/friends", function(req, res) {
    
    //collecting the information from the submitted survey
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendScoreSum = 0;
    var friendMatch = 0;

    // loop through all friend sums to comapair scores
    for(var i=0; i < friendData.length; i++){
        var scoreComp = 0;

        for(var j=0; j<newFriendScores.length; i++){
            scoreComp +=(Math.abs(parseInt(friendData[i].scores[j])-parseInt(newFriendScores[j])));
        }
        scoresArray.push(scoreComp)
    }

    //loop to find friend match
    for(var i=0; i<scoresArray.length;i++){
      if(scoresArray[i]<= scoresArray[friendMatch]){
        friendMatch=i
      }
    }

    var foundFriend = friendData[friendMatch];
    res.json(foundFriend);
    friendData.push(req.body);
  });
};