import React, { useState } from 'react';
import { ToggleContainer, InnerIcon } from './styles';
import { BsToggleOff, BsToggleOn, BsMoon, BsSun } from 'react-icons/bs';

const ThemeToggle = ({ props }) => {
  const [turnTheme, setTurnTheme] = useState(true);
  const handleToggle = () => {
    setTurnTheme(toggle => !toggle);
  }

  return (
    <ToggleContainer>
        {!turnTheme ? <BsToggleOn style={{cursor: 'pointer'}} size={30} onClick={handleToggle} /> : <BsToggleOff style={{cursor: 'pointer'}} size={30} onClick={handleToggle} />}
      <InnerIcon>
        {!turnTheme ? <BsMoon style={{cursor: 'pointer'}} size={12} /> : <BsSun style={{cursor: 'pointer'}} size={12} />}
      </InnerIcon>
    </ToggleContainer>
  )
};

export default ThemeToggle;
