import styledComponents from "styled-components";
import { FunctionComponent } from "react";
import { Input } from "antd";
import { IoFilterOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

const BusinessSearchComponent: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const prefix = <BsSearch className="text-brand-purple-dark mr-2" size={18} />;

  const suffix = (
    <IoFilterOutline className="text-brand-purple-dark" size={18} />
  );

  return (
    <div className={className}>
      <div className="bg-white w-full mt-1 p-4">
        <Input placeholder="" size="large" prefix={prefix} suffix={suffix} />
      </div>
    </div>
  );
};

export default styledComponents(BusinessSearchComponent)`
`;