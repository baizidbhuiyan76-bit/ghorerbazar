/* =========================================================
                    PRODUCT DATABASE
========================================================= */

const products = [

    {
        id: 1,
        name: "Premium Organic Honey",
        category: "Honey & Organic",
        price: 650,
        oldPrice: 800,
        discount: "19% OFF",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 2,
        name: "Pure Basmati Rice",
        category: "Rice & Grains",
        price: 420,
        oldPrice: 500,
        discount: "16% OFF",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 3,
        name: "Premium Cashew Nuts",
        category: "Nuts & Dry Fruits",
        price: 950,
        oldPrice: 1100,
        discount: "14% OFF",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 4,
        name: "Extra Virgin Olive Oil",
        category: "Cooking Oil",
        price: 890,
        oldPrice: 1050,
        discount: "15% OFF",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 5,
        name: "Organic Green Tea",
        category: "Tea & Coffee",
        price: 380,
        oldPrice: 450,
        discount: "15% OFF",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 6,
        name: "Natural Almonds",
        category: "Nuts & Dry Fruits",
        price: 720,
        oldPrice: 850,
        discount: "15% OFF",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 7,
        name: "Premium Spice Mix",
        category: "Spices",
        price: 290,
        oldPrice: 350,
        discount: "17% OFF",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 8,
        name: "Natural Coconut Oil",
        category: "Cooking Oil",
        price: 540,
        oldPrice: 650,
        discount: "17% OFF",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=85"
    }

];


/* =========================================================
                      LOCAL STORAGE
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("gb_cart") || "[]"
    );

let wishlist =
    JSON.parse(
        localStorage.getItem("gb_wishlist") || "[]"
    );


/* =========================================================
                        SHORTCUT
========================================================= */

const $ = selector =>
    document.querySelector(selector);

const $$ = selector =>
    document.querySelectorAll(selector);


/* =========================================================
                         SAVE DATA
========================================================= */

function saveData(){

    localStorage.setItem(
        "gb_cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "gb_wishlist",
        JSON.stringify(wishlist)
    );

}


/* =========================================================
                           TOAST
========================================================= */

function toast(message){

    const toastBox = $("#toast");

    toastBox.textContent = message;

    toastBox.classList.add("show");

    setTimeout(() => {

        toastBox.classList.remove("show");

    }, 2200);

}


/* =========================================================
                     PRODUCT CARD
========================================================= */

