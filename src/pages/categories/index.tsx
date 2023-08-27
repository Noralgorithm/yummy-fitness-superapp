import { AiFillCrown, AiOutlineHome } from "react-icons/ai";

function CategoriesPage() {
  return (
    <div className="w-full h-full flex flex-col font-bold">
      <header className="bg-brand-aqua w-full pt-12 px-2 pb-12 flex flex-col gap-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-3">
            <AiFillCrown size={30} className="text-brand-yellow" />
            <h2 className="text-white text-xl">Hola, Usuario</h2>
          </div>
          <div className="flex gap-2">
            <AiOutlineHome className="text-white" size={24} />
            <h2 className="text-white text-md font-thin">Caracas</h2>
          </div>
        </div>
        <input
          type="text"
          className="w-[98%] mx-auto bg-brand-aqua border-t border-white text-white p-3 rounded-full shadow-md placeholder:text-white placeholder:font-extralight"
          placeholder="¿De qué tienes ganas hoy?"
        ></input>
      </header>
      <main className="bg-white w-full rounded-t-3xl h-full -mt-4 pt-5 px-4">
        <ul className="flex flex-col gap-6">
          <li className="flex flex-col">
            <h2 className="text-brand-purple font-black text-xl flex flex-col">
              yummyDelivery
              <span className="text-brand-gray text-xs">
                SERVICIO A DOMICILIO
              </span>
            </h2>
            <picture className="rounded-2xl w-full mt-4">
              <img
                className="rounded-2xl w-[164px]"
                src="../../../public/images/yummy-delivery-icon.avif"
                alt="yummy delivery icon"
              ></img>
            </picture>
          </li>
          <li className="flex flex-col gap-4">
            <h2 className="text-brand-purple font-black text-xl flex flex-col">
              yummyFitness
              <span className="text-brand-gray text-xs">TIENDA SALUDABLE</span>
            </h2>
            <picture className="rounded-2xl w-full">
              <img
                className="rounded-2xl w-[164px]"
                src="../../../public/images/yummy-fitness-icon.jpg"
                alt="yummy fitness icon"
              ></img>
            </picture>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default CategoriesPage;
