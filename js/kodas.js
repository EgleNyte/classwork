let a = 1;

let tekstas = 'Kintamojo a reiksme: ';

console.log(tekstas + a);

a = 2;

console.log(tekstas + a);

let b = 'Mano vardas';
let c = ' Egle Kukucionyte';

console.log (b + c);

let x = 1996;
let y = 10;
let z = 29;

a1 = x % 10;
a2 = y % 10;
a3 = z % 10;

console.log(a1 + a2 + a3);

let n1 = 3;
let n2 = 8;

let s1 = (n1 - 2) * 180;
let s2 = (n2 - 2) * 180;

document.getElementById('ats').innerHTML = 'Pirmo daugiakampio [' + n1 + '] kampu suma yra ' + s1 + ', ';
document.getElementById('ats').innerHTML += ' antro daugiakampio [' + n2 + '] kampu suma yra ' + s2 + ', ';
document.getElementById('ats').innerHTML += ' abieju kampu suma yra ' + (s1 + s2);

// if uzduotis

let inta=-5; let intb=0; let intc=-4; let intd=4;
let answer;

if ((intd >= inta) && (intc <= intb)) {
    let cut_x = Math.max(inta, intc);
    let cut_y = Math.min(intd, intb);
    answer = "Rezis: " + [cut_x, cut_y];
} else {
    answer = "Null";
}

document.getElementById("atsakymas12").innerHTML = answer;

// 1 uzduotis
let firstName = 'Egle ';
let lastName = 'Kukucionyte ';
let studijos = 'VU';
let kursas = 4;
let pazymiai = [9, 8, 10];

// 2 uzduotis
const aprasymas =
    firstName + lastName +
    'mokesi ' + studijos +
    ', baige visus ' + kursas + ' kursus' +
    ' ir jos pazymiai buvo ' + pazymiai;

console.log(aprasymas);
document.getElementById('apieMane').innerHTML = aprasymas;

// 3 uzduotis
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof studijos);
console.log(typeof kursas);
console.log(typeof pazymiai);

// 4 uzduotis
let person = {
    firstName: 'Egle',
    lastName: 'Kukucionyte',
    studijos: 'VU',
    kursas: 4,
    pazymiai: [9,8,10]
};

console.log(person);

// 5 uzduotis

let pirmasStudentas;
let antrasStudentas;
let treciasStudentas;
let ketvirtasStudentas;
let penktasStudentas

let studentai = [
    pirmasStudentas =
    {
        firstName: 'Lukas',
        lastName: 'Lukavicius',
        studijos: 'KTU',
        kursas: 3,
        pazymiai: [7,9,6]
    },
    antrasStudentas =
    {
        firstName: 'Petras',
        lastName: 'Petraitis',
        studijos: 'VGTU',
        kursas: 2,
        pazymiai: [7,10,6]
    },
    treciasStudentas =
    {
        firstName: 'Mantas',
        lastName: 'Mantavicius',
        studijos: 'VU',
        kursas: 1,
        pazymiai: [6,9,10]
    },
    ketvirtasStudentas =
    {
        firstName: 'Jonas',
        lastName: 'Jonaitis',
        studijos: 'KTU',
        kursas: 4,
        pazymiai: [6,5,7]
    },
    penktasStudentas =
    {
        firstName: 'Andrius',
        lastName: 'Andraitis',
        studijos: 'VU',
        kursas: 3,
        pazymiai: [10,8,6]
    }
];

console.log(studentai);

// 6 uzduotis
console.log(studentai[4]);

// 7 uzduotis
console.log(myJSON = JSON.stringify(person));

// 8 uzduotis

// 9 uduotis
let pakeltasPirmasPazymys = ketvirtasStudentas['pazymiai'][0];
pakeltasPirmasPazymys++;

let pakeltasAntrasPazymys = ketvirtasStudentas['pazymiai'][1];
pakeltasAntrasPazymys++;

let pakeltasTreciasPazymys = ketvirtasStudentas['pazymiai'][2];
pakeltasTreciasPazymys++;

console.log(pakeltasPirmasPazymys, pakeltasAntrasPazymys, pakeltasTreciasPazymys); //7 6 8

//10 uzduotis
let pirmasPazymys = antrasStudentas['pazymiai'][0];
let antrasPazymys = antrasStudentas['pazymiai'][1];
let treciasPazymys = antrasStudentas['pazymiai'][2];

let pazymiuSuma = pirmasPazymys + antrasPazymys + treciasPazymys;

console.log(pazymiuSuma); //23

//11 uzduotis
let pazymys1 = treciasStudentas['pazymiai'][1];
let pazymys2 = treciasStudentas['pazymiai'][2];

let pazymiuSandauga = pazymys1 * pazymys2;
console.log(pazymiuSandauga); //90

//12 uzduotis
console.log(typeof kursas); //number

//13 uzduotis
let isKetvirtasKursas = ketvirtasStudentas['kursas'] === 4; //gauname reiksme 'true'
console.log(isKetvirtasKursas);

console.log(typeof isKetvirtasKursas); //boolean

//14 uzduotis
/*function arLukasAbiturientas (val) {
    if (pirmasStudentas['kursas'] === 4) {
        return "Studentas Lukas ";
    }

}*/

// 15 uzduotis

// funkciju uzduotis

function sudetis(i, b1){
    return i + b1;
}
function atimtis(i, b1){
    return i - b1;
}
function daugyba(i, b1){
    return i * b1;
}
function dalyba(i, b1){
    return i / b1;
}
let b1 = 2
function rodytiFunkcija(){
    let results = document.getElementById('rezultatai');
    for (let i = 1; i <= 5; i++) {
    /*for (let b1 = 1; b1 <= 10; b1 += 2) { */
            results.innerHTML += 'Skaiciu [' + i + ', ' + b1 + '] suma: ' + sudetis(i, b1) + '<br>';
            results.innerHTML += 'Skaiciu [' + i + ', ' + b1 + '] atimtis: ' + atimtis(i, b1) + '<br>';
            results.innerHTML += 'Skaiciu [' + i + ', ' + b1 + '] daugyba: ' + daugyba(i, b1) + '<br>';
            results.innerHTML += 'Skaiciu [' + i + ', ' + b1 + '] dalyba: ' + dalyba(i, b1) + '<hr>';
        }
}

$('tabai > a').click(
    function () {
        $('.sheets > div').hide();
        let kaRodyti = $(this).attr('href');
        $(kaRodyti).show();
    }
)