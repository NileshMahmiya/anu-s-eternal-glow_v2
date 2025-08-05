import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordModal from "./PasswordModal";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const PASSWORD_KEY = "birthday-access";
const CORRECT_PASSWORD = "anu123";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isVerified, setIsVerified] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const access = sessionStorage.getItem(PASSWORD_KEY);
    setIsVerified(access === "true");
  }, [location.pathname]); // re-check on path change

  const handleSuccess = () => {
    sessionStorage.setItem(PASSWORD_KEY, "true");
    setIsVerified(true);
  };

  const handleClose = () => {
    // Redirect if user cancels password
    navigate("/", { replace: true });
  };

  if (!isVerified) {
    return (
      <PasswordModal
        onClose={handleClose}
        onSuccess={handleSuccess}
        correctPassword={CORRECT_PASSWORD}
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
