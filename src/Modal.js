import "./Modal.css";

const Modal = ({ children, handleClose, isOpen = false }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close-btn" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
