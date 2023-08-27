import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent } from "react";
import BusinessPageHeader from "../../components/header-component";

const BusinessPage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <Div100vh className={className}>
      <BusinessPageHeader labelText={"Plantillas"} hideKm={true} />
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
