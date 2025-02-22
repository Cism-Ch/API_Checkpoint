// Import du composant UserList qui contient la logique de récupération et d'affichage des utilisateurs
import UserList from './UserList';

// Composant principal de l'application
// Il sert de point d'entrée et de conteneur pour les autres composants
function App() {
  // Rendu du composant
  return (
    // Conteneur principal avec la classe CSS "App"
    <div className="App">
      {/* Intégration du composant UserList qui gère l'affichage de la liste des utilisateurs */}
      <UserList />
    </div>
  );
}

// Export du composant App pour pouvoir l'utiliser dans d'autres fichiers
export default App;
