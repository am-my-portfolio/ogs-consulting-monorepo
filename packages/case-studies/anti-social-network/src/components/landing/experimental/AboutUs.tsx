import React from 'react';
import { RowLayout } from '@am-ogs/react-ui';
import SolutionCard from './SolutionCard';

const items = [
  {
    title: 'Patients Get Paid',
    description:
      'Cancer patients receive direct payments for their anonymized health data.',
    icon: 'fa-solid fa-mug-hot',
  },
  {
    title: 'Seamless Payments',
    description:
      'Life Sciences companies pay traditionally; SiloLabs converts funds into stablecoins (USDC) for secure, automated micropayments.',
    icon: 'fa-solid fa-cloud-moon-rain',
  },
  {
    title: 'Ethical & Transparent',
    description:
      'Blockchain ensures patient consent, security, and full traceability.',
    icon: 'fa-solid fa-bell',
  },
  {
    title: 'Better Data for Research',
    description:
      'Life Sciences companies access verified, high-quality patient data to accelerate new treatments.',
    icon: 'fa-solid fa-thumbs-up',
  },
];

const Events = () => {
  return (
    <div className="my-12 scroll-mt-36">
      <RowLayout
        titleLeft="Events"
        subTitleLeft="Bringing you the latest events in helio-physics and data science"
        description="We are proud to partner with ...."
        content={
          <div>
            <ul
              role="list"
              className="grid grid-cols-1 md:grid-cols-4 gap-x-2 rounded-md mt-6"
            >
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col p-2 divide-y divide-dull-secondary rounded-md shadow bg-pop-secondary"
                >
                  <SolutionCard item={item} />
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Events;