function createProductCard(product){

    const wished =
        wishlist.includes(product.id);

    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="discount-tag">
                    ${product.discount}
                </span>


                <button
                    class="product-wish ${wished ? "active" : ""}"
                    data-wish="${product.id}"
                >

                    <i
                        class="fa-${wished ? "solid" : "regular"} fa-heart"
                    ></i>

                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>


                <h3>
                    ${product.name}
                </h3>


                <div class="rating">

                    ★★★★★

                    <span>
                        (${product.rating})
                    </span>

                </div>


                <div class="price-row">

                    <b class="price">
                        ৳${product.price}
                    </b>

                    <span class="old-price">
                        ৳${product.oldPrice}
                    </span>

                </div>


                <button
                    class="add-cart"
                    data-add="${product.id}"
                >

                    <i class="fa-solid fa-cart-plus"></i>

                    Add to Cart

                </button>

            </div>

        </article>

    `;

}


/* =========================================================
                     RENDER HOME
========================================================= */

function renderHome(){

    $("#homeProducts").innerHTML =
        products
        .slice(0,4)
        .map(createProductCard)
        .join("");


    $("#newProducts").innerHTML =
        products
        .slice(4)
        .map(createProductCard)
        .join("");

}


/* =========================================================
                     RENDER SHOP
========================================================= */

function renderShop(list = products){

    $("#shopProducts").innerHTML =

        list.length

        ?

        list
        .map(createProductCard)
        .join("")

        :

        `

            <div class="empty-state">

                No products found.

            </div>

        `;


    $("#productResultText").textContent =
        `${list.length} Products`;

}


/* =========================================================
                 CATEGORY PAGE
========================================================= */

function renderCategories(){

    const categories = [

        [
            "Honey & Organic",
            "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=85"
        ],

        [
            "Rice & Grains",
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=85"
        ],

        [
            "Nuts & Dry Fruits",
            "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=700&q=85"
        ],

        [
            "Spices",
            "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=700&q=85"
        ],

        [
            "Cooking Oil",
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85"
        ],

        [
            "Tea & Coffee",
            "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=700&q=85"
        ]

    ];


    $("#categoryPageGrid").innerHTML =

        categories
        .map(category => `

            <a
                href="#shop"
                class="category-card"
            >

                <img
                    src="${category[1]}"
                    alt="${category[0]}"
                >

                <h3>
                    ${category[0]}
                </h3>

                <small>
                    Explore Products →
                </small>

            </a>

        `)
        .join("");

}


/* =========================================================
                      WISHLIST
========================================================= */

function renderWishlist(){

    const list =
        products.filter(product =>
            wishlist.includes(product.id)
        );


    $("#wishlistProducts").innerHTML =

        list.length

        ?

        list.map(createProductCard).join("")

        :

        `

            <div class="empty-state">

                <h3>
                    Your wishlist is empty.
                </h3>

                <br>

                <a
                    href="#shop"
                    class="primary-button"
                >
                    Browse Products
                </a>

            </div>

        `;

}


/* =========================================================
                        CART
========================================================= */

function renderCart(){

    const count =
        cart.reduce(
            (total,item) =>
                total + item.qty,
            0
        );


    const total =
        cart.reduce(
            (total,item) =>
                total +
                item.price *
                item.qty,
            0
        );


    $("#cartCount").textContent =
        count;

    $("#wishlistCount").textContent =
        wishlist.length;

    $("#drawerTotal").textContent =
        `৳${total}`;


    /* DRAWER */

    if(!cart.length){

        $("#drawerItems").innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-bag-shopping"></i>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add products to continue.
                </p>

            </div>

        `;

    }else{

        $("#drawerItems").innerHTML =

            cart
            .map((item,index) => `

                <div class="cart-row">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >


                    <div class="cart-row-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ৳${item.price}
                        </p>


                        <div class="qty-control">

                            <button
                                data-dec="${index}"
                            >
                                −
                            </button>

                            <span>
                                ${item.qty}
                            </span>

                            <button
                                data-inc="${index}"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-btn"
                        data-remove="${index}"
                    >

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            `)
            .join("");

    }


    /* CART PAGE */

    if(!cart.length){

        $("#cartPageItems").innerHTML = `

            <div class="empty-state">

                <h3>
                    Your cart is empty
                </h3>

                <br>

                <a
                    href="#shop"
                    class="primary-button"
                >
                    Continue Shopping
                </a>

            </div>

        `;

    }else{

        $("#cartPageItems").innerHTML =

            cart
            .map((item,index) => `

                <div class="cart-row">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >


                    <div class="cart-row-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ৳${item.price}
                        </p>


                        <div class="qty-control">

                            <button
                                data-dec="${index}"
                            >
                                −
                            </button>

                            <span>
                                ${item.qty}
                            </span>

                            <button
                                data-inc="${index}"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <b>
                        ৳${item.price * item.qty}
                    </b>


                    <button
                        class="remove-btn"
                        data-remove="${index}"
                    >

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            `)
            .join("");

    }


    /* SUMMARY */

    $("#pageSubtotal").textContent =
        `৳${total}`;


    const delivery =
        total > 0 ? 60 : 0;


    $("#pageDelivery").textContent =
        `৳${delivery}`;


    $("#pageTotal").textContent =
        `৳${total + delivery}`;


    /* CHECKOUT */

    $("#checkoutTotal").textContent =
        `৳${total + delivery}`;


    if(cart.length){

        $("#checkoutItems").innerHTML =

            cart
            .map(item => `

                <div>

                    <span>
                        ${item.name}
                        × ${item.qty}
                    </span>

                    <b>
                        ৳${item.price * item.qty}
                    </b>

                </div>

            `)
            .join("");

    }else{

        $("#checkoutItems").innerHTML = `

            <p class="empty-state">
                No products in cart.
            </p>

        `;

    }

}


/* =========================================================
                     ADD TO CART
========================================================= */

function addToCart(id){

    const product =
        products.find(
            item => item.id === id
        );


    if(!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if(existing){

        existing.qty++;

    }else{

        cart.push({

            ...product,

            qty:1

        });

    }


    saveData();

    renderCart();

    toast(
        `${product.name} added to cart`
    );

    openDrawer();

}


/* =========================================================
                    CHANGE QUANTITY
========================================================= */

function changeQuantity(index,amount){

    if(!cart[index]) return;


    cart[index].qty += amount;


    if(cart[index].qty <= 0){

        cart.splice(index,1);

    }


    saveData();

    renderCart();

}


/* =========================================================
                    REMOVE PRODUCT
========================================================= */

function removeFromCart(index){

    cart.splice(index,1);

    saveData();

    renderCart();

    toast(
        "Product removed from cart"
    );

}


/* =========================================================
                     WISHLIST
========================================================= */

function toggleWishlist(id){

    const index =
        wishlist.indexOf(id);


    if(index >= 0){

        wishlist.splice(index,1);

        toast(
            "Removed from wishlist"
        );

    }else{

        wishlist.push(id);

        toast(
            "Added to wishlist"
        );

    }


    saveData();

    renderHome();

    renderShop(
        getFilteredProducts()
    );

    renderWishlist();

}


/* =========================================================
                 CART DRAWER OPEN
========================================================= */

function openDrawer(){

    $("#cartDrawer")
        .classList
        .add("open");


    $("#overlay")
        .classList
        .add("open");


    document.body
        .classList
        .add("no-scroll");

}


/* =========================================================
                CART DRAWER CLOSE
========================================================= */

function closeDrawer(){

    $("#cartDrawer")
        .classList
        .remove("open");


    $("#overlay")
        .classList
        .remove("open");


    document.body
        .classList
        .remove("no-scroll");

}


/* =========================================================
                       SEARCH
========================================================= */

function getFilteredProducts(){

    let list =
        [...products];


    const search =
        $("#searchInput")
        .value
        .trim()
        .toLowerCase();


    const category =
        $("#categoryFilter").value;


    const sort =
        $("#sortFilter").value;


    if(search){

        list =
            list.filter(product =>

                product.name
                .toLowerCase()
                .includes(search)

                ||

                product.category
                .toLowerCase()
                .includes(search)

            );

    }


    if(
        category &&
        category !== "all"
    ){

        list =
            list.filter(
                product =>
                product.category === category
            );

    }


    if(sort === "low"){

        list.sort(
            (a,b) =>
            a.price - b.price
        );

    }


    if(sort === "high"){

        list.sort(
            (a,b) =>
            b.price - a.price
        );

    }


    if(sort === "rating"){

        list.sort(
            (a,b) =>
            b.rating - a.rating
        );

    }


    return list;

}


/* =========================================================
                  PRODUCT DETAILS
========================================================= */

function renderProductDetails(id){

    const product =
        products.find(
            item => item.id === id
        );


    if(!product) return;


    $("#productDetail").innerHTML = `

        <div class="detail-grid">

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div class="detail-info">

                <span class="product-category">
                    ${product.category}
                </span>


                <h1>
                    ${product.name}
                </h1>


                <div class="rating">

                    ★★★★★

                    <span>
                        ${product.rating}/5
                    </span>

                </div>


                <div class="detail-price">
                    ৳${product.price}
                </div>


                <p>

                    Premium quality
                    ${product.category.toLowerCase()}
                    product selected for freshness
                    and everyday family use.

                    Carefully packed for safe delivery.

                </p>


                <div class="quantity">

                    <button id="detailMinus">
                        −
                    </button>

                    <span id="detailQty">
                        1
                    </span>

                    <button id="detailPlus">
                        +
                    </button>

                </div>


                <button
                    class="primary-button"
                    id="detailAdd"
                >

                    <i class="fa-solid fa-cart-plus"></i>

                    Add To Cart

                </button>

            </div>

        </div>

    `;


    let quantity = 1;


    $("#detailMinus").onclick = () => {

        quantity =
            Math.max(
                1,
                quantity - 1
            );

        $("#detailQty")
            .textContent =
            quantity;

    };


    $("#detailPlus").onclick = () => {

        quantity++;

        $("#detailQty")
            .textContent =
            quantity;

    };


    $("#detailAdd").onclick = () => {

        for(
            let i = 0;
            i < quantity;
            i++
        ){

            addToCart(product.id);

        }

    };

}


/* =========================================================
                       ROUTING
========================================================= */

function showPage(id){

    $$(".page")
        .forEach(page => {

            page.classList
                .remove("active");

        });


    const page =
        document.getElementById(id);


    if(page){

        page.classList
            .add("active");

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });


    if(id === "shop"){

        renderShop(
            getFilteredProducts()
        );

    }


    if(id === "wishlist-page"){

        renderWishlist();

    }


    if(id === "cart-page"){

        renderCart();

    }


    if(id === "checkout"){

        renderCart();

    }

}


/* =========================================================
                     HASH ROUTING
========================================================= */

function route(){

    let id =
        location.hash
        .replace("#","");


    if(!id){

        id = "home";

    }


    if(
        id.startsWith("product-")
    ){

        showPage("product-page");

        renderProductDetails(
            Number(
                id.split("-")[1]
            )
        );

        return;

    }


    const aliases = {

        categories:
            "categories-page",

        wishlist:
            "wishlist-page"

    };


    showPage(
        aliases[id] || id
    );

}


window.addEventListener(
    "hashchange",
    route
);


/* =========================================================
                  CLICK EVENTS
========================================================= */

document.addEventListener(
    "click",
    event => {


        /* ADD CART */

        const add =
            event.target.closest(
                "[data-add]"
            );


        if(add){

            addToCart(
                Number(
                    add.dataset.add
                )
            );

            return;

        }


        /* WISHLIST */

        const wish =
            event.target.closest(
                "[data-wish]"
            );


        if(wish){

            toggleWishlist(
                Number(
                    wish.dataset.wish
                )
            );

            return;

        }


        /* PLUS */

        const inc =
            event.target.closest(
                "[data-inc]"
            );


        if(inc){

            changeQuantity(
                Number(
                    inc.dataset.inc
                ),
                1
            );

            return;

        }


        /* MINUS */

        const dec =
            event.target.closest(
                "[data-dec]"
            );


        if(dec){

            changeQuantity(
                Number(
                    dec.dataset.dec
                ),
                -1
            );

            return;

        }


        /* REMOVE */

        const remove =
            event.target.closest(
                "[data-remove]"
            );


        if(remove){

            removeFromCart(
                Number(
                    remove.dataset.remove
                )
            );

            return;

        }

    }
);


/* =========================================================
                    HEADER BUTTONS
========================================================= */

$("#cartButton").onclick =
    openDrawer;


$("#closeCart").onclick =
    closeDrawer;


$("#overlay").onclick =
    closeDrawer;


$("#wishlistButton").onclick =
    () => {

        location.hash =
            "wishlist-page";

    };


$("#accountButton").onclick =
    () => {

        location.hash =
            "account";

    };


$("#categoryButton").onclick =
    () => {

        location.hash =
            "categories-page";

    };


/* =========================================================
                         SEARCH
========================================================= */

$("#searchInput")
.addEventListener(
    "input",
    () => {

        if(
            location.hash !== "#shop"
        ){

            location.hash =
                "shop";

        }else{

            renderShop(
                getFilteredProducts()
            );

        }

    }
);


