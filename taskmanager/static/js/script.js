document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

  // datepicker initalization
let datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
  format: "dd mmmm, yyyy",
  i18n: {done: "Select"}
});

// select initalization
let selects = document.querySelectorAll('select');
M.FormSelect.init(selects);

// collapsible initialaztion
let collapsibles = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsibles);

});