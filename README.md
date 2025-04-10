# NgBase2025

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

🧱 1. Crear carpetas base (estructura completa)
# Estructura general
mkdir -p src/app/{core,shared,state,features}

# Layout dentro de core
mkdir -p src/app/core/layout

# Estructura base de dashboard como primera feature
mkdir -p src/app/features/dashboard/{pages,components,services,models}

# (opcional) Carpeta para una futura feature usuarios
mkdir -p src/app/features/usuarios/{pages,components,services,models}

# Estructura base para más features de ejemplo
mkdir -p src/app/features/productos/{pages,components,services,models}



src/
└── app/
    ├── core/
    │   └── layout/
    ├── shared/
    ├── state/
    ├── features/
    │   ├── dashboard/
    │   │   ├── pages/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── models/
    │   ├── usuarios/
    │   │   ├── pages/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── models/
    │   └── productos/
    │       ├── pages/
    │       ├── components/
    │       ├── services/
    │       ├── models/


Tener 2 layouts distintos:

✅ MainLayoutComponent
Para admin/dashboard (como el que ya tienes, con header + sidebar).

✅ PublicLayoutComponent
Para clientes, landing, login, etc. – sin sidebar, más limpio.



core/
├── guards/
│   ├── auth.guard.ts              ✅ guard funcional
│   ├── admin.guard.ts             ✅ opcional
│   └── guest.guard.ts             ✅ opcional
├── services/
│   └── auth.service.ts            ✅ nueva base reactiva
└── models/
    └── auth.model.ts              ✅ modelo de usuario/sesión

    