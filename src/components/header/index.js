import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  width:100%;
  height: 5vh;
  background-color: #8d1c31;
  padding: 0 32px;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size:21px;
  @media(max-width: 500px){
    font-size: 16px;
    padding: 0 12px;
  }
`
const Name = styled.h6`
  font-size: 1em;
  font-weight: 800;
  margin: auto 0;
`
const Links = styled.p`
  margin: 0 16px;
  font-size: 0.8em;
  cursor: pointer;
  @media(max-width: 500px){
    margin: 0 8px;
  }
  :hover{
    font-style:italic;
  }
  &:first-of-type{
    margin-left: auto;
  }
`

function Header(){
  return(
    <Wrapper>
      <Name>Danilo</Name>
      <Links>Projetos</Links>
      <Links>Quem Sou</Links>
      <Links>Contato</Links>
    </Wrapper>
  )
}

export default Header