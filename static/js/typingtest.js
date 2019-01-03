// BUTTONS
document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-button').style.display="none";
    document.getElementById('stop-button').classList.remove('d-none');
    document.getElementById('stop-button').style.display="block";
});

document.getElementById('stop-button').addEventListener('click', function () {
    document.getElementById('stop-button').style.display="none";
    document.getElementById('start-button').style.display="block";
});

