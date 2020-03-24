(window.jQuery || document.write('<script src="/backup/jquery-2.1.1.min.js"><\/script>'));
(window.jQuery.mobile || document.write('<script src="/backup/jquery.mobile-1.4.5.min.js"><\/script>'));
$.each(document.styleSheets, function(i,sheet){
  if(sheet.href=='http://code.jquery.com/mobile/1.4.9/jquery.mobile-1.4.5.min.css') {
    var rules = sheet.rules ? sheet.rules : sheet.cssRules;
    if (rules === null || rules.length == 0) {
      $('<link rel="stylesheet" type="text/css" href="/backup/jquery.mobile-1.4.5.min.css" />').appendTo('head');
    }
 }
});
