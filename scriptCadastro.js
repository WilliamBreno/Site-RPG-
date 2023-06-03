/*
$(function() {
    var check1 = 0;
    $('input[name=tipo]').click(function() {
        if($('#Mas').is(':checked')){
           check1 = 0;
        }
        if ($('#Fem').is(':checked')) {
            if(check1 != 0) { 
                $(this).prop('checked', false);
                check1 = 0;
            } else {
                check1 = 1;
            }
        }
    });
});
*/

function verificar() {
    var Name = document.getElementById('nome');
    var Email = document.getElementById('email');
    var password = document.getElementById('senha');
    var conf_senha = document.getElementById('confirm_senha');

    console.log(Name)
    console.log(Email)
    console.log(password)
    console.log(conf_senha)

}
function mouseoverPass(obj) {
    var obj = document.getElementById('senha');
    obj.type = "text";
  }
  function mouseoutPass(obj) {
    var obj = document.getElementById('senha');
    obj.type = "password";
  }