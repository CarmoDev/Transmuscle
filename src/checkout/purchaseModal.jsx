import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Checkout from './Checkout';

const PurchaseModal = ({ open, onClose, clientSecret }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Purchase Reports</DialogTitle>
      <DialogContent>
        <Checkout clientSecret={clientSecret}  />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseModal;
