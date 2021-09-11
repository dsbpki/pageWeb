function totalDevengado(salarioMensual,comisiones,auxilioTransporte){     
    let valorDevengado = parseInt(salarioMensual)+parseInt(comisiones)+parseInt(auxilioTransporte);    
    return valorDevengado;
    
}

function primaServicios(valorDevengado){    
    let prima = parseInt(valorDevengado) *0.0833;

    return prima;

}

function interesesCesansantias(cesantia){
    
    let valorInteresCesantia = parseInt(cesantia)*0.12;

    return valorInteresCesantia;
}

function calcularVacaciones(salario){
    
    let vacaciones = parseInt(salario)*0.0416;

    return vacaciones;
}


function totalPrestaciones(){
    let salarioMensual = document.forms["form1"]["salario"].value;
    let comisiones = document.forms["form1"]["comisiones"].value;
    let auxilioTransporte = document.forms["form1"]["transporte"].value;
    let valorCesantia = document.forms["form1"]["cesantias"].value;
    
    let valorDevengado = totalDevengado(salarioMensual,comisiones,auxilioTransporte);
    

    let prima = primaServicios(valorDevengado); 
    let cesantias = primaServicios(valorDevengado); 
    let interesCesantia = interesesCesansantias(valorCesantia);
    let vacaciones = calcularVacaciones(salarioMensual);
    let total = prima+cesantias+interesCesantia+vacaciones;


    document.getElementById("total_devengado").value = valorDevengado;
    document.getElementById("prima_servicios").value = prima ;
    document.getElementById("cesantias").value = prima;
    document.getElementById("intereses_cesantias").value=interesCesantia;
    document.getElementById("vacaciones").value = vacaciones;
    document.getElementById("total_prestaciones").value= total;

}