
import React from "react";
import ModelePage from "../layout/ModelePage";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import BouttonCommande from "../components/BouttonCommande"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AxiosContext } from "..";
import { useNavigate } from "react-router-dom";

function PageCommande() {

  const countries = [
    {
    value: "CA",
    text: "Canada"
    },
    {
    value: "MX",
    text: "Mexico"
    },
    {
    value: "US",
    text: "United States"
    }
]

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
    .post("/inscription", data)
    .then(function (response) {
      if (response.status === 200) {
        navigate("/connexion");
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

  const location = useLocation();
  
  const totalAvantTaxes = location.state.total;
  const tps =totalAvantTaxes*(5/100);
  const tvq = totalAvantTaxes*(9.975/100);
  const fraisLivraison = totalAvantTaxes*(2/100);
  const totalApresTaxes = totalAvantTaxes + tvq + tps + fraisLivraison;

  return (
    <ModelePage>
      <Container>
        <h1>Passer la commande</h1>
        <hr></hr>
        <div>
        <Row>
          <Col xs={8}>
            <h4> Informations de livraison </h4>
            <Form className="w-75 mb-5" onSubmit={handleFormulaireInscription}>
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

              <h4> Adresse de livraison et de facturation </h4>

              <Form.Group className="mb-3 mx-auto" controlId="formBasicTel">
                <Form.Label>No. et nom de la rue</Form.Label>
                <Form.Control type="text" 
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
            </Form>
          </Col>
          <Col>
            <PayPalScriptProvider options={{"client-id": "AaI3aP2GIIHpPJp05ca6a380uZLugk_tJHJOEqh3JRWxVsSlLNrwxX3vSB82f4cb6iSpJJdCU4hVFreb"}}>
            <Row className="p-2"><h3>Récapitulatif de la commande</h3></Row>
              <Row>
                <Col>
                  <Row className="p-1">Sous-Total:</Row>
                  <Row className="p-1">Frais de Livraison:</Row>
                  <Row className="p-1">TPS:</Row>
                  <Row className="p-1">TVQ:</Row>
                  <Row className="fw-bolder p-1" style={{color:'#800020', borderTop: 'solid lightGray'}}>TOTAL:</Row>
                </Col>
                <Col className="">
                  <Row className="p-1 d-flex justify-content-end">{totalAvantTaxes.toFixed(2)} CAD</Row>
                  <Row className="d-flex justify-content-end p-1">{fraisLivraison.toFixed(2)} CAD</Row>
                  <Row className="d-flex justify-content-end p-1">{tps.toFixed(2)} CAD</Row>
                  <Row className="p-1 d-flex justify-content-end">{tvq.toFixed(2)} CAD</Row>
                  <Row className="d-flex justify-content-end p-1 fw-bolder" style={{color:'#800020', borderTop: 'solid lightGray'}}>{totalApresTaxes.toFixed(2)} CAD</Row>
                </Col>
                <hr></hr>
              </Row>
              <Row className=""><BouttonCommande total={totalApresTaxes} /></Row>
            </PayPalScriptProvider>
            
          </Col>
        </Row>
        </div>
        
      </Container>
    </ModelePage>
  );
}

export default PageCommande;
