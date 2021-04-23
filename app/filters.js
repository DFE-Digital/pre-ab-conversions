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
      return "Complete";
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
    let checkDistance = data[distance] === "20.1" ? false : true;
    let checkDeficit = data[financial] === "There are no financial issues at the school" ? false : true;
    let checkDiocesan = data[diocesan] === "Yes" ? false : true;
    
    const flag = inProgressFields.some(field => data[field]);

    if (data[completedFields]){
      return "govuk-tag";
    }
    else if (checkDeficit ||  checkDiocesan || checkDistance || flag){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.generalInfoStatusText = function (data, completedFields, distance, financial, diocesan, inProgressFields) {
    let checkDistance = data[distance] === "20.1" ? false : true;
    let checkDeficit = data[financial] === "There are no financial issues at the school" ? false : true;
    let checkDiocesan = data[diocesan] === "Yes" ? false : true;
    
    const flag = inProgressFields.some(field => data[field]);

    if (data[completedFields]){
      return "Complete";
    }
    else if (checkDeficit ||  checkDiocesan || checkDistance || flag){
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

    if (data[completedFields] == "_unchecked,Complete"){
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

    if (data[completedFields] == "_unchecked,Complete"){
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

      if (flag || data[completedFields] == "_unchecked,Complete"){
        return "/risks-and-issues/risks-summary1";
      }
      else {
        return "/risks-and-issues/risks-and-issues";
      }
    }
  filters.riskStatusClass = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);

    if (data[completedFields] == "_unchecked,Complete"){
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
    
    if (data[completedFields] == "_unchecked,Complete"){
      return "Completed";
    }
    else if (flag){
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
        return "/LA-proforma/LAproforma-summary";
      }
      else {
        return "/LA-proforma/local-authority-template";
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
        return "Complete";
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
        return 'Complete';
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

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
