import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  width:100%;
  background-color: #8d1c31;
  color: #ffffff;
  padding: 6% 12%;
  font-size: 42px;
  display: grid;
  gap: 5vh;
  align-content: flex-start;
  justify-items: center;
  @media(max-width: 1200px){
    padding: 6%;
    font-size: 36px;

  }
  @media(max-width: 600px){
    flex-flow: column nowrap;
    align-items: center;
    font-size: 18px;
  }
`
const Title = styled.h3`
  width: 100%;
  font-size: 1em;
  text-align: center;
`
const Text = styled.p`
  line-height: 1.5em;
  font-size: 0.43em;
  text-align: center;
  a{
    color: #ffffff
  }
  @media(max-width: 600px){
    font-size: 0.8em;
  }
`
const SocialMediasWrapper = styled.aside`
  display:grid;
  grid-auto-flow: column;
  gap: 3vw;
  place-items:center;
  justify-content: flex-start;
  @media(max-width: 900px){
  
  }
  @media(max-width: 500px){

  }
`

function HireMe() {
  const linkedIn = [require('../../images/LinkedIn/group-10-copy@2x.png'), require('../../images/LinkedIn/group-10-copy.png')]
  const github = [require('../../images/GitHub/fill-1-copy@2x.png'), require('../../images/GitHub/fill-1-copy.png')]
  const twitter = [require('../../images/Twitter/fill-1-copy-2@2x.png'), require('../../images/Twitter/fill-1-copy-2.png')]
  const instagram = [require('../../images/Instagran/group-8-copy@2x.png'), require('../../images/Instagran/group-8-copy.png')]

  return (
    <Wrapper>
      <Title>Contrate-me!</Title>
      <Text>Procuro oportunidade de trabalho onde eu possa aprender, <br /> me desenvolver e evoluir na minha carreia profissional.</Text>
      <Text>E-mail para contato: <a href='mailto:danilomourelle@outlook.com'>danilomourelle@outlook.com</a> <br />Celular: (11) 9 8146-4977</Text>
      <SocialMediasWrapper>
        <a href='https://www.linkedin.com/in/danilomourelle/' >
          <picture>
            <source media="(max-width: 500px)" srcSet={linkedIn[1]} />
            <img src={linkedIn[0]} alt='LinkedIn' />
          </picture>
        </a>
        <a href='https://github.com/danilomourelle' >
          <picture>
            <source media="(max-width: 500px)" srcSet={github[1]} />
            <img src={github[0]} alt='GitHub' />
          </picture>
        </a>
        <a href='https://twitter.com/DaniloMourelle' >
          <picture>
            <source media="(max-width: 500px)" srcSet={twitter[1]} />
            <img src={twitter[0]} alt='Twitter' />
          </picture>
        </a>
        <a href='https://www.instagram.com/danilomourelle/?hl=pt-br' >
          <picture>
            <source media="(max-width: 500px)" srcSet={instagram[1]} />
            <img src={instagram[0]} alt='Instagram' />
          </picture>
        </a>
      </SocialMediasWrapper>
    </Wrapper >
  )
}

export default HireMe