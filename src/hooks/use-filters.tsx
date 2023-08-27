import { useContext } from "react";
import { FiltersContext, Level } from "../contexts/filters";

function useFilters() {
  const { store, dispatch } = useContext(FiltersContext)!;

  const toggleImmediateDeliveryFilter = () =>
    dispatch({ type: "TOGGLE_IMMEDIATE_DELIVERY_FILTER", payload: null });

  const toggleScheduledOrderFilter = () =>
    dispatch({ type: "TOGGLE_SCHEDULED_ORDER_FILTER", payload: null });

  const togglePickUpAtBranch = () =>
    dispatch({ type: "TOGGLE_PICK_UP_AT_BRANCH_FILTER", payload: null });

  const orderByCalification = () =>
    dispatch({ type: "ORDER_BY_CALIFICATION", payload: null });

  const orderByPrice = () =>
    dispatch({ type: "ORDER_BY_PRICE", payload: null });

  const orderByDeliveryTime = () =>
    dispatch({ type: "ORDER_BY_DELIVERY_TIME", payload: null });

  const orderByDistance = () =>
    dispatch({ type: "ORDER_BY_DISTANCE", payload: null });

  const changeCaloriesLevel = (level: Level) =>
    dispatch({ type: "CHANGE_CALORIES_LEVEL", payload: level });

  const changeProteinsLevel = (level: Level) =>
    dispatch({ type: "CHANGE_PROTEINS_LEVEL", payload: level });

  const changeCarbsLevel = (level: Level) =>
    dispatch({ type: "CHANGE_CARBS_LEVEL", payload: level });

  const changeFattsLevel = (level: Level) =>
    dispatch({ type: "CHANGE_FAtTS_LEVEL", payload: level });

  const setSearchText = (searchText: string) =>
    dispatch({ type: "CHANGE_SEARCH_TEXT", payload: searchText });

  return {
    filters: store,
    toggleImmediateDeliveryFilter,
    togglePickUpAtBranch,
    toggleScheduledOrderFilter,
    orderByCalification,
    orderByDeliveryTime,
    orderByDistance,
    orderByPrice,
    changeCaloriesLevel,
    changeCarbsLevel,
    changeFattsLevel,
    changeProteinsLevel,
    setSearchText,
  };
}

export default useFilters;
