import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Container, Button, FormContainer, Input, Label } from "./styles";
import PurchaseModal from "../../checkout/purchaseModal";

const stripePromise = loadStripe(
  "pk_test_51OBgZiASmfrlQVyLYPmjWhLFeqFT5yry9Po06roCEG4REMl3Q24Y8BftrxolgtAJLBqGUwkHr53oKSXYeOdrlxvA00sS5bc8zm"
);

export default function Subscription() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rg: "",
    cpf: "",
    categoria: "",
    peso: "",
    idade: "",
    rua: "",
    cep: "",
    numero: "",
    bairro: "",
    estado: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const [clientSecret, setClientSecret] = useState("");

  function getClientSecret() {
    fetch("http://localhost:2727/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formData,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error("Erro ao obter o clientSecret:", error);
      });
  }

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const handlePurchase = async () => {
    await getClientSecret();
    setModalVisible(true);
  };

  return (
    <Container>
      <FormContainer>
        <Label>
          RG:
          <Input
            type="text"
            name="rg"
            placeholder="Digite o RG"
            value={formData.rg}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          CPF:
          <Input
            type="text"
            name="cpf"
            placeholder="Digite o CPF"
            value={formData.cpf}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Nome:
          <Input
            type="text"
            name="name"
            placeholder="Digite o nome"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Email:
          <Input
            type="text"
            name="email"
            placeholder="Digite o email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Categoria:
          <Input
            type="text"
            name="categoria"
            placeholder="Digite o categoria"
            value={formData.categoria}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Idade:
          <Input
            type="text"
            name="idade"
            placeholder="Digite o Idade"
            value={formData.idade}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Peso:
          <Input
            type="text"
            name="peso"
            placeholder="Digite o Peso"
            value={formData.peso}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          rua:
          <Input
            type="text"
            name="rua"
            placeholder="Digite o rua"
            value={formData.rua}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          CEP:
          <Input
            type="text"
            name="cep"
            placeholder="Digite o CEP"
            value={formData.cep}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Bairro:
          <Input
            type="text"
            name="bairro"
            placeholder="Digite o Bairro"
            value={formData.bairro}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Número:
          <Input
            type="text"
            name="numero"
            placeholder="Digite o Número"
            value={formData.numero}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Estado:
          <Input
            type="text"
            name="estado"
            placeholder="Digite o Estado"
            value={formData.estado}
            onChange={handleInputChange}
          />
        </Label>
      </FormContainer>
      <Button onClick={handlePurchase}>Pagar</Button>

      {clientSecret && (
        <Elements
          options={options}
          stripe={stripePromise}
          onClick={handlePurchase}
        >
          <PurchaseModal
            open={modalVisible}
            onCancel={closeModal}
            clientSecret={clientSecret}
          />
        </Elements>
      )}
    </Container>
  );
}
