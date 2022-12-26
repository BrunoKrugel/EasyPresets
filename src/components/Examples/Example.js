import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, BigGridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ExampleStyles';
import { Section, PresetText, SectionDivider, PresetTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { BigPreset } from '../Preset/Preset';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Example = () => (
  <Section id="examples">
    <SectionDivider />
    <PresetTitle main>Conheça alguns dos nossos presets</PresetTitle>
    {/* <BigGridContainer> */}
    <Carousel>
      <div>
        <BigPreset image="joker" />
        <PresetText>
          Inspirado no aclamado filme de suspense psicológico Joker lançado em 2019, nosso preset realça alguns tons e deixa sua foto com um ar mais sombrio.
        </PresetText>      
      </div>
      <div>
        <BigPreset image="white_lotus" />
        <PresetText>
          Inspirado na série The White Lotus, nosso preset realça os tons mais vivos e deixa sua foto com um ar mais tropical.
        </PresetText>            
      </div>
    </Carousel>
    {/* </BigGridContainer> */}
  </Section>
);

export default Example;