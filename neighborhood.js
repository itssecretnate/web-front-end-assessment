console.log("Nate was here.");


let restaurantList = [ "Smokin Fins", "Jaker's Bar and Grill", "Copper Rill" ];

let randButton = document.getElementById('randButton');


const randomRestaurant = (event) => {
    event.preventDefault();
    
    alert(restaurantList[Math.floor(Math.random()*restaurantList.length)]);
}

randButton.addEventListener('click', randomRestaurant);