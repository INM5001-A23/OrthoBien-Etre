import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "..";
import { Container, Form, ListGroup, Stack, Row, Col } from "react-bootstrap";
import { AxiosContext } from "..";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import CarteCommande from "./CarteCommande";

function Onglets() {
  const axios = useContext(AxiosContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const user = useContext(UserContext);

  const [orderHistory, setOrderHistory] = useState([])

  const handleOrderHistory = async (req, res) => {
    try {
      const response = await axios.get(`/commande/${user.courriel}`);
      console.log(response.data)
      setOrderHistory(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }

  useEffect( () => {
    handleOrderHistory();
  }, [user]);

  const handleFormulaire = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append("files", data.imageProduit[0]);

    var test = await axios.put("/modificationProduit", formData);
  });

  return (
    <Tabs defaultActiveKey="profil" id="fill-tab-example" className="mb-3" fill>
      <Tab eventKey="profil" title="Profil">
        <Form onSubmit={handleFormulaire}>
          <Container style={{ width: "600px" }}>
            <Stack>
              {/* Input PRENOM */}
              <Form.Group as={Col} controlId="prenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  value={user?.prenom || user?.prenomAdmin}
                  {...register("prenom", {
                    required: "Ce champ est obligatoire",
                    pattern: {
                      value: /^[a-zA-ZÀ-ÖØ-öø-ÿ\s\p'-]+$/,
                      message: "Lettres de l'alphabet uniquement",
                    },
                    minLength: {
                      value: 4,
                      message: "Longueur minimale est de 4 caractères",
                    },
                  })}
                />
                <p style={{ color: "red" }}>{errors.prenom?.message}</p>
              </Form.Group>
              {(!user || user?.role !== "admin") && (
                <div>
                  {/* Input NOM */}
                  <Form.Group as={Col} controlId="nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      value={user.nom}
                      {...register("nom", {
                        required: "Ce champ est obligatoire",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Lettres de l'alphabet uniquement",
                        },
                        minLength: {
                          value: 4,
                          message: "Longueur minimale est de 4 caractères",
                        },
                      })}
                    />
                    <p style={{ color: "red" }}>{errors.nom?.message}</p>
                  </Form.Group>
                  {/* Input TELEPHONE */}
                  <Form.Group as={Col} controlId="telephone">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="(000)-000-0000"
                      name="telephone"
                      value={user.telephone}
                      {...register("telephone", {
                        required: "Ce champ est obligatoire",
                        pattern: {
                          value: /^\(\d{3}\)-\d{3}-\d{4}$/,
                          message:
                            "Veuillez respecter le format: '(000)-000-0000'",
                        },
                      })}
                    />
                    <p style={{ color: "red" }}>{errors.telephone?.message}</p>
                  </Form.Group>

                  <h5>Adresse</h5>
                  {/* Input RUE */}
                  <Form.Group as={Col} controlId="rue">
                    <Form.Label>Rue</Form.Label>
                    <Form.Control
                      value={user.rue}
                      placeholder="1234 Main St"
                      type="text"
                      {...register("rue", {
                        pattern: {
                          value: /^[A-Za-z0-9\s.,-]+$/,
                          message:
                            "Veuillez respecter le format: 'nomutilisateur@domaine.com'",
                        },
                        minLength: {
                          value: 4,
                          message: "Longueur minimale est de 4 caractères",
                        },
                      })}
                    />
                    <p style={{ color: "red" }}>{errors.rue?.message}</p>
                  </Form.Group>

                  {/* Input VILLE */}
                  <Form.Group as={Col} controlId="ville">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                      value={user.ville}
                      type="text"
                      {...register("ville", {
                        required: "Ce champ est obligatoire",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Lettres de l'alphabet uniquement",
                        },
                        minLength: {
                          value: 4,
                          message: "Longueur minimale est de 4 caractères",
                        },
                      })}
                    />
                    <p style={{ color: "red" }}>{errors.ville?.message}</p>
                  </Form.Group>

                  {/* Input PROVINCE */}
                  <Form.Group as={Col} controlId="province">
                    <Form.Label>Province</Form.Label>
                    <Form.Select
                      value={user.province}
                      {...register("province", {
                        required: "Veuillez choisir une option",
                      })}
                    >
                      <option>Québec</option>
                      <option>Ontario</option>
                    </Form.Select>
                    <p style={{ color: "red" }}>{errors.province?.message}</p>
                  </Form.Group>

                  {/* Input CODE POSTAL */}
                  <Form.Group as={Col} controlId="codePostal">
                    <Form.Label>Code Postal</Form.Label>
                    <Form.Control
                      value={user.codePostal}
                      type="text"
                      {...register("codePostal", {
                        required: "Ce champ est obligatoire",
                        pattern: {
                          value: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
                          message: "Veuillez respecter ce format: 'V7X 1L7'",
                        },
                      })}
                    />
                    <p style={{ color: "red" }}>{errors.codePostal?.message}</p>
                  </Form.Group>
                </div>
              )}
            </Stack>
          </Container>
        </Form>
      </Tab>
      {(!user || user?.role !== "admin") && (
        <Tab eventKey="commandes" title="Historique des commandes">
          <ListGroup variant="flush">
          {orderHistory && orderHistory.map( (item) => (
              <ListGroup.Item mb={2}>
                <Stack
                      direction="vertical"
                      gap={1}
                      style={{ justifyContent: "center", margin: "0px" }}
                    >
                      <Row>
                        <Col><h5>Order to: {item.shippingInfos.prenomClient} {item.shippingInfos.nomClient}</h5></Col>
                        
                      </Row>
                      <Row><p>Order Id: {item.orderId}</p></Row>
                      <Row>
                        <Col>Status: {item.status}</Col>
                        <Col>Total: ${item.total} </Col>
                      </Row>
                    </Stack>
              </ListGroup.Item>
          ))
          }
          </ListGroup>
        </Tab>
      )}
    </Tabs>
  );
}

export default Onglets;
