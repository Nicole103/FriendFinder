var friendData = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendData);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendList.length; i++){
      var difference = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        difference += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      scoresArray.push(difference);
    }
  
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[friendMatch]){
        friendMatch = i;
      }
    }
    
    var newFriend = frienddata[friendMatch];
    res.json(newFriend);
    
    friendData.push(req.body);
  });
};