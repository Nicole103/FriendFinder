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
    
    // if (friendData.length < 5) {
    //   friendData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendData.length = 0;
   

    res.json({ ok: true });
  });
};
