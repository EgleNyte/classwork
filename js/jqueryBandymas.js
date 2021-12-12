//paspausti ant bet kokio html elemento
$("*").click(
    function (event) {
        $("#kasAs").text(event.target.tagName);
    }
)

$('*').click(
    function (event) {
        let tagName = event.target.nodeName;
        let tags = $(tagName);
        let tagCount = tags.length;
        $('#kasas').text('Paspaudete ant ' + tagName + ' tago. Tokiu elementu yra: ' + tagCount)
        tags.css('background-color', 'pink');
    }
);




//1. Naudodamiesi Jquery biblioteka sukurkite funkcionaluma kuris paspaudus
// ant bet kokio HTML elemento, elemente #kasas parasytų koks tai elementas
// yra (tagName)


//Jei paspaustas elementas turi innerText, tuomet to teksto kiekviena mazaja
// raide konvertuoti i didziaja raide.
