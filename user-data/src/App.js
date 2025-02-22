/**
 * Composant racine de l'application
 * Gère l'initialisation d'AOS (Animate On Scroll) et la structure principale
 */

// Importation des dépendances
import UserList from './UserList';         // Composant principal d'affichage des utilisateurs
import AOS from 'aos';                     // Bibliothèque d'animations au défilement
import 'aos/dist/aos.css';                 // Styles CSS pour AOS
import { useEffect } from 'react';         // Hook React pour les effets de bord

/**
 * Composant App
 * Initialise AOS et structure l'application
 */
function App() {
  // Configuration et initialisation d'AOS au montage du composant
  useEffect(() => {
    AOS.init({
      duration: 1000,    // Durée des animations en millisecondes
      once: true,        // Les animations ne se jouent qu'une seule fois
      offset: 100        // Décalage en pixels avant le déclenchement
    });
  }, []); // Tableau de dépendances vide = exécution uniquement au montage

  // Rendu du composant
  return (
    <div className="App">
      {/* Intégration du composant de liste des utilisateurs */}
      <UserList />
    </div>
  );
}

// Export du composant pour utilisation dans d'autres fichiers
export default App;
