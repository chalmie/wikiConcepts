$(document).ready(function() {
  console.log("test");
  $("div#testForm").submit(function(event) {
    var testyForm = $("input#exampleForm").val();
    alert(testyForm);

    event.preventDefault();
  });
});
