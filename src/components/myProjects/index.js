import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../projectCard'

const Wrapper = styled.article`
  width:100%;
  background-color: #f2f2f2;
  padding: 4% 12%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media(max-width: 1200px){
    padding: 4% 6%;
  }
`
const Title = styled.h3`
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin-bottom: 5%;
  color:#45525b;
  @media(max-width: 700px){
    font-size: 16px;
    flex-flow: column nowrap;
    align-items: center
  } 
`


function MyProjects() {
  const projects = [
    {
      title: "FutureEats",
      classification: 'Front-end',
      text: 'Trabalho final do módulo de front-end, o projeto tem como objetivo simular a UX/UI de um aplicativo de delivery com base em aplicativos reais de mercado. A interface foi montada sob o princípio do "mobile first" e passa por todas as etapas de um aplicativo real, como login/signup, seleções, filtros, mudanças de páginas e alterações de dados. As habilidades desenvolvidas foram de reproduzir uma UI completa com uma total integração com sistema back-end.',
      link: 'https://github.com/danilomourelle/FutureEats',
      img: require('../../images/Projects/logo-future-eats-invert@3x.png'),
      color: '#33a6a6'
    },
    {
      title: "Cookenu",
      classification: 'Back-end',
      text: 'Trabalho inicial do módulo de back-end, o projeto tem como objetivo trazer os princípios de criação de uma API Rest de um sistema de uma rede social. Utilizamos da ferramenta do ExpressJS para o gerenciamento de rotas dos endpoints, assim com tratativas de Requests e Responses, onde o fluxo de dados vai desde o recebimento pelo front, verificações, tratamento, e CRUD com banco de dados SQL (MySQL), para então a então formulação de resposta.',
      link: 'https://github.com/danilomourelle/Cookenu',
      img: require('../../images/Projects/dessert.png'),
      color: '#8d1c31'
    },
    {
      title: "Spotenu",
      classification: 'Fullstack',
      text: 'Trabalho final do curso Web Fullstack da Labenu, o projeto tem por objetivo simular todo o funcionamento de um sistema de músicas online como os sistemas de referência do mercado. Nele colocamos todos os conhecimentos adquiridos no módulo de front como Redux, Hooks, Routes, Axios etc., assim como do módulo de back-end com Express, Knex, ID, tokens, SQL, MVC, Clean Code, POO. O projeto é uma integração completa entre um front-end em React, um back-end NodeJS com deploy em sistema AWS',
      link: 'https://github.com/danilomourelle/Spotenu',
      img: require('../../images/Projects/music.png'),
      color: '#d97824'
    },
  ]
  return (
    <Wrapper id='projects'>
      <Title>Meus projetos</Title>
      {
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      }
    </Wrapper>
  )
}

export default MyProjects