import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';

interface CardProps {
  content: string;
  variant: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // For passing icons like BsCurrencyDollar
  onClick?: () => void;
  redirectTo?: string; // Optional redirect URL
}

const CardComponent: React.FC<CardProps> = ({
  content,
  variant,
  Icon,
  onClick,
  redirectTo
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (redirectTo) navigate(redirectTo); // Handle navigation if redirectTo is provided
  };

  return (
    <div className="card-info">
      <Card
        onClick={handleClick}
        bg={variant.toLowerCase()} // Using the variant prop
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2 card-d"
      >
        <Card.Body>
          <Icon className="ms-2 card-icon" /> {/* Render the passed Icon */}
          <Card.Title className="card-title mt-4">{content}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
