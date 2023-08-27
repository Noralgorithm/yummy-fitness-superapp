import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent } from "react";
import BusinessPageHeader from "../../components/header-component";
import BusinessSearchComponent from "../../components/header-search-component";
import BusinessCard from "./business-card";

const FitnessPage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const businessCardLists = [];

  for (let i = 0; i < 10; i++) {
    businessCardLists.push(<BusinessCard />);
  }

  return (
    <Div100vh className={className}>
      <BusinessPageHeader labelText={"FITNESS"} />
      <BusinessSearchComponent />
      <div className={"container-cards-businesses"}>{businessCardLists}</div>
    </Div100vh>
  );
};

export default styledComponents(FitnessPage)`
  .container-cards-businesses {
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
`;
