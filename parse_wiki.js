// script for parsing countries info from wikipedia page: 
// https://az.wikipedia.org/wiki/%C6%8Flifba_s%C4%B1ras%C4%B1na_g%C3%B6r%C9%99_paytaxtlar%C4%B1n_siyah%C4%B1s%C4%B1

// paste below google in developer console in chrome

clear();
var rows = document.getElementsByClassName('wikitable')[0].rows;
db = 'db = ['
for (i=1; i < rows.length; i++) {
    if (rows[i].cells[2].querySelectorAll('a').length > 1)
        db += '['
            + '"' + rows[i].cells[2].querySelectorAll('a')[1].innerText + '"'
            + ', "' + rows[i].cells[1].textContent + '"'
            + ', "' + rows[i].cells[2].querySelector('img').src.split('/').slice(0, -1).join('/').replace('/thumb', '') + '"'
        + '], '
}
db += ']'
copy(db)
console.log('success')
