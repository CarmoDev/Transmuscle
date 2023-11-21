import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { useState } from "react";
import { Overlay } from "./styles";
initMercadoPago("TEST-1f533cd7-7d92-402c-ada6-4a4f61ea4866");

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(true);
  const [qrCode, setQrCode] = useState();
  const [qrCodeImg, setQrCodeImg] = useState();

  const initialization = {
    amount: 100,
  };

  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    // callback chamado ao clicar no botão de submissão dos dados
    const route =
      selectedPaymentMethod === "credit_card"
        ? "process_payment"
        : "v1/payments";
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/${route}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setQrCode(response.qrCodeText);
          setQrCodeImg(response.qrCodeIMG);
          resolve();
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
      <div>
        <p>{qrCode}</p>
        <img
          src={`data:image/png;base64, ${qrCodeImg}`}
          alt="Red dot"
          width={200}
          height={200}
        />
      </div>
    </Overlay>
  );
}
