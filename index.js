
function signo(nombre, dia, mes, anio) {
    var nombre = prompt("Ingrese su nombre por favor");
    var dia = prompt("Ingrese su día de nacimiento (ejemplo: '3')");
    var mes = prompt("Ingrese su mes de nacimiento (ejemplo: '5' o 'Mayo')");
    var anio = parseInt(prompt("Ingrese su año de nacimiento, (ejemplo: '1993')"));
    if ((dia>20 && (mes=="Marzo"||mes==3))||(dia<20 && (mes=="Abril"||mes==4))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Aries, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>19 && (mes=="Abril"||mes==4))||(dia<21 && (mes=="Mayo"||mes==5))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Tauro, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>20 && (mes=="Mayo"||mes==5))||(dia<21 && (mes=="Junio"||mes==6))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Géminis, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>20 && (mes=="Junio"||mes==6))||(dia<23 && (mes=="Julio"||mes==7))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Cáncer, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>22 && (mes=="Julio"||mes==7))||(dia<23 && (mes=="Agosto"||mes==8))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Leo, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>22 && (mes=="Agosto"||mes==8))||(dia<23 && (mes=="Septiembre"||mes==9))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Virgo, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>22 && (mes=="Septiembre"||mes==9))||(dia<23 && (mes=="Octubre"||mes==10))){
        alert("Hola "+ nombre + ", tu signo zodiacal es libra, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>22 && (mes=="Octubre"||mes==10))||(dia<22 && (mes=="Noviembre"||mes==11))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Escorpio, y tenés " + (2023-anio) + " años de edad.");
    } else if((dia>21 && (mes=="Noviembre"||mes==11))||(dia<22 && (mes=="Diciembre"||mes==12))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Sagitario, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>21 && (mes=="Diciembre"||mes==12))||(dia<20 && (mes=="Enero"||mes==1))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Capricornio, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>19 && (mes=="Enero"||mes==1))||(dia<19 && (mes=="Febrero"||mes==2))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Acuario, y tenés " + (2023-anio) + " años de edad.");
    } else if ((dia>18 && (mes=="Febrero"||mes==2))||(dia<21 && (mes=="Marzo"||mes==3))){
        alert("Hola "+ nombre + ", tu signo zodiacal es Piscis, y tenés " + (2023-anio) + " años de edad.");
    } else{
        alert("hay algún dato erroneo, recarga e intenta nuevamente, gracias");
    }
}
signo();