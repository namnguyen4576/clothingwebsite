// shop.js

function addToCart(productId) {
    // Define product information
    var productInfo = {
        id: productId,
        name: "",
        price: 0,
        quantity: 1
        // Add other product information as needed
    };

    // Check the productId and set productInfo accordingly
    switch (productId) {
        case 1:
            productInfo.name = "Short Sleeve Shirt 1";
            productInfo.price = 105;
            break;
        case 2:
            productInfo.name = "Short Sleeve Shirt 2";
            productInfo.price = 120;
            break;
        case 3:
            productInfo.name = "Short Sleeve Shirt 3";
            productInfo.price = 99;
            break;
        case 4:
            productInfo.name = "Short Sleeve Shirt 4";
            productInfo.price = 111;
            break;
        case 5:
            productInfo.name = "Floral Polo";
            productInfo.price = 146;
            break;
        case 6:
            productInfo.name = "Velvet Shirts";
            productInfo.price = 80;
            break;
        case 7:
            productInfo.name = "Floral Pants";
            productInfo.price = 145;
            break;
        case 8:
            productInfo.name = "Chen Sweater";
            productInfo.price = 200;
            break;
        case 9:
            productInfo.name = "Blue Long-Sleeved Shirt 1";
            productInfo.price = 123;
            break;
        case 10:
            productInfo.name = "Gray Long-Sleeved Shirt";
            productInfo.price = 100;
            break;
        case 11:
            productInfo.name = "White Long-Sleeved Shirt";
            productInfo.price = 170;
            break;
        case 12:
            productInfo.name = "Last Maniac Resort Ss Shirt";
            productInfo.price = 230;
            break;
        case 13:
            productInfo.name = "Blue Long-Sleeved Shirt 2";
            productInfo.price = 111;
            break;
        case 14:
            productInfo.name = "Short Pants";
            productInfo.price = 160;
            break;
        case 15:
            productInfo.name = "Brown Long-Sleeved Shirt";
            productInfo.price = 212;
            break;
        case 16:
            productInfo.name = "Black Short-Sleeved Shirt";
            productInfo.price = 100;
            break;

        // Add more cases for each product
        // ...

        default:
            // Handle the case where productId doesn't match any known product
            console.error("Unknown product ID:", productId);
            return;
    }

    // Retrieve the cart from localStorage or create an empty one
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    var existingProduct = cart.find(item => item && item.id === productId);

    // If the product exists, increment the quantity; otherwise, add it to the cart
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(productInfo);
    }

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var existingProduct = cart.find(item => item && item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(productInfo);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart.html page
    window.location.href = '';
}
