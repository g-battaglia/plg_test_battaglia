import Alert from "../Alert";

type Props = {
  errors?: any;
};

const Errors = ({ errors }: Props) => {
  return (
    <>
      <div className="nameError">
        {errors.message?.type === "required" && (
          <Alert message={"Message field is required."} />
        )}
        {errors.message?.type === "minLength" && (
          <Alert message={"Message must be at least 10 characters long."} />
        )}
      </div>
      <div className="error">
        {errors.mail?.type === "required" && (
          <Alert message={"Mail field is required."} />
        )}
        {errors.mail?.type === "pattern" && (
          <Alert message={"Insert a valid email adress."} />
        )}
      </div>
    </>
  );
};

export default Errors;
