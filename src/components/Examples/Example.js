import React from 'react';

import { DivCarrosel } from './ExampleStyles';
import { Section, PresetText, SectionDivider, PresetTitle } from '../../styles/GlobalComponents';
import { BigPreset } from '../Preset/Preset';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const data = [
  {
      image: "joker",
      text: "Inspirado no aclamado filme de suspense psicológico Coringa, este preset deixa sua foto com um ar mais sombrio.",
  },
  {
      image: "white_lotus",
      text: "Inspirado na série The White Lotus, este preset realça os tons mais vivos e deixa sua foto com um ar mais tropical.",
  }
];

const Example = () => (
  <Section id="examples">
    <PresetTitle main>Conheça alguns dos nossos presets</PresetTitle>
    <SectionDivider />
    <Carousel showStatus={false} infiniteLoop={true} swipeable={false}>
    {data.map((data, i) => {
      return (
        <DivCarrosel>
          <BigPreset image={data.image} />
          <PresetText>
          {data.text} 
          </PresetText>      
        </DivCarrosel>
      );
    })}
    </Carousel>
  </Section>
);

export default Example;