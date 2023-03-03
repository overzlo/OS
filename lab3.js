function Cashe(){




    let eat =document.createElement("p");

    // eat.textContent = (document.getElementById("casheA").value * document.getElementById("casheH")) + ((document.getElementById("mainH").value * (1 - document.getElementById("casheH").value)) *(document.getElementById("casheA").value + document.getElementById("mainA").value)) +(((1-document.getElementById("casheH").value) * (1-document.getElementById("mainH"))) (document.getElementById("casheA").value + document.getElementById("mainA").value + document.getElementById("diskA").value) )



    let first = document.getElementById("casheA").value * document.getElementById("cashH").value;
    let second =  ((document.getElementById("mainH").value * (1 - document.getElementById("cashH").value).toFixed(1)))
    let third = (parseFloat(document.getElementById("casheA").value) + parseFloat(document.getElementById("mainmA").value));
    let fourth = (((1-document.getElementById("cashH").value).toFixed(1))) * ((1-document.getElementById("mainH").value).toFixed(1)) 
    let fifth = (parseFloat(document.getElementById("casheA").value) + parseFloat(document.getElementById("mainmA").value) + parseFloat(document.getElementById("diskA").value));

    eat = (first + (second*third) + (fourth*fifth)).toFixed(1);
    document.getElementById("answer").textContent = eat;

}