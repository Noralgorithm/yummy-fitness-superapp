import styledComponents from "styled-components";
import { FunctionComponent } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BusinessPageHeader: FunctionComponent<{
  className?: string;
  labelText: string;
  hideKm?: boolean;
}> = ({ className, labelText, hideKm }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <div className="bg-white header-business-page w-full">
        <div className="text-brand-purple-dark flex-1">
          <BiArrowBack
            size={28}
            onClick={() => {
              console.log("back");
              navigate("/categories");
            }}
          />
        </div>
        <div className="text-lg font-bold text-brand-purple-dark flex-1">
          {labelText}
        </div>
        <div className="text-md text-brand-purple-dark flex flex-nowrap flex-1 flex-end">
          {!hideKm && (
            <>
              <FiTarget size={24} />
              <span className="ml-2">10 Km</span>
            </>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default styledComponents(BusinessPageHeader)`
  .header-business-page {
    display: flex;
    height: 48px;
    justify-content: space-between;
    padding: 16px;
    font-size: 16px;
  }

  .flex-end {
    justify-content: flex-end;
  }
`;
