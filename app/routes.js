const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//***********
//* SPRINT 51
//***********
require('./routes/sprint-51/routes.js')(router);

//***********
//* SPRINT 50
//***********
require('./routes/sprint-50/routes.js')(router);

//***********
//* SPRINT 49
//***********
require('./routes/sprint-49/routes.js')(router);

//***********
//* SPRINT 48
//***********
require('./routes/sprint-48/routes.js')(router);

//***********
//* SPRINT 47
//***********
require('./routes/sprint-47/routes.js')(router);

//***********
//* SPRINT 46
//***********
require('./routes/sprint-46/routes.js')(router);

//***********
//* SPRINT 44
//***********
require('./routes/sprint-44/routes.js')(router);

//***********
//* SPRINT 42
//***********
require('./routes/sprint-42/routes.js')(router);

//***********
//* SPRINT 41
//***********
require('./routes/sprint-41/routes.js')(router);

//***********
//* SPRINT 40
//***********
require('./routes/sprint-40/routes.js')(router);

//***********
//* SPRINT 39
//***********
require('./routes/sprint-39/routes.js')(router);

//***********
//* SPRINT 37
//***********
require('./routes/sprint-37/routes.js')(router);

// Add your routes here - above the module.exports line

//***********
//* SPRINT 36
//***********

router.post('/sprint-36/status/status-answer', function(req, res) {

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

router.post('/sprint-36/type-answer', function (req, res) {
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


//***********
//* SPRINT 35
//***********

router.post('/sprint-35/status/approved/conditions-answer', function(req, res) {

  const approvedCondition = req.body["approved-conditions"];

  if (approvedCondition == "Yes"){
    // Send user to next page
    res.redirect('conditions_yes');
  } 
  else if (approvedCondition == "No") {
    res.redirect('dates');
  }

});

router.post('/sprint-35/status/status-answer', function(req, res) {

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

router.post('/sprint-35/type-answer', function (req, res) {
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

//***********
//* SPRINT 34
//***********

router.post('/sprint-34/status/approved/conditions-answer', function(req, res) {

  const approvedCondition = req.body["approved-conditions"];

  if (approvedCondition == "Yes"){
    // Send user to next page
    res.redirect('conditions_yes');
  } 
  else if (approvedCondition == "No") {
    res.redirect('dates');
  }

});

router.post('/sprint-34/status/status-answer', function(req, res) {

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

router.post('/sprint-34/type-answer', function (req, res) {
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



router.post('/status-answer', function (req, res) {

  // Make a variable and give it the value from 'list'
  var projectStatus = req.session.data['decision-status']

  // Check whether the variable matches a condition
  if (projectStatus == "Declined"){
    // Send user to next page
    res.redirect('MVP/status/rejected')
  } 
  else if (projectStatus == "Deferred") {
    res.redirect('MVP/status/deferred/reasons-for-deferral')
  }
  else if (projectStatus == "Approved"){
    res.redirect('MVP/status/approved/conditions')
  }

// Add route for 'deferred' once we know what content / action is needed

// } else if (projectStatus == "Withdrawn"){
//   res.redirect('full_nonmvp/status/withdrawn/withdrawn_reasons')

// } else if (projectStatus == "Onhold"){
//   res.redirect('full_nonmvp/status/onhold/onhold_reasons')

// } else if (projectStatus == "Active"){
//   res.redirect('full_nonmvp/task_list1')
//   }


})

router.post('/conditions-answer', function (req, res) {

  // Make a variable and give it the value from 'list'
  var projectConditions = req.session.data['conditions']

  // Check whether the variable matches a condition
  if (projectConditions == "Yes"){
    // Send user to next page
    res.redirect('MVP/status/approved/conditions_yes')

  } else {
  res.redirect('MVP/status/approved/dates')
  }
  
})

router.post('/conditions2-previous', function (req, res) {

  // Make a variable and give it the value from 'list'
  var projectConditions2 = req.session.data['Conditions2']

  // Check whether the variable matches a condition
  if (projectConditions2 == "Yes"){
    // Send user to next page
    res.redirect('MVP/overview/previous-yes')

  } else if (projectConditions2 == "No"){
  res.redirect('/MVP/overview/summary1')
  }
  
})


//choosing to look at project list for conversions or transfers
router.post('/type-answer', function (req, res) {
  // Make a variable to give it the value from the radio buttons on the index page  
  var Task = req.session.data['control-name']

  // Check whether the variable matches a condition
  if (Task == "conversions") { 
    // Send user to next page 
      res.redirect('MVP/projects-list')

  } 
  
  else if (Task == "transfers") {
  //send user to transfers prototype
      res.redirect('https://pre-ab-transfers.herokuapp.com/version-4/dashboard-home')
  }


})


module.exports = router