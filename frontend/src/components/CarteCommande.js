import Card from "react-bootstrap/Card";

function CarteCommande(commande) {
  console.log(commande);
  return (
    <Card style={{ width: "400px" }}>
      <Card.ImgOverlay>
        <Card.Title>Numéro de commande</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CarteCommande;
