import { ReactNode, createContext, useReducer } from "react";

type Level = "ALL" | "LOW" | "MODERATE" | "HIGH";

export interface FiltersState {
  immediateDelivery: boolean;
  scheduledOrder: boolean;
  pickUpAtBranch: boolean;
  orderByCalification: boolean;
  orderByPrice: boolean;
  orderByDeliveryTime: boolean;
  orderByDistance: boolean;
  calories: Level;
  proteins: Level;
  carbs: Level;
  fats: Level;
  isVegan: boolean;
  searchText: string;
}

const initialState: FiltersState = {
  immediateDelivery: false,
  scheduledOrder: false,
  pickUpAtBranch: false,
  orderByCalification: false,
  orderByPrice: false,
  orderByDeliveryTime: false,
  orderByDistance: false,
  calories: "ALL" as Level,
  proteins: "ALL" as Level,
  carbs: "ALL" as Level,
  fats: "ALL" as Level,
  isVegan: false,
  searchText: "",
};

function filtersReducer(
  state: typeof initialState,
  action: { type: string; payload: any }
): typeof initialState {
  if (action.type === "TOGGLE_IMMEDIATE_DELIVERY_FILTER") {
    return { ...state, immediateDelivery: !state.immediateDelivery };
  }

  if (action.type === "TOGGLE_SCHEDULED_ORDER_FILTER") {
    return { ...state, immediateDelivery: !state.immediateDelivery };
  }

  if (action.type === "TOGGLE_PICK_UP_AT_BRANCH_FILTER") {
    return { ...state, immediateDelivery: !state.immediateDelivery };
  }

  if (action.type === "ORDER_BY_CALIFICATION") {
    return {
      ...state,
      orderByCalification: true,
      orderByPrice: false,
      orderByDeliveryTime: false,
      orderByDistance: false,
    };
  }

  if (action.type === "ORDER_BY_PRICE") {
    return {
      ...state,
      orderByCalification: false,
      orderByPrice: true,
      orderByDeliveryTime: false,
      orderByDistance: false,
    };
  }

  if (action.type === "ORDER_BY_DELIVERY_TIME") {
    return {
      ...state,
      orderByCalification: false,
      orderByPrice: false,
      orderByDeliveryTime: true,
      orderByDistance: false,
    };
  }

  if (action.type === "ORDER_BY_DISTANCE") {
    return {
      ...state,
      orderByCalification: false,
      orderByPrice: false,
      orderByDeliveryTime: false,
      orderByDistance: true,
    };
  }

  if (action.type === "CHANGE_CALORIES_LEVEL") {
    return {
      ...state,
      calories: action.payload,
    };
  }

  if (action.type === "CHANGE_PROTEINS_LEVEL") {
    return {
      ...state,
      proteins: action.payload,
    };
  }

  if (action.type === "CHANGE_CARBS_LEVEL") {
    return {
      ...state,
      carbs: action.payload,
    };
  }

  if (action.type === "CHANGE_FATS_LEVEL") {
    return {
      ...state,
      fats: action.payload,
    };
  }

  if (action.type === "TOGGLE_IS_VEGAN") {
    return {
      ...state,
      isVegan: !state.isVegan,
    };
  }

  if (action.type === "SET_IS_VEGAN") {
    return {
      ...state,
      isVegan: !!action.payload,
    };
  }

  if (action.type === "CHANGE_SEARCH_TEXT") {
    return {
      ...state,
      searchText: action.payload,
    };
  }

  return state;
}

export const FiltersContext = createContext<{
  store: typeof initialState;
  dispatch: React.Dispatch<{
    type: string;
    payload: any;
  }>;
} | null>(null);

export function FiltersContextProvider({ children }: { children: ReactNode }) {
  const [store, dispatch] = useReducer(filtersReducer, initialState);

  return (
    <FiltersContext.Provider value={{ store, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}
