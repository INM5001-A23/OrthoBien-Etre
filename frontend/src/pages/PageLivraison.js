import React from "react";
import ModelePage from "../layout/ModelePage";
import Button from "../components/Bouton";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AxiosContext } from "..";
import { useNavigate } from "react-router-dom";


const Livraison = () => {

    const navigate = useNavigate();
const axios = useContext(AxiosContext);

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  mode: "onBlur",
  defaultValues: {
    prenom: "",
    nom: "",
  },
});

const handleFormulaireInscription = handleSubmit((data) => {
    axios
        .post("/livraison", data)
        .then(function (response) {
        if (response.status === 200) {
            navigate("/commande");
        } else {
            // TODO afficher message erreur
        }
        })
        .catch(function (error) {
        // handle error
        // TODO afficher message erreur
        console.log(error);
        });
    });

    return (
        <ModelePage>
            <Container>
                <h1>Insérer information de livraison</h1>
                <hr></hr>
                <Form className=" mb-5" onSubmit={handleFormulaireInscription}>
                    <Row>
                        <Col xs={5} className="pe-5">
                            <h4> Informations de l'acheteur </h4>
                            <Form.Group className="mb-3 mx-auto" controlId="formBasicPrenom">
                                <Form.Label>Prenom</Form.Label>
                                <Form.Control type="text"
                                {...register("prenom", {
                                    required: "Ce champ est obligatoire",
                                    pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: "Lettres de l'alphabet uniquement",
                                    },
                                    minLength: {
                                    value: 4,
                                    message: "Longueur minimale est de 4 caractères",
                                    },
                                })} />
                                <p style={{ color: "red" }}>{errors.prenom?.message}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-auto" controlId="formBasicNom">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text"
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
                                })} />
                                <p style={{ color: "red" }}>{errors.nom?.message}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
                                <Form.Label>Adresse courriel</Form.Label>
                                <Form.Control type="email"
                                    {...register("courriel", {
                                        required: "Ce champ est obligatoire",
                                        pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Veuillez respecter le format: 'nomutilisateur@domaine.com'",
                                    },
                                })} />
                                <p style={{ color: "red" }}>{errors.courriel?.message}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                                <Form.Label>Numero de telephone</Form.Label>
                                <Form.Control type="tel"
                                    placeholder="(000)-000-0000"
                                    name="telephone"
                                    {...register("telephone", {
                                    required: "Ce champ est obligatoire",
                                    pattern: {
                                        value: /^\(\d{3}\)-\d{3}-\d{4}$/,
                                        message: "Veuillez respecter le format: '(000)-000-0000'",
                                    },
                                    })} />
                                    <p style={{ color: "red" }}>{errors.telephone?.message}</p>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <h4> Adresse de livraison et de facturation </h4>

                            <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                                <Form.Label>No. et nom de la rue</Form.Label>
                                <Form.Control type="text" 
                                {...register("rue", {
                                    required: "Ce champ est obligatoire",
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

                            <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                                <Form.Label>Ville</Form.Label>
                                <Form.Control type="text" 
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

                            <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                                <Form.Label>Code Postal</Form.Label>
                                <Form.Control type="text" 
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
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Select
                                    {...register("province", {
                                        required: "Veuillez choisir une option",
                                    })}
                                    >
                                    <option>Québec</option>
                                    <option>Ontario</option>
                                </Form.Select>
                                <p style={{ color: "red" }}>{errors.province?.message}</p>
                                </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                                        <Form.Label>Pays</Form.Label>
                                        <Form.Select
                                        {...register("pays", {
                                            required: "Veuillez choisir une option",
                                        })}
                                        >
                                        <option>Canada</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "20px"
                        }}
                        >
                        <Button className="w-25" type="submit" variant="outline-primary">
                            Continuer
                        </Button>
                    </Row>  
                </Form>
            </Container>
        </ModelePage>
    )
}

export default Livraison;