import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface IProps {
  isAllowed: boolean;
  redirectPath: string;
  children: ReactNode;
}
const ProdectedRoute = ({ isAllowed, redirectPath, children }: IProps) => {
  console.log(redirectPath )
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};

export default ProdectedRoute;
