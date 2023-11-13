import { Button, Card, Container, Form, Row, Stack } from "react-bootstrap";

import Etoile from "./Etoile";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import { Link, useNavigate } from "react-router-dom";

function FormulaireEvaluation() {
  const navigate = useNavigate();
  const axios = useContext(AxiosContext);
  const [produit, setProduit] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`/produits/${codeProduit}`)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //       setProduit(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //       if (error.response.status === 404) {
  //         navigate("/product-not-found");
  //       }
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, [axios]);

  return (
    <Container
      style={{
        alignContent: "space-around",
        textAlign: "center",
        maxWidth: "40%",
      }}
    >
      <h3 style={{ margin: "30px 0 0 0" }}>Créer une évaluation client</h3>

      <Stack gap={2}>
        <h2 style={{ textAlign: "center" }}></h2>
        <Container
          style={{
            backgroundColor: "#80808014",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Card.Body>
            <Card.Subtitle style={{ margin: "0 0 5px 0" }}>
              Évaluation globale
            </Card.Subtitle>
            <Etoile size="30px" />

            <Card.Subtitle style={{ margin: "15px 0 5px 0" }}>
              Ajouter un titre
            </Card.Subtitle>
            <Form.Control
              as="textarea"
              placeholder="Écrirez votre commentaire ici..."
              style={{ height: "100px" }}
            />

            <Button variant="secondary" style={{ margin: "10px 0 0 0" }}>
              <Card.Subtitle
              // onClick={() => navigate(`/produit/${codeProduit}/evaluation`)}
              >
                Soumettre
              </Card.Subtitle>
            </Button>
          </Card.Body>
        </Container>
      </Stack>
    </Container>
  );
}

export default FormulaireEvaluation;
