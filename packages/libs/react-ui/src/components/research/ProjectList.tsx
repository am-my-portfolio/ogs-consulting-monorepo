import React from 'react';
import GroupLayout, { GroupLayoutProps } from '../layout/GroupLayout.js';

const projects: GroupLayoutProps[] = [
  {
    summary:
      'High-resolution UV images from the Atmospheric Imaging Assembly (AIA) at 1600 Angstrom, ideal for studying solar flares and active regions in the lower solar atmosphere',
    // icon: "fa-solid fa-bed-pulse",
    image: '/landing/1.png',
  },
  {
    summary:
      'Line-of-sight magnetic field maps from the Heliseismic and Magnetic Imager (HMI), used to track magnetic flux emergence and solar activity drivers.',
    // icon: "fa-solid fa-piggy-bank",
    image: '/landing/2.png',
  },
  {
    summary:
      'Spectrally resolved solar irradiance time series from the Extreme Ultraviolet Variability Experiment (EVE), calibrated and interpolated for long-term ternd analysis.',
    // icon: "fa-solid fa-handshake-slash",
    image: '/landing/3.png',
  },
  {
    summary:
      'A curated catalogue of solar flares detected by SDO, including start times, peak flux, location, and associated AIA imagery',
    // icon: "fa-solid fa-bed-pulse",
    image: '/landing/4.png',
  },
  {
    summary:
      'High-resolution UV images from the Atmospheric Imaging Assembly (AIA) at 1600 Angstrom, ideal for studying solar flares and active regions in the lower solar atmosphere',
    // icon: "fa-solid fa-bed-pulse",
    image: '/landing/1.png',
  },
];

const ProjectList = () => {
  return (
    <div className="my-24 scroll-mt-36">
      <GroupLayout items={projects} />
    </div>
  );
};

export default ProjectList;
