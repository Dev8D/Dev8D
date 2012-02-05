if ( typeof(Roadworks) == "undefined" ) Roadworks = {};

(function ($) {

  var _datatarget  = null;
  var _errortarget = null;

  Roadworks.LoadData = function (fileuri, target, error)
  {
    _datatarget  = target;
    _errortarget = error;
    jQuery.ajax({
            type:         "GET",
            url:          fileuri,
            dataType:     "xml",
            success:      Roadworks.DisplayData,
            error:        Roadworks.DisplayError,
            cache:        false
        });
  };

  Roadworks.DisplayData = function (data, status, xhr)
  {
    _errortarget.empty();
    _errortarget.append($("<div>"+status+"</div>"));
    _datatarget.empty();
    $(data).find("situation").each(function(index) {
      elem   = $(this);       // make jQuery object for next DOM element
      newrow = $("<tr/>");
      $("<td/>").text(elem.attr("id")).appendTo(newrow);
      $("<td/>").text(elem.find("groupOfLocations descriptor value").text()).appendTo(newrow);
      $("<td/>").text(elem.find("situationRecord validity validityTimeSpecification overallStartTime").text()).appendTo(newrow);
      $("<td/>").text(elem.find("situationRecord validity validityTimeSpecification overallEndTime").text()).appendTo(newrow);
      $("<td/>").text(elem.find("situationRecord nonGeneralPublicComment comment value").text()).appendTo(newrow);
      _datatarget.append(newrow);      
    });
  }

  Roadworks.DisplayError = function (xhr, status, except)
  {
    _datatarget.empty();
    _errortarget.empty();
    _errortarget.append($("<div>Error retrieving Roadworks data</div>"));
  }

}) (jQuery);


