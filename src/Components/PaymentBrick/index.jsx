/* eslint-disable react/prop-types */
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { useState } from "react";
import { Overlay } from "./styles";
initMercadoPago("APP_USR-bb99ea4d-1c64-49cf-84c2-da66be59de6e");

export default function Checkout({ amount, athleteForm }) {
  const [isLoading, setIsLoading] = useState(true);

  const initialization = {
    amount: amount,
  };

  const customization = {
    paymentMethods: {
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    const form = {
      ...formData,
      athleteForm,
    };

    const route =
      selectedPaymentMethod === "credit_card"
        ? "process_payment"
        : "v1/payments";
    return new Promise((resolve, reject) => {
      fetch(`https://bronze-nightingale-gear.cyclic.app/${route}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("aq", response);

          resolve();

          if (response && selectedPaymentMethod !== "credit_card") {
            openNewTab(response.qrcodeURL);
          }
        })
        .catch((error) => {
          console.log("Error on payment", error);
          // lidar com a resposta de erro ao tentar criar o pagamento
          reject();
        });
    });
  };

  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };

  const onReady = async () => {
    setIsLoading(false);
  };

  function openNewTab(url) {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    } else {
      console.error("Não foi possível abrir a nova guia");
    }
  }

  return (
    <Overlay>
      {isLoading && <div className="loader" />}
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </Overlay>
  );
}
