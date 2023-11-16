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

const ModalOng = ({ open, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
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
      email: email
    };
  
    formData.append("data", JSON.stringify(data));

    try {
      const response = await fetch("http://localhost:2727/upload", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        console.log("Arquivo enviado com sucesso!");
      } else {
        console.error("Falha ao enviar o arquivo.");
      }
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Isenção para ONGs</DialogTitle>

      <Header>
        <h4>
          Como forma de tornar o campeonato ainda mais inclusivo oferecemos
          isenção para moradores de ONGs, caso você se encaixe pedimos apenas
          que nos envie um documento comprovando.
        </h4>
      </Header>

      <DialogContent>
        <input placeholder="Nome" type="text" onChange={(event) => setName(event.target.value)} />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <br />
        <small>Apenas PDF, DOCX, Doc</small>
      </DialogContent>
      <DialogActions>
        <Footer>
          <Button onClick={onClose} color="primary">
            Fechar
          </Button>

          <PayButton onClick={enviar} color="primary">
            Enviar
          </PayButton>
        </Footer>
      </DialogActions>
    </Dialog>
  );
};

export default ModalOng;
