function totalDevengado(){
    let salarioMensual = document.forms["form1"]["salario"].value;
    let comisiones = document.forms["form1"]["comisiones"].value;
    let auxilioTransporte = document.forms["form1"]["transporte"].value;
    let valorDevengado = parseInt(salarioMensual)+parseInt(comisiones)+parseInt(auxilioTransporte);
    
    return valorDevengado;
}

function primaServicios(){
    let valorDevengado = totalDevengado();
    let prima = parseInt(valorDevengado) *0.0833;

    return prima;

}

function interesesCesansantias(){
    let valorCesantia = document.forms["form1"]["cesantias"].value;
    let valorInteresCesantia = parseInt(valorCesantia)*0.12;

    return valorInteresCesantia;
}

function calcularVacaciones(){
    let salario = document.forms["form1"]["salario"].value;
    let vacaiones = parseInt(salario)*0.0416;

    return vacaiones;
}

function totalPrestaciones(){
    let salarioDevengado = totalDevengado();
    let prima = primaServicios();
    let cesantias = primaServicios();
    let interesCesantia = interesesCesansantias();
    let vacaciones = calcularVacaciones();
    let total = prima+cesantias+interesCesantia+vacaciones;

    document.getElementById("total_devengado").value = salarioDevengado;
    document.getElementById("prima_servicios").value = prima ;
    document.getElementById("cesantias").value = prima;
    document.getElementById("intereses_cesantias").value=interesCesantia;
    document.getElementById("vacaciones").value = vacaciones;

    document.getElementById("total_prestaciones").value= total;

}