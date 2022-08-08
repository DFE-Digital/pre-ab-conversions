// Add your routes here - above the module.exports line

//***********
//* SPRINT 37
//***********
module.exports = function (router) {

  router.post('/sprint-37/status/approved/conditions-answer', function(req, res) {

    const approvedCondition = req.body["approved-conditions"];

    if (approvedCondition == "Yes"){
      // Send user to next page
      res.redirect('conditions_yes');
    } 
    else if (approvedCondition == "No") {
      res.redirect('dates');
    }

  });

  router.post('/sprint-37/status/status-answer', function(req, res) {

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

  router.post('/sprint-37/type-answer', function (req, res) {
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