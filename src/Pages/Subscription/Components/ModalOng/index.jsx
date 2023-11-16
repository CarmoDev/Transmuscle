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

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
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
        <input
          type="file"
          accept=".pdf, .docx, .doc"
          onChange={handleFileChange}
        />
        <br />
        <small>Apenas PDF, DOCX, Doc</small>
      </DialogContent>
      <DialogActions>
        <Footer>
          <Button onClick={onClose} color="primary">
            Fechar
          </Button>

          <PayButton color="primary">Enviar</PayButton>
        </Footer>
      </DialogActions>
    </Dialog>
  );
};

export default ModalOng;
