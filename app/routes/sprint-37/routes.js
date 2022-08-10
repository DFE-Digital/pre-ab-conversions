// Add your routes here - above the module.exports line

//***********
//* SPRINT 37
//***********
module.exports = function (router) {

  var version = "sprint-37";

  router.post('/' + version + '/status/status-answer', function(req, res) {

    const projectStatus = req.body["decision-status"];

    if (projectStatus == "Declined"){
      // Send user to next page
      res.redirect('declined/who-made-this-decision')
    } 
    else if (projectStatus == "Deferred") {
      res.redirect('deferred/who-made-this-decision')
    }
    else if (projectStatus == "Approved"){
      res.redirect('approved/who-made-this-decision')
    }
      
  });

  router.post('/' + version + '/type-answer', function (req, res) {
    // Make a variable to give it the value from the radio buttons on the index page  
    var Task = req.session.data['control-name']

    // Check whether the variable matches a condition
    if (Task == "conversions") { 
      // Send user to next page 
      res.redirect('projects-list')

    }   
    else if (Task == "transfers") {
      //send user to transfers prototype
      res.redirect('https://pre-ab-transfers.herokuapp.com/version-4/dashboard-home')
    }

  })

}