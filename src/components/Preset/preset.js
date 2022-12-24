import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { DivPreset, DivPresetBig } from './PresetStyles';



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
    imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/Before/' + props.image + '.jpg'
  };
  const AFTER_IMAGE = {
    imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/After/' + props.image + '.jpg'
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

export {Preset, BigPreset}