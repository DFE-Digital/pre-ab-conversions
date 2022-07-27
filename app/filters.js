module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */
  // Conversion Overview 
  filters.conversionOverviewStatusClass = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);
    let checkOpeningDate = "Monday 1 March 2021" === data["opening-date"] ? false : true;
    let checkAoRequired = data["aorequired"]  == "Yes" || data["aorequired"]  == "No" ? true : false;

    if (data[completedFields]){
      return "govuk-tag";
    }
    else if (flag || checkOpeningDate || checkAoRequired){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.conversionOverviewStatusText = function (data, completedFields, inProgressFields, defaultFields) {
    const flag = inProgressFields.some(field => data[field]);
    let checkOpeningDate = "Monday 1 March 2021" === data["opening-date"] ? false : true;
    let checkAoRequired = data["aorequired"]  == "Yes" || data["aorequired"]  == "No" ? true : false;

    if (data[completedFields]){
      return "Completed";
    }
    else if (flag || checkOpeningDate || checkAoRequired){
      return "In Progress"
    }
    else {
      return "Not Started";
    }
  }

  // General Info
  filters.generalInfoStatusClass = function (data, completedFields, distance, financial, diocesan, inProgressFields) {
    let checkDeficit = data[financial] === "There are no financial issues at the school" ? false : true;
    let checkDiocesan = data[diocesan] === "Yes" ? false : true;
    
    const flag = inProgressFields.some(field => data[field]);

    if (data[completedFields]){
      return "govuk-tag";
    }
    else if (checkDeficit ||  checkDiocesan || data[distance] || flag){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.generalInfoStatusText = function (data, completedFields, distance, financial, diocesan, inProgressFields) {
    let checkDeficit = data[financial] === "There are no financial issues at the school" ? false : true;
    let checkDiocesan = data[diocesan] === "Yes" ? false : true;
    
    const flag = inProgressFields.some(field => data[field]);

    if (data[completedFields]){
      return "Completed";
    }
    else if (checkDeficit ||  checkDiocesan || data[distance] || flag){
      return "In Progress"
    }
    else {
      return "Not Started";
    }
  }

  // Rationale
  filters.rationaleStatusClass = function (data, completedFields, trustRationale, projectRationale) {
    var checkTrust = data[trustRationale] ? true: false;
    var checkProject = data[projectRationale] === "The Diocesan Academy Policy (December 2019) states the expectation that all schools within the Diocese of Warrington will convert to academy status within one of the four Diocesan Catholic Education Trusts by July 2022. The resulting growth plan earmarks our school for transition into Dynamics Trust. This Catholic trust model ensures every school has its place and no individual school is left isolated or vulnerable, in a rapidly changing environment. It also ensures that the uniqueness of each individual school is celebrated and the unique contribution of each is recognised and appreciated. The Trust has an experienced Director of Learning and Teaching who effectively co-ordinates some central school effectiveness provision to monitor school performance/ achievement and ensures support is provided and matched to need, mainly as brokerage, within the system leadership structure.The Trust’s school improvement model is based on the new Northern Alliance, aiming to build capacity and improve educational standards in the North of England. In the words of Sir David Carter “the Northern Alliance is an innovative partnership which illustrates the strength of collaboration that is emerging as part of our developing self-improving school system.” Through the excellent, collaborative work delivered to date and first-hand experience of supporting other schools/academies across the North West, the expanding Trust has the expertise to ensure that each partner school can benefit, as a robust infrastructure to support future growth is built. Careful monitoring of each school by the CEO, School Improvement Partner, Headteachers and Trust Board ensures that high quality teaching takes place across the Trust. There is currently excellent practice demonstrated within the Primary and Secondary partners within the existing Dynamics Trust." ? false : true;

    if (data[completedFields] == "Complete"){
      return "govuk-tag";
    }
    else if (checkTrust || checkProject){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.rationaleOverviewStatusText = function (data, completedFields,trustRationale, projectRationale) {
    var checkTrust = data[trustRationale] ? true: false;
    var checkProject = data[projectRationale] === "The Diocesan Academy Policy (December 2019) states the expectation that all schools within the Diocese of Warrington will convert to academy status within one of the four Diocesan Catholic Education Trusts by July 2022. The resulting growth plan earmarks our school for transition into Dynamics Trust. This Catholic trust model ensures every school has its place and no individual school is left isolated or vulnerable, in a rapidly changing environment. It also ensures that the uniqueness of each individual school is celebrated and the unique contribution of each is recognised and appreciated. The Trust has an experienced Director of Learning and Teaching who effectively co-ordinates some central school effectiveness provision to monitor school performance/ achievement and ensures support is provided and matched to need, mainly as brokerage, within the system leadership structure.The Trust’s school improvement model is based on the new Northern Alliance, aiming to build capacity and improve educational standards in the North of England. In the words of Sir David Carter “the Northern Alliance is an innovative partnership which illustrates the strength of collaboration that is emerging as part of our developing self-improving school system.” Through the excellent, collaborative work delivered to date and first-hand experience of supporting other schools/academies across the North West, the expanding Trust has the expertise to ensure that each partner school can benefit, as a robust infrastructure to support future growth is built. Careful monitoring of each school by the CEO, School Improvement Partner, Headteachers and Trust Board ensures that high quality teaching takes place across the Trust. There is currently excellent practice demonstrated within the Primary and Secondary partners within the existing Dynamics Trust." ? false : true;

    if (data[completedFields] == "Complete"){
      return "Completed";
    }
    else if (checkTrust || checkProject){
      return "In Progress"
    }
    else {
      return "Not Started";
    }
  }

  // Risks & Issues

  filters.riskAndIssuesNextPageLink = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);
    var check = data["risks"] === "Empty" ? false : true;

    if (flag || data[completedFields] == "Complete"){
      return "/risks-and-issues/risks-summary1";
    }
    else {
      return "/risks-and-issues/risks-and-issues";
    }
  }

  filters.riskStatusClass = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);

    if (data[completedFields] == "Complete"){
      return "govuk-tag";
    }
    else if (flag){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.riskStatusText = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);
    
    if (data[completedFields] == "Complete"){
      return "Completed";
    }
    else if (flag){
      return "In Progress"
    }
    else {
      return "Not Started";
    }
  }

  // Legal requirements
  
  filters.legalStatusClass = function (data, completedFields, legalGoverningBody, legalDiocesanConsent, legalFoundationConsent, legalConsultation) {
    let checkGoverningBody = data["legal-governing-body-checked"]  == "Yes" || data["legal-governing-body-checked"]  == "No" || data["legal-governing-body-checked"]  == "Not applicable" ? true : false;
    let checkDiocesanConsent = data["legal-diocesan-consent-checked"]  == "Yes" || data["legal-diocesan-consent-checked"]  == "No" || data["legal-diocesan-consent-checked"]  == "Not applicable" ? true : false;
    let checkFoundationConsent = data["legal-foundation-consent-checked"]  == "Yes" || data["legal-foundation-consent-checked"]  == "No" || data["legal-foundation-consent-checked"]  == "Not applicable" ? true : false;
    let checkConsultation = data["legal-consultation-checked"]  == "Yes" || data["legal-consultation-checked"]  == "No" || data["legal-consultation-checked"]  == "Not applicable" ? true : false;

    if (data[completedFields] == "Complete"){
      return "govuk-tag";
    }
    else if (checkGoverningBody || checkDiocesanConsent || checkFoundationConsent || checkConsultation){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.legalStatusText = function (data, completedFields, legalGoverningBody, legalDiocesanConsent, legalFoundationConsent, legalConsultation) {
    let checkGoverningBody = data["legal-governing-body-checked"]  == "Yes" || data["legal-governing-body-checked"]  == "No" || data["legal-governing-body-checked"]  == "Not applicable" ? true : false;
    let checkDiocesanConsent = data["legal-diocesan-consent-checked"]  == "Yes" || data["legal-diocesan-consent-checked"]  == "No" || data["legal-diocesan-consent-checked"]  == "Not applicable" ? true : false;
    let checkFoundationConsent = data["legal-foundation-consent-checked"]  == "Yes" || data["legal-foundation-consent-checked"]  == "No" || data["legal-foundation-consent-checked"]  == "Not applicable" ? true : false;
    let checkConsultation = data["legal-consultation-checked"]  == "Yes" || data["legal-consultation-checked"]  == "No" || data["legal-consultation-checked"]  == "Not applicable" ? true : false;

    
    if (data[completedFields] == "Complete"){
      return "Completed";
    }
    else if (checkGoverningBody || checkDiocesanConsent || checkFoundationConsent || checkConsultation){
      return "In Progress"
    }
    else {
      return "Not Started";
    }
  }

    // LA Proforma

    filters.laProformaNextPageLink = function (data, completedFields, inProgressFields) {
      const flag = inProgressFields.some(field => data[field]);
  
      if (data[completedFields] || flag ){
        return "LA-proforma/LAproforma-summary";
      }
      else {
        return "LA-proforma/local-authority-template";
      }
    }

    filters.laProformaStatusClass = function (data, completedFields, inProgressFields) {
      const flag = inProgressFields.some(field => data[field]);
  
      if (data[completedFields]){
        return "govuk-tag";
      }
      else if (flag){
        return "govuk-tag govuk-tag--blue"
      }
      else {
        return "govuk-tag govuk-tag--grey";
      }
    }
  
    filters.laProformaStatusText = function (data, completedFields, inProgressFields) {
      const flag = inProgressFields.some(field => data[field]);
  
      if (data[completedFields]){
        return "Completed";
      }
      else if (flag){
        return "In Progress"
      }
      else {
        return "Not Started";
      }
    }

    // school budget info

    filters.schoolBudgetInfoStatusText = function(data, completedFields, inProgressFields) {
      var checkCurrentYear = data['finance-current-year-2021'] === "£0.00" ? false : true;
      var checkFollowingYear = data['finance-following-year-2022'] === "£143,931.00" ? false : true;
      var checkFinanceForwardThisYear = data['finance-forward-2021'] === "£0.00" ? false : true;
      var checkFinanceForwardNextYear = data['finance-forward-2022'] === "£0.00" ? false : true;

      if (data[completedFields]) {
        return 'Completed';
      }
      else if (checkCurrentYear || checkFollowingYear || checkFinanceForwardThisYear || checkFinanceForwardNextYear) {
        return 'In Progress';
      }
      else {
        return 'Not Started';
      }
    }

    filters.schoolBudgetInfoStatusClass = function (data, completedFields, inProgressFields){
      var checkCurrentYear = data['finance-current-year-2021'] === "£0.00" ? false : true;
      var checkFollowingYear = data['finance-following-year-2022'] === "£143,931.00" ? false : true;
      var checkFinanceForwardThisYear = data['finance-forward-2021'] === "£0.00" ? false : true;
      var checkFinanceForwardNextYear = data['finance-forward-2022'] === "£0.00" ? false : true;

      if (data[completedFields]) {
        return "govuk-tag";
      }
      else if (checkCurrentYear || checkFollowingYear || checkFinanceForwardThisYear || checkFinanceForwardNextYear) {
        return "govuk-tag govuk-tag--blue"
      }
      else {
        return "govuk-tag govuk-tag--grey";
      }
    }

    // pupil forecast

    filters.getSchoolPupilForecastNextPageLink = function (data, additionalInfo) {
      if (data[additionalInfo]){
        return "/pupil-forecasts/school-pupil-forecasts-summary";
      }
      else {
        return "/pupil-forecasts/school-pupil-forecasts";
      }
    }

  filters.displayNumberOfWords = (data, numberOfWords) => {
    const htmlTagOpenings = /<(ol|ul|b|i|u|div|li)>/g
    const htmlTagClosings = /<\/(ol|ul|b|i|u|div|li)>/g

    const splitData = data.split(' ')
 
   const dataToDisplay = splitData.slice(0, numberOfWords)

    let tagsToClose = []
    dataToDisplay.forEach(word => {
      const openingTags = word.match(htmlTagOpenings)
      const closingTags = word.match(htmlTagClosings)

      if (openingTags) {
        openingTags.forEach(tag => tagsToClose.push(tag))
      }

      if (closingTags) {
        const tagsToRemove = closingTags.map(tag => tag.replace('/', ''))
        tagsToRemove.forEach(tagToRemove => {
          const indexToReplace = tagsToClose.findIndex((tag) => tag === tagToRemove)
          tagsToClose.splice(indexToReplace, 1)
        })
      }
    })

    tagsToClose = tagsToClose.map(tag => tag.replace('<', '</'))
    var test=dataToDisplay.join(' ');
    return dataToDisplay.join(' ') + '.......' + tagsToClose.join('')
  }
 
/* ====================================================================
  dateToGovukDate
  --------------------------------------------------------------------
  Convert date object to govuk date (1 February 2020)
  ====================================================================
  Usage:
  {{ date | dateToGovukDate }}
  = 1 February 2020
*/
 
filters.dateToGovukDate = (date, format=false) => {
  if (date){
     let theDate = moment(date)
     if (theDate.isValid()){
       return theDate.format(format || 'D MMMM YYYY')
     }
  }
  return ''
 }
  
 filters.govukDate = (date, format) => {
  if (_.isArray(date)){
     return filters.arrayToGovukDate(date, format)
  }
  else return filters.dateToGovukDate(date, format)
 }
  
  
  
 /*
   ====================================================================
   arrayToGovukDate
   --------------------------------------------------------------------
   Convert array to govuk date
   ====================================================================
   Usage:
   {{ [1, 2, 2020] | arrayToGovukDate }}
   = 1 February 2020
 */
  
 filters.arrayToGovukDate = (array, format) => {
  let dateObject = filters.arrayToDateObject(array)
  let govukDate = filters.dateToGovukDate(dateObject, format)
  return govukDate
 }
  
 /*
   ====================================================================
   prettyMonth
   --------------------------------------------------------------------
   Return month names from numbers.
   ====================================================================
   Usage:
   {{ 1 | prettyMonth }}
   = January
 */
  
 filters.prettyMonth = (monthNumber) => {
  if (monthNumber){
     return moment().month(monthNumber - 1).format("MMMM");
  }
  else return ''
 }
  
 /*
  ====================================================================
  sortDateArrays
  --------------------------------------------------------------------
  Add support for sorting by date arrays
  ====================================================================
  Copied from https://github.com/mozilla/nunjucks/blob/master/nunjucks/src/filters.js#L425
  Requires positional args, no named args
*/
 
//
filters.sortDateArrays = (arr, reversed, attr) => {
 
  let array = _.map(arr, v => v)


  array.sort((a, b) => {
    let x = (attr) ? a[attr] : a
   let y = (attr) ? b[attr] : b

    // Convert arrays of 3 to date objects
    x = (_.isArray(x) && (x.length == 3)) ? filters.arrayToDateObject(x) : x
    y = (_.isArray(y) && (y.length == 3)) ? filters.arrayToDateObject(y) : y

    // console.log({x}, {attr})
    // if (!caseSens && _.isString(x) && _.isString(y)) {
    //   x = x.toLowerCase()
    //   y = y.toLowerCase()
    // }

    if (x < y) {
      return reversed ? 1 : -1
    } else if (x > y) {
      return reversed ? -1 : 1
    } else {
      return 0
    }
  })

  return array
}

// https://momentjs.com/docs/#/displaying/format/
filters.formatDate = (date, format, dateFormat) => {

var returnDate;
// No date provided.
if (!date){
  // console.log('error for', date, 'format', format);
  return ''
  // throw "Error in formatDate: no date provided";
}
// Check for valid date
else if (dateFormat && moment(date, dateFormat).isValid()){
  returnDate = moment(date, dateFormat);
}
else if ( moment(date).isValid() ){
  returnDate = moment(date);
}
// Invalid date
else {
  throw "Error in formatDate: invalid date";
};

switch (true)
  {
    // 2018-03-21
    case (format == 'dashDate'):
      return returnDate.format('YYYY-MM-DD');

    // 2018/03/21
    case (format == 'slashDate'):
      return returnDate.format('YYYY/MM/DD');

    // 2018/03
    case (format == 'yearMonth'):
      return returnDate.format('YYYY/MM');

    // 2018-03-21T00:00:00.000Z
    case (format == 'iso8601'):
      return returnDate.toISOString();

    // a year ago
    case (format == 'relative'):
      return moment(returnDate).fromNow()
      // return timeAgoInDays(returnDate)

    // 21st March 2018
    case (format == 'pretty'):
      return returnDate.format('Do MMMM YYYY');

    // March 21st 2018, 12:00:00 am
    case (format == 'full'):
      return returnDate.format('MMMM Do YYYY, h:mm:ss a');

    // pass format through to moment
    case _.isString(format):
      return returnDate.format(format);

    // Default
    default:
      return returnDate.format();
  }
}

filters.isInLast = (date, count, units) => {
if (_.isArray(date)){
  date = filters.arrayToDateObject(date)
}
let compareDate = moment().subtract(count, units)
return moment(date).isAfter(compareDate)
}

// Expose moment as a filter
/* Usage:
{{ date | moment('subtract', 1, "week") }} // return the date 1 week ago
*/

filters.moment = (date, name, ...args) => {
return moment(date)[name](...args)
}


filters.time = (str) => {
var m = moment(str)
if (m.minutes() > 0) {
  return m.format('h:mma')
} else {
  return m.format('ha')
}
}
 

filters.trustsToCheckboxes = (trusts) => {
  return trusts.map(trust => ({
    value: trust.id,
    html: `${trust.trust_name} (${trust.ukprn})`,
    hint: { text: `Companies house number: ${trust.companies_house_number}` }
  }))
}

filters.trustsBySearchString = (trusts) =>
  trusts.map(trust => `${trust.trust_name}, ${trust.trust_reference_number}, ${trust.companies_house_number}`)

filters.filterTrustsBySearchString = (trusts, searchString) => {
  searchString = searchString.toLowerCase()
  return trusts.filter(trust => {
    return trust.trust_name.toLowerCase().includes(searchString) ||
      trust.ukprn.toLowerCase().includes(searchString) ||
      trust.companies_house_number.toLowerCase().includes(searchString)
  })
}

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}

