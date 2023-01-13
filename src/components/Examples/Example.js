import React from 'react';

import { DivCarrosel } from './ExampleStyles';
import { Section, PresetText, SectionDivider, PresetTitle } from '../../styles/GlobalComponents';
import { BigPreset } from '../Preset/Preset';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { examples } from '../../constants/constants';

const Example = () => (
  <Section id="examples">
    <PresetTitle main>Conheça alguns dos nossos presets</PresetTitle>
    <SectionDivider />
    <Carousel showStatus={false} infiniteLoop={true} swipeable={false} showThumbs={false} width={950}>
      {examples.map((data, i) => {
        return (
          <DivCarrosel key={i}>
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