/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
const ModalPix = ({ open, onClose, qrCode, qrCodeImg }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Checkout</DialogTitle>
      <div>
        <img
          src={`data:image/png;base64, ${qrCodeImg}`}
          alt="QR Code"
          width={200}
          height={200}
        />
      </div>
    </Dialog>
  );
};

export default ModalPix;
