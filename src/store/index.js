import { configureStore } from "@reduxjs/toolkit";
import employees from "./employeesSlice";

// clé unique pour stocker les employés dans localStorage
const STORAGE_KEY = "hrnet:employees";

// Fonction pour le chargement depuis le localStorage
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const items = JSON.parse(raw);
    return { employees: { items } };
  } catch (err) {
    return undefined;
  }
}

// Fonction pour save vers localStorage
function saveState(state) {
  try {
    const items = state.employees.items;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {}
}

// Création du store avec un état préloadé
export const store = configureStore({
  reducer: { employees },
  preloadedState: loadState(),
});

// Ecoute du store : on sauvegarde à chaque changement
store.subscribe(() => {
  saveState(store.getState());
});
