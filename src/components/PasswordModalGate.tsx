// src/components/PasswordModalGate.tsx
import { useState, useEffect } from "react";
import PasswordModal from "@/components/PasswordModal";

type PasswordModalGateProps = {
  children: React.ReactNode;
  correctPassword?: string; // Optional per-page password
};

const PasswordModalGate = ({ children, correctPassword }: PasswordModalGateProps) => {
  const [authorized, setAuthorized] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true); // Always show modal on mount
    setAuthorized(false); // Always reset auth
  }, []);

  const handleSuccess = () => {
    setAuthorized(true);
    setShowModal(false);
  };

  const handleClose = () => {
    // Optional: redirect to home if cancelled
    window.location.href = "/";
  };

  return (
    <>
      {showModal && (
        <PasswordModal
          onClose={handleClose}
          onSuccess={handleSuccess}
          correctPassword={correctPassword}
        />
      )}
      {authorized && children}
    </>
  );
};

export default PasswordModalGate;
