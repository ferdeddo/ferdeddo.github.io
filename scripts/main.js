
let monBouton = document.querySelector('button');

function AfficherMasquer()
{
divInfo = document.getElementById('affich');
 
if (divInfo.style.display == 'none')
divInfo.style.display = 'block';

else
divInfo.style.display = 'none';
document.getElementById('bouton').style.display = 'none';
}


function send_google() {
	// fonction qui va retourner le texte entre dans la barre recherceh
	//ds une nouvelle fenetre avec la recherche google correspondante

	// recuper le texte de la barre recherche du parametre id
	var texte_entre = document.getElementById(id).value ;

	// il faut aller a cette adresse via return :
	return window.location.href=( 'https://www.google.fr/search?source=hp&q='+ texte_entre) ;
}

setTimeout(function()
{

   alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')
},10000);
