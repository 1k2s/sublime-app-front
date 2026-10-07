import { Outlet } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Outlet />
    </div>
  );
}

