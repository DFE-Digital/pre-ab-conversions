// Add your routes here - above the module.exports line

//***********
//* SPRINT 44
//***********
module.exports = function (router) {

  var version = "sprint-44";

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
      res.redirect('transfers/projects-list-transfers')
    }

  })

  router.post('/decide-risks-branch', function (req, res) {

    var howManyBalls = req.session.data['risks-branching']
  
    if (howManyBalls == "Yes") {
      // Send user to risks page
      res.redirect('/' + version + '/transfers/pre-htb/school-1/benefits-and-other-factors/question-b-risks')
    } else {
      // Send user to benefits and risks summary page
      res.redirect('/' + version + '/transfers/pre-htb/school-1/benefits-and-other-factors')
    }
  
  })
  
}