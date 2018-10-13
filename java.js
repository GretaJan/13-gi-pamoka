/*var tekstas=document.getElementById("pirmas");
tekstas.innerHTML='tekstas'*/

var a=3;
var b=4;
var c=5;

if (a+b>c && b+c > a && a+c>b) {
    if (a == b == c) {
            var plotas = (a + b + c) / 3;
            var ats1 = document.getElementById("trikampis");
            ats1.innerHTML += 'Trikampis lygiakraštis' + plotas;
        }
        else if (a == b && a != c && b != c || b == c && a != b && a != c || a == c && a != b && c != b) {
            var plotas = (a + b + c) / 3;
            var ats2 = document.getElementById("trikampis");
            ats2.innerHTML += 'Trikampis lygiašonis' + plotas;
        }
        else if (a != b != c) {
            var plotas = (a + b + c) / 3;
            var ats3 = document.getElementById("trikampis");
            ats3.innetHTML += 'Paprastas trikampis. Plotas: ' + plotas;
        }
    }
else{
        console.log('ne trikampis');
        var atsNe=document.getElementById("trikampis");
        atsNe.innerHTML+= 'ne trikampis';
    }


