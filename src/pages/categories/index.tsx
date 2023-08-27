import { AiFillCrown, AiOutlineHome } from "react-icons/ai";

function CategoriesPage() {
  return (
    <div className="w-full h-full flex flex-col font-bold">
      <header className="bg-brand-aqua w-full pt-8 px-2">
        <div className="flex items-center justify-between">
          <div className="flex">
            <AiFillCrown size={30} className="text-brand-yellow" />
            <h2 className="text-white text-2xl">
              Hola, Usuario
            </h2>
          </div>
          <div className="flex gap-2">
            <AiOutlineHome className="text-white" size={30} />
            <h2 className="text-white text-lg font-thin">
              Caracas
            </h2>
          </div>
        </div>
      </header>
      <main className="bg-white w-full"></main>
    </div>
  );
}

export default CategoriesPage;
