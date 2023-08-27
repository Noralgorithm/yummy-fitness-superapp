import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import FiltersModal from "../components/filters-modal";

function FiltersTestingPage() {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const toggleFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  return (
    <main className="h-full w-full flex justify-center items-center">
      <button>
        <AiOutlineSetting size={120} onClick={toggleFilters} />
      </button>

      <FiltersModal isOpen={isOpenFilters} hideModal={toggleFilters} />
    </main>
  );
}

export default FiltersTestingPage;
