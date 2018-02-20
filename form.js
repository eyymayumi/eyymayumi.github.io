var $form = $('form#test-form'),
    url = 'https://script.google.com/a/student.fuhsd.org/macros/s/AKfycbxCvOfYX3S4iNqoLlOxWsaRIBf5VVqyGIHcl3nZ1lmNYfHvZp0/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})