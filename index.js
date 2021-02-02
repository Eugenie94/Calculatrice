/* Etapes : 
-------

-faire une page HTML
-créer deux input type text avec deux id different pour la saisie des valeurs
-créer un select avec un id pour proposer les differentsopérateurs. (+ - * / ** %)
-créer un bouton avec un id pour lancer le calcul (button, span)


Avec js : 
---------
-lors du click sur bouton (evenement) :
- récupérer les deux saisies des champs text et l'opérateur selectionné

- il peut etre important de passer les saisies dans un parseFloat() pour les transformer en type number.
- déclancher le calcul des saisies selon l'opérateur avec un if qui va tester l'opérateur pour délancher l'opération
- afficher l'operation avec le resultat


Pour aller plus loin :
----------------------
- essayer de donner la posibilité de faire apparaitre ou disparaitre la calculatrice
- afficher des informations pour l'utilisateur

-division par zero : impossible, declanche une erreur
- est ce que les saisies sont bien numériques ( isNaN() )
- en anglais le séparateur de décimale est le .


*/

/* POUR FAIRE LE CALCUL DIRECT AVEC LES PROMPT !!!!!! C EST GENIIIIIIIIIIIIIIIIAL JE MAIME TROP
var nb1 = parseFloat(prompt("Premier nombre"));
var nb2 = parseFloat(prompt("Second nombre"));
var t = nb1 + nb2;
alert(t);
*/
/*while(true) {
    alert('Attention votre ordinateur est infecté !');
}*/

    
$('#total').click(function(event) { // click le mettre des que je veux l'user clique dessus et fait appliquer resultat de mon code ou pour un projet perso ! des que ya un click je veux faire executer mon code donc FORCEMENT .click sinonn on peut mettre un autre evement ex: mousehover etc etc etc. si pendant lexam on me dit lorsque l'on clique bah jutilise .click

    event.preventDefault();
    

    if ($('.opvalide').css(  'display'  ) === 'block' ) { /* on verifie d'abord le display avec cette ligne, si elle est strictement égal a block c est a dire que ca existe sinon la condition na pas de sens, donc si elle existe, a chaque rechargement de page elle va s'afficher en display none donc ne pas s'afficher car mes if en dessous disent que a chaque error dans la page le .opvalide s'affiche meme au rechargement. Donc cette ligne et celle du dessous vas reset le display block en display none*/
      $('.opvalide').css( { display: 'none' } );
    } 
// Ducoup forcement dans mes conditions en dessous j'ai fait en sorte qu'elle soit en display none par défaut et qu'elle s'affiche si ERROR il y a sauf qu'on a pas gerer l'aprés c est a dire que une fois affiché et quand on relance un evenement PAS ERROR bah elle reste quand meme et avec ces 4 lignes on gere ce soucis dans le soucis ou grace a ce if des que la condition du display existant est verifié il le place direct en display none !
    if ($('.chaine').css(  'display'  ) === 'block' ) { // pareil pour celle ci 
        $('.chaine').css( { display: 'none' } );
      }
 

var nombre1 = parseFloat(document.getElementById("nombre1").value); // on recupere grace a parseFloat la valeur NUMBER de notre chaine de caractere car dans les champ form pour entrer nombre TOUT EST CARACTERE et faire en sorte qu'on puisse accepter les decimal !!
var nombre2 = parseFloat(document.getElementById("nombre2").value); // pareil pour le nombre 2 qu'en haut
var operateur = (document.getElementById("operateur").value); // récupere la valeur operateur en variable du code qu'on va avoir ci-dessous



if ( nombre1 && nombre2 ) { // if rien on dit juste si nombre1 et nombre2 sont des number comme figuré ci dessus
// laffichage des error sans le alert reste affiché car on est dans un principe de boucle et vu que le fait de ne pas remplir le formulaire au reset de la page est consideré comme un vide et ben vide n'est pas number (vide est isNan) ducoup ca saffiche continuellement. et le fait qu'on rajoute au dessus la verification du display block et qu'ensuite on l'affiche en none ca fait que cette condtion la n'est plus faite a part si on fait une autre saisie comme mes autre condition a regardé dans le code.
} else { // if isNan ca va return cette phrase que j'ai mis mdrrr
    $('.chaine').css( { display: 'block' } );/*on a rajouté ça pour afficher phrase pas de calcul de chaine de caractere quand il y a des lettre au lieu des chiffre c est comme le return alert sauf que la ya pas d'alerte. */
    alert("Nous ne pouvons pas calculer une chaîne de caractère !"); 
}



if ( operateur === '+' ) { // toutes ces lignes sont les ifs qui disent si + alors calcul en plus
    total = nombre1 + nombre2; 
} else if ( operateur === '-' ) { // si - alors calcul en moins
    total = nombre1 - nombre2;
} else if( operateur === '*' ) { // si * calcul en fois
    total = nombre1 * nombre2;
} else if( operateur === '/' ) { // si / calcul en divison
    total = nombre1 / nombre2;
} else if( operateur === '**' ) { // si ** calcul en tamere
    total = nombre1 ** nombre2;
} else if(operateur === '%' ) { // si % calcul en ton pere(nan jrigole c est la racine carré)
    total = nombre1 % nombre2;
} else { // dans toutes les autres possibilité(si on ne met aucun opérateur de calcul ALORS ca renvoit cette phrase qu'il faut selectionner un opérateur valide)
    $('.opvalide').css( { display: 'block' } ); /*on a rajouté ça pour afficher phrase valide operateur quand il y a aucun operateur lancé c est comme le return alert sauf que la ya pas d'alerte */
    alert('Selectionnez un opérateur valide !');
}


if (nombre1 + nombre2 === total) {
alert(total); // pop up qui va renvoyer mon TOTAL après tout ça
}

});



$('.survol, .operateur').mouseover(function() {     //evenement mouseover qui va me faire apparaitre le title dans le champ au survol de la souris HAHA JE SUIS TROP FORTE!
    $('title').css( { cursor: 'pointer'}); 
    $()
});

$('#lienfermer').on('click', function () {    // fermer form calculette
    $('#form').fadeOut(1000);   
});

$('#lienouvrir').on('click', function () { // ouvrir form calculette
    $('#form').fadeIn(1000);
    $("#form").css( { display: 'block'} ) ;
});


/*$('.opvalide').css('display') => permet de verifier si le display existe si oui affiche la valeur si elle existe pas ca renvoie undefined. */
