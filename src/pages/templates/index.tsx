import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent } from "react";
import BusinessPageHeader from "../../components/header-component";
import { useNavigate } from "react-router-dom";
import useFilters from "../../hooks/use-filters";

const PlantillaComponent: FunctionComponent<{
  className?: string;
  img: string;
  name: string;
  callbackClick: () => void;
}> = ({ className, img, name, callbackClick }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <picture
        className="rounded-2xl w-full img-box-card"
        onClick={() => {
          callbackClick();
          navigate("/shop/fitness");
        }}
      >
        <img className="rounded-2xl w-[164px]" src={img} alt="Adelgazar"></img>
        <div className="titletext">
          <span className="">{name}</span>
        </div>
      </picture>
    </div>
  );
};

const TemplatePage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const {
    changeCaloriesLevel,
    changeProteinsLevel,
    changeCarbsLevel,
    changeFatsLevel,
    setIsVegan,
    setSearchText,
  } = useFilters();

  return (
    <Div100vh className={className}>
      <BusinessPageHeader labelText={"Plantillas"} hideKm={true} />
      <div className="container-templates-businesses">
        <PlantillaComponent
          img={"../../public/images/templates/adelgazar.png"}
          name={"Adelgazar"}
          callbackClick={() => {
            changeCaloriesLevel("LOW");
            changeProteinsLevel("HIGH");
            changeCarbsLevel("LOW");
            changeFatsLevel("LOW");
            setIsVegan(false);
            setSearchText("");
          }}
        />
        <PlantillaComponent
          img={"../../public/images/templates/gain-mas.png"}
          name={"Ganar masa"}
          callbackClick={() => {
            changeCaloriesLevel("LOW");
            changeProteinsLevel("MODERATE");
            changeCarbsLevel("HIGH");
            changeFatsLevel("HIGH");
            setIsVegan(false);
            setSearchText("");
          }}
        />
        <PlantillaComponent
          img={"../../public/images/templates/salud.png"}
          name={"Salud"}
          callbackClick={() => {
            changeCaloriesLevel("LOW");
            changeProteinsLevel("MODERATE");
            changeCarbsLevel("MODERATE");
            changeFatsLevel("LOW");
            setIsVegan(true);
            setSearchText("");
          }}
        />
      </div>
    </Div100vh>
  );
};

export default styledComponents(TemplatePage)`
  .container-templates-businesses {
    width: 100%;
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }

  .img-box-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    img {
      background: #00956F;
    }
  }

  .titletext {
    display: flex;
    justify-content: center;
  }
`;
