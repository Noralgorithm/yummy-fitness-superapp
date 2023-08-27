import styledComponents from "styled-components";
import { FunctionComponent } from "react";

const FitnessProductCard: FunctionComponent<{
  className?: string;
  name: string;
  image: string;
}> = ({ className, name, image }) => {
  return (
    <div className={className}>
      <img src={image} />
      <span className="text-md text-brand-purple-dark">{name}</span>
    </div>
  );
};

export default styledComponents(FitnessProductCard)`
    flex: 1;
    height: 100%;

    img {
      height: 70px;
      width: 70px;
      object-fit: cover; /* Ajusta cómo se ajusta la imagen dentro de la tarjeta */
    }
`;
