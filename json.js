var MAINAPP = (function(app) {
  var jsonObj = {};

  var loadJSON = function(path) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", path);
    xobj.onreadystatechange = function() {
      if (xobj.readyState === 4) {
        app.jsonObj = JSON.parse(xobj.responseText);
      }
    };
    xobj.send(null);
  };

  app.jsonObj = jsonObj;
  app.loadJSON = loadJSON;
  return app;
})(MAINAPP || {});

// JSON exercise practice

var MAINAPP = (function(app) {
  var jsonObj = {},
    doc = document;
  var loadJSON = function(path) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", path);
    xobj.onreadystatechange = function() {
      if (xobj.readyState === 4) {
        jsonObj = JSON.parse(xobj.responseText);
        populateHTML();
      }
    };
    xobj.send(null);
  };

  var populateHtml = function() {
    var li = doc.getElementsByTagName("li");
    doc.getElementsByTagName("h2")[0].innerHTML = jsonObj.heading;
    for (let i = 0; i < li.length; i++) {
      li[i].innerHTML = jsonObj.bullets["b" + (i + 1)];
    }
  };
  loadJSON("data.json");
  app.populateHTML = populateHtml;
  return app;
})(MAINAPP || {});
