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
  filters.generalInfoStatusClass = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);

    let checkViability = data["viability"] === "Yes" || data["viability"] === "No" ?  true : false;
    let checkDeficit = data["deficit"] === "There are no financial issues at the school" ? false : true;
    let checkDiocesan = data["diocesan"] === "Yes" ? false : true;
    let checkDistance = data["distance"] === "20.1 miles" ? false : true;

    if (data[completedFields]){
      return "govuk-tag";
    }
    else if (flag || checkDeficit || checkDiocesan || checkDistance || checkViability){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.generalInfoStatusText = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);

    let checkViability = data["viability"] === "Yes" || data["viability"] === "No" ?  true : false;
    let checkDeficit = data["deficit"] === "There are no financial issues at the school" ? false : true;
    let checkDiocesan = data["diocesan"] === "Yes" ? false : true;
    let checkDistance = data["distance"] === "20.1 miles" ? false : true;

    if (data[completedFields]){
      return "Complete";
    }
    else if (flag || checkDeficit || checkDiocesan || checkDistance || checkViability){
      return "In Progress"
    }
    else {
      return "Not Started";
    }
  }

  // Rationale
  filters.rationaleStatusClass = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);

    let checkProjectRationale = data["project-rationale"] === "St Wilfrid’s is a small primary school in Warrington which is facing a financially challenging future should it remain on its own. Low pupil numbers and the high level of staffing costs due to the school  being supported by an Agency Interim Head Teacher,  contributed to this. The Chair St Wilfrid’s and Dynamics trust have agreed to a Memorandum of Understanding which will allow Dynamics Trust to oversee all operational aspects of the school with immediate effect. Central services provided will include school improvement, finance and operational support and HR support. Dynamics Trust have also appointed Gareth Smith, Head Teacher of Angel Primary School, to the role of Interim Executive Head Teacher." ? false : true;


    if (data[completedFields] == "_unchecked,Complete"){
      return "govuk-tag";
    }
    else if (flag || checkProjectRationale){
      return "govuk-tag govuk-tag--blue"
    }
    else {
      return "govuk-tag govuk-tag--grey";
    }
  }

  filters.rationaleOverviewStatusText = function (data, completedFields, inProgressFields) {
    const flag = inProgressFields.some(field => data[field]);

    let checkProjectRationale = data["project-rationale"] === "St Wilfrid’s is a small primary school in Warrington which is facing a financially challenging future should it remain on its own. Low pupil numbers and the high level of staffing costs due to the school  being supported by an Agency Interim Head Teacher,  contributed to this. The Chair St Wilfrid’s and Dynamics trust have agreed to a Memorandum of Understanding which will allow Dynamics Trust to oversee all operational aspects of the school with immediate effect. Central services provided will include school improvement, finance and operational support and HR support. Dynamics Trust have also appointed Gareth Smith, Head Teacher of Angel Primary School, to the role of Interim Executive Head Teacher." ? false : true;
    
    if (data[completedFields] == "_unchecked,Complete"){
      return "Completed";
    }
    else if (flag || checkProjectRationale){
      return "In Progress"
    }
    else {
      return "Not Started";
    }
  }

    // LA Proforma

    filters.laProformaNextPageLink = function (data, completedFields, inProgressFields) {
      const flag = inProgressFields.some(field => data[field]);
  
      if (data[completedFields] == "_unchecked,Complete" || flag){
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
        return "Completed";
      }
      else if (flag){
        return "In Progress"
      }
      else {
        return "Not Started";
      }
    }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
