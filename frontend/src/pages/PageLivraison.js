import React from "react";
import ModelePage from "../layout/ModelePage";
import Button from "../components/Bouton";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { useNavigate,useLocation } from "react-router-dom";


const Livraison = () => {
    
    const location = useLocation();
    const totalAvantTaxes = location.state.total;
    const cartItems = location.state.cartItems;     
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
        mode: "onBlur",
        defaultValues: {
            prenom: "Fineas",
            nom: "Fudge",
            courriel: "ff@email.com",
            telephone: "(000)-000-0000",
            civique: "123A",
            rue: "Rue Abc",
            ville: "Qwerty",
            postal:"Q1Q 1Q1",
            province: "Québec",
            pays: "Canada"
        },
        });

    const handleformulaireLivraison = handleSubmit((data) => {
         navigate("/commande",{
                    state: { total: totalAvantTaxes, cartItems: cartItems, shippingInfos: data },
                  });
        });

    return (
        <ModelePage>
            <Container>
                <h1>Insérer informations de livraison</h1>
                <hr></hr>
                <Form className=" mb-5" onSubmit={handleformulaireLivraison}>
                    <Row>
                    <Col xs={5} className="pe-5">
                            <h4> Informations de l'acheteur </h4>
                            <Form.Group className="mb-3 mx-auto" controlId="formBasicPrenom">
                                <Form.Label>Prenom</Form.Label>
                                <Form.Control type="text" name="prenom"
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
                                <Form.Control type="text" name="nom"
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
                                <Form.Control type="email" name="courriel"
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
                            <Row>
                            <Col xs={4}>
                                    <Form.Group className="mb-3 mx-auto" controlId="formBasicCivique">
                                        <Form.Label>Numero civique</Form.Label>
                                        <Form.Control type="text" name="civique"
                                        {...register("civique", {
                                            required: "Ce champ est obligatoire",
                                            pattern: {
                                            value: /^[A-Za-z0-9\s.,-]+$/,
                                            message: "Veuillez respecter le format",
                                            },
                                            minLength: {
                                            value: 4,
                                            message: "Longueur minimale est de 4 caractères",
                                            },
                                        })}
                                        />
                                        <p style={{ color: "red" }}>{errors.rue?.message}</p>
                                    </Form.Group>
                                </Col>      
                                <Col>
                                    <Form.Group className="mb-3 mx-auto" controlId="formBasicStreet">
                                        <Form.Label>Nom de la rue</Form.Label>
                                        <Form.Control type="text" name="rue"
                                        {...register("rue", {
                                            required: "Ce champ est obligatoire",
                                            pattern: {
                                            value: /^[A-Za-z0-9\s.,-]+$/,
                                            message: "Longueur minimale est de 4 caractères",
                                            },
                                            minLength: {
                                            value: 4,
                                            message: "Longueur minimale est de 4 caractères",
                                            },
                                        })}
                                        />
                                        <p style={{ color: "red" }}>{errors.rue?.message}</p>
                                    </Form.Group>
                                </Col>
                            </Row>
                            

                            <Form.Group className="mb-3 mx-auto" controlId="formBasicCity">
                                <Form.Label>Ville</Form.Label>
                                <Form.Control type="text" name="ville"
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

                            <Form.Group className="mb-3 mx-auto" controlId="formBasicZip">
                                <Form.Label>Code Postal</Form.Label>
                                <Form.Control type="text" name="postal"
                                {...register("postal", {
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
                                    <Form.Group className="mb-3 mx-auto" controlId="formBasicProvince">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Select name="province"
                                    {...register("province", {
                                        required: "Veuillez choisir une option",
                                    })}
                                    >
                                    <option>Québec</option>
                                </Form.Select>
                                <p style={{ color: "red" }}>{errors.province?.message}</p>
                                </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3 mx-auto" controlId="formBasicCountry">
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