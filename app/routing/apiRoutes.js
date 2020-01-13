var friendData = require('../data/friends.js');

module.exports = function(app){
  
  app.get('/api/friends', function(req,res){
    res.json(friendData);
  });

  app.post('/api/friends', function(req,res){
    
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendMatch = 0;

    
    for(var i=0; i<friendData.length; i++){
      var difference = 0;
      
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

   
    var newFriend = friendData[friendMatch];
    res.json(newFriend);

   
    friendData.push(req.body);
  });
};