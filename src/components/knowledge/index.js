import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  width:100%;
  background-color: #33a6a6;
  color: #ffffff;
  padding: 4% 12%;
  font-size: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  @media(max-width: 900px){
    padding: 6%;
    font-size: 21px;
    justify-content:flex-start;
  }
  @media(max-width: 700px){
    flex-flow: column nowrap;
    align-items: center;
    font-size: 16px;
  }
`
const Title = styled.h3`
  width: 100%;
  font-size: 1em;
  text-align: center;
  margin-bottom: 5%;
`
const Stack = styled.section`
  width: 400px;
  height: 100%;
  display: grid;
  gap: 15px;
  @media(max-width: 1200px){
    width: 300px;
  }
  @media(max-width: 700px){
    width: 80%;
    height: unset;
  } 
`
const StackTitle = styled.h1`
  font-size: 2.2em;
  line-height: 1.5em;
  text-align: justify;
`
const Text = styled.p`
  line-height: 1.5em;
  font-size: 0.64em;
  @media(max-width: 600px){
    font-size: 0.8em;
  }
`

function Knowledge() {
  return (
    <Wrapper>
      <Title>Meus conhecimentos</Title>
      <Stack>
        <StackTitle>Front-end</StackTitle>
        <Text>Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript. </Text>
        <Text>Criação de sites responsivos seguindo princípio de Mobile First.</Text>
      </Stack>
      <Stack>
        <StackTitle>Back-end</StackTitle>
        <Text>Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s para comunicação com front-end seguindo princípio de Clean Code.</Text>
      </Stack>
    </Wrapper>
  )
}

export default Knowledge