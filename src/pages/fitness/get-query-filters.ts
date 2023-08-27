import { FiltersState } from "../../contexts/filters";

export interface QueryFilters {
  minCalories?: number | null;
  maxCalories?: number | null;
  minProtein?: number | null;
  maxProtein?: number | null;
  minCarbohydrates?: number | null;
  maxCarbohydrates?: number | null;
  minFat?: number | null;
  maxFat?: number | null;
  vegan?: boolean;
}

const minCaloriesDictionary: Record<string, number | null> = {
  LOW: 1,
  MEDIUM: 100,
  HIGH: 200,
  ALL: null,
};

const maxCaloriesDictionary: Record<string, number | null> = {
  LOW: 100,
  MEDIUM: 200,
  HIGH: 300,
  ALL: null,
};

const minProteinDictionary: Record<string, number | null> = {
  LOW: 1,
  MEDIUM: 100,
  HIGH: 200,
  ALL: null,
};

const maxProteinDictionary: Record<string, number | null> = {
  LOW: 100,
  MEDIUM: 200,
  HIGH: 300,
  ALL: null,
};

const minCarbohydratesDictionary: Record<string, number | null> = {
  LOW: 1,
  MEDIUM: 100,
  HIGH: 200,
  ALL: null,
};

const maxCarbohydratesDictionary: Record<string, number | null> = {
  LOW: 100,
  MEDIUM: 200,
  HIGH: 300,
  ALL: null,
};

export default function getFiltersQuery(options: FiltersState): QueryFilters {
  return {
    minCalories: minCaloriesDictionary[options.calories + ""],
    maxCalories: maxCaloriesDictionary[options.calories + ""],
    minProtein: minProteinDictionary[options.proteins + ""],
    maxProtein: maxProteinDictionary[options.proteins + ""],
    minCarbohydrates: minCarbohydratesDictionary[options.carbs + ""],
    maxCarbohydrates: maxCarbohydratesDictionary[options.carbs + ""],
    minFat: minCarbohydratesDictionary[options.fats + ""],
    maxFat: maxCarbohydratesDictionary[options.fats + ""],
    vegan: !!options.isVegan,
  };
}
