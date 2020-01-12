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
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;

    var matchName ="";
    var matchPic = "";

    var maxDiff = 51;

    // loop through all friend sums to comapair scores
    for(var i=0; i < friendData.length; i++){
        
      var scoreDiff = 0;

      for(var j=0; j < newFriendScores.length; j++){

        scoreDiff += Math.abs(parseInt(friendData[i].scores[j] - newFriendScores[j]));
        }
        
    }
    if (scoreDiff<maxDiff){
      maxDiff = scoreDiff;
      matchName = friendData[i].name;
      matchPic = friendData[i].photo;
    }

  
  
   
    friendData.push(newFriend);
    res.json({ matchName: matchName, matchPic: matchPic});

  });
};