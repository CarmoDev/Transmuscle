/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import { Container, Button, FormContainer, Poster, Checkbox } from "./styles";
import { FileUploader } from "react-drag-drop-files";

import Logo from "./Assets/banner.jpg";

import { FloatInput, FloatSelect } from "../../Components/FloatInput";
import ModalOng from "./Components/ModalOng";
import ModalCoupon from "./Components/ModalCoupon";
import Checkout from "../../Components/PaymentBrick";
import { addAtleta, getValores } from "../../service/useAtletas";

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

  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isDocsChecked, setIsDocsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOngVisible, setModalOngVisible] = useState(true);
  const [file, setFile] = useState(null);
  const [cantPay, setCantPay] = useState(true);
  const [isCouponVisible, setCouponVisible] = useState(false);
  const [valores, setValores] = useState(0);
  const [amount, setAmount] = useState(valores);
  const [isLoading, setIsLoading] = useState(true);

  const fileTypes = ["PDF"];

  const handleChange = (file) => {
    setFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePrivacyChange = (event) => {
    setIsPrivacyChecked(event.target.checked);
  };

  const handleDocsChange = (event) => {
    setIsDocsChecked(event.target.checked);
  };

  const closeModalOng = () => {
    setModalOngVisible(false);
  };

  const closeModalCoupon = () => {
    setCouponVisible(false);
    setModalVisible(true);
  };

  const handlePurchase = async (cupom) => {
    if (cupom?.includes("A9")) {
      setAmount(0);
      addAtleta(formData, file);
      return setCouponVisible(false);
    } else {
      setModalVisible(true);
    }

    return setCouponVisible(false);
  };

  useEffect(() => {
    const allFilled = Object.keys(formData).length >= 16;

    if (allFilled && file && isDocsChecked && isPrivacyChecked) {
      return setCantPay(false);
    }

    setCantPay(true);
  }, [formData, file, isDocsChecked, isPrivacyChecked]);

  useEffect(() => {
    async function fetchValores() {
      try {
        const valoresData = await getValores();
        setValores(valoresData?.padrao);
      } catch (error) {
        console.error("Erro ao obter valores:", error);
      }
    }

    fetchValores();
  }, []);

  useEffect(() => {
    if (valores !== 0) {
      setAmount(valores);
      setIsLoading(false);
    }
  }, [valores]);

  return (
    <Container>
      <ModalOng open={modalOngVisible} onClose={closeModalOng} />

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
            <option>PCD</option>
            <option>Não-Binárie</option>
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
            label="Telefone(+55 11 91234-4321):"
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
            <input
              type="checkbox"
              id="docs"
              name="docs"
              checked={isDocsChecked}
              onChange={handleDocsChange}
              required
            />
            <span className="checkmark"></span>
          </Checkbox>

          <Checkbox>
            <p>
              Eu concordo com <span>termos de uso</span> e a{" "}
              <span>Política de Privacidade</span>
            </p>
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={isPrivacyChecked}
              onChange={handlePrivacyChange}
              required
            />
            <span className="checkmark"></span>
          </Checkbox>

          <Button onClick={() => setCouponVisible(true)} disabled={cantPay}>
            {isLoading ? "Carregando..." : `Pagar • ${valores}R$`}
          </Button>
        </div>
      </FormContainer>

      <ModalCoupon
        open={isCouponVisible}
        onClose={closeModalCoupon}
        onConfirm={handlePurchase}
      />
      {modalVisible && (
        <Checkout amount={amount} athleteForm={formData} file={file} />
      )}
    </Container>
  );
}
