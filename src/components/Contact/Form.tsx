import styled from "styled-components";
import { useForm } from "react-hook-form";
import Errors from "./Errors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledForm = styled.form`
  margin-top: -4rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem;
  grid-template-areas:
    "error error error error"
    "name name lastName lastName"
    "mail mail mail mail"
    "message message message message"
    "message message message message"
    "button . . . ";

  .nameError {
    grid-area: error;
    width: auto;
  }
  .error {
    grid-area: error;
    width: auto;
  }

  .name {
    grid-area: name;
  }
  .lastName {
    grid-area: lastName;
  }
  .mail {
    grid-area: mail;
  }

  .message {
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
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`;

type Inputs = {
  name: string;
  lastName: string;
  mail: string;
  message: string;
};

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit = (data: any) => console.log(data);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Errors errors={errors} />
      <div className="name">
        <input type="text" name="name" placeholder="name" />
      </div>
      <div className="lastName">
        <input type="text" name="lastName" placeholder="last name" />
      </div>
      <div className="mail">
        <input
          placeholder="email"
          aria-required="true"
          aria-invalid="true"
          {...register("mail", {
            required: true,
            pattern:
              /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i,
          })}
        />
      </div>
      <div className="message">
        <textarea
          placeholder="message"
          aria-required="true"
          aria-invalid="true"
          {...register("message", {
            required: true,
            minLength: 10,
            maxLength: 500,
          })}
        />
      </div>
      <button id="button" type="submit" className="btn btn-white">
        Send
        <FontAwesomeIcon className="chevron" icon="chevron-right" />
      </button>
    </StyledForm>
  );
};

export default Form;
