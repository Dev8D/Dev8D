if ( typeof(Hello) == "undefined" ) Hello = {};

(function ($) {

  Hello.registerHandlers = function () {
    $('#name').text("World");

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
    Hello.flash($('li').eq(4), 'textblue'); 
  };

  Hello.flash = function (jqueryobject, cssclass) {
    jqueryobject.each( function(index, elem) {
      $(elem).toggleClass(cssclass);
    });
  };

}) (jQuery);


