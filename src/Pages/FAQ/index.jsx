import { useState } from "react";

import {
  ContactInfo,
  ContactInfoContainer,
  MessageArea,
  ContactContainer,
  Submit,
  Submitted,
  Container,
} from "./styles";

export default function FAQ() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleTopicChange(event) {
    setTopic(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSendEmail(event) {
    event.preventDefault();
    setIsLoading(true);

    const form = {
      name,
      email,
      assunto: topic,
      text: message,
    };

    fetch("https://sore-bikini-bee.cyclic.app/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(() => setSubmitted(true))
      .catch((err) => console.log("Erro no envio:", err))
      .finally(() => setIsLoading(false));
  }

  function handleNewEmail(event) {
    event.preventDefault();

    setSubmitted(false);
    setTopic("");
    setMessage("");
  }

  return (
    <Container id="faq">
      <h1>Fale Conosco</h1>
      {!submitted ? (
        <ContactContainer onSubmit={handleSendEmail}>
          <div className="content">
            <ContactInfoContainer>
              <label>Nome:</label>
              <ContactInfo
                type="text"
                value={name}
                onChange={handleNameChange}
                aria-label="Nome"
                name="Nome"
              />
            </ContactInfoContainer>

            <ContactInfoContainer>
              <label>E-mail:</label>
              <ContactInfo
                type="email"
                value={email}
                onChange={handleEmailChange}
                aria-label="E-mail"
                name="E-mail"
              />
            </ContactInfoContainer>

            <ContactInfoContainer>
              <label>Assunto:</label>
              <ContactInfo
                type="text"
                value={topic}
                onChange={handleTopicChange}
                aria-label="assunto"
                name="assunto"
              />
            </ContactInfoContainer>

            <ContactInfoContainer>
              <label>Mensagem:</label>
              <MessageArea
                value={message}
                onChange={handleMessageChange}
                aria-label="message"
                name="message"
                rows={5}
                cols={22}
              />
            </ContactInfoContainer>

            <Submit type="submit" disabled={isLoading}>
              {isLoading ? "Enviando E-mail..." : "Enviar"}
            </Submit>
          </div>
        </ContactContainer>
      ) : (
        <Submitted>
          <div>
            <h1>Muito Obrigado!💪🏼</h1>
            <h2>Você receberá um retorno em breve! tenha uma ótima semana.</h2>
          </div>

          <Submit
            onClick={handleNewEmail}
            style={{
              marginLeft: 0,
            }}
          >
            Enviar nova mensagem
          </Submit>
        </Submitted>
      )}
    </Container>
  );
}
