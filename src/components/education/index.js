import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  width:100%;
  background-color: #d97824;
  color: #ffffff;
  padding: 4% 12%;
  font-size: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  @media(max-width: 900px){
    padding: 4% 6%;
    font-size: 21px;
  }
  @media(max-width: 700px){
    flex-flow: column nowrap;
    align-items: center;
    justify-content:space-evenly;
    font-size: 16px;
  }
`
const Title = styled.h3`
  width: 100%;
  font-size: 1em;
  text-align: center;
  margin-bottom: 5%; 
`
const Class = styled.section`
  width: 300px;
  height: 100%;
  display: grid;
  gap: 15px;
  @media(max-width: 1200px){
    margin-bottom: 3vh;
  }
  @media(max-width: 700px){
    width: 80%;
  }
`
const ClassTitle = styled.h1`
  font-size: 0.84em;
  line-height: 1.5em;
`
const Text = styled.p`
  line-height: 1.5em;
  font-size: 0.52em;
  @media(max-width: 700px){
    font-size: 12px;
  }
`

function Education() {
  return (
    <Wrapper>
      <Title>Educação</Title>
      <Class>
        <ClassTitle>Curso de Web Full Stack / Labenu</ClassTitle>
        <Text>Jan/20 - Jul/20 </Text>
        <Text>O objetivo do curso é a formação de profissionais capazes de desenvolver aplicações web fullstack. O curso trabalha com ferramentas como JavaScript, TypeScript, React, Redux, Router, POO, odeJS, SQL, MVC, Testes automatizado entre outras bibliotecas largamente utilizadas.</Text>
      </Class>
      <Class>
        <ClassTitle>Tecnologia Mecatrônica Industria / SENAI </ClassTitle>
        <Text>Jan/15 - Dez/2017</Text>
        <Text>O objetivo do curso é a formação de profissionais capazes de coordenar equipes, projetar novos produtos, elaborar linhas de produção automatizadas, integrando as tecnologias das áreas mecânica, eletroeletrônica, automação e computação.</Text>
      </Class>
      <Class>
        <ClassTitle>Bacharel Ciências Biológicas / UNESP</ClassTitle>
        <Text>Jan/07 - Dez/11</Text>
        <Text>O objetivo do curso é a formação de profissional com noções amplas e sólidas, com adequada fundamentação teórico-prática, que inclua o conhecimento profundo da diversidade dos seres vivos, sua organização em diferentes níveis, suas relações filogenéticas e evolutivas, suas respectivas distribuições e relações com o ambiente em que vivem.</Text>
      </Class>
    </Wrapper>
  )
}

export default Education