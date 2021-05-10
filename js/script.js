function tectchangefun() {

    console.log();
    document.getElementById('myid').innerHTML = document.getElementById('myinput').value;
    document.getElementById('myid').style.color = 'blue';
}

function changeimage(path) {
    document.getElementById('img-gallarey').src = path;
}