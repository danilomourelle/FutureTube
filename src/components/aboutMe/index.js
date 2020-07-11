import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  width:100%;
  height: 600px;
  background-color: #063447;
  color: #ffffff;
  padding: 4% 12%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media(max-width: 900px){
    min-height: 500px;
    padding: 6% ;
  }
  @media(max-width: 700px){
    height: 600px;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:space-evenly;
  }
`
const TextWrapper = styled.section`
  width: 400px;
  font-size: 42px;
  display: grid;
  gap: 15px;
  a{
    justify-self: center;
  }
  @media(max-width: 1200px){
    width: 45%;
    font-size: 36px;
  }
  @media(max-width: 700px){
    width: 80%;
    font-size: 32px;
  } 
`
const Title = styled.h3`
  font-size: 1em;
  font-weight: 800;
  margin: auto 0;
`
const Description = styled.p`
  font-size: 0.35em;
  text-indent: 10%;
  line-height: 1.5em;
  text-align: justify;
`
const Keywords = styled.p`
  padding: 0 2%;
  display: inline;
  border-right: solid 1px #ffffff;
  font-size: 0.33em;
  &:first-of-type{
    padding-left: 0;
  }
  &:last-of-type{
    border: none;
  }
`
const Button = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #bf213e;
`
const ImageWrapper = styled.img`
  width: 400px;
  height: 100%;
  object-fit: cover;
  object-position: 50% -50px; 
  @media(max-width: 1200px){
    width: 45%;
  }
  @media(max-width: 700px){
    width: 30vw;
    height: 30vw;
    object-position: 50% 0px; 
  } 
`


function AboutMe() {
  return (
    <Wrapper id='about'>
      <TextWrapper>
        <Title>Sobre mim</Title>
        <Description>
          Atualmente um desenvolverdor Web Fullstack, tenho 3 anos de experiência em programação de robôs industriais, onde desenvolvi habilidade na área de programação de linguagens de alto nível e lógica de programação. Também fiz parte, por 4 anos, de um grupo de pesquisa científica em sistemas neurais com foco em memória, aprendizado e Doença de Alzheimer onde obtive familiaridade com documentações em lingua inglesa e a repetibilidade de protocolos pré-estabelecidos.
        </Description>
        <span>
          <Keywords>React</Keywords>
          <Keywords>NodeJS</Keywords>
          <Keywords>HTML</Keywords>
          <Keywords>CSS</Keywords>
          <Keywords>JS</Keywords>
          <Keywords>TS</Keywords>
          <Keywords>SQL</Keywords>
        </span>
        <a href={require('../../Documents/CV_Danilo_Mourelle.pdf')} download="CV - Danilo Mourelle.pdf" ><Button>Baixe meu CV</Button></a>
      </TextWrapper>

      <ImageWrapper src={require('../../images/Personal/DSCN0677.jpg')} alt='Profile' />

    </Wrapper>
  )
}

export default AboutMe