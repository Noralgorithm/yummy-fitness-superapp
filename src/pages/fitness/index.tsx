import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent, useEffect, useState } from "react";
import BusinessPageHeader from "../../components/header-component";
import BusinessSearchComponent from "../../components/header-search-component";
import BusinessCard, { BusinessFitness } from "./business-card";
import useFilters from "../../hooks/use-filters";

const FitnessPage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  /*const businessCardLists = [];

  for (let i = 0; i < 10; i++) {
    businessCardLists.push(
      <BusinessCard
        businessFitness={{
          name: "Pizza x Metro",
          description: "Pide tus pizzas!",
          avatar:
            "https://i.pinimg.com/736x/cc/4e/1d/cc4e1de7025633fb8c1e91eca8a0f147.jpg",
          products: [
            {
              name: "Pizza #1",
              image:
                "https://images.hola.com/imagenes/cocina/recetas/20200123158804/receta-pizza-fresas-chocolate-helado/0-772-925/pizza-dulce-adobe-m.jpg",
            },
            {
              name: "Pizza #2",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0Rfzm8RFOeZH-EUr5mPxnkQvGqrhtC1FIw&usqp=CAU",
            },
            {
              name: "Pizza #3",
              image:
                "https://phantom-marca.unidadeditorial.es/e30c1b7fce5a61621df934d70e01b30f/resize/828/f/jpg/assets/multimedia/imagenes/2023/02/08/16758783111904.png",
            },
            {
              name: "Pizza #4",
              image:
                "https://9a3dd0f30ec2813b0355-0aefa298f29a1e32e1203150d51d4825.ssl.cf1.rackcdn.com/pix_5_102220_51598_621fc9e7cffcc.jpg",
            },
          ],
        }}
      />
    );
  }*/

  const { filters, setSearchText } = useFilters();
  const [businesses, setBusinesses] = useState<BusinessFitness[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  loading;

  useEffect(() => {
    async function effectGetBusiness() {
      try {
        setLoading(true);
        const businessList = await fetchBusinessFitnessList(filters.searchText);
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
  search?: string
): Promise<BusinessFitness[]> {
  try {
    let searchExtra = "";
    if (search) {
      searchExtra = "?search=" + search;
    }

    const response = await fetch(
      "https://yummycodicon.azurewebsites.net/search" + searchExtra,
      {
        method: "GET",
      }
    );

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
