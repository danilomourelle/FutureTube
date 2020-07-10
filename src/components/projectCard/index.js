import React from 'react'
import styled from 'styled-components'

const ProjectWrapper = styled.section`
  width: 80%;
  color: ${props => props.cor || '#45525b'};
  font-size: 42px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media(max-width: 1200px){
    width: 100%;
    justify-content: space-evenly;
  }
  @media(max-width: 600px){
    font-size: 32px;
    flex-flow: column nowrap;
    align-items: center
  } 
`
const ProjectTextSide = styled.div`
  width: 45%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 8vh;
  @media(max-width: 600px){
    width: 80%;
  }
`
const ProjectTitle = styled.h1`
  font-size: 1em;
`
const ProjectClassification = styled.h6`
  font-size: 0.5em;
  font-weight: normal;
  margin: 1vh 0 3vh 0;
`
const Text = styled.p`
  line-height: 1.5em;
  font-size: 0.29em;
  @media(max-width: 600px){
    font-size: 0.4em;
  } 
`
const Button = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: ${props => props.cor || '#45525b'};
`
const ProjectIcon = styled.img`
  width: 35%;
  height: auto;
  object-fit: contain;
  @media(max-width: 1200px){
    width: 25%;
  }
  @media(max-width: 600px){
    width: 30vw;
    height: 27vw;
    object-position: 50% 0px; 
  } 
`

function ProjectCard(props) {
  const { title, classification, text, link, img, color } = props.project
  console.log(props.project)
  return (
    <ProjectWrapper cor={color}>
      <ProjectIcon src={img} />
      <ProjectTextSide>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectClassification>{classification}</ProjectClassification>
        <Text> {text} </Text>
        <a href={link} target='_blank' rel='noopener noreferrer' ><Button cor={color}>Veja o código</Button></a>
      </ProjectTextSide>
    </ProjectWrapper>
  )
}

export default ProjectCard