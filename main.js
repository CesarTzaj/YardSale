const btnnemu = document.querySelector('.navbar-email');
const btnnemuPhone = document.querySelector('.menu');
const btnshopping_cart = document.querySelector('.navbar-shopping_cart');
const btnproductDetailClose = document.querySelector('.product-detail-close');

const menuEmail = document.querySelector('.desktop-menu');
const menuPrincipal = document.querySelector('.navbar-left');
const shoppingCartDetails = document.querySelector('.shoppingCardDetails');
const productDetailAside = document.querySelector('.productDetailAside');
const mainfilter = document.querySelector('main')
var cardsContainer = document.querySelector('.cards-container');

btnnemu.addEventListener('click', function(){agregarmenu(menuEmail)});
btnnemuPhone.addEventListener('click', function(){agregarmenu(menuPrincipal)});
btnshopping_cart.addEventListener('click', function(){agregarmenu (shoppingCartDetails)});
btnproductDetailClose.addEventListener('click', cerrarProductDetail);

function agregarmenu(menu){
    if(!menu.classList.contains('show')){
        menuEmail.classList.remove('show');
        shoppingCartDetails.classList.remove('show');
        menuPrincipal.classList.remove('show');
        productDetailAside.classList.remove('show');   
        mainfilter.classList.remove('show')
    }
    menu.classList.toggle('show');
}

function sidemenu(){
    menuEmail.classList.remove('show');
    shoppingCartDetails.classList.remove('show');
    menuPrincipal.classList.remove('show');
    productDetailAside.classList.add('show')
    mainfilter.classList.add('show')
}

 function cerrarProductDetail(){
     productDetailAside.classList.remove('show');
     mainfilter.classList.remove('show')
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
//primera forma de poder ingresar la tarjeta de html

function  productRender(ArrayProductos){
    for(product of ArrayProductos){
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.Image);

        productImage.addEventListener('click', sidemenu)

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
  productRender(productList);
