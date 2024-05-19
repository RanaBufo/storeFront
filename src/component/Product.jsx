import { useState, useEffect } from "react";
import "../style/product.css";
import {Link, useNavigate  } from "react-router-dom";

function Product() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((arr) => {
            setItems(arr);
            setLoading(true);
        });
    }, []);
    const navigate = useNavigate();
    const handleInfoClick = (id) => {
        navigate("/"+id);// Используйте navigate для перехода на другую страницу
    };

    return (
        loading ? (<div className="row position">
            {items.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.title} />
                  <p className="name">{item.title}</p>
                  <p className="descriptionStyle">{item.description}</p>
                  <p>${item.price}</p>
                  <button onClick={() => handleInfoClick(item.id)}>Info</button>
              </div>
            ))}
        </div>
        ) : (
            <p>Loading...</p>
        )
    );
}

export default Product;