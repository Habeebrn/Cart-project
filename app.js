
// step : 1 inetiante the varibles

let openShopping = document.querySelector(".shopping") ;
let closeShopping = document.querySelector(".closeShopping") ;
let list = document.querySelector(".list")
let listCard = document.querySelector(".listCard") ;
let body = document.querySelector("body") ;
let total = document.querySelector(".total") ;
let quantity = document.querySelector(".quantity") ;


// step : 2 set up hide and show card ( cart )

openShopping.addEventListener("click", ()=> {
    body.classList.add("active") ;
}) 
closeShopping.addEventListener("click", ()=> {
    body.classList.remove("active") ;
})



// step : 3 creat products array (main product array store items)

let products = [
    {
        id : "1",
        name: "Product name 1",
        image: "1.png",
        price: 11000

    }, 
    {
        id : "2",
        name: "Product name 2",
        image: "2.png",
        price: 120000

    },  
    {
        id : "3",
        name: "Product name 3",
        image: "3.png",
        price: 130000

    }, 
    {
        id : "4",
        name: "Product name 4",
        image: "4.png",
        price: 140000

    }, 
    {
        id : "5",
        name: "Product name 5",
        image: "5.png",
        price: 150000

    }, 
    {
        id : "6",
        name: "Product name 6",
        image: "6.png",
        price: 160000

    }, 

]

// step : 4 creat list cards array (array for storing )

let listCards = [
    
] ;

// step : 5 initApp function to show the products from array to newDiv div (show items on list)

function initApp () {

    products.forEach ((value, key ) => {


        let newDiv = document.createElement('div') ;
        newDiv.classList.add("item") ;
        newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title"> ${value.name}</title>
            <div class="price"> ${value.price.toLocaleString()} </div>
            <button onclick="addToCard(${key})"> Add To Card </button>

        `
        
        list.appendChild(newDiv)
    })
}

initApp ()

// step : 6 addToCard function (add to card the list items)

    function addToCard (key) {

        if (listCards[key] == null) {
            listCards[key] = products[key] ;
            listCards[key].quantity = 1 ;
        }
        reloadCard () ;

    }

// step : 7 add values to the card (start to add list item to the cart)


    function reloadCard () {
        listCard.innerHTML = "" ;
        let count = 0 ;
        let totalPrice = 0 ;
        listCards.forEach((value, key) => {
            totalPrice = totalPrice + value.price ;
            count = count + value.quantity;

            if (value != null) {
                let newDiv = document.createElement("li") ;
                newDiv.innerHTML = `
                    <div> <img src="image/${value.image}"/></div>
                    <div> ${value.name} </div>
                    <div> ${value.price.toLocaleString()} </div>
                    <div>
                    
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})"> - </button>
                    <div class="count"> ${value.quantity} </div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})"> + </button>
                    </div>
                    `;

                 listCard.appendChild(newDiv) ;

              }

            })

        total.innerText = totalPrice.toLocaleString() ;
        quantity.innerText = count ;

    }

    // step : 8 add functionality to quantity button , add and reduct and remove with changeQuantity function

    function changeQuantity (key, quantity) {
        if ( quantity == 0) {
            delete listCards[key] ;

        } else {
            listCards[key].quantity = quantity ;
            listCards[key].price = quantity * products[key].price;
        }

        reloadCard ()
    }




    

  



