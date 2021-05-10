function tectchangefun() {

    console.log();
    document.getElementById('myid').innerHTML = document.getElementById('myinput').value;
    document.getElementById('myid').style.color = 'blue';
}

function changeimage(path) {
    document.getElementById('img-gallarey').src = path;
}

function GetoOddEvenNumber() {
    let numbertype = document.getElementById('Idfornumber').value;
    document.getElementById('text-number').style.color = 'blue';
    if (numbertype % 2 == 0) {

        let a = numbertype + " " + "is Even ";

        document.getElementById('text-number').innerHTML = a;

    } else {
        let b = numbertype + " " + "is Odd ";
        document.getElementById('text-number').innerHTML = b;
    }

}