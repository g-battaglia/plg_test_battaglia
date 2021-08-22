import styled from "styled-components";

const Styles = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border-radius: 0.25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
`;

type Props = {
  className?: string;
  message: string;
};

const Alert = ({ message, className }: Props) => {
  return <Styles className={className}>{message}</Styles>;
};

export default Alert;
