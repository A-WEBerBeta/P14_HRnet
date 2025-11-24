import { useEffect, useRef, useState } from "react";
import "./SelectCustom.css";

export default function Select({
  label,
  id,
  value = "",
  onChange,
  options = [],
  placeholder,
  className = "",
  disabled = false,
  name,
}) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const rootRef = useRef(null);
  const optionsRef = useRef([]);

  const normalizedOptions = options.map((opt) => {
    // Si objet label + value, on garde tel quel
    if (typeof opt === "object") {
      return opt;
    }
    // Si string -> on crée { label, value }
    return { label: opt, value: opt };
  });

  // On récupère l'option correspondant à la value actuelle
  const selected = normalizedOptions.find((opt) => opt.value === value);

  // Et on affiche le texte
  const labelToShow = selected ? selected.label : placeholder;

  // Quand on clique sur un option
  const handleOptionClick = (optionValue) => {
    onChange?.({
      target: {
        value: optionValue,
        name,
        id,
      },
    });
    setOpen(false);
  };

  // Fermeture au clic en dehors
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Ouverture avec mise en surbrillance de l'option
  const openMenu = () => {
    setOpen(true);
    const currentIndex = normalizedOptions.findIndex(
      (opt) => opt.value === value
    );
    setHighlightedIndex(
      currentIndex !== -1 ? currentIndex : normalizedOptions.length ? 0 : -1
    );
  };

  useEffect(() => {
    if (!open) return;

    const el = optionsRef.current[highlightedIndex];
    if (el) {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, open]);

  const toggleMenu = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        const currentIndex = normalizedOptions.findIndex(
          (opt) => opt.value === value
        );
        setHighlightedIndex(
          currentIndex !== -1 ? currentIndex : normalizedOptions.length ? 0 : -1
        );
      }
      return next;
    });
  };

  // Gestion clavier
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (!normalizedOptions.length) return;

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        if (!open) {
          openMenu();
        } else {
          setHighlightedIndex((prev) => {
            const next = prev < normalizedOptions.length - 1 ? prev + 1 : 0;
            return next;
          });
        }
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        if (!open) {
          openMenu();
        } else {
          setHighlightedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : normalizedOptions.length - 1;
            return next;
          });
        }
        break;
      }
      case "Enter": {
        e.preventDefault();
        if (!open) {
          openMenu();
        } else if (highlightedIndex >= 0) {
          const opt = normalizedOptions[highlightedIndex];
          if (opt) {
            handleOptionClick(opt.value);
          }
        }
        break;
      }
      case "Escape": {
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className={`select-root ${className}`} ref={rootRef}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="select-box" data-open={open ? "true" : "false"}>
        <button
          type="button"
          id={id}
          name={name}
          className="select"
          disabled={disabled}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
        >
          <span className={!selected ? "select-placeholder" : ""}>
            {labelToShow}
          </span>
        </button>

        {open && (
          <div className="select-menu">
            <ul className="select-menu-list">
              {normalizedOptions.map((opt, index) => (
                <li key={opt.value} className="select-menu-item">
                  <button
                    type="button"
                    className={`select-option ${
                      opt.value === value ? "select-option-active" : ""
                    } ${
                      index === highlightedIndex
                        ? "select-option-highlighted"
                        : ""
                    }`}
                    ref={(el) => (optionsRef.current[index] = el)}
                    onClick={() => handleOptionClick(opt.value)}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
