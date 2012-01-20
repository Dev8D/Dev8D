if ( typeof(Hello) == "undefined" ) Hello = {};

(function ($) {

  Hello.registerHandlers = function () {
    $('#name').text("World");

    $("#NameEntryBox").hide();
    $("#showNameEntryBox").click( function (event) { 
      Hello.showHide(event, "#NameEntryBox") 
    });

    $("#SelectorButtons").hide();
    $("#showSelectorButtons").click( function (event) { 
      Hello.showHide(event, "#SelectorButtons") 
    });

    $('#update').click(function() {
      $('#name').text($('#yourname').val());
      $('#name').css('color', 'red');
      $('#name').css({ 'font-family': 'cursive', 'font-size': 'larger'});
    });

    $('#flashfirst').click(Hello.flashFirstById);
    $('#flashsecond').click(Hello.flashSecondById);

    $('#byname').click(Hello.flashByName);
    $('#byclass').click(Hello.flashByClass);
    $('#bynesting').click(Hello.flashByNesting);
    $('#byattribute').click(Hello.flashByAttribute);
    $('#bypos').click(Hello.flashByPos);
  };

  Hello.showHide = function(event, selector) {
    if ( $(event.currentTarget).find(".showhide").text() == "Hide" ) {
      $(selector).hide();
      $(event.currentTarget).find(".showhide").text("Show");
    } else {
      $(selector).show();
      $(event.currentTarget).find(".showhide").text("Hide");
    };
  };

  Hello.flashFirstById = function () { Hello.flash($('#first'), 'highlightyellow'); };

  Hello.flashSecondById = function () { Hello.flash($('#second'), 'highlightpink'); };

  Hello.flashByName = function () { Hello.flash($('button'), 'highlightgreen'); };

  Hello.flashByClass = function () { Hello.flash($('.aaa'), 'highlightblue'); };

  Hello.flashByNesting = function () {
    Hello.flash($('ol li'), 'textred'); 
    Hello.flash($('ul li'), 'textgreen'); 
  };

  Hello.flashByAttribute = function () { Hello.flash($('[test="select"]'), 'textgreen'); };

  Hello.flashByPos = function () { 
    Hello.flash($('li').eq(3), 'textred'); 
    Hello.flash($('li').eq(3), 'textblue'); 
  };

  Hello.flash = function (jqueryobject, cssclass) {
    jqueryobject.each( function(index, elem) {
      $(elem).toggleClass(cssclass);
    });
  };

}) (jQuery);


