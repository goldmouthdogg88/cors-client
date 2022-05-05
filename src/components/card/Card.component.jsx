import CardHeader from "./Card__header.component";
import CardBody from "./Card__body.component";
import CardFooter from "./Card__footer.component";

const Card = (props) => {
  return (
    <div className="card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default Card;
