(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');
  var my_alert = document.querySelector('#header_alert_message');


  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          my_alert.classList.replace("display_none", "display_block");
        }

        form.classList.add('was-validated')
      }, false)
    })
})()