function Run(){

    let first = document.getElementsByClassName('first1')
    let second = document.getElementsByClassName('first2');
    let third = document.getElementsByClassName('first3');

    let fourth = document.getElementsByClassName('first4')
    let fifth = document.getElementsByClassName('first5');
    let six = document.getElementsByClassName('first6');

    let mainmA;
    let blockS;
    let blockSA;
    let mainmS;

    if(document.getElementById("byte2").selected){
     mainmA = document.getElementById("mainmA").value;
    }
    else if (document.getElementById("kb2").selected){
         mainmA = document.getElementById("mainmA").value * 1024;
    }
    else if (document.getElementById("mb2").selected){
         mainmA = document.getElementById("mainmA").value * 1048576;
    }

    if(document.getElementById("byte3").selected){
         blockS = document.getElementById("blockS").value;
    }
    else if (document.getElementById("kb3").selected){
         blockS = document.getElementById("blockS").value * 1024;
    }
    else if (document.getElementById("mb3").selected){
         blockS = document.getElementById("blockS").value * 1048576;
    }

    if(document.getElementById("byte4").selected){
    mainmS = document.getElementById("mainmS").value;
    }
    else if (document.getElementById("kb4").selected){
        mainmS = document.getElementById("mainmS").value * 1024;
    }
    else if (document.getElementById("mb4").selected){
        mainmS = document.getElementById("mainmS").value * 1048576;
    }

    if(document.getElementById("byte5").selected){
        blockSA = document.getElementById("blockSA").value;
   }
   else if (document.getElementById("kb5").selected){
    blockSA = document.getElementById("blockSA").value * 1024;
   }
   else if (document.getElementById("mb5").selected){
    blockSA = document.getElementById("blockSA").value * 1048576;
   }

  


    //direct map

    let cashmemory = mainmA / blockS;

    let logCash = Math.log2(cashmemory);
    let offset = Math.log2(blockS)
    let tag = document.getElementById("adressS").value - logCash - offset;

         first[0].textContent = `${tag} Tag`;
         second[0].textContent = `${logCash} Index`;
         third[0].textContent = `${offset} Word`;

    //set ass  
   
    let blockindex = mainmS / (document.getElementById("wayS").value * blockSA);
    let logind = Math.log2(blockindex);
    let offsetas = Math.log2(blockSA);
    let tagsa = document.getElementById("adressA").value - logind - offsetas ;

    fourth[0].textContent = `${tagsa} Tag`;
    fifth[0].textContent = `${logind} Index`;
    six[0].textContent = `${offsetas} Word`;




    // if(document.getElementById("byte1").selected && document.getElementById("kb2").selected && document.getElementById("byte3").selected){
    //     let cashsize = (document.getElementById("mainmA").value * 1024) /document.getElementById("blockS").value
    //     let logCash = Math.log2(cashsize)
    //     let offset = Math.log2(document.getElementById("blockS").value)
    //     let tag = 32 - logCash - offset;


     
    //     first[0].textContent = `${tag} Tag`;
    //     second[0].textContent = `${logCash} Index`;
    //     third[0].textContent = `${offset} Word`;

    // }
    

    // if(document.getElementById("byte1").selected && document.getElementById("byte2").selected && document.getElementById("byte3").selected){
    //     let cashsize = (document.getElementById("mainmA").value) /document.getElementById("blockS").value
    //     let logCash = Math.log2(cashsize)
    //     let offset = Math.log2(document.getElementById("blockS").value)
    //     let tag = 32 - logCash - offset;


     
    //     first[0].textContent = `${tag} Tag`;
    //     second[0].textContent = `${logCash} Index`;
    //     third[0].textContent = `${offset} Word`;

    // }
    // if(document.getElementById("kb1").selected && document.getElementById("kb2").selected && document.getElementById("kb3").selected){
    //     let cashsize = (document.getElementById("mainmA").value * 1024) /document.getElementById("blockS").value * 1024
    //     let logCash = Math.log2(cashsize)
    //     let offset = Math.log2(document.getElementById("blockS").value)
    //     let tag = (32 * 1024) - logCash - offset;


     
    //     first[0].textContent = `${tag} Tag`;
    //     second[0].textContent = `${logCash} Index`;
    //     third[0].textContent = `${offset} Word`;

    // }


    
}