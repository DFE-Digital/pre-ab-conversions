// Add your routes here - above the module.exports line

//***********
//* SPRINT 5
//***********




module.exports = function (router) {

  var version = "sprint-5";

  router.post('/' + version + '/status/status-answer-voluntary', function(req, res) {

    const projectStatusVoluntary = req.body["decision-status-voluntary"];

    if (projectStatusVoluntary == "Declined"){
      // Send user to next page
      res.redirect('declined/who-made-this-decision-voluntary')
    } 
    else if (projectStatusVoluntary == "Deferred") {
      res.redirect('deferred/who-made-this-decision-voluntary')
    }
    else if (projectStatusVoluntary == "Approved"){
      res.redirect('approved/who-made-this-decision-voluntary')
    }
      
  });

  router.post('/' + version + '/status/status-answer-sponsored', function(req, res) {

    const projectStatusSponsored = req.body["decision-status-sponsored"];

    if (projectStatusSponsored == "Declined"){
      // Send user to next page
      res.redirect('declined/who-made-this-decision-sponsored')
    } 
    else if (projectStatusSponsored == "Deferred") {
      res.redirect('deferred/who-made-this-decision-sponsored')
    }
    else if (projectStatusSponsored == "Approved"){
      res.redirect('approved/who-made-this-decision-sponsored')
    }
      
  });

  router.post('/' + version + '/related/annexb-answer', function (req, res) {
    // Make a variable to give it the value from the radio buttons on the index page  
    var annexBanswer = req.session.data['annexBsaved']

    // Check whether the variable matches a condition
    if (annexBanswer == "Yes") { 
      // Send user to next page 
      res.redirect('application_involuntary_conversions')

    }   
    else if (annexBanswer != "Yes") {
      //send user to transfers prototype
      res.redirect('application_saved_involuntary_conversions')
    }

  })

  router.post('/' + version + '/related/annexb-answer-sponsored', function (req, res) {
    // Make a variable to give it the value from the radio buttons on the index page  
    var annexBanswer2 = req.session.data['annexBsaved2']

    // Check whether the variable matches a condition
    if (annexBanswer2 == "Yes") { 
      // Send user to next page 
      res.redirect('application_sponsored_conversions')

    }   
    else if (annexBanswer2 != "Yes") {
      //send user to transfers prototype
      res.redirect('application_saved_sponsored_conversions')
    }

  })

  router.post('/' + version + '/overview/conditions2-previous2', function (req, res) {
    // Make a variable to give it the value from the radio buttons on the index page  
    var previousAnswer2 = req.session.data['Conditions3']

    // Check whether the variable matches a condition
    if (previousAnswer2 == "Yes") { 
      // Send user to next page 
      res.redirect('previous-yes-involuntary')

    }   
    else if (previousAnswer2 != "Yes") {
      //send user to transfers prototype
      res.redirect('summary1-involuntary')
    }

  })


  router.post('/' + version + '/overview/form7', function (req, res) {
    // Make a variable to give it the value from the radio buttons on the index page  
    var form7answer = req.session.data['form7received']

    // Check whether the variable matches a condition
    if (form7answer == "Yes") { 
      // Send user to next page 
      res.redirect('set-form-7-date')

    }   
    else if (form7answer != "Yes") {
      //send user to transfers prototype
      res.redirect('summary1-involuntary')
    }

  })


  



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