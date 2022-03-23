import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-Inicial" element={<Dashboard/>} />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};


export default AppRoutes;