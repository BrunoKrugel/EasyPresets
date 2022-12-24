import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, BigGridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ExampleStyles';
import { Section, PresetText, SectionDivider, PresetTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { BigPreset } from '../Preset/PresetAux';

const Example = () => (
  <Section id="examples">
    <SectionDivider />
    <PresetTitle main>Conheça alguns dos nossos presets</PresetTitle>
    <BigGridContainer>
        <BigPreset image="joker" />
        <PresetText>
          Inspirado no aclamado filme de suspense psicológico Joker lançado em 2019, nosso preset realça alguns tons e deixa sua foto com um ar mais sombrio.
        </PresetText>      
        <BigPreset image="white_lotus" />
        <PresetText>
          Inspirado na série The White Lotus, nosso preset realça os tons mais vivos e deixa sua foto com um ar mais tropical.
        </PresetText>            
    </BigGridContainer>
  </Section>
);

export default Example;