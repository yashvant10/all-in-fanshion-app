import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import { routes } from './utils/routes';

export default function App() {
  return (
    <AppShell>
      <Routes>
        {routes.map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}
