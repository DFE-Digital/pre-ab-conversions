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
const settings = {}
const records = require('./records.json')
const trusts = require('./transfers/trusts.json')
console.log(records)


module.exports = {
  
  /* overview */
  "opening-date": "Sunday 1 October 2023",

  /* Academy order required*/
  "aorequired": "Yes",


  /*rationale */
  "project-rationale": "The Diocesan Academy Policy (December 2019) states the expectation that all schools within the Diocese of Warrington will convert to academy status within one of the four Diocesan Catholic Education Trusts by July 2022. The resulting growth plan earmarks our school for transition into Dynamics Trust. This Catholic trust model ensures every school has its place and no individual school is left isolated or vulnerable, in a rapidly changing environment. It also ensures that the uniqueness of each individual school is celebrated and the unique contribution of each is recognised and appreciated. The Trust has an experienced Director of Learning and Teaching who effectively co-ordinates some central school effectiveness provision to monitor school performance/ achievement and ensures support is provided and matched to need, mainly as brokerage, within the system leadership structure.The Trust’s school improvement model is based on the new Northern Alliance, aiming to build capacity and improve educational standards in the North of England. In the words of Sir David Carter “the Northern Alliance is an innovative partnership which illustrates the strength of collaboration that is emerging as part of our developing self-improving school system.” Through the excellent, collaborative work delivered to date and first-hand experience of supporting other schools/academies across the North West, the expanding Trust has the expertise to ensure that each partner school can benefit, as a robust infrastructure to support future growth is built. Careful monitoring of each school by the CEO, School Improvement Partner, Headteachers and Trust Board ensures that high quality teaching takes place across the Trust. There is currently excellent practice demonstrated within the Primary and Secondary partners within the existing Dynamics Trust.",

  /* general info */
  "diocesan": "Yes",
  "PAN": "210",


  /* finance data */
  "revenue-previous-year": "143,932.00",
  "revenue-current-year": "100,984,00",
  "revenue-next-year": "50,678.03",
  "capital-previous-year": "120,932.00",
  "capital-current-year": "50,984,00",
  "capital-next-year": "-10,482,34",
  "total-loan-amounts": "3000",
  "purpose-of-loans": "Purchase of a minibus, new astro turf pitch",
  "total-lease-repayments": "600",
  "purpose-of-leases": "Photocopiers",



/* rejectiondates */
"rejected-date-day": "15",
"rejected-date-month": "6",
"rejected-date-year": "2021",

/* routes */
"routes": "25,000",

}

