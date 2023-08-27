import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent, useEffect, useState } from "react";
import BusinessPageHeader from "../../components/header-component";
import BusinessSearchComponent from "../../components/header-search-component";
import BusinessCard, { Business } from "./business-card";
import useFilters from "../../hooks/use-filters";
import { Spin } from "antd";

const BusinessPage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const { filters, setSearchText } = useFilters();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function effectGetBusiness() {
      try {
        setLoading(true);
        const businessList = await fetchBusinessList(filters.searchText);
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
      <BusinessPageHeader labelText={"COMIDA"} />
      <BusinessSearchComponent
        searchText={filters.searchText}
        setSearchText={setSearchText}
      />
      {businesses.length >= 0 ? (
        <div className={"container-cards-businesses"}>
          {businesses.map((business) => (
            <BusinessCard business={business} />
          ))}
        </div>
      ) : loading ? (
        <Spin tip="Cargando..." size="large" spinning={true}>
          Cargando
        </Spin>
      ) : (
        <></>
      )}
    </Div100vh>
  );
};

export interface BusinessRaw {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  avatarImageUrl: string;
  type: string;
  schedule: string;
}

async function fetchBusinessList(search?: string): Promise<Business[]> {
  try {
    let searchExtra = "";
    if (search) {
      searchExtra = "?search=" + search;
    }

    const response = await fetch(
      "https://yummycodicon.azurewebsites.net/business" + searchExtra,
      {
        method: "GET",
      }
    );

    if (response.ok && response.status === 200) {
      const resultJson: BusinessRaw[] = await response.json();
      console.log("negocios obtenidos", resultJson);
      return resultJson.map((businessRaw) => ({
        id: businessRaw.id,
        name: businessRaw.name,
        description: businessRaw.description || businessRaw.name,
        avatar: businessRaw.avatarImageUrl || businessRaw.imageUrl,
        cover: businessRaw.imageUrl,
      }));
    }

    throw new Error("Error!");
  } catch (error: unknown) {
    if ((error as Error).message) throw new Error((error as Error).message);
    throw new Error("Error desconocido!");
  }
}

/*
{
          name: "Pizza x Metro",
          description: "Pide tus pizzas!",
          avatar:
            "https://media-cdn.tripadvisor.com/media/photo-s/19/76/f0/71/pizze-varie-di-gianni.jpg",
        }
*/

export default styledComponents(BusinessPage)`
  .container-cards-businesses {
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
`;
