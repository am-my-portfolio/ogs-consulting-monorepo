import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ViewContext } from '@/context/ViewContext';

function ViewSwitcher() {
  return (
    <div className="row inline-flex text-center text-xl" role="group">
      <Link to="/research/overview">
        <ViewButton key_val="research" fa_icon="fas fa-gears" />
      </Link>

      <Link to="/showcase/overview">
        <ViewButton key_val="showcase" fa_icon="fas fa-book-open" />
      </Link>
    </div>
  );
}

export default ViewSwitcher;

function ViewButton({ key_val, fa_icon }) {
  const { researchView, setResearchView } = useContext(ViewContext);

  return (
    <button
      type="button"
      key={key_val}
      title={key_val}
      onClick={() => setResearchView(key_val === 'research' ? true : false)}
      className={`
        ${researchView && key_val === 'research' ? 'bg-red-600 shadow-lg ring-1 ring-red-800' : ''} 
        ${!researchView && key_val === 'showcase' ? 'bg-red-600 shadow-lg ring-1 ring-pop-primary' : ''} 
        ${key_val === 'research' ? 'rounded-r-none' : 'rounded-l-none'} 
        rounded-md py-1 px-4 
        border border-transparent 
        focus:z-10 focus:ring-1 focus:ring-pop-primary
        disabled:pointer-events-none disabled:opacity-50 transition-none 
        shadow-md hover:shadow-lg disabled:shadow-none focus:shadow-none active:shadow-none
        text-dull-primary bg-pop-secondary hover:bg-pop-secondary/70`}
    >
      <div className={fa_icon} aria-hidden="true" />
    </button>
  );
}

// ${researchView && key_val === 'research' ? "bg-red-600 shadow-lg ring-1 ring-red-800" : ""}
// ${!researchView || key_val === 'showcase' ? "bg-green-600 shadow-lg ring-1 ring-green-800" : ""}
