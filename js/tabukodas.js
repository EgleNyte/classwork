let sheets = document.getElementsByClassName('sheet');

function pakeitiTaba (taboId) {
    for (var i = 0; sheets.length > i; i++) {
        sheets[i].style.display ='none';
    }

    document.getElementById(taboId)
        .style.display = 'block';
}