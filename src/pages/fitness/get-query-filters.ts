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
  LOW: 0,
  MODERATE: 300,
  HIGH: 850,
  ALL: null,
};

const maxCaloriesDictionary: Record<string, number | null> = {
  LOW: 300,
  MODERATE: 850,
  HIGH: 9999,
  ALL: null,
};

const minFatDictionary: Record<string, number | null> = {
  LOW: 1,
  MODERATE: 100,
  HIGH: 200,
  ALL: null,
};

const maxFatDictionary: Record<string, number | null> = {
  LOW: 100,
  MODERATE: 200,
  HIGH: 300,
  ALL: null,
};

const minProteinDictionary: Record<string, number | null> = {
  LOW: 1,
  MODERATE: 100,
  HIGH: 200,
  ALL: null,
};

const maxProteinDictionary: Record<string, number | null> = {
  LOW: 100,
  MODERATE: 200,
  HIGH: 300,
  ALL: null,
};

const minCarbohydratesDictionary: Record<string, number | null> = {
  LOW: 1,
  MODERATE: 100,
  HIGH: 200,
  ALL: null,
};

const maxCarbohydratesDictionary: Record<string, number | null> = {
  LOW: 100,
  MODERATE: 200,
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
    minFat: minFatDictionary[options.fats + ""],
    maxFat: maxFatDictionary[options.fats + ""],
    vegan: !!options.isVegan,
  };
}
