const d = document;

 const $colorContainer= d.getElementsByClassName("color"),
       $numContainer= d.getElementById("number");

 const colorClass =[
    'bi bi-suit-club-fill',
    'bi bi-suit-diamond-fill',
    'bi bi-suit-heart-fill',
    'bi bi-suit-spade-fill'
]

 const randomCardGenerator = () =>{

    let colorNumber = Math.floor(Math.random()*4)
    let cardNumber = Math.ceil(Math.random()*12);

    cardNumber === 1 ?cardNumber="A"
    :cardNumber === 10 ?cardNumber = "J"
    :cardNumber === 11 ?cardNumber= "Q"
    :cardNumber === 12 ?cardNumber="K"
    :cardNumber;
       
  
    for (element of $colorContainer){
        let newColor = d.createElement("i")
        newColor.classList=`${colorClass[colorNumber]}`;
        element.appendChild(newColor)
        console.log(colorNumber);
        console.log(colorClass[colorNumber]);
    } 

    $numContainer.innerText= cardNumber


 };

 window.onload = function () {
    randomCardGenerator()
 }