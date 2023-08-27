import { useState } from "react";
import styledComponents from "styled-components";
import { FunctionComponent } from "react";
import { Input } from "antd";
import { IoFilterOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import FiltersModal from "./filters-modal";

const BusinessSearchComponent: FunctionComponent<{
  className?: string;
  searchText: string;
  setSearchText: (v: string) => void;
}> = ({ className, searchText, setSearchText }) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const toggleFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const prefix = <BsSearch className="text-brand-purple-dark mr-2" size={18} />;

  const suffix = (
    <div onClick={() => toggleFilters()}>
      <IoFilterOutline className="text-brand-purple-dark" size={18} />
    </div>
  );

  return (
    <div className={className}>
      <div className="bg-white w-full mt-1 p-4">
        <Input
          placeholder=""
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          size="large"
          prefix={prefix}
          suffix={suffix}
        />
      </div>

      <FiltersModal isOpen={isOpenFilters} hideModal={toggleFilters} />
    </div>
  );
};

export default styledComponents(BusinessSearchComponent)`
`;
