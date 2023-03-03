// document.getElementById('average').addEventListener('submit', function (event) {
//     event.preventDefault();
    
//     var cols = ['load', 'store', 'add'];

//     let first = document.getElementsByID("first1");
//     let second = document.getElementsByID("first2");
//     let third = document.getElementsByID("first3");
   
//     first.textContent = document.getElementById(cols[0]).value;
//     second.textContent = document.getElementById(cols[1]).value;
//     third.textContent = document.getElementById(cols[2]).value;


//   });




let first = document.getElementsByClassName('first1')
let second = document.getElementsByClassName('first2');
let third = document.getElementsByClassName('first3');
let fourth = document.getElementsByClassName('second1')
let fifth = document.getElementsByClassName('second2')
let six = document.getElementsByClassName('second3')
let seven = document.getElementsByClassName('third1')
let eight = document.getElementsByClassName('third2')
let nine = document.getElementsByClassName('third3')


function inHEX(){ 
    let hexa1 = parseInt(document.getElementById("load").value, 2).toString(16).toUpperCase();
    let hexa2 = parseInt(document.getElementById("add").value, 2).toString(16).toUpperCase();
    let hexa3 = parseInt(document.getElementById("store").value, 2).toString(16).toUpperCase();
        // first.textContent = hexa1;
        // second.textContent = hexa2;
        // third.textContent = hexa3;      
        
      let fullFirst = parseInt(hexa1.toString() + document.getElementById("loadI").value.toString());
      let fullSecond = parseInt(hexa2.toString() + document.getElementById("addI").value.toString());
      let fullThird = parseInt(hexa3.toString() + document.getElementById("storeI").value.toString());

      for(let i = 0 ; i < first.length; i++){
        first[i].textContent = fullFirst;
      }

      for(let i = 0; i <second.length;i++){
        second[i].textContent = fullSecond;
      }
      
      for(let i = 0; i < third.length; i++){
        third[i].textContent = fullThird;
      }

      // let valueforfirstli = document.getElementById("loadI").value;
      // let valueforsecondli = document.getElementById("addI").value;
      // let valueforthirdli = document.getElementById("storeI").value;

      let x1 = document.getElementsByClassName("valueLI1") 
      let x2 = document.getElementsByClassName("valueLI2") 
      let x3 = document.getElementsByClassName("valueLI3") 


      for (let i = 0; i < x1.length; i++){
        x1[i].value = document.getElementById("loadI").value;
      }
      
      for (let i = 0; i <x2.length;i++){
        x2[i].value = document.getElementById("addI").value;
      }
      
      for(let i = 0; i <x3.length;i++){
        x3[i].value = document.getElementById("storeI").value;
      }

      for(let i = 0; i < fourth.length;i++){
        fourth[i].textContent = document.getElementById("Vload").value;
      }

      for(let i = 0 ; i < fifth.length; i++){
        fifth[i].textContent = document.getElementById("Vadd").value;
      }

      for(let i = 0; i <six.length - 1  ;i++){
        six[i].textContent = document.getElementById("Vstore").value;
      }
      six[5].textContent = `000${(parseInt(document.getElementById("Vload").value) + parseInt(document.getElementById("Vadd").value)).toString(16).toUpperCase()}`;;



      seven[0].textContent = 300 + " -PC";  
      seven[1].textContent = 301 + " -PC";  
      seven[2].textContent = 301 + " -PC";  
      seven[3].textContent = 302 + " -PC";  
      seven[4].textContent = 302 + " -PC";  
      seven[5].textContent = 303 + " -PC";  


      
      const hexToDecimal = hex => parseInt(hex, 16);

      eight[0].textContent = "- AC";
      eight[1].textContent = document.getElementById("Vload").value +  "- AC";
      eight[2].textContent = document.getElementById("Vload").value +  "- AC";
      eight[3].textContent = `000${(parseInt(document.getElementById("Vload").value) + parseInt(document.getElementById("Vadd").value)).toString(16).toUpperCase()}- AC`;
      eight[4].textContent = `000${(parseInt(document.getElementById("Vload").value) + parseInt(document.getElementById("Vadd").value)).toString(16).toUpperCase()}- AC`;
      eight[5].textContent = `000${(parseInt(document.getElementById("Vload").value) + parseInt(document.getElementById("Vadd").value)).toString(16).toUpperCase()}- AC`;


      nine[0].textContent = fullFirst + " -IR";
      nine[1].textContent = fullFirst + " -IR";
      nine[2].textContent = fullSecond + " -IR";
      nine[3].textContent = fullSecond + " -IR";
      nine[4].textContent = fullThird + " -IR";
      nine[5].textContent = fullThird + " -IR";


    

}

// function GO(){
//       let fullFirst = hexa1.toString + document.getElementById("loadI").value.toString;
//       first.textContent = fullFirst;
// }
