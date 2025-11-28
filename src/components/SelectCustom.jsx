import { useEffect, useRef, useState } from "react";
import "./SelectCustom.css";

/**
 * Custom Select component (accessible & keyboard-friendly)
 *
 * Features:
 * - Click to open/close
 * - Keyboard navigation (↑ ↓ Enter Escape)
 * - Highlight & scroll-to option
 * - Click outside to close
 * - Accepts array of strings OR objects { label, value }
 */
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
  // Control menu open state
  const [open, setOpen] = useState(false);

  // Index of the option currently highlighted for keyboard navigation
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Refs for click-outside & scrolling to highlighted option
  const rootRef = useRef(null);
  const optionsRef = useRef([]);

  /**
   * Normalized options:
   * - Accept strings -> convert to { label, value }
   * - Accept objects -> use as is
   */
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "object") {
      return opt;
    }
    return { label: opt, value: opt };
  });

  // Currently selected option object
  const selected = normalizedOptions.find((opt) => opt.value === value);

  // Label shown in the button (selected label or placeholder)
  const labelToShow = selected ? selected.label : placeholder;

  /**
   * When clicking an option:
   * - Propagate change in format similar to native inputs
   * - Close menu
   */
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

  // Close menu when clicking outside the component
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

  /**
   * Open menu and auto-highlight:
   * - Current selected option if it exists
   * - Otherwise first option
   */
  const openMenu = () => {
    setOpen(true);
    const currentIndex = normalizedOptions.findIndex(
      (opt) => opt.value === value
    );
    setHighlightedIndex(
      currentIndex !== -1 ? currentIndex : normalizedOptions.length ? 0 : -1
    );
  };

  /**
   * When highlightedIndex changes:
   * - Scroll the corresponding option into view
   */
  useEffect(() => {
    if (!open) return;

    const el = optionsRef.current[highlightedIndex];
    if (el) {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, open]);

  /**
   * Toggle menu open/close
   * When opening, set correct highlight index
   */
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

  /**
   * Full keyboard accessibility:
   * - ArrowDown -> open or move highlight down
   * - ArrowUp -> open or move highlight up
   * - Enter -> select highlighted option
   * - Escape -> close
   */
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
        {/* Main button acting as the "input" */}
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

        {/* Dropdown menu  */}
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
