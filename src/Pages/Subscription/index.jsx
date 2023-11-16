/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { Container, Button, FormContainer, Poster, Checkbox } from "./styles";
import PurchaseModal from "../../checkout/purchaseModal";
import { FileUploader } from "react-drag-drop-files";

import Logo from "../../assets/images/GoldenLogoFull.png";

import { FloatInput, FloatSelect } from "../../Components/FloatInput";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [file, setFile] = useState(null);

  const fileTypes = ["PDF"];

  const handleChange = (file) => {
    setFile(file);
  };
  console.log(file);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePurchase = async () => {
    setModalVisible(true);
  };

  return (
    <Container>
      <FormContainer>
        <Poster src={Logo} />

        <div className="register">
          <h1>Registro de Atleta</h1>
          <FloatInput
            type="text"
            name={"name"}
            label="Nome:"
            value={formData.name}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name={"rg"}
            label={"RG:"}
            value={formData.rg}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name={"cpf"}
            label="CPF:"
            value={formData.cpf}
            onChange={handleInputChange}
          />

          <FloatInput
            type="date"
            name={"birthday"}
            label="Data de nascimento:"
            value={formData.date}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="email"
            label="Email:"
            value={formData.email}
            onChange={handleInputChange}
          />

          <FloatSelect
            value={formData.categoria}
            onChange={handleInputChange}
            label={"Categoria"}
            name="categoria"
          >
            <option>Women's Physique</option>
            <option>Wellness Fitness</option>
            <option>Women's Physique</option>
            <option>Body Fitness</option>
            <option>Men's Physique</option>
            <option>Classic Physique</option>
            <option>Bodybuilding</option>
          </FloatSelect>

          <FloatSelect
            value={formData.genero}
            onChange={handleInputChange}
            label={"Genero"}
            name="Genero"
          >
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Não Binario</option>
          </FloatSelect>

          <FloatInput
            type="text"
            name="Telefone"
            label="Telefone:"
            value={formData.telefone}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="instagram"
            label="Instagram:"
            value={formData.instagram}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="knows"
            label="Como conheceu a página:"
            value={formData.knows}
            onChange={handleInputChange}
          />
        </div>

        <div className="address">
          <h1>Endereço completo</h1>
          <FloatInput
            type="text"
            name="cep"
            label="CEP:"
            value={formData.cep}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="pais"
            label="País"
            value={formData.pais}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="estado"
            label="Estado"
            value={formData.estado}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="bairro"
            label="Bairro:"
            value={formData.bairro}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="rua"
            label="rua"
            value={formData.rua}
            onChange={handleInputChange}
          />

          <FloatInput
            type="text"
            name="numero"
            label="Número"
            value={formData.numero}
            onChange={handleInputChange}
          />
        </div>

        <div className="footer">
          <h3>Laudo Médico *</h3>
          <FileUploader
            hover={"Solte o laudo médico aqui"}
            handleChange={handleChange}
            name="laudo médico"
            types={fileTypes}
            required
          >
            <div className="laudo">
              {file && <span>Arquivo selecionado:</span>}

              {file ? (
                <p>{file.name}</p>
              ) : (
                <p>Clique para selecionar o laudo médico ou arraste e solte</p>
              )}

              {!file && <span>Formatos Permitidos: PDF</span>}
            </div>
          </FileUploader>
          <small>
            Esse campeonato é exclusivo para trans e não binários por esse
            motivos solicitamos laudo médico
          </small>

          <Checkbox>
            <p>
              {" "}
              Entendo que no dia da pesagem devo levar meus{" "}
              <span>documentos </span>e o <span>laudo médico</span> para
              comprovação de transição
            </p>
            <input type="checkbox" id="docs" name="docs" required />
            <span className="checkmark"></span>
          </Checkbox>

          <Checkbox>
            <p>
              Eu concordo com <span>termos de uso</span> e a{" "}
              <span>Política de Privacidade</span>
            </p>
            <input type="checkbox" id="privacy" name="privacy" required />
            <span className="checkmark"></span>
          </Checkbox>

          <Button onClick={handlePurchase}>Pagar • 99R$</Button>
        </div>
      </FormContainer>

      <PurchaseModal open={modalVisible} onClose={closeModal} />
    </Container>
  );
}
