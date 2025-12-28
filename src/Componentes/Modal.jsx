const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

const ModalContent = ({ title, children }) => (
  <div className="text-center">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <hr className="w-[80%] mx-auto mb-4" />
    <div className="space-y-2 text-gray-300">{children}</div>
  </div>
);

export { Modal, ModalContent };
