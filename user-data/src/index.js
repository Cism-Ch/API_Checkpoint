/**
 * Point d'entrée principal de l'application React
 * Ce fichier initialise l'application et monte le composant racine
 */

// Importation des dépendances nécessaires
import React from 'react';                          // Bibliothèque React core
import ReactDOM from 'react-dom/client';            // Package pour le rendu DOM
import './index.css';                               // Styles globaux
import App from './App';                            // Composant racine
import reportWebVitals from './reportWebVitals';    // Utilitaire de mesure des performances

// Création du point de montage React
// Utilise la nouvelle API createRoot de React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  // StrictMode active des vérifications supplémentaires pendant le développement
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Mesure des performances de l'application
 * Peut être utilisé pour envoyer des métriques à un service d'analyse
 * @see https://bit.ly/CRA-vitals pour plus d'informations
 */
reportWebVitals();
