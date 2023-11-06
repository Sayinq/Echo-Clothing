import React from 'react';
import { Scrollbar, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/scrollbar.css';
import '../../node_modules/swiper/modules/effect-fade.css';
import '../index.css';

import heroOne from '../assets/models/colorful_mens.png';
import heroTwo from '../assets/models/orange_jacket.png';
import heroThree from '../assets/models/pink_jacket_mens.png';


const images = [heroOne, heroTwo, heroThree];

const textDescriptions = [
  'Splatter Jacket',
  'Orange Jacket',
  'Pink Jacket',
];

const HeroSection = () => {
  return (
    <Swiper
      effect={'fade'}
      scrollbar={{
        hide: false,
      }}
      modules={[Scrollbar, EffectFade]}
      className="-mt-16 h-[650px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="h-[650px]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111111]/60 to-[#111111]/60 z-20" />
            <img src={image} alt={`Hero Image ${index + 1}`} className="object-cover h-full w-full z-10" />
            <div className="flex flex-col absolute bottom-0 left-0 p-4 text-white gap-y-8 pb-8 z-30">
              <h2 className="text-3xl font-semibold uppercase">{textDescriptions[index]}</h2>
              <button className="w-[200px] bg-blue-500 hover-bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg">
                Button
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;