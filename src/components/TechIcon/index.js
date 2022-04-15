import React from 'react';
import StyledTechIcon from './styles';

const TechIcon = ({ text, Icon, doc }) => {
  return (
    <StyledTechIcon href={ doc } target="_blank" rel="noreferrer" >
      <Icon className="icon"/>
      <p>{text}</p>
    </StyledTechIcon>
  )
};

export default TechIcon;
