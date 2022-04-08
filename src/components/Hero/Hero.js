import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Felipe's Portfolio
      </SectionTitle>
      <SectionText>
        I am a Frontend Engineer with a Computer Engineering Degree and currently working at Compass.UOL
      </SectionText>
      <Button onClick={() => window.location.href = "mailto:feliperubenmv@gmail.com"}>
        Talk to me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;