import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Image from 'next/image'
import { DivPreset } from './PresetStyles';



function Preset(props) {
    const BEFORE_IMAGE = {
      imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/Before/' + props.image + '.jpg'
    };
    const AFTER_IMAGE = {
      imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/After/' + props.image + '.jpg'
    };

    return (
      <DivPreset>
        <ReactBeforeSliderComponent
          firstImage={BEFORE_IMAGE}
          secondImage={AFTER_IMAGE}
        />
      </DivPreset>
    )
}

function BigPreset(props) {
  const BEFORE_IMAGE = {
    imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/Before/' + props.image + '_s.jpeg'
  };
  const AFTER_IMAGE = {
    imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/After/' + props.image + '_s.jpeg'
  };

  return (
    <div>
      <ReactBeforeSliderComponent
        firstImage={BEFORE_IMAGE}
        secondImage={AFTER_IMAGE}
      />
    </div>
  )
}

function Pack(props) {
  const IMAGE = 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/Pack/' + props.image + '_s.jpg';

  return (
    <div>
      <Image
        src={IMAGE}
        width={400}
        height={605}
        placeholder="blur"
      />
    </div>
  )
}

export {Preset, BigPreset, Pack}