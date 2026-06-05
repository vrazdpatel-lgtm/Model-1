import { useState } from "react";
import "./App.css";

function Home() {
  const products = [
    {
      id: 1,
      name: "Headphone",
      price: 1999,
      image: "https://8mm.in/cdn/shop/files/Bowers_Wilkins_PX7_S3_Headphone_black.webp?v=1759395622&width=900",
      badge: "New"
    },
    {
      id: 2,
      name: "Watch",
      price: 2999,
      image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
      badge: "Sale"
    },
    {
      id: 3,
      name: "Laptop",
      price: 49999,
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha",
      badge: "Hot"
    },
    {
      id: 4,
      name: "Mobile",
      price: 18999,
      image: "https://www.gstatic.com/marketing-cms/assets/images/19/69/5ab0798e49c9b005fe6397cba5bb/do-spectacular-on-the-regular-poster-image.webp",
      badge: "New"
    },
    {
      id: 5,
      name: "Camera",
      price: 25999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVi2vFDA1TTi9IoWsSuKnw9oRyVWGHqHhiFw&s",
      badge: "Best"
    },
    {
      id: 6,
      name: "Speaker",
      price: 3999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2krlsmR-YJ7ovigudu2Hf-L3Tv5D1TGPpyA&s",
      badge: "Sale"
    },
    {
      id: 7,
      name: "Keyboard",
      price: 1499,
      image: "https://i.pinimg.com/originals/7d/39/39/7d3939a449d49568723455058462e0c3.jpg?nii=t",
      badge: "New"
    },
    {
      id: 8,
      name: "Mouse",
      price: 999,
      image: "https://img.magnific.com/free-photo/red-computer-mouse_1260-13.jpg?semt=ais_hybrid&w=740&q=80",
      badge: "Hot"
    },
     {
      id: 9,
      name: "Display",
      price: 9999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEVjJiBhLYfeHlXEqnIZJ8OunV7LBihtwSQ&s",
      badge: "Hot"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to My Store</h1>
        <p>
          Discover the latest gadgets and accessories
        </p>
      </div>

      {/* Cart */}
      <div className="cart-box">
        <h2>🛒 Cart ({cart.length})</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="cart-item"
          >
            <span>
              {item.name} x {item.quantity}
            </span>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <h3>Total ₹{total}</h3>
      </div>

      {/* Products */}
      <div className="heading">
        <h1>Featured Products</h1>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
          >
            <span className="badge">
              {product.badge}
            </span>

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="card-content">
              <h3>{product.name}</h3>

              <div className="price">
                ₹{product.price}
              </div>

              <button
                className="btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;