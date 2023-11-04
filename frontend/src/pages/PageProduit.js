import { Card, Container, Spinner, Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";
import DetailsProduit from "../components/DetailsProduit";
import { useNavigate, useParams } from "react-router-dom";

function PageProduit() {
  const axios = useContext(AxiosContext);
  const navigate = useNavigate();
  const { codeProduit } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    axios
      .get(`/Produits/${codeProduit}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setProduit(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if (error.response.status === 404) {
          navigate("/product-not-found");
        }
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  console.log(produit);

  return (
    <ModelePage>
      <Stack gap={3}>
        {produit ? (
          <DetailsProduit produit={produit} />
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Stack>
    </ModelePage>
  );
}

export default PageProduit;
