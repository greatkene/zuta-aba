import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import minus from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"
import cart from "../assets/icon-cart-white.svg"

const AddToCart = () => {
  return (
   <Wrapper>
      <Buttons>
      <div className='quantity'> 
        <div className='dec'>
          <img src={minus} alt={minus} />
        </div>
        <div className='current-quantity'>4</div>
        <div className='inc'>
          <img src={plus} alt={plus} />
        </div>
      </div>
      <div className='add-to-cart'>
        <button>
          <img src={cart} alt={cart} /> Add to cart
        </button>
      </div>
    </Buttons>
   </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

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
    button {
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
      button {
        width: 100%;
      }
    }
  }
`;

export default AddToCart
