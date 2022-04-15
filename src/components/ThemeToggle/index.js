import React from 'react';
import { ToggleContainer, InnerIcon } from './styles';
import { BsToggleOff, BsToggleOn, BsMoon, BsSun } from 'react-icons/bs';
import { useAppContext } from '../../context';

const ThemeToggle = ({ props }) => {
  const { turnTheme, setTurnTheme } = useAppContext();

  const handleToggle = () => {
    setTurnTheme(toggle => !toggle);
  }

  return (
    <ToggleContainer>
        {!turnTheme ?
          <BsToggleOn style={{cursor: 'pointer'}} size={30} onClick={handleToggle} /> :
          <BsToggleOff style={{cursor: 'pointer'}} size={30} onClick={handleToggle} />
        }
      <InnerIcon>
        {!turnTheme ? <BsMoon size={12} /> : <BsSun size={12} />}
      </InnerIcon>
    </ToggleContainer>
  )
};

export default ThemeToggle;
