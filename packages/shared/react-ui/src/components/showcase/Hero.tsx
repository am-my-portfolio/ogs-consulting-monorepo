import React from 'react';
import VerticalAlignDiv from '@/components/layout/VerticalAlignDiv';

const Hero = () => {
  return (
    <div className="relative text-center">
      <img
        src="/landing/hero.png"
        alt="logo"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute flex h-full top-0 left-0 text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <VerticalAlignDiv
              content={
                <h1 className="text-left md:text-3xl lg:text-3xl xl:text-5xl text-dull-primary">
                  Welcome to HelioAI.
                </h1>
              }
            />
          </div>
          <div className="col-span-1">
            <VerticalAlignDiv
              content={
                <div className="text-left text-[9px] sm:text-sm md:text-md lg:text-xs xl:text-xl text-dull-primary">
                  <div>
                    Artificial Intelligence is transforming the way we
                    understand the Sun’s behavior and its impact on Earth and
                    beyond by building a coherent “full picture” of the Sun and
                    its interactions.
                  </div>
                  <div className="mt-6 lg:mt-12">
                    You’re invited to become part of our community of
                    heliophysicists and data scientists pushing the boundaries
                    of what is possible.
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
