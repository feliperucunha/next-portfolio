import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, SpinningIconContainer } from './styles';
import { IconData } from '../../constants';
import TechIcon from '../TechIcon';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Front-end.
    </SectionText>
    <List icons>
      {IconData.map((tech) => (
        <TechIcon
          key={tech.text}
          id={tech.text}
          text={tech.text}
          Icon={tech.Icon}
          doc={tech.doc}
        />
      ))}
    </List>
    <SectionDivider colorAlt />
    <List>
      <ListItem>
        <SpinningIconContainer>
          <DiReact size="3rem" />
        </SpinningIconContainer>
        <ListContainer>
          <ListTitle colorAlt>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Next.js and <br />
            Ember.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience applying <br />
            layouts from Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
