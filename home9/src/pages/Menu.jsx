import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuData } from "../slice/MenuSlice";
import "../styles/Menu.css";

const Menu = () => {
  const dispatch = useDispatch();
  const { menuData, error, status } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  return (
    <div>
      <h2>Menu</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" &&
      menuData &&
      menuData.data &&
      menuData.data.length > 0 ? (
        <ul>
          {menuData.data.map((item) => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>Ingredients: {item.ingredients.join(", ")}</p>
                <p>Price: {item.unitPrice}</p>
                {item.soldOut ? (
                  <p>Sold Out</p>
                ) : (
                  <button onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu data </p>
      )}
    </div>
  );
};

export default Menu;
