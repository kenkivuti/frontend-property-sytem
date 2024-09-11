import Card from "react-bootstrap/Card";
import { BsCurrencyDollar, BsCashStack, BsClipboard2Fill, BsTicketPerforated } from 'react-icons/bs';

function CardComponent() {
  // Array of card data, each with a unique header and icon
  const CardData = [
    {  Icon: BsCashStack, content: "House Bills", variant: "Primary" },
    {  Icon: BsCurrencyDollar, content: "Payments", variant: "Secondary" },
    {  Icon: BsClipboard2Fill, content: "Policies", variant: "Danger" },
    {  Icon: BsTicketPerforated, content: "Ticket", variant: "Warning" }
  ];

  return (
    <div className="card-info">
      {CardData.map((card, index) => (
        <Card
          bg={card.variant.toLowerCase()}
          key={index}
          text={card.variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2 card-d"
        >
          {/* Card Header */}
          {/* <Card.Header>
            {card.Header}
          </Card.Header> */}

          {/* Card Body */}
          <Card.Body>
          <card.Icon className="ms-2 card-icon" /> 
            <Card.Title className="card-title mt-4">{card.content}</Card.Title>
            {/* <Card.Text>
              {card.content} 
            </Card.Text> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