$("#searchButton").onclick =
    () => {

        location.hash =
            "shop";

        renderShop(
            getFilteredProducts()
        );

    };


/* =========================================================
                      FILTERS
========================================================= */

$("#categoryFilter")
.onchange = () => {

    renderShop(
        getFilteredProducts()
    );

};


$("#sortFilter")
.onchange = () => {

    renderShop(
        getFilteredProducts()
    );

};


$("#clearFilters")
.onclick = () => {

    $("#categoryFilter")
        .value = "all";

    $("#sortFilter")
        .value = "default";

    $("#searchInput")
        .value = "";

    renderShop();

};


/* =========================================================
                      NEWSLETTER
========================================================= */

$("#newsletterForm")
.onsubmit = event => {

    event.preventDefault();

    toast(
        "Thanks! You are subscribed."
    );

    event.target.reset();

};


/* =========================================================
                       CONTACT
========================================================= */

$("#contactForm")
.onsubmit = event => {

    event.preventDefault();

    toast(
        "Message sent successfully."
    );

    event.target.reset();

};


/* =========================================================
                         LOGIN
========================================================= */

$("#loginForm")
.onsubmit = event => {

    event.preventDefault();

    toast(
        "Demo login successful."
    );

    setTimeout(() => {

        location.hash =
            "account";

    },500);

};


/* =========================================================
                       REGISTER
========================================================= */

$("#registerForm")
.onsubmit = event => {

    event.preventDefault();

    toast(
        "Account created successfully."
    );

    setTimeout(() => {

        location.hash =
            "account";

    },500);

};


/* =========================================================
                       CHECKOUT
========================================================= */

$("#checkoutForm")
.onsubmit = event => {

    event.preventDefault();


    if(!cart.length){

        toast(
            "Your cart is empty."
        );

        location.hash =
            "shop";

        return;

    }


    const orderNumber =
        "GB-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(
            1000 +
            Math.random() * 9000
        );


    localStorage.setItem(
        "gb_last_order",
        orderNumber
    );


    cart = [];


    saveData();

    renderCart();


    toast(
        "Order placed: " +
        orderNumber
    );


    setTimeout(() => {

        location.hash =
            "tracking";

    },800);

};


/* =========================================================
                     ORDER TRACKING
========================================================= */

$("#trackingButton")
.onclick = () => {

    const value =
        $("#trackingInput")
        .value
        .trim();


    if(!value){

        $("#trackingResult")
        .innerHTML = `

            <div class="track-status">

                Please enter an order number.

            </div>

        `;

        return;

    }


    $("#trackingResult")
    .innerHTML = `

        <div class="track-status">

            <strong>
                Order ${value}
            </strong>

            <p style="margin-top:8px">

                ✓ Order confirmed

                &nbsp; → &nbsp;

                ✓ Packed

                &nbsp; → &nbsp;

                <b>
                    Delivery in progress
                </b>

            </p>

        </div>

    `;

};


/* =========================================================
                    FLASH SALE TIMER
========================================================= */

let saleTime =
    2 * 24 * 60 * 60
    +
    12 * 60 * 60
    +
    45 * 60
    +
    20;


setInterval(() => {


    const days =
        Math.floor(
            saleTime / 86400
        );


    const hours =
        Math.floor(
            saleTime % 86400 / 3600
        );


    const minutes =
        Math.floor(
            saleTime % 3600 / 60
        );


    const seconds =
        saleTime % 60;


    $("#days").textContent =
        String(days)
        .padStart(2,"0");


    $("#hours").textContent =
        String(hours)
        .padStart(2,"0");


    $("#minutes").textContent =
        String(minutes)
        .padStart(2,"0");


    $("#seconds").textContent =
        String(seconds)
        .padStart(2,"0");


    if(saleTime > 0){

        saleTime--;

    }

},1000);


/* =========================================================
                       INITIALIZE
========================================================= */

renderHome();

renderCategories();

renderShop();

renderCart();

route();