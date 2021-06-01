const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

//sending users to different pages
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/status-answer', function (req, res) {

    // Make a variable and give it the value from 'juggling-balls'
    var jugglingBalls = req.session.data['status']
  
    // Check whether the variable matches a condition
    if (jugglingBalls == "Approved"){
      // Send user to next page
      res.redirect('/status/approved')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  
  })