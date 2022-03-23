import LateralMenu from './shared/components/lateral-menu/LateralMenu';
import { DrawerProvider } from './shared/contexts/DrawerContext';
import AppThemeProvider from './shared/contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/router';



const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <LateralMenu>
            <AppRoutes />
          </LateralMenu>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};

export default App;
