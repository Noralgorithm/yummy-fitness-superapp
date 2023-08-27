import styledComponents from "styled-components";
import { FunctionComponent } from "react";
import { Card, Avatar } from "antd";
import FitnessProductCard from "./fitness-product-card";

const BusinessCard: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Card
        className={`card-business`}
        hoverable
        bodyStyle={{ padding: "0px" }}
      >
        <div className={"card-business-body"}>
          <div className="cbb-head">
            <div>
              <Avatar src="https://i.pinimg.com/736x/cc/4e/1d/cc4e1de7025633fb8c1e91eca8a0f147.jpg" />
              <span className={"text-brand-purple-dark text-1-rem font-bold"}>
                Pizza x Metro
              </span>
            </div>
            <div className="text-brand-gray font-bold">30 min</div>
          </div>
          <div className="cbb-body">
            <FitnessProductCard
              name="Pizza"
              image="https://images.hola.com/imagenes/cocina/recetas/20200123158804/receta-pizza-fresas-chocolate-helado/0-772-925/pizza-dulce-adobe-m.jpg"
            />
            <FitnessProductCard
              name="Pizza"
              image="https://images.hola.com/imagenes/cocina/recetas/20200123158804/receta-pizza-fresas-chocolate-helado/0-772-925/pizza-dulce-adobe-m.jpg"
            />
            <FitnessProductCard
              name="Pizza"
              image="https://images.hola.com/imagenes/cocina/recetas/20200123158804/receta-pizza-fresas-chocolate-helado/0-772-925/pizza-dulce-adobe-m.jpg"
            />
            <FitnessProductCard
              name="Pizza"
              image="https://images.hola.com/imagenes/cocina/recetas/20200123158804/receta-pizza-fresas-chocolate-helado/0-772-925/pizza-dulce-adobe-m.jpg"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default styledComponents(BusinessCard)`
  .card-business {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0px;
  }

  .card-business-body { 
    padding: 6px;
  }

  .text-1-rem {
    font-size: 1rem;
  }

  .cbb-head {
    width: 100%;
    flex: 1;
    justify-content: space-between;
    display: flex;
  }

  .description-business { 
    overflow-y: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
  }

  .cbb-body {
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .product-card {
    flex: 1;
    height: 100%;
    img {
      height: 76px;
      object-fit: cover; /* Ajusta cómo se ajusta la imagen dentro de la tarjeta */
    }
  }
  
`;
