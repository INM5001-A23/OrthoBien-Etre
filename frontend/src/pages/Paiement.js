import { Container, Stack } from "react-bootstrap";
import ModelePage from "../layout/ModelePage";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "..";

function PagePaiement() {
  const axios = useContext(AxiosContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/categories")
      .then(function (response) {
        // handle success
        console.log(response);
        setItems(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <ModelePage>
      <Stack gap={3}></Stack>
    </ModelePage>
  );
}

export default PagePaiement;
