import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  grid-template-areas:
    "name name lastName lastName"
    "mail mail mail mail"
    "message message message message"
    "message message message message"
    "button . . . ";
  #name {
    grid-area: name;
  }
  #lastName {
    grid-area: lastName;
  }
  #mail {
    grid-area: mail;
  }

  #message {
    grid-area: message;
    height: 4rem;
    resize: none;
    width: 100%;
    height: 100%;
  }
  #button {
    grid-area: button;

    width: 100%;
    min-width: 10rem;
    background-color: white;
    @media (max-width: 768px) {
      grid-column: 1/-1;
    }
  }

  input,
  textarea {
    color: white;
    border: 1px solid #ccc;
    background-color: black;
    padding: 1rem;
  }
`;

const Form = () => {
  return (
    <StyledForm>
      <input type="text" name="name" id="name" placeholder="name*" required />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="last name*"
        required
      />
      <input
        name="mail"
        id="mail"
        placeholder="email*"
        aria-required="true"
        aria-invalid="true"
        required
      />
      <textarea
        name="message"
        id="message"
        placeholder="message*"
        aria-required="true"
        aria-invalid="true"
        required
      />
      <button id="button" type="submit" className="btn">
        Send
      </button>
    </StyledForm>
  );
};

export default Form;
