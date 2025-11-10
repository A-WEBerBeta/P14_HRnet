import { useEffect } from "react";
import "./Modal.css";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "", // pour thèmes/couleurs via CSS vars
  animation = "fade", // "fade" | "zoom" | "slide-up" | "none"
}) {
  // Fermer la modale avec échap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${className}`}
      onClick={onClose}
      data-animation={animation}
    >
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        onClick={(e) => e.stopPropagation()}
        data-animation={animation}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="icon-close"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M6 6 L18 18 M18 6 L6 18" />
          </svg>
        </button>

        {title && (
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>
        )}

        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
