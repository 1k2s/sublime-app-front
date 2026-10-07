import { Outlet } from 'react-router-dom';

export function PatientPage() {
  return (
    <div>
      <h1>PatientPage</h1>
      <Outlet />
    </div>
  );
}

