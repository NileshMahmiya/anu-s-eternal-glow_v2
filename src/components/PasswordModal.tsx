import { useState } from "react";

type PasswordModalProps = {
  onClose: () => void;
  onSuccess: () => void;
  correctPassword?: string;
};

const defaultPasswords = ["ananyaforever", "mysecret"];

const PasswordModal = ({
  onClose,
  onSuccess,
  correctPassword,
}: PasswordModalProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const allowedPasswords = correctPassword
      ? [correctPassword]
      : defaultPasswords;

    if (allowedPasswords.includes(password.trim())) {
      onSuccess();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4 text-pink-600">Enter Password 🔐</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
          />
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          <div className="mt-4 flex justify-between space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 w-1/2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white w-1/2"
            >
              Unlock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
