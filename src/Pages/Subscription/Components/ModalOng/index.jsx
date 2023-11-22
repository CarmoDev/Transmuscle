/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Footer, Header, PayButton } from "./styles";
import { useState } from "react";
import axios from "axios";

const ModalOng = ({ open, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasSendFile, setHasSendFile] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };

  const enviar = async () => {
    if (!selectedFile) {
      console.error("Nenhum arquivo selecionado.");
      return;
    }

    const formData = new FormData();
    formData.append("pdfFile", selectedFile);

    const data = {
      name: name,
      email: email,
    };

    formData.append("data", JSON.stringify(data));

    try {
      const response = await axios.post(
        "https://bronze-nightingale-gear.cyclic.app/upload",
        formData
      );

      if (response.status === 200) {
        console.log("Arquivo enviado com sucesso!");
      } else {
        console.error("Falha ao enviar o arquivo.");
      }
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    } finally {
      setHasSendFile(true);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Isenção para ONGs</DialogTitle>
      {!hasSendFile && (
        <>
          <Header>
            <h4>
              Como forma de tornar o campeonato ainda mais inclusivo oferecemos
              isenção para moradores de ONGs, caso você se encaixe pedimos
              apenas que nos envie um documento comprovando.
            </h4>
          </Header>

          <DialogContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <input
              style={{ width: "45%" }}
              placeholder="Nome"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              style={{ width: "45%" }}
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="file"
              accept=".pdf, .docx"
              onChange={handleFileChange}
            />
            <br />
            <small>Apenas PDF, DOCX, Doc</small>
          </DialogContent>
        </>
      )}

      {hasSendFile && (
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <h2>Arquivo enviado com sucesso!</h2>

          <Header>
            <h4>
              Você receberá o feedback sobre o status do seu documento via
              e-mail, caso venha à ser aprovado também receberá um código, o
              qual deve inserir no ato da compra para ganhar sua isenção.
            </h4>
          </Header>
        </DialogContent>
      )}

      <DialogActions
        style={
          hasSendFile
            ? { justifyContent: "center" }
            : { justifyContent: "flex-end" }
        }
      >
        {!hasSendFile && (
          <Footer>
            <Button onClick={onClose} color="primary">
              Fechar
            </Button>

            <PayButton onClick={enviar} color="primary">
              Enviar
            </PayButton>
          </Footer>
        )}

        {hasSendFile && (
          <PayButton onClick={onClose} color="primary">
            Ok! Obrigado
          </PayButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalOng;
