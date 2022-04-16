import React, { useState, useEffect } from "react";
import { useAppContext } from '../../context';
import Modal from "react-modal";
import { Div1, Span, Container, StyledButton, ButtonContainer } from './styles';
import Image from 'next/image';
import { ModalImage } from "../../constants";

export default function GeneralModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { turnTheme, setTurnTheme } = useAppContext();

  function toggleModal() {
    setIsOpen(!isOpen);
    setTurnTheme(false);
  }

  useEffect(() => {
    if (turnTheme) {
      setIsOpen(true);
    }
  }, [turnTheme]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={{
          overlay: {
            position: 'fixed',
            top: '5%',
            left: '10%',
            right: 0,
            bottom: 0,
            width: '80%',
            height: '85%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
      >
        <Container>
          <Div1>
            <Span>
              MY EYES ARE BURNING, PLEASE TURN IT OFF!
            </Span>
          </Div1>
          <Div1>
            <Image
              src={ModalImage.image}
              alt="Burning Eyes"
              width={500}
              height={300}
            />
          </Div1>
          <StyledButton onClick={toggleModal}>
            <ButtonContainer>
              <div id="button-six">
                <a href="">Return to the Dark Side</a>
              </div>
            </ButtonContainer>
          </StyledButton>
        </Container>
      </Modal>
    </div>
  );
}
