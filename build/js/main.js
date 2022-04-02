var mdp = '0';
var lenth = 26;
var string = "vide";
var number = 0;
var entry = "nduboi_" ; 
var v = 1;
var  numbercoo = 0;
var cookiesdata = "empty";
var list_cookies = "";
var n = 0;
var nbrpass = 0;
var value_list = 0;
var url = window.location.protocol +"//"+ window.location.host ;
console.log(url);
// initialisation des variables 



function plus(){
    if (nbrpass < 5 ){
    number = Math.floor(Math.random() * 9 +0 );
    number = parseInt(number);
    string = entry + number ;
    while (v < lenth){
        number = Math.floor(Math.random() * 9 +0 );
        number = parseInt(number);
        string = string + number ;
        v = v+1 ;
    }
    string = string + 758 ;
    mdp = string ; 
    console.log(mdp);
    document.getElementById('screen').innerHTML = mdp; 
    v= 1;
    string = "Empty";
    document.getElementById('savemdp').disabled = false; 
    return string;
  }
  if (nbrpass == 5){
    document.getElementById('screen').innerHTML = 'Vous avez atteint le nombre maximum de mots de passe';
    document.getElementById('generate').disabled = true;
    document.getElementById('savemdp').disabled = true;

  }
}
// Génértion d'un mot de passe selon la racine nduboi_ avec une longeur de 36 caractères différents de 0 et 9
// nduboi_27263674012507488681499999758 EXEMPLE


function save(){
  document.getElementById('savemdp').disabled = true;
  savemdp = mdp;
  mdp = '0';
  document.getElementById('screen').innerHTML = 'Sauvegarde en cours ...';
  cookies();
  nbrpass = nbrpass + 1;
  // console.log(mdp, savemdp, string);
  savemdp = '0' ;
  // console.log(mdp, savemdp, string);
  document.getElementById('big_screen').innerHTML = cookiesdata ;
  document.getElementById('screen').innerHTML = 'Sauvegardé !';
}
// Sauvegarde du mots de passe via un cookies crée grâce à la fonction cookies()

function cookies(){
  numbercoo = numbercoo + 1;
  list_cookies = Array(numbercoo);
  document.cookie = 'Mdp'+ numbercoo +'='+ savemdp +'; path=/';
  cookiesdata = document.cookie ;
  value_list =value_list +1;
   
}
// Création de cookies avec un nom standard

function delcookies(){
  while (n < value_list){
    n=n+1;
    document.cookie = 'Mdp'+ n + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    
  }
  console.log(n);
  numbercoo = 0;
  value_list = 0;
  n = 0;
  nbrpass = 0;
  document.getElementById('generate').disabled = false;
  document.getElementById('screen').innerHTML = 'Mots de passe supprimés !';
  document.getElementById('big_screen').innerHTML = 'Supprimés !';

}
// Fonction pour delete tout les cookies

function close_data(){
  delcookies();
  document.getElementById('screen').innerHTML = 'Mots de passe supprimés !';
  document.getElementById('big_screen').innerHTML = 'Supprimés !';
}



// Voir comment faire pour différencier les cookies ansi que mettre des noms de plateformes

