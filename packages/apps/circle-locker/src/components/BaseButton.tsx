const BaseButton = ({ text, handler }) => {
  return (
    <button
      onClick={handler}
      className="text-lg rounded-lg w-fit px-12 py-2 bg-pop-secondary/50 hover:bg-pop-primary text-white hover:text-dull-primary"
    >
      {text}
    </button>
  );
};

export default BaseButton;
