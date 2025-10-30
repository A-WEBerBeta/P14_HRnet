import "./Modal.css";

export default function Modal({ open, onClose }) {
  // si modale fermée, on ne rend rien
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <p>Employee Created!</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
