import React from 'react'
import styled from 'styled-components'
import img from '../../images/Personal/wide.jpg'

const Wrapper = styled.figure`
  width: 100%;
  height: 45vw;
  max-height: 677px;
  padding: 4% 8%;
  color: #ffffff;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), 80%, rgba(0, 0, 0, 0.3)), url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  display:flex;
  flex-flow:row nowrap;
  @media(max-width: 900px){
    flex-flow: column nowrap;
  }
`
const SocialMediasWrapper = styled.aside`
  width:4%;
  height:100%;
  padding-top:5%;
  display:grid;
  gap: 6%;
  place-items:center;
  align-content: flex-start;
  @media(max-width: 900px){
    order: 1;
    grid-auto-flow: column;
    gap: 100%;
    padding: 0;
  }
  @media(max-width: 500px){
    visibility: hidden;

  }
`
const Presentation = styled.div`
  margin-left: 150px;
  font-size: 50px;
  letter-spacing: -0.22px;
  padding: 6% 0;
  display:grid;
  gap:4%;
  align-content: flex-start;
  @media(max-width: 900px){
    font-size: 32px;
    margin:0;
  }
  @media(max-width: 500px){
    font-size: 24px;
    margin:0;
  }
  h1{
    font-size: 1em;
    font-weight: bold;
  };
  h2{
    font-size: 0.48em;
    font-weight: normal;
  };
  h3{
    font-size: 0.32em;
    font-weight: normal;
    @media(max-width: 500px){
      visibility:hidden;
    }
  }
`


function HeroImg() {
  return (
    <Wrapper>
      <SocialMediasWrapper>
        <a href='https://www.linkedin.com/in/danilomourelle/' target='_blank' rel='noopener noreferrer' ><img src={require('../../images/LinkedIn/group-10-copy.png')} alt='LinkedIn' /></a>
        <a href='https://api.whatsapp.com/send?phone=5511981464977' target='_blank' rel='noopener noreferrer' ><img src={require('../../images/WhatsApp/group-3-copy.png')} alt='WhatsApp' /></a>
        <a href='https://github.com/danilomourelle' target='_blank' rel='noopener noreferrer' ><img src={require('../../images/GitHub/fill-1-copy.png')} alt='GitHub' /></a>
        <a href='https://twitter.com/DaniloMourelle' target='_blank' rel='noopener noreferrer' ><img src={require('../../images/Twitter/fill-1-copy-2.png')} alt='Twitter' /></a>
        <a href='https://www.instagram.com/danilomourelle/?hl=pt-br' target='_blank' rel='noopener noreferrer' ><img src={require('../../images/Instagram/group-8-copy.png')} alt='Instagram' /></a>
      </SocialMediasWrapper>
      <Presentation>
        <h1>Eu sou<br /> Danilo Mourelle</h1>
        <h2>Desenvolvedor Web Full Stack</h2>
        <h3>Fascinado por lógica e aprendizado</h3>
      </Presentation>
    </Wrapper>
  )
}

export default HeroImg