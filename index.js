let Uname = document.getElementById('name');
let cardsCon = document.getElementById('cardCon')
let des = document.getElementById('descraption');
let file = document.getElementById('myFile');
let add = document.getElementById("sub");
let cd = document.getElementById('cd');

add.onclick =() =>{
    let newCard = cd.cloneNode(true);
    newCard.style.display ="block";
    let nameValue =Uname.value;
    let desValue = des.Value;
newCard.querySelector("h3").innerText = nameValue;
newCard.querySelector("p").innerText = desValue;

    if (file.files && file.files[0]){
        var reader = new FileReader();
        reader.onload = function (e){
            newCard.querySelector("img").setAttribute("src", e.target.result);
            cardsCon.appendChild(newCard);
        };
        reader.readAsDataURL(file.files[0]);
      } else {
        cardsCon.appendChild(newCard);
      }; 
    


    }  
   
  
