(function(){
    const navbarEmail = document.querySelector('#navbarEmail');
    const desktopMenu = document.querySelector('#desktopMenu');
    
    const menuHamIcon = document.querySelector('#menuHamIcon');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    const iconCart = document.querySelector('#iconCart');
    const productDetail = document.querySelector('.product-detail');
    
    
    const getProducts = _ => {
        const productList = [];
        productList.push({
            name : 'Bike',
            price : 120,
            img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        });
        
        productList.push({
            name : 'SmartTV',
            price : 310,
            img : 'https://d500.epimg.net/cincodias/imagenes/2015/01/09/smarttv/1420823847_355968_1420823987_noticia_normal.jpg',
        });
        
        productList.push({
            name : 'Xbox series X',
            price : 250,
            img : 'https://st2.depositphotos.com/2769299/44194/i/450/depositphotos_441947390-stock-photo-ukraine-kharkov-06-january-2021.jpg'
        });
        
        let cardList = '';
        for(let product of productList){
            const productCard = `<div class="product-card">
            <img src="${product.img}" alt="">
            <div class="product-info">
            <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
            </div>
            <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
            </div>`;
            
            cardList += productCard;
        }
        const productListContainer = document.querySelector('#productList');
        productListContainer.innerHTML = cardList;
    }
    
    const toggleDesktopMenu = () => {
        const isProductDetailMenuInvisible = productDetail.classList.contains('invisible');
        if (!isProductDetailMenuInvisible) {
            toggleProductDetail();
        }
        desktopMenu.classList.toggle('invisible');
    }
    
    const toggleProductDetail = () => {
        const isDesktopMenuInvisible = desktopMenu.classList.contains('invisible');
        if (!isDesktopMenuInvisible) {
            toggleDesktopMenu();
        }
        
        const isMobileMenuInvisible = mobileMenu.classList.contains('invisible');
        if (!isMobileMenuInvisible) {
            toggleMobileMenu();
        }
        
        productDetail.classList.toggle('invisible');
    }
    
    const toggleMobileMenu = () => {
        const isProductDetailMenuInvisible = productDetail.classList.contains('invisible');
        if (!isProductDetailMenuInvisible) {
            toggleProductDetail();
        }
        
        mobileMenu.classList.toggle('invisible');
    }
    
    navbarEmail.addEventListener('click',toggleDesktopMenu);
    iconCart.addEventListener('click',toggleProductDetail);
    menuHamIcon.addEventListener('click',toggleMobileMenu);
    
    getProducts();
})();