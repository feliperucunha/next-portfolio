import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  PrivateLinks,
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
        ({ id, image, title, description, tags, source, visit, isPrivate }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <div style={{height: !visit ? '320px' : '355px', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div>
                <CardInfo>{description}</CardInfo>
              </div>
              <div>
                <br />
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
                <UtilityList>
                  {visit ? (
                    <ExternalLinks target="_blank" href={visit}>
                      Demo
                    </ExternalLinks>
                  ) : (
                    <PrivateLinks>Not released yet</PrivateLinks>
                  )}
                  {isPrivate ? (
                    <PrivateLinks>
                      Private Code <AiOutlineGithub />
                    </PrivateLinks>
                  ) : (
                    <ExternalLinks target="_blank" href={source}>
                      Code <AiOutlineGithub />
                    </ExternalLinks>
                  )}
                </UtilityList>
              </div>
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
    <div style={{ width: "30%", margin: "auto" }}>
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
