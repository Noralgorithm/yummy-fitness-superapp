import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent, useEffect, useState } from "react";
import BusinessPageHeader from "../../components/header-component";
import BusinessSearchComponent from "../../components/header-search-component";
import BusinessCard, { BusinessFitness } from "./business-card";
import useFilters from "../../hooks/use-filters";
import getFiltersQuery, { QueryFilters } from "./get-query-filters";

const FitnessPage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const { filters, setSearchText } = useFilters();
  const [businesses, setBusinesses] = useState<BusinessFitness[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  loading;

  useEffect(() => {
    async function effectGetBusiness() {
      try {
        setLoading(true);
        const businessList = await fetchBusinessFitnessList(
          getFiltersQuery(filters),
          filters.searchText
        );
        setBusinesses(businessList);
      } catch (error) {
        //
      } finally {
        setLoading(false);
      }
    }

    effectGetBusiness();
  }, [filters.searchText]);

  return (
    <Div100vh className={className}>
      <BusinessPageHeader labelText={"FITNESS"} />
      <BusinessSearchComponent
        setSearchText={setSearchText}
        searchText={filters.searchText}
      />
      <div className={"container-cards-businesses"}>
        {businesses.map((business) => (
          <BusinessCard businessFitness={business} />
        ))}
      </div>
    </Div100vh>
  );
};

export interface BusinessFitnessRaw {
  business: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    avatarImageUrl: string;
    type: string;
    schedule: string;
  };
  products: {
    name: string;
    imageUrl: string;
  }[];
}

async function fetchBusinessFitnessList(
  query: QueryFilters,
  search?: string
): Promise<BusinessFitness[]> {
  try {
    let searchExtra = "";
    if (
      search ||
      query.maxCalories ||
      query.minCalories ||
      query.maxFat ||
      query.minFat ||
      query.maxProtein ||
      query.minProtein ||
      query.maxCarbohydrates ||
      query.minCarbohydrates ||
      query.vegan
    ) {
      searchExtra = "?foo=bar";
    }

    if (search) searchExtra += "&search=" + search;
    if (query.maxCalories !== null)
      searchExtra += "&maxCalories=" + query.maxCalories;
    if (query.minCalories !== null)
      searchExtra += "&minCalories=" + query.minCalories;
    if (query.maxFat !== null) searchExtra += "&maxFat=" + query.maxFat;
    if (query.minFat !== null) searchExtra += "&minFat=" + query.minFat;
    if (query.maxProtein !== null)
      searchExtra += "&maxProtein=" + query.maxProtein;
    if (query.minProtein !== null)
      searchExtra += "&minProtein=" + query.minProtein;
    if (query.maxCarbohydrates !== null)
      searchExtra += "&maxCarbohydrates=" + query.maxCarbohydrates;
    if (query.minCarbohydrates !== null)
      searchExtra += "&minCarbohydrates=" + query.minCarbohydrates;
    if (query.vegan) searchExtra += "&vegan=" + query.vegan;

    const urlFinal =
      "https://yummycodicon.azurewebsites.net/search" + searchExtra;
    console.log("aaaa", urlFinal);

    const response = await fetch(urlFinal, {
      method: "GET",
    });

    if (response.ok && response.status === 200) {
      const resultJson: BusinessFitnessRaw[] = await response.json();
      console.log("negocios obtenidos", resultJson);
      return resultJson.map((businessRaw) => ({
        id: businessRaw.business.id,
        name: businessRaw.business.name,
        avatar:
          businessRaw.business.avatarImageUrl || businessRaw.business.imageUrl,
        cover: businessRaw.business.imageUrl,
        products: businessRaw.products.map((product) => ({
          name: product.name,
          image: product.imageUrl,
        })),
      }));
    }

    throw new Error("Error!");
  } catch (error: unknown) {
    if ((error as Error).message) throw new Error((error as Error).message);
    throw new Error("Error desconocido!");
  }
}

export default styledComponents(FitnessPage)`
  .container-cards-businesses {
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
`;
