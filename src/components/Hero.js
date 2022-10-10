import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>Best made in <br /> Aba Product </h1>
        <p>
        Get your Quality Products directly from Trusted and Certified 
        manufacturing companies in the Industrial city of Aba, 
        Get it delivered to you anywhere in Nigeria.
        </p>
        <Link to="/products" className='btn hero-btn'>Show Now</Link>
      </article>
      <article className='img-container'>
        <img src={hero} alt="hero" className='main-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: block;
    position: relative
  }
  .main-img {
    width: 100%;
    height: 320px;
    position: relative;
    border-radius: var(--radius);
    display: block;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 400px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  
   
  }
`

export default Hero
