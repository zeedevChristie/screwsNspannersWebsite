import React from 'react';
import HowToVideos from './howToVideos';
import HowToImages from './howToImages';
import HowToText from './HowToText';

const HowToSection = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      <HowToVideos />
      <HowToImages />
      <HowToText />
    </div>
  );
};

export default HowToSection;
