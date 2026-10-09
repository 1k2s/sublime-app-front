// Itens do menu lateral. O campo roles indica quais papéis enxergam cada item
// (ainda não é aplicado: o filtro entra junto com o AuthContext)
import { CalendarCheck, FileText, House, Settings, Tag, User } from "lucide-react";

export const ROLES = {
  ADMIN: "admin",
  PROVIDER: "provider",
};

// Itens sem tela pronta ficam com disabled: true
export const navigationItems = [
  { label: "Dashboard", path: "/dashboard", icon: House, roles: [ROLES.ADMIN], disabled: true },
  { label: "Lançamentos", path: "/consultations", icon: CalendarCheck, roles: [ROLES.PROVIDER] },
  { label: "Pacientes", path: "/patients", icon: User, roles: [ROLES.ADMIN] },
  { label: "Contratos", path: "/contracts", icon: FileText, roles: [ROLES.ADMIN] },
  { label: "Preços", path: "/pricing", icon: Tag, roles: [ROLES.ADMIN] },
  { label: "Configurações", path: "/settings", icon: Settings, roles: [ROLES.ADMIN, ROLES.PROVIDER], disabled: true },
];
