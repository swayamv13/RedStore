function addToCartFromDetails() {
    const name = document.getElementById("product-name").innerText;
    const price = parseFloat(document.getElementById("product-price").innerText);
    addToCart(name, price);
  }

  function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(p => p.name === name);
    
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
    updateCartCount();
  }

