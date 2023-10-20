import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import CartQuantityToggle from "./CartQuantityToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({product}) => {
  const { addToCart } = useCartContext();

  const { id, size, stock } = product;

  const [currentsize, setCurrentSize] = useState(size[0]);  
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {    
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };


  return (
    <Wrapper>
         <div className="sizes">
        <p>
          Size:
          <select onChange={(e)=>{
            setCurrentSize(e.target.value)
          }}>
          {size.map((currentItem, index) => {
            return (
              <option
                key={index}  value={currentItem}>
                {currentItem}
              </option>
            );
          })}
          </select>
          
        </p>
      </div>
        {/* add to cart  */}
      <CartQuantityToggle
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id,currentsize,quantity,product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .sizes p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  
`;

export default AddToCart;
