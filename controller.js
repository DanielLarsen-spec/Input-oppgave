
function myFunction(){
    // I løkken så har jeg lagt inn 3 betingelser. 
    //Første er let i = 0; som er variablen index med verdien 0.
    //Dette er initialiseringen som oppretter start punktet i løkken.
    //Andre delen av løkken er betingelsen. Her sammenlikner jeg løkken.
    //Her forteller jeg at hvis variablen min er større enn indexen.
    // så skal indexen øke. i++.
    for(let i = 0; i < number.length; i++){
        //Her slår jeg sammen (+=) number og number i listeformat.
        //${number[i]}. Her henter jeg inn verdien fra variablen jeg har. [arrayet].
        number +=  `<li>${number[i]}</li>`

        console.log(number[i]);
}

        updateView()
}
//Ved hjelp av "this", så kaller jeg på denne funksjonen til å dytte inn tall
//fra input feltet.
function pushNum(x){
    number.push(x);

    updateView()
}


