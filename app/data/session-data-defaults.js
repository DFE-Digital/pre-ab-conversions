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
  "opening-date": "Monday 1 March 2021",


  /*rationale */
  "project-rationale": "The Diocesan Academy Policy (December 2019) states the expectation that all schools within the Diocese of Warrington will convert to academy status within one of the four Diocesan Catholic Education Trusts by July 2022. The resulting growth plan earmarks our school for transition into Dynamics Trust. This Catholic trust model ensures every school has its place and no individual school is left isolated or vulnerable, in a rapidly changing environment. It also ensures that the uniqueness of each individual school is celebrated and the unique contribution of each is recognised and appreciated. The Trust has an experienced Director of Learning and Teaching who effectively co-ordinates some central school effectiveness provision to monitor school performance/ achievement and ensures support is provided and matched to need, mainly as brokerage, within the system leadership structure.The Trust’s school improvement model is based on the new Northern Alliance, aiming to build capacity and improve educational standards in the North of England. In the words of Sir David Carter “the Northern Alliance is an innovative partnership which illustrates the strength of collaboration that is emerging as part of our developing self-improving school system.” Through the excellent, collaborative work delivered to date and first-hand experience of supporting other schools/academies across the North West, the expanding Trust has the expertise to ensure that each partner school can benefit, as a robust infrastructure to support future growth is built. Careful monitoring of each school by the CEO, School Improvement Partner, Headteachers and Trust Board ensures that high quality teaching takes place across the Trust. There is currently excellent practice demonstrated within the Primary and Secondary partners within the existing Dynamics Trust.",

  /* general info */
  "deficit": "There are no financial issues at the school",
  "diocesan": "Yes",
  "distance": "20.1"

}

