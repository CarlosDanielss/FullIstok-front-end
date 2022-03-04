import Toolbar from './shared/components/lateral-menu/Toolbar';
import AppThemeProvider from './shared/contexts/ThemeContext';



const App = () => {
  return (
    <AppThemeProvider>
      <Toolbar />
    </AppThemeProvider>
  );
};

export default App;
