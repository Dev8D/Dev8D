// Queue up tests...

module("TestSelectorPlugin");

test("Test initial values", 8, function() 
{
  // Not using plugin...
  equal($("#selectnext").text(), "(select next)", "Initial button text");
  equal($("#nowshowing").text(), "(now showing)", "Now showing header text");
  equal($("#selectablelist li:eq(0)").text(), "One", "First list item text");
  equal($("#selectablelist li:eq(1)").text(), "Two", "Second list item text");
  equal($("#selectablelist li:eq(2)").text(), "Three", "Third list item text");
  // See: http://stackoverflow.com/questions/178325/how-do-you-test-if-something-is-hidden-with-jquery
  ok($("#selectablelist li:eq(0)").is(":visible"), "First list item visible");
  ok($("#selectablelist li:eq(1)").is(":visible"), "Second list item visible");
  ok($("#selectablelist li:eq(2)").is(":visible"), "Second list item visible");
});

test("Test initial values with plugin activated", 8, function() {
  $("#selectnext").mySelector(
    { target:  "#selectablelist li"
    , showing: "#nowshowing"
    , selections: [ { label: "none", selector: ".none" }
                  , { label: "one", selector: ".no1" }
                  , { label: "two", selector: ":eq(1)" }
                  , { label: "three", selector: ".no3" }
                  , { label: "one and three", selector: ".no1, .no3" }
                  , { label: "all", selector: "*" }
                  ]
    , defaultselection: 4
    });
  equal($("#selectnext").text(), "all", "Initial button text");
  equal($("#nowshowing").text(), "one and three", "Now showing header text");
  equal($("#selectablelist li:eq(0)").text(), "One", "First list item text");
  equal($("#selectablelist li:eq(1)").text(), "Two", "Second list item text");
  equal($("#selectablelist li:eq(2)").text(), "Three", "Third list item text");
  ok($("#selectablelist li:eq(0)").is(":visible"), "First list item visible?");
  ok($("#selectablelist li:eq(1)").is(":hidden"),  "Second list item hidden?");
  ok($("#selectablelist li:eq(2)").is(":visible"), "Third list item visible?");
});

test("Test selector click", 8, function() 
{
  $("#selectnext").mySelector(
    { target:  "#selectablelist li"
    , showing: "#nowshowing"
    , selections: [ { label: "none", selector: ".none" }
                  , { label: "one", selector: ".no1" }
                  , { label: "two", selector: ":eq(1)" }
                  , { label: "three", selector: ".no3" }
                  , { label: "one and three", selector: ".no1, .no3" }
                  , { label: "all", selector: "*" }
                  ]
    , defaultselection: 4
    });
    $("#selectnext").trigger('click');
  equal($("#selectnext").text(), "none", "Initial button text");
  equal($("#nowshowing").text(), "all", "Now showing header text");
  equal($("#selectablelist li:eq(0)").text(), "One", "First list item text");
  equal($("#selectablelist li:eq(1)").text(), "Two", "Second list item text");
  equal($("#selectablelist li:eq(2)").text(), "Three", "Third list item text");
  ok($("#selectablelist li:eq(0)").is(":visible"), "First list item visible?");
  ok($("#selectablelist li:eq(1)").is(":visible"),  "Second list item hidden?");
  ok($("#selectablelist li:eq(2)").is(":visible"), "Third list item visible?");
});

test("Test mkore...", function() {
  ok( true, "all pass" );
});
