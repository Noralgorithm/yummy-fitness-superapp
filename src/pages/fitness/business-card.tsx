import styledComponents from "styled-components";
import { FunctionComponent } from "react";
import { Card, Avatar } from "antd";

const BusinessCard: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Card
        className={`card-business`}
        hoverable
        cover={
          <img
            className={"image-card-business"}
            src="https://media-cdn.tripadvisor.com/media/photo-s/19/76/f0/71/pizze-varie-di-gianni.jpg"
          />
        }
        bodyStyle={{ padding: "0px" }}
      >
        <div className={"card-business-body"}>
          <div className="cbb-head">
            <div>
              <Avatar src="https://i.pinimg.com/736x/cc/4e/1d/cc4e1de7025633fb8c1e91eca8a0f147.jpg" />
            </div>
            <div className="text-brand-gray font-bold">30 min</div>
          </div>
          <div>
            <span className={"text-brand-purple-dark text-1-rem font-bold"}>
              Pizza x Metro
            </span>
            <br />
            <span className={"text-brand-gray description-business"}>
              Compra tu Pizza x Metro!
            </span>
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
    height: 200px; /* Establece la altura fija deseada */
    padding: 0px;
  }
  
  .image-card-business {
    max-height: 120px; /* Establece la altura máxima para la imagen dentro de la tarjeta */
    object-fit: cover; /* Ajusta cómo se ajusta la imagen dentro de la tarjeta */
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
`;
