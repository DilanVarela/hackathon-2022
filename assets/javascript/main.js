
//Countdown

// Set the date of the event
var countDownDate = new Date("Jun 10, 2022 00:00:00").getTime()

// Get today's date and time
var now = new Date().getTime();
    
// Find the distance between now and the date of the event
var distance = countDownDate - now;

//Print the time of countdown until the date
$('#inicio-del-evento').countdown(countDownDate, function(event) {
var $this = $(this).html(event.strftime(''
    + '<span class="h1 font-weight-bold">%D</span> Day%!d'
    + '<span class="h1 font-weight-bold">%H</span> Hr'
    + '<span class="h1 font-weight-bold">%M</span> Min'
    + '<span class="h1 font-weight-bold">%S</span> Sec'));
});
//End Countdown

//Validate register form and fail if an inputs is empty then stop execute the action in the form action=""
(function () {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity() && $('#country_residence').value == 'select') {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated')
        }, false)
    });
})()
//End Validate

function validateInputs(input_id, input_value){
    console.log(input_value);
    console.log(input_id);
    switch (input_id) {
        case 'full_name':
            validateFullName(input_id, input_value);
            break;
        case 'email':
            validateEmail(input_id, input_value);
            break;
        case 'country_residence':
            validateCountry(input_id, input_value);
            break;
    }
}

//Rules of validation

function validateFullName(input_id, full_name){
    let ruleValidation = /^[A-Za-z.\u00C0-\u00FF]+(\s*[A-Za-z.\u00C0-\u00FF]+)*$/;
    if (!ruleValidation.test(full_name)) {
        $("#"+input_id).hasClass('is-valid') ? $("#"+input_id).removeClass('is-valid') : true; 
        $("#"+input_id).addClass('is-invalid');
        displayErrors(input_id, 'invalid-name');   
    }else{
        $("#"+input_id).hasClass('is-invalid') ? $("#"+input_id).removeClass('is-invalid') : true;
        $("#"+input_id).addClass('is-valid');   
    }
}

function validateEmail(input_id, email){
    let ruleValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!ruleValidation.test(email)) {
        $("#"+input_id).hasClass('is-valid') ? $("#"+input_id).removeClass('is-valid') : true; 
        $("#"+input_id).addClass('is-invalid');
        displayErrors(input_id, 'invalid-email');   
    }else{
        $("#"+input_id).hasClass('is-invalid') ? $("#"+input_id).removeClass('is-invalid') : true;
        $("#"+input_id).addClass('is-valid');   
    }
}

function validateCountry(input_id,country_residence){
    if (country_residence == "select") {
        $("#"+input_id).hasClass('is-valid') ? $("#"+input_id).removeClass('is-valid') : true; 
        $("#"+input_id).addClass('is-invalid');
        displayErrors(input_id, 'select-value');   
    }else{
        $("#"+input_id).hasClass('is-invalid') ? $("#"+input_id).removeClass('is-invalid') : true;
        $("#"+input_id).addClass('is-valid');   
    }
}
//End Rules of validation

//Display the errors received in Rules of validation
function displayErrors(input_id, error){
    switch (error) {
        case 'invalid-email':
            $("#error-"+ input_id).text('Email invalido, inserte un formato correcto');
            break;
        case 'invalid-name':
            $("#error-"+ input_id).text('Nombre invalido');
            break;
        case 'select-value':
            $("#error-"+ input_id).text('Seleccione un valor valido');
            break;
    }
}
//End Display the errors received in Rules of validation