import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import minus from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"
import cart from "../assets/icon-cart-white.svg"

const AmountButtons = ({increase, decrease, amount, addToCart}) => {
  return (
    <Buttons>
    <div className='quantity'> 
      <div onClick={decrease} className='dec'>
        <img src={minus} alt={minus} />
      </div>
      <div className='current-quantity'>{amount}</div>
      <div onClick={increase} className='inc'>
        <img src={plus} alt={plus} />
      </div>
    </div>
    <div className='add-to-cart'>
      <Link to="/cart" onClick={addToCart}>
        <img src={cart} alt={cart} /> Add to cart
      </Link>
    </div>
  </Buttons>
  )
}

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  .quantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: hsl(223, 64%, 98%);
    width: fit-content;
    height: 55px;
    width: 160px;
    border-radius: 10px;
    user-select: none;
    margin-right: 20px;
    .current-quantity {
      font-weight: 700;
      width: 50px;
      text-align: center;
    }
    .dec {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;
      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }
    .inc {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;
      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }
  }
  .add-to-cart {
    a {
      height: 55px;
      width: 250px;
      background-color: hsl(26, 100%, 55%);
      border: none;
      border-radius: 10px;
      align-items: center;
      display: flex;
      justify-content: center;
      img {
        margin-right: 10px;
      }
      color: white;
      font-weight: 700;
      cursor: pointer;
      transition: 100ms ease;
      &:hover {
        background-color: hsl(26, 100%, 55%, 50%);
      }
    }
  }
  @media (max-width: 499px) {
    .quantity {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
    }
    .add-to-cart {
      width: 100%;
      a {
        width: 100%;
      }
    }
  }
`;


export default AmountButtons
