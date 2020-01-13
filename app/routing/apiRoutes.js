var friendList = require('../data/friends.js');

module.exports = function(app){
  
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendMatch = 0;

    
    for(var i=0; i<friendList.length; i++){
      var difference = 0;
      
      for(var j=0; j<newFriendScores.length; j++){
        difference += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      
      scoresArray.push(difference);
    }

    
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[friendMatch]){
        friendMatch = i;
      }
    }

   
    var newFriend = friendList[friendMatch];
    res.json(newFriend);

   
    friendList.push(req.body);
  });
};