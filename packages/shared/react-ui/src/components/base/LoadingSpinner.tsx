import VerticalAlignScreen from '@/components/layout/VerticalAlignScreen';

const LoadingSpinner = () => {
  return (
    <VerticalAlignScreen
      content={
        <i
          className="size-16 text-pop-secondary animate-spin fa-solid fa-spinner"
          aria-hidden="true"
        ></i>
      }
    />
  );
};

export default LoadingSpinner;
