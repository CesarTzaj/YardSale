const btnnemu = document.querySelector('.navbar-email');
const btnnemuPhone = document.querySelector('.menu');
const btnshopping_cart = document.querySelector('.navbar-shopping_cart');

const menuEmail = document.querySelector('.desktop-menu');
const menuPrincipal = document.querySelector('.navbar-left');
const product_detail = document.querySelector('.product-detail');
var cardsContainer = document.querySelector('.cards-container');

btnnemu.addEventListener('click', function(){agregarmenu(menuEmail)});
btnnemuPhone.addEventListener('click', function(){agregarmenu(menuPrincipal)});
btnshopping_cart.addEventListener('click', function(){agregarmenu(product_detail)});

function agregarmenu(menu){
    if(!menu.classList.contains('show')){
        menuEmail.classList.remove('show');
        product_detail.classList.remove('show');
        menuPrincipal.classList.remove('show');
    }
    menu.classList.toggle('show');
}

var productList = [];
productList.push({
    name: 'pantalla',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    shoppingCart: './icons/bt_add_to_cart.svg'
});
productList.push({
    name: 'computadora',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    shoppingCart: './icons/bt_add_to_cart.svg'
});
productList.push({
    name: 'laptop',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    shoppingCart: './icons/bt_add_to_cart.svg'
});
productList.push({
    name: 'bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    shoppingCart: './icons/bt_add_to_cart.svg'
});


function  productRender(ArrayProductos){
    for(product of ArrayProductos){
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.Image);

        const product_info = document.createElement('div');
        product_info.classList.add('product-info');

        const productDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        productPrice.innerText ='$ '+product.price;
        productName.innerText = product.name;
        productDiv.append(productPrice, productName);
        
        const shoppingCartFigure = document.createElement('figure');
        const imgShoppingCart = document.createElement('img');    

         imgShoppingCart.setAttribute('src', product.shoppingCart);
        shoppingCartFigure.appendChild(imgShoppingCart);
        product_info.append(productDiv, shoppingCartFigure);
        product_card.append(productImage, product_info);
         cardsContainer.appendChild(product_card);

    }
}
//  productRender(productList);
function ProductoRender(arralist){
    for(product of arralist){
        const htmlCards= `<div class="product-card">
        <img src=${product.Image} alt="">
        <div class="product-info">
        <div>
                <p>$ ${product.price}</p>
                <p>${product.name}</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
          </div>`;
          const  cardsContainers = document.querySelector('.cards-container');
          cardsContainers.innerHTML += htmlCards;
    }
}
ProductoRender(productList);
// for(let i=0; i<productList.length; i++){
//     console.log(productList[i]);
//     console.log(productList.name);
// }
// for(productos of productList){
//     console.log(productos.name)
// }
// for(productos in productList){
//     console.log(productos)
// }

var frutas = ['manzanas','peras','plantano','fresa'];
frutas.push('uvas') // agrega un elemento en la ultimo posicion
frutas.pop(); // eliminia el ultimo elemento
frutas.unshift('mango'); // agrega un elemento en su primera posicion
frutas.shift(); // elimina el primer elemento en el array
console.log(frutas.indexOf('manzanas'))

frutas.length
const items =[ 
    {name: 'Bike',    price: 10 },
    {name: 'Tvi',     price: 20 },
    {name: 'Album',   price: 10  },
    {name: 'Book',    price: 20   },
    {name: 'Phone',   price: 50 }
];
// const filteredItems = items.filter(function(item){
//     return item.price<=100;
// });
 const filteredItems = items.filter((item)=>{
     return item.price<=100;
  });
 const itemsNmae = items.map((item)=> item.name);
 const itemFind = items.find((item) => item.name=="Book");
//  items.forEach((item) => console.log(item.name));
 const hasInexpensiveItems = items.some((item) =>{
     return item.price <=100;
 });
 const array1 = [1, 2, 3, 4];
 const hasexpensiveItems = items.every((item) => item.price == 100);
const total = items.reduce(( currentTotal, item) =>   item.price + currentTotal ,0); //para hacer sumas
const includeten = array1.includes(10);

// console.log(items);
//  console.log(filteredItems);
// console.log(itemsNmae)
// console.log(itemFind)
// console.log(hasInexpensiveItems)
// console.log(hasexpensiveItems)
// console.log(total)
// console.log(includeten)