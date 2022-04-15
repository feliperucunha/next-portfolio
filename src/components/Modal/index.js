import React, { useState, useEffect } from "react";
import { useAppContext } from '../../context';
import Modal from "react-modal";
import { Div1, Span, Container, StyledButton } from './styles';
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
      >
        <Container>
          <Div1>
            <Span>
              MY EYES ARE BURNING,
            </Span>
            <Span>
              PLEASE TURN IT OFF!
            </Span>
          </Div1>
          <Image 
            src={ModalImage.image}
            alt="Burning Eyes"
            width={350}
            height={350}
          />
          <StyledButton>
            <button onClick={toggleModal}>Go back to dark mode</button>
          </StyledButton>
        </Container>
      </Modal>
    </div>
  );
}
