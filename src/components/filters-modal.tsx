import { AiOutlineClose } from "react-icons/ai";
import useFilters from "../hooks/use-filters";

function FiltersModal({
  isOpen,
  hideModal,
}: {
  isOpen: boolean;
  hideModal: () => void;
}) {
  const visibilityClass = isOpen ? "" : "hidden";

  const { filters } = useFilters();

  return (
    <main className={`w-full h-full bg-white ${visibilityClass} absolute p-8`}>
      <header className="w-full flex justify-end">
        <button onClick={hideModal}>
          <AiOutlineClose size={25} />
        </button>
      </header>
    </main>
  );
}

export default FiltersModal;
