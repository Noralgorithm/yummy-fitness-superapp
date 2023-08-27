import styledComponents from "styled-components";
import Div100vh from "react-div-100vh";
import { FunctionComponent } from "react";
import { BiArrowBack } from "react-icons/bi";

const BusinessPage: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <Div100vh className={className}>
      <div className="bg-white header-business-page">
        <div>
          <BiArrowBack />
        </div>
        <div>COMIDA</div>
        <div>10 Km</div>
      </div>
      <div></div>;
    </Div100vh>
  );
};

export default styledComponents(BusinessPage)`
  .header-business-page {
    display: flex;
    height: 48px;
    justify-content: space-between;
    padding: 16px;
    font-size: 16px;
  }
`;
