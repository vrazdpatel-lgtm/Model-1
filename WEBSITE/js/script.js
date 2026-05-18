console.log("Fashion Hub Website Loaded");

function welcomeMessage(){
    alert("Welcome To Fashion Hub");
}

const products = [
    {
        id: 1,
        title: 'Essential Cotton Tee',
        price: 45.00,
        img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Crafted from 100% premium organic cotton, our Essential Tee offers softness, durability, and breathability.',
        sizes: ['Small','Medium','Large','X-Large']
    },
    {
        id: 2,
        title: 'Classic Denim Jeans',
        price: 120.00,
        img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Timeless denim with a modern cut and reliable comfort.',
        sizes: ['30','31','32','33','34']
    },
    {
        id: 3,
        title: 'Minimalist Jacket',
        price: 180.00,
        img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'A clean, contemporary jacket for layering.',
        sizes: ['S','M','L','XL']
    },
    {
        id: 4,
        title: 'Merino Wool Sweater',
        price: 95.00,
        img: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Lightweight merino wool for warmth without bulk.',
        sizes: ['S','M','L']
    },
    {
        id: 5,
        title: 'Tailored Suit Jacket',
        price: 250.00,
        img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Expertly tailored jacket with a refined silhouette.',
        sizes: ['38','40','42','44']
    },
    {
        id: 6,
        title: 'Silk Slip Dress',
        price: 150.00,
        img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: 'Elegant silk slip dress with a smooth drape.',
        sizes: ['XS','S','M','L']
    }
];

function viewProduct(index){
    const p = products[index];
    if(!p) return;
    localStorage.setItem('selectedProduct', JSON.stringify(p));
    window.location = 'productdetail.html';
}

function addProductToCart(index){
    const p = products[index];
    if(!p) return;

    const size = (p.sizes && p.sizes.length > 0) ? p.sizes[0] : '';
    const qty = 1;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === p.id && item.size === size);
    if(existing){
        existing.qty += qty;
    } else {
        cart.push({ id: p.id, title: p.title, price: p.price, img: p.img, size: size, qty: qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${p.title} has been added to your cart.`);
}

function loadMoreProducts(){
    document.querySelectorAll('.extra-product').forEach(el => {
        el.classList.remove('d-none');
    });
    const btn = document.getElementById('load-more-btn');
    if(btn) btn.style.display = 'none';
}

function loadProductDetail(){
    let p = null;
    try{ p = JSON.parse(localStorage.getItem('selectedProduct')); } catch(e){}
    if(!p) p = products[0];

    const img = document.getElementById('product-image');
    const title = document.getElementById('product-title');
    const price = document.getElementById('product-price');
    const desc = document.getElementById('product-description');
    const sizeSel = document.getElementById('product-size');
    const qty = document.getElementById('product-qty');

    if(img) img.src = p.img || '';
    if(title) title.innerText = p.title || '';
    if(price) price.innerText = `₹${(p.price||0).toFixed(2)}`;
    if(desc) desc.innerText = p.desc || '';

    if(sizeSel){
        sizeSel.innerHTML = '';
        (p.sizes || []).forEach(s => {
            const opt = document.createElement('option');
            opt.value = s; opt.innerText = s;
            sizeSel.appendChild(opt);
        });
    }
    if(qty) qty.value = 1;
}

function changeProductQty(amount){
    const qtyEl = document.getElementById('product-qty');
    if(!qtyEl) return;
    let qty = parseInt(qtyEl.value, 10) || 1;
    qty += amount;
    if(qty < 1) qty = 1;
    qtyEl.value = qty;
}

function addToCart(){
    let p = null;
    try{ p = JSON.parse(localStorage.getItem('selectedProduct')); } catch(e){}
    if(!p) p = products[0];

    const size = (document.getElementById('product-size') || {}).value || '';
    const qty = parseInt((document.getElementById('product-qty') || {}).value || 1, 10);
    if(qty < 1) return alert('Quantity must be at least 1');

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === p.id && item.size === size);
    if(existing){
        existing.qty += qty;
    } else {
        cart.push({ id: p.id, title: p.title, price: p.price, img: p.img, size: size, qty: qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location = 'Cart.html';
}

function loadCart(){
    const tbody = document.getElementById('cart-items-body');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(!tbody) return;
    tbody.innerHTML = '';

    cart.forEach((item, idx) => {
        const tr = document.createElement('tr');

        const tdProduct = document.createElement('td');
        tdProduct.innerHTML = `<div class="cart-item"><img src="${item.img}" alt=""><div><p style="font-weight:500;">${item.title}</p><p style="color:var(--text-light); font-size:13px;">Size: ${item.size}</p><a href="#" data-idx="${idx}" class="remove-link" style="color:var(--accent-color); font-size:13px; display:inline-block; margin-top:5px;">Remove</a></div></div>`;

        const tdQty = document.createElement('td');
        tdQty.innerHTML = `<input type="number" min="1" value="${item.qty}" data-idx="${idx}" class="cart-qty" style="width:60px; padding:10px; border:1px solid var(--border-color);">`;

        const tdTotal = document.createElement('td');
        tdTotal.className = 'item-total';
        tdTotal.innerText = `₹${(item.price * item.qty).toFixed(2)}`;

        tr.appendChild(tdProduct);
        tr.appendChild(tdQty);
        tr.appendChild(tdTotal);
        tbody.appendChild(tr);
    });

    // attach events
    document.querySelectorAll('.cart-qty').forEach(el => {
        el.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.idx,10);
            let v = parseInt(e.target.value,10);
            if(isNaN(v) || v < 1) v = 1; e.target.value = v;
            updateCartItem(idx, v);
        });
    });
    document.querySelectorAll('.remove-link').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = parseInt(e.target.dataset.idx,10);
            removeCartItem(idx);
        });
    });

    updateCartTotals();
}

function updateCartItem(index, qty){
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(!cart[index]) return;
    cart[index].qty = qty;
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeCartItem(index){
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(!cart[index]) return;
    cart.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function updateCartTotals(){
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const shipping = subtotal > 0 ? 10.00 : 0.00;
    const total = subtotal + shipping;
    const elSub = document.getElementById('cart-subtotal');
    const elShip = document.getElementById('cart-shipping');
    const elTotal = document.getElementById('cart-total');
    if(elSub) elSub.innerText = `₹${subtotal.toFixed(2)}`;
    if(elShip) elShip.innerText = `₹${shipping.toFixed(2)}`;
    if(elTotal) elTotal.innerText = `₹${total.toFixed(2)}`;
}