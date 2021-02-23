/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"opening-date": "Tuesday 21 March 2021",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  /* overview */
  "opening-date": "Tuesday 21 March 2021",
  "aorequired": "Yes",

  /*rationale */
"project-rationale": "St Wilfred’s is a small primary school in Warrington which is facing a financially challenging future should it remain on its own. Low pupil numbers and the high level of staffing costs due to the school  being supported by an Agency Interim Head Teacher,  contributed to this. The Chair St Wilfred’s and Dynamics trust have agreed to a Memorandum of Understanding which will allow Dynamics Trust to oversee all operational aspects of the school with immediate effect. Central services provided will include school improvement, finance and operational support and HR support. Dynamics Trust have also appointed Gareth Smith, Head Teacher of Angel Primary School, to the role of Interim Executive Head Teacher.",

    /* general info */
  "viability": "Yes",
  "deficit": "No",
  "diocesan": "Yes",
  "distance": "20.1 miles"

}
