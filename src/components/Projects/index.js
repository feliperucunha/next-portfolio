import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { AiOutlineGithub } from "react-icons/ai";
import { projects } from "../../constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Personal Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target="_blank" href={visit}>
                Demo
              </ExternalLinks>
              <ExternalLinks target="_blank" href={source}>
                Code <AiOutlineGithub />
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
    <div style={{width: '30%', margin: 'auto'}}>
      <ExternalLinks
        target="_blank"
        href="https://github.com/feliperucunha?tab=repositories"
      >
        More Projects <AiOutlineGithub />
      </ExternalLinks>
    </div>
  </Section>
);

export default Projects;
