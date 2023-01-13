import React from 'react';
import { Section, SectionText, SectionDivider, PresetTitle } from '../../styles/GlobalComponents';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { infos } from '../../constants/constants';
import Image from 'next/image'
import lock from '../../../public/lock.png';
import { TagList } from './InfoStyles';
const Information = () => (
  <Section id="examples">
    <SectionDivider colorAlt />
    <PresetTitle main>Compra 100% segura</PresetTitle>
      {infos.map((data, i) => {
        return (
            <ul key={i}>
              <TagList>
                  <Image
                    src={lock}
                    width={24}
                    height={24}
                    layout="fixed"
                  />
                  {" "+ data.text}
              </TagList>
            </ul>
        );
      })}
  </Section>
);

export default Information;