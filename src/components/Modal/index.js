import React, { useState, useEffect } from "react";
import { useAppContext } from '../../context';
import { Div1, LastContainersContent, Span, Container, StyledButton, ButtonContainer, LastContainer } from './styles';
import Image from 'next/image';
import { ImageData } from "../../constants";

export default function GeneralModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourthOpen, setIsFourthOpen] = useState(false);
  const [modalTurn, setModalTurn] = useState(0);
  const { turnTheme, setTurnTheme } = useAppContext();

  // function toggleModal() {
  //   if (modalTurn === 0) {
  //     return toggleFirstModal();
  //   }
  //   if (modalTurn === 1) {
  //     return toggleSecondModal();;
  //   }
  //   if (modalTurn === 2) {
  //     return toggleThirdModal();
  //   }
  //   if (modalTurn === 3) {
  //     return toggleFourthModal();
  //   }
  // }

  // function toggleFirstModal() {
  //   setIsOpen(!isOpen);
  //   setTurnTheme(false);
  //   setModalTurn(1);
  // }

  // function toggleSecondModal() {
  //   setIsSecondOpen(!isSecondOpen);
  //   setTurnTheme(false);
  //   setModalTurn(2);
  // }

  // function toggleThirdModal() {
  //   setIsThirdOpen(!isThirdOpen);
  //   setModalTurn(3);
  // }

  // function toggleFourthModal() {
  //   setIsFourthOpen(!isFourthOpen);
  //   setTurnTheme(false);
  //   setModalTurn(0);
  // }

  // useEffect(() => {
  //   if (turnTheme && (modalTurn === 0)) {
  //     setIsOpen(true);
  //   }
  //   if (turnTheme && (modalTurn === 1)) {
  //     setIsSecondOpen(true);
  //   }
  //   if (turnTheme && (modalTurn === 2)) {
  //     setIsThirdOpen(true);
  //   }
  //   if (modalTurn === 3) {
  //     setTimeout(() => {
  //       setIsFourthOpen(true)
  //     }, 2500);
  //   }
  // }, [turnTheme, modalTurn]);

  useEffect(() => {
    if (turnTheme) {
      setIsOpen(true)
      setTurnTheme(false)
    }
  }, [turnTheme, isOpen])

  return (
    <>
      {isOpen && (
        <Container>
          <Div1>
            <Span>
              I lied, there is no white theme.
            </Span>
          </Div1>
          <StyledButton onClick={() => setIsOpen(!open)}>
            <ButtonContainer>
              <div id="button-six">
                <a>Return to the Dark Side</a>
              </div>
            </ButtonContainer>
          </StyledButton>
        </Container>
      )}
      {/* {isSecondOpen && (
        <Container>
          <Span>PLEASE, TURN THE LIGHTS OFF!</Span>
          <Div1>
            <Image
              src={ImageData.image2}
              alt="Someone must extinguish thy flame (Elden Ring Reference)"
              width={600}
              height={400}
              placeholder="blur"
            />
          </Div1>
          <StyledButton onClick={toggleModal}>
            <ButtonContainer>
              <div id="button-six">
                <a>Return to the Dark Side</a>
              </div>
            </ButtonContainer>
          </StyledButton>
        </Container>
      )}
      {isThirdOpen && (
        <Container>
          <Span>So you really want it, huh?</Span>
          <Div1>
            <Image
              src={ImageData.image3}
              alt="Finally a worthy opponent, our battle will be legendary (Kung Fu Panda Reference)"
              width={600}
              height={400}
              placeholder="blur"
            />
          </Div1>
          <StyledButton onClick={toggleModal}>
            <ButtonContainer colorful>
              <div id="button-six">
                <a>Use the stupid white theme</a>
                <Image
                  src={ImageData.image4}
                  alt="Finally a worthy opponent, our battle will be legendary (Kung Fu Panda Reference)"
                  width={40}
                  height={50}
                  placeholder="blur"
                />
              </div>
            </ButtonContainer>
          </StyledButton>
        </Container>
      )}
      {isFourthOpen && (
        <LastContainer>
          <LastContainersContent>
            <Span>I tried to warn you but you would not listen...</Span>
            <StyledButton onClick={toggleModal}>
              <ButtonContainer>
                <div id="button-six">
                  <a>Return to the Dark Side</a>
                </div>
              </ButtonContainer>
            </StyledButton>
          </LastContainersContent>
        </LastContainer>
      )} */}
    </>
  );
}
