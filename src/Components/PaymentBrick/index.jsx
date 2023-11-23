/* eslint-disable react/prop-types */
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Overlay } from "./styles";
import { addAtleta } from "../../service/useAtletas";
initMercadoPago("TEST-1f533cd7-7d92-402c-ada6-4a4f61ea4866");

export default function Checkout({ amount, athleteForm, file }) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
          if (response.status === "approved") {
            addAtleta(athleteForm, file);
            window.paymentBrickController.unmount();
            navigate("/confirmed");
          }
          resolve();

          if (response && selectedPaymentMethod !== "credit_card") {
            openNewTab(response);
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
