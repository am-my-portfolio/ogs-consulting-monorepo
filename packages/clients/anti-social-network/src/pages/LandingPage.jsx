import Overview from '@/components/landing/Overview';
import HowItWorks from '@/components/landing/HowItWorks';
import Problem from '@/components/landing/Problem'
import Solution from '@/components/landing/Solution';

const LandingPage = () => {
  return (
    <div>
      <Overview />
      <Problem />
      <Solution />
      <HowItWorks />
    </div>
  );
};

export default LandingPage;
