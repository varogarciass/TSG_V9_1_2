Talleres Santa Gema V9.1

INSTALACIÓN:
1. Instalar Node.js LTS desde https://nodejs.org
2. Abrir Terminal (Mac) o PowerShell (Windows).
3. Ir a la carpeta del proyecto: cd TSG_V9_1
4. Ejecutar:
   npm install
   npm run start   -> probar la app
   npm run dist    -> generar instalador (.dmg en Mac, .exe en Windows)

ESTRUCTURA:
- app/ → HTML, CSS, JS y logo
- electron/ → configuración de ventana y comunicación
- build/ → iconos
- backup_inicial.json → base de datos inicial
- package.json → configuración del proyecto

FUNCIONES:
- Ingresos, gastos, sueldos
- Órdenes, facturas, presupuestos
- Agenda con citas y elevadores
- Resumen semanal, mensual y anual
- Plantillas con logo y marca de agua
