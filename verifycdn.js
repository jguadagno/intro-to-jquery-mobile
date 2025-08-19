if (!window.jQuery) {
  var script = document.createElement('script');
  script.src = "/backup/jquery-2.1.1.min.js";
  document.head.appendChild(script);

}
if (!window.jQuery.mobile) {
  var script = document.createElement('script');
  script.src = "/backup/jquery.mobile-1.4.5.min.js";
  document.head.appendChild(script);

}
$.each(document.styleSheets, function(i,sheet){
  if(sheet.href=='https://code.jquery.com/mobile/1.4.9/jquery.mobile-1.4.5.min.css') {
    var rules = sheet.rules ? sheet.rules : sheet.cssRules;
    if (rules === null || rules.length == 0) {
      $('<link rel="stylesheet" type="text/css" href="/backup/jquery.mobile-1.4.5.min.css" />').appendTo('head');
    }
 }
});
