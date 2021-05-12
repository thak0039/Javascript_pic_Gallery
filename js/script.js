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

function getPluse() {

    let value1 = document.getElementById('num1').value;
    let value2 = document.getElementById('num2').value;

    value3 = parseInt(value1) + parseInt(value2);

    document.getElementById('ans').innerHTML = value3;


}

function getSubstraction() {
    let value1 = document.getElementById('num1').value;
    let value2 = document.getElementById('num2').value;
    document.getElementById('ans').innerHTML = value1 - value2
}

function getMultification() {
    let value1 = document.getElementById('num1').value;
    let value2 = document.getElementById('num2').value;
    document.getElementById('ans').innerHTML = value1 * value2;
}

function getDivisition() {
    let value1 = document.getElementById('num1').value;
    let value2 = document.getElementById('num2').value;
    document.getElementById('ans').innerHTML = value1 / value2;
}