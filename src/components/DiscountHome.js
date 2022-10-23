import React from 'react'
import styled from 'styled-components'
import discountImage from "../assets/discount.jpg"

const DiscountHome = () => {
  return (
    <Wrapper className='section section-center'>
    <article>
      <div className='title'>
        <h2>
          Shop With Us During Holidays 
          To Get 30% Discount on Delivery
        </h2>
      </div>
      <p>
      Zuta Aba is more than just a fictional industrial Enyimba city E-commerce website. 
      We're a team of like-minded, big-hearted individuals who have a distinct vision for the future. <br />    
      Our vision is shaped by the challenges we see others facing here in our country and around the world – 
      challenges like climate change, lack of sufficient resources, forex, and an absolute need for 
      us all to take better care of our what we are able to create.
      </p>
    </article>
    <img src={discountImage} alt="discount" />
  </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default DiscountHome
