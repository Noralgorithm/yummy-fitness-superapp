import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent } from "react";
import BusinessPageHeader from "../../components/header-component";

const TemplatePage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <Div100vh className={className}>
      <BusinessPageHeader labelText={"Plantillas"} hideKm={true} />
      <div className="container-templates-businesses"></div>
    </Div100vh>
  );
};

export default styledComponents(TemplatePage)`
  .container-templates-businesses {
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
`;
