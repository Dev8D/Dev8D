(function($)
{
  //alert("define selector plugin");
  $.fn.mySelector = function( options ) {
    // 'this' is DOM element plugin is invoked for
    // Options is selector options:
    //  { target:           (selector for target elements that may be selected/unselected)
    //  , showing:          (selector for element that recieves current display option)  
    //  , selections:       (list of individual selections - see below) 
    //  , defaultselection: (index of default selection from list - 0-based)
    //  }
    //
    // Each individual selection is an object with two fields:
    //  { label:     (text label used to indicate this selection)
    //  , selector:  (jQuery selector for elements to display for this selection)
    //  }
    //
    var _selector = this;
    var showSelection = function (nextsel)
    {
        // Update display
        var currsel = _selector.data("currentselection");
        $(options.target).filter(options.selections[currsel].selector).hide();
        $(options.target).filter(options.selections[nextsel].selector).show();
        $(options.showing).text(options.selections[nextsel].label);
        _selector.data("currentselection", nextsel);
        // Set up for next update
        nextsel = nextsel+1;
        if (nextsel >= options.selections.length) nextsel = 0;
        _selector.text(options.selections[nextsel].label);
        _selector.data("nextselection", nextsel);
        return nextsel;
    }

    // Initialise:
    //   hide all possible selections, show default
    for ( var i in options.selections )
    {
        $(options.target).filter(options.selections[i].selector).hide();
    };
    _selector.data("currentselection", 0);    // Just to make sure it's defined ...
    showSelection(options.defaultselection);

    // set up click handler
    _selector.click( function () {
        var i = _selector.data("nextselection");
        showSelection(_selector.data("nextselection"));
    });
  
    return _selector;
  };
})( jQuery );
