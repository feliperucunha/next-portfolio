import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './styles';

const Hero = (props) => (
  <Section row>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Felipe's Portfolio
      </SectionTitle>
      <SectionText>
        A Frontend Engineer with a Computer Engineering Degree and currently working at Compass.UOL
      </SectionText>
      <Button onClick={() => window.location.href = "mailto:feliperubenmv@gmail.com"}>
        Email me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;