import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FiltersContextProvider } from "./contexts/filters";

function App() {
  return (
    <FiltersContextProvider>
      <RouterProvider router={router} />;
    </FiltersContextProvider>
  );
}

export default App;
