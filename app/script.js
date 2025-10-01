// script.js - Lógica principal de la App Talleres Santa Gema

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  // Plantillas con logo como marca de agua y datos del taller
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
      <div class="plantilla orden">
        <img src="assets/logo.png" class="watermark" alt="Marca de agua">
        <h2>Orden de Trabajo</h2>

        <div class="datos-taller">
          <p><b>Talleres Santa Gema</b></p>
          <p>Pol. Ind. El Perrero - C/Manzanilla 10</p>
          <p>Albaida del Aljarafe, Sevilla</p>
          <p>📞 648883020 - ✉️ talleresantagema@gmail.com</p>
        </div>

        <div class="datos-cliente">
          <p><b>Cliente:</b> ______________________</p>
          <p><b>Matrícula:</b> ___________________</p>
          <p><b>Teléfono:</b> ____________________</p>
          <p><b>Fecha:</b> ____/____/______</p>
        </div>

        <h3>Trabajo solicitado</h3>
        <p>______________________________________________________</p>
        <p>______________________________________________________</p>
        <p>______________________________________________________</p>

        <button onclick="window.print()">🖨️ Imprimir</button>
      </div>
    `,
    facturas: `
      <div class="plantilla factura">
        <img src="assets/logo.png" class="watermark" alt="Marca de agua">
        <h2>Factura</h2>

        <div class="datos-taller">
          <p><b>Talleres Santa Gema</b></p>
          <p>Pol. Ind. El Perrero - C/Manzanilla 10</p>
          <p>Albaida del Aljarafe, Sevilla</p>
          <p>📞 648883020 - ✉️ talleresantagema@gmail.com</p>
        </div>

        <div class="datos-cliente">
          <p><b>Cliente:</b> ______________________</p>
          <p><b>Matrícula:</b> ___________________</p>
          <p><b>Fecha:</b> ____/____/______</p>
        </div>

        <table class="tabla">
          <thead>
            <tr>
              <th>Trabajo realizado</th>
              <th>Importe (€)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>___________________________</td>
              <td>______</td>
            </tr>
          </tbody>
        </table>

        <div class="total">
          <p><b>Total:</b> ______ €</p>
        </div>

        <button onclick="window.print()">🖨️ Imprimir</button>
      </div>
    `,
    presupuestos: `
      <div class="plantilla presupuesto">
        <img src="assets/logo.png" class="watermark" alt="Marca de agua">
        <h2>Presupuesto</h2>

        <div class="datos-taller">
          <p><b>Talleres Santa Gema</b></p>
          <p>Pol. Ind. El Perrero - C/Manzanilla 10</p>
          <p>Albaida del Aljarafe, Sevilla</p>
          <p>📞 648883020 - ✉️ talleresantagema@gmail.com</p>
        </div>

        <div class="datos-cliente">
          <p><b>Cliente:</b> ______________________</p>
          <p><b>Matrícula:</b> ___________________</p>
          <p><b>Fecha:</b> ____/____/______</p>
        </div>

        <table class="tabla">
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Importe (€)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>___________________________</td>
              <td>______</td>
            </tr>
          </tbody>
        </table>

        <div class="total">
          <p><b>Total estimado:</b> ______ €</p>
        </div>

        <button onclick="window.print()">🖨️ Imprimir</button>
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
