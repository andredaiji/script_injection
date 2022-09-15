var user = param_user,
    psw = param_psw;

var f = document.getElementsByName('principal')[0].contentDocument;

f.getElementsByName('txtUsuario')[0].value = user;
f.getElementsByName('pswSenha')[0].value = psw;
f.querySelectorAll('a')[0].click();