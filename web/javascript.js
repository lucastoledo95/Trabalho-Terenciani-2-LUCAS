function valida(erro,df){
erro='#ff0000';
df='#b3b3b3';

if (document.getElementById ("simCheckBox").checked == false &&
document.getElementById("naoCheckBox").checked == false){
   alert ("POR FAVOR, CLICAR EM UMA DAS DUAS OPÇÕES!!!");

return false;

}


if(document.getElementById("nome").value.length < 3){
alert('POR FAVOR, PREENCHA O CAMPO NOME!!!');
document.getElementById("nome").style.borderColor=erro;
document.getElementById("nome").focus();
return false;
}else{
     document.getElementById("nome").style.borderColor=df;
}

if(document.getElementById("cidade").value.length < 3){
alert('POR FAVOR, PREENCHA O CAMPO CIDADE!!!');
document.getElementById("cidade").style.borderColor=erro;
document.getElementById("cidade").focus();
return false;
}else{
     document.getElementById("cidade").style.borderColor=df;
}

if(document.getElementById("senha").value.length = "" ){
alert('POR FAVOR, PREENCHA O CAMPO SENHA!!!');
document.getElementById("senha").style.borderColor=erro;
document.getElementById("senha").focus();
return false;
}else{
if(document.getElementById("senha").value.length < 6 ){
    alert('POR FAVOR, SENHA MÍNIMA, 6 DIGITOS!!!');
document.getElementById("senha").focus();
document.getElementById("senha").style.borderColor=erro;
return false;

}else{
     document.getElementById("senha").style.borderColor=df;
}
}


if (document.form1.sel.value==""){
   window.alert("ESCOLHA UM SEXO!!!");
   document.form1.sel.focus();
   return false; 
} else{
   return true;
}
}

function testandoCPF() { 

strCPF = $("#cpf").val(); 
strCPF = strCPF.replace(/[^\d]+/g,''); 
var Soma; 
var Resto; 
var cboll = true; 
Soma = 0; 

if (strCPF.length != 11 || 
strCPF == "00000000000" || 
strCPF == "11111111111" || 
strCPF == "22222222222" || 
strCPF == "33333333333" || 
strCPF == "44444444444" || 
strCPF == "55555555555" || 
strCPF == "66666666666" || 
strCPF == "77777777777" || 
strCPF == "88888888888" || 
strCPF == "99999999999") 
cboll = false; 


for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
Resto = (Soma * 10) % 11; 

if ((Resto == 10) || (Resto == 11)) Resto = 0; 
if (Resto != parseInt(strCPF.substring(9, 10)) ) cboll = false; 

Soma = 0; 
for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i); 
Resto = (Soma * 10) % 11; 

if ((Resto == 10) || (Resto == 11)) Resto = 0; 
if (Resto != parseInt(strCPF.substring(10, 11) ) ) cboll = false; 

if(!cboll){ 
$('#cpf').css('background-color','#FF7171'); 
$('#cpf').focus(); 
}else{ 
$('#cpf').css('background-color','#FFF'); 
return cboll; 
} 

}

// PARA EVITAR O ESPACO NO CAMPO DA SENHA PASSWORD
function antEspaco(str){
	return str.replace(/^\s+|\s+$/g,"");
}
// SER OBRIGATORIAMENTE MAIUSCULO O CAMPO
function apenasMaiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
}



function testandoCPF() { 

strCPF = $("#cpf").val(); 
strCPF = strCPF.replace(/[^\d]+/g,''); 
var Soma; 
var Resto; 
var cboll = true; 
Soma = 0; 

if (strCPF.length != 11 || 
strCPF == "00000000000" || 
strCPF == "11111111111" || 
strCPF == "22222222222" || 
strCPF == "33333333333" || 
strCPF == "44444444444" || 
strCPF == "55555555555" || 
strCPF == "66666666666" || 
strCPF == "77777777777" || 
strCPF == "88888888888" || 
strCPF == "99999999999") 
cboll = false; 


for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
Resto = (Soma * 10) % 11; 

if ((Resto == 10) || (Resto == 11)) Resto = 0; 
if (Resto != parseInt(strCPF.substring(9, 10)) ) cboll = false; 

Soma = 0; 
for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i); 
Resto = (Soma * 10) % 11; 

if ((Resto == 10) || (Resto == 11)) Resto = 0; 
if (Resto != parseInt(strCPF.substring(10, 11) ) ) cboll = false; 

if(!cboll){ 
$('#cpf').css('background-color','#708090'); 
$('#cpf').focus(); 
}else{ 
$('#cpf').css('background-color','#FFFFFF'); 
return cboll; 
} 

}





function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
}
 
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
 
function cpfMascara(v){
 
    // Função: Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
    if (v.length <= 14) { //CPF
 
        //Coloca um ponto depois do 3 digito.
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //repeto o ponto após o 3 digito
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um hífen após o 3 digito
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
 
    } 
 
    return v
 
}

function telMascara(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
    if (v.length <= 14) { //CPF
 
    
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    
 
    } 
 
    return v
 
}



function checkBoxMarcando( obj ){
        var validacao = document.getElementsByName( obj.name );
        var cont = 0;
        for ( var i = 0; i < validacao.length; i++ )
        {
            if ( validacao[i].checked )
                cont++;
            if ( cont > 1 )
            {
                obj.checked = false;
                break;
            }
        }
	red2='#ff0000';	
        df='#b3b3b3';
			if (!obj.checked) {
         	    
                    
return;
    	}else
 			
                if(document.getElementById ("simCheckBox").checked == true){ 
    {document.getElementById('MostrarMensagem').innerHTML = 'A qualquer momento você podera cancelar o recebimento dos e-mails de promoção enviando um e-mail com o assunto "STOP MAIL" para o endereço contato@estacio.br';}
                }else{
     {document.getElementById('MostrarMensagem').innerHTML = '';
                     }   
              }
     
}
