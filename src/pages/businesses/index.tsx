import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent } from "react";
import BusinessPageHeader from "./header-component";
import BusinessSearchComponent from "./header-search-component";
import BusinessCard from "./business-card";

const BusinessPage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const businessCardLists = [];

  for (let i = 0; i < 10; i++) {
    businessCardLists.push(<BusinessCard />);
  }

  return (
    <Div100vh className={className}>
      <BusinessPageHeader />
      <BusinessSearchComponent />
      <div className={"container-cards-businesses"}>{businessCardLists}</div>
    </Div100vh>
  );
};

export default styledComponents(BusinessPage)`
  .container-cards-businesses {
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
`;
