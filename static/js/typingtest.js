let sentences = [
                "Fekete bikapata kopog a patika pepita kövén.",
                "Az ipafai papnak fapipája van, ezért az ibafai fapipa papi fapipa.",
                "Egy meggymag, meg még egy meggymag az két meggymag.",
                "Öt görög görget görgőn, görbe úton, görgő gömbbé gömbölyödött öt görögdinnyét.",
];


// BUTTONS
document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-button').style.display="none";
    document.getElementById('stop-button').classList.remove('d-none');
    document.getElementById('stop-button').style.display="block";
    document.getElementById('sentence').placeholder=sentences[Math.floor(Math.random()*sentences.length)];
    document.getElementById('answer').value='';
    document.getElementById('answer').focus();
});

document.getElementById('stop-button').addEventListener('click', function () {
    document.getElementById('stop-button').style.display="none";
    document.getElementById('start-button').style.display="block";
});


