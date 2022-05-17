const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line
//sending users to different pages

router.post('/status-answer', function (req, res) {

  // Make a variable and give it the value from 'list'
  var projectStatus = req.session.data['Status-status']

  // Check whether the variable matches a condition
  if (projectStatus == "Declined"){
    // Send user to next page
    res.redirect('full_nonmvp/status/rejected')

  } else if (projectStatus == "Approved"){
  res.redirect('full_nonmvp/status/approved/conditions')
  
} else if (projectStatus == "Withdrawn"){
  res.redirect('full_nonmvp/status/withdrawn/withdrawn_reasons')

} else if (projectStatus == "Onhold"){
  res.redirect('full_nonmvp/status/onhold/onhold_reasons')

} else if (projectStatus == "Active"){
  res.redirect('full_nonmvp/task_list1')
  }


})

router.post('/conditions-answer', function (req, res) {

  // Make a variable and give it the value from 'list'
  var projectConditions = req.session.data['Conditions']

  // Check whether the variable matches a condition
  if (projectConditions == "Yes"){
    // Send user to next page
    res.redirect('full_nonmvp/status/approved/conditions_yes')

  } else if (projectConditions == "No"){
  res.redirect('full_nonmvp/status/approved/dates')
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
      res.redirect('https://academy-transfers-prototype.london.cloudapps.digital/version-4/dashboard-home')
  }


  })


module.exports = router