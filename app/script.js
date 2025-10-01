// script.js - Lógica principal de la App Talleres Santa Gema

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  // Plantillas con logo como marca de agua
  const sections = {
    ingresos: `
      <h2>Ingresos</h2>
      <form id="form-ingreso">
        <label>Fecha: <input type="date" name="fecha" required></label><br>
        <label>Cliente: <input type="text" name="cliente" required></label><br>
        <label>Matrícula: <input type="text" name="matricula"></label><br>
        <label>Trabajo realizado: <input type="text" name="trabajo"></label><br>
        <label>Importe: <input type="number" step="0.01" name="importe" required></label><br>
        <button type="submit">Guardar Ingreso</button>
      </form>
    `,
    gastos: `
      <h2>Gastos</h2>
      <form id="form-gasto">
        <label>Fecha: <input type="date" name="fecha" required></label><br>
        <label>Concepto: <input type="text" name="concepto" required></label><br>
        <label>Importe: <input type="number" step="0.01" name="importe" required></label><br>
        <button type="submit">Guardar Gasto</button>
      </form>
    `,
    sueldos: `
      <h2>Sueldos</h2>
      <form id="form-sueldo">
        <label>Mes: <input type="month" name="mes" required></label><br>
        <label>Empleado: <input type="text" name="empleado" required></label><br>
        <label>Importe: <input type="number" step="0.01" name="importe" required></label><br>
        <button type="submit">Guardar Sueldo</button>
      </form>
    `,
    ordenes: `
      <h2>Órdenes de Trabajo</h2>
      <div class="plantilla">
        <img src="assets/logo.png" class="watermark" alt="Marca de agua">
        <p>Aquí podrás generar e imprimir órdenes con tu logo y datos.</p>
      </div>
    `,
    facturas: `
      <h2>Facturas</h2>
      <div class="plantilla">
        <img src="assets/logo.png" class="watermark" alt="Marca de agua">
        <p>Aquí podrás generar facturas con tu logo. Al guardarlas se añadirán a Ingresos.</p>
      </div>
    `,
    presupuestos: `
      <h2>Presupuestos</h2>
      <div class="plantilla">
        <img src="assets/logo.png" class="watermark" alt="Marca de agua">
        <p>Aquí podrás hacer presupuestos bonitos para clientes.</p>
      </div>
    `,
    agenda: `
      <h2>Agenda</h2>
      <p>Gestión de citas y elevadores.</p>
    `,
    resumen: `
      <h2>Resumen</h2>
      <p>Aquí se mostrarán los resúmenes semanal, mensual y anual con gráficos.</p>
    `
  };

  // Detectar clicks en el menú
  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      content.innerHTML = sections[section] || "<p>Sección no encontrada</p>";
    });
  });
});
