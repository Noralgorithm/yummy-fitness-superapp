import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import useFilters from "../hooks/use-filters";
import { Level } from "../contexts/filters";

function FiltersModal({
  isOpen,
  hideModal,
}: {
  isOpen: boolean;
  hideModal: () => void;
}) {
  const visibilityClass = isOpen ? "" : "hidden";

  const {
    filters,
    changeCaloriesLevel,
    changeCarbsLevel,
    changeFatsLevel,
    changeProteinsLevel,
    toggleIsVegan,
  } = useFilters();

  return (
    <main
      className={`w-full h-full bg-white ${visibilityClass} absolute p-8 z-50 top-0 left-0`}
    >
      <header className="w-full flex justify-between">
        <button onClick={hideModal}>
          <AiOutlineArrowLeft size={25} />
        </button>

        <h1 className="text-2xl font-extrabold">FILTRAR</h1>

        <button onClick={hideModal}>
          <AiOutlineClose size={25} />
        </button>
      </header>

      <div className="text-lg [&>section>h2]:font-semibold flex flex-col gap-8 pt-12 [&>section>ul>li]:flex [&>section>ul>li]:justify-between">
        <section>
          <h2 className="text-lg">Modalidad de Entrega</h2>
          <ul>
            <li className="flex justify-between">
              <label>Entrega inmediata</label> <input type="checkbox" />
            </li>
            <li>
              <label>Orden programada</label> <input type="checkbox" />
            </li>
            <li>
              <label>Recoger en sucursal</label> <input type="checkbox" />
            </li>
          </ul>
        </section>

        <section>
          <h2>Ordenar por</h2>
          <ul>
            <li>
              <label>Calificacion</label> <input type="radio" name="orderBy" />
            </li>
            <li>
              <label>Precio</label> <input type="radio" name="orderBy" />
            </li>
            <li>
              <label>Tiempo de entrega</label>{" "}
              <input type="radio" name="orderBy" />
            </li>
            <li>
              <label>Distancia</label> <input type="radio" name="orderBy" />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2>Factores nutricionales</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <label>Calorias</label>
              <select
                onChange={(e) => {
                  changeCaloriesLevel(e.target.value as Level);
                }}
                value={filters.calories}
              >
                <option value="ALL">Todos</option>
                <option value="LOW">Bajo</option>
                <option value="MODERATE">Medio</option>
                <option value="HIGH">Alto</option>
              </select>
            </li>
            <li>
              <label>Proteinas</label>
              <select
                onChange={(e) => {
                  changeProteinsLevel(e.target.value as Level);
                }}
                value={filters.proteins}
              >
                <option value="ALL">Todos</option>
                <option value="LOW">Bajo</option>
                <option value="MODERATE">Medio</option>
                <option value="HIGH">Alto</option>
              </select>
            </li>
            <li>
              <label>Grasas</label>
              <select
                onChange={(e) => {
                  changeFatsLevel(e.target.value as Level);
                }}
                value={filters.fats}
              >
                <option value="ALL">Todos</option>
                <option value="LOW">Bajo</option>
                <option value="MODERATE">Medio</option>
                <option value="HIGH">Alto</option>
              </select>
            </li>
            <li>
              <label>Carbohidratos</label>
              <select
                onChange={(e) => {
                  changeCarbsLevel(e.target.value as Level);
                }}
                value={filters.carbs}
              >
                <option value="ALL">Todos</option>
                <option value="LOW">Bajo</option>
                <option value="MODERATE">Medio</option>
                <option value="HIGH">Alto</option>
              </select>
            </li>

            <li>
              <label>Comida vegana</label>
              <input
                type="checkbox"
                onChange={() => {
                  toggleIsVegan();
                }}
                checked={filters.isVegan}
              />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FiltersModal;
