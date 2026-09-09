/* ==========================================================================
   Translations used only by terms.html.

   They are kept in their own file so the home page does not download the
   legal text it never shows. The entries are merged into the same dictionary
   object, so main.js needs no special case.
   ========================================================================== */
(function () {
  var d = window.SEMS_I18N;
  if (!d) { return; }

  var en = {
    "legal.metaTitle": "Terms and conditions — SEMS",
    "legal.metaDescription": "Terms and conditions, privacy policy and service level agreement for SEMS, a product by Energix.",
    "legal.kicker": "Legal",
    "legal.title": "Terms and conditions",
    "legal.updated": "Last updated: September 2026 · Energix, Lima, Peru",
    "legal.intro": "These terms govern the use of SEMS (Smart Energy Management System), a service operated by Energix. By creating an account you accept them.",
    "legal.s1.title": "1. The service",
    "legal.s1.p1": "SEMS receives electrical measurements from the meters you register, assigns them to a site and a zone, applies the commercial tariff in force and produces dashboards, alerts and bill forecasts.",
    "legal.s1.p2": "SEMS is an informational tool. It does not operate, switch on or switch off any equipment, and it does not replace the invoice issued by your electricity distributor. Forecasts are estimates based on the data received and on the published tariff schedule; the amount actually billed is determined by your distributor.",
    "legal.s2.title": "2. Accounts and access",
    "legal.s2.l1": "You are responsible for the accuracy of the data you register, in particular the tariff category and the contracted power of each site, because the calculations depend on them.",
    "legal.s2.l2": "Access is granted per role and per site. The organization administrator decides who sees what.",
    "legal.s2.l3": "You are responsible for keeping your credentials secret and for the activity carried out with them.",
    "legal.s3.title": "3. Plans and payments",
    "legal.s3.p1": "Plans are billed monthly and priced by the number of sites managed. The Starter plan is free for a single site. You may change or cancel your plan at any time; a cancellation takes effect at the end of the period already paid for.",
    "legal.s3.p2": "Payments are processed by an external payment provider. Card details are entered on the provider's page and never reach SEMS servers: SEMS only stores an identifier of the payment method.",
    "legal.s4.title": "4. Privacy policy",
    "legal.s4.p1": "SEMS processes the data needed to render the service: identification of the account and its users, the description of the organization, its sites and zones, and the electrical measurements sent by the meters.",
    "legal.s4.l1": "Passwords are never stored in plain text; only an irreversible hash is kept.",
    "legal.s4.l2": "Consumption data belongs to the organization that produced it and is not sold or transferred to third parties.",
    "legal.s4.l3": "You may request the deletion of your account and its data by writing to hello@energix.pe.",
    "legal.s4.l4": "Processing follows Peruvian Law 29733 on the protection of personal data.",
    "legal.s5.title": "5. Service level agreement",
    "legal.s5.p1": "This section states the service levels Energix commits to for the paid plans, and what happens when they are not met.",
    "legal.s5.caption": "Committed service levels by plan",
    "legal.s5.h1": "Commitment",
    "legal.s5.h2": "Business",
    "legal.s5.h3": "Enterprise",
    "legal.s5.r1": "Monthly availability of the platform",
    "legal.s5.r2": "Time to raise a demand alert after the reading",
    "legal.s5.r2b": "under 60 seconds",
    "legal.s5.r2c": "under 30 seconds",
    "legal.s5.r3": "First response to a support request",
    "legal.s5.r3b": "2 business days",
    "legal.s5.r3c": "4 business hours",
    "legal.s5.r4": "Consumption history retained",
    "legal.s5.r4b": "12 months",
    "legal.s5.r4c": "36 months",
    "legal.s5.p2": "Availability is measured monthly over the API and the web application, excluding maintenance windows announced at least 48 hours in advance. If the committed availability is not met in a given month, the affected customer may request a credit of 10% of that month's fee for each full percentage point below the commitment, up to 50%.",
    "legal.s5.p3": "The Starter plan is free and carries no service level commitment.",
    "legal.s6.title": "6. Liability",
    "legal.s6.p1": "Energix is not liable for decisions taken on the basis of the information shown, nor for amounts billed by third parties, nor for interruptions caused by the meters, the network or the customer's own infrastructure.",
    "legal.s7.title": "7. Changes to these terms",
    "legal.s7.p1": "Energix may update these terms. Any substantial change is announced by email at least 30 days before it takes effect. Continuing to use the service after that date means accepting the new version.",
    "legal.s8.title": "8. Contact",
    "legal.s8.p1": "Energix · Lima, Peru · hello@energix.pe",
    "legal.back": "Back to the home page"
  };

  var es = {
    "legal.metaTitle": "Términos y condiciones — SEMS",
    "legal.metaDescription": "Términos y condiciones, política de privacidad y acuerdo de nivel de servicio de SEMS, un producto de Energix.",
    "legal.kicker": "Legal",
    "legal.title": "Términos y condiciones",
    "legal.updated": "Última actualización: septiembre de 2026 · Energix, Lima, Perú",
    "legal.intro": "Estos términos rigen el uso de SEMS (Smart Energy Management System), un servicio operado por Energix. Al crear una cuenta los aceptas.",
    "legal.s1.title": "1. El servicio",
    "legal.s1.p1": "SEMS recibe las mediciones eléctricas de los medidores que registras, las asigna a un local y a una zona, aplica la tarifa comercial vigente y produce paneles, alertas y proyecciones de factura.",
    "legal.s1.p2": "SEMS es una herramienta informativa. No opera, enciende ni apaga ningún equipo, y no reemplaza el recibo que emite tu distribuidora eléctrica. Las proyecciones son estimaciones basadas en los datos recibidos y en el pliego tarifario publicado; el importe que se factura lo determina tu distribuidora.",
    "legal.s2.title": "2. Cuentas y acceso",
    "legal.s2.l1": "Eres responsable de la exactitud de los datos que registras, en particular la categoría tarifaria y la potencia contratada de cada local, porque los cálculos dependen de ellos.",
    "legal.s2.l2": "El acceso se otorga por rol y por local. El administrador de la organización decide quién ve qué.",
    "legal.s2.l3": "Eres responsable de mantener en secreto tus credenciales y de la actividad que se realice con ellas.",
    "legal.s3.title": "3. Planes y pagos",
    "legal.s3.p1": "Los planes se facturan mensualmente y su precio va por la cantidad de locales gestionados. El plan Starter es gratuito para un solo local. Puedes cambiar o cancelar tu plan cuando quieras; la cancelación surte efecto al terminar el periodo ya pagado.",
    "legal.s3.p2": "Los pagos los procesa un proveedor externo. Los datos de la tarjeta se introducen en la página del proveedor y nunca llegan a los servidores de SEMS: SEMS solo guarda un identificador del medio de pago.",
    "legal.s4.title": "4. Política de privacidad",
    "legal.s4.p1": "SEMS trata los datos necesarios para prestar el servicio: la identificación de la cuenta y de sus usuarios, la descripción de la organización, sus locales y sus zonas, y las mediciones eléctricas que envían los medidores.",
    "legal.s4.l1": "Las contraseñas nunca se guardan en claro; solo se conserva un resumen irreversible.",
    "legal.s4.l2": "Los datos de consumo pertenecen a la organización que los produjo y no se venden ni se ceden a terceros.",
    "legal.s4.l3": "Puedes solicitar la eliminación de tu cuenta y de sus datos escribiendo a hola@energix.pe.",
    "legal.s4.l4": "El tratamiento se ajusta a la Ley peruana 29733 de protección de datos personales.",
    "legal.s5.title": "5. Acuerdo de nivel de servicio",
    "legal.s5.p1": "Esta sección indica los niveles de servicio que Energix se compromete a cumplir en los planes de pago, y qué ocurre cuando no se cumplen.",
    "legal.s5.caption": "Niveles de servicio comprometidos por plan",
    "legal.s5.h1": "Compromiso",
    "legal.s5.h2": "Business",
    "legal.s5.h3": "Enterprise",
    "legal.s5.r1": "Disponibilidad mensual de la plataforma",
    "legal.s5.r2": "Tiempo para levantar una alerta de demanda tras la lectura",
    "legal.s5.r2b": "menos de 60 segundos",
    "legal.s5.r2c": "menos de 30 segundos",
    "legal.s5.r3": "Primera respuesta a una solicitud de soporte",
    "legal.s5.r3b": "2 días hábiles",
    "legal.s5.r3c": "4 horas hábiles",
    "legal.s5.r4": "Historial de consumo conservado",
    "legal.s5.r4b": "12 meses",
    "legal.s5.r4c": "36 meses",
    "legal.s5.p2": "La disponibilidad se mide mensualmente sobre la API y la aplicación web, sin contar las ventanas de mantenimiento anunciadas con al menos 48 horas de anticipación. Si en un mes no se cumple la disponibilidad comprometida, el cliente afectado puede solicitar un crédito del 10 % de la cuota de ese mes por cada punto porcentual completo por debajo del compromiso, hasta un máximo del 50 %.",
    "legal.s5.p3": "El plan Starter es gratuito y no lleva compromiso de nivel de servicio.",
    "legal.s6.title": "6. Responsabilidad",
    "legal.s6.p1": "Energix no responde por las decisiones que se tomen a partir de la información mostrada, ni por los importes que facturen terceros, ni por las interrupciones causadas por los medidores, la red o la infraestructura propia del cliente.",
    "legal.s7.title": "7. Cambios en estos términos",
    "legal.s7.p1": "Energix puede actualizar estos términos. Todo cambio sustancial se anuncia por correo con al menos 30 días de anticipación. Seguir usando el servicio después de esa fecha implica aceptar la nueva versión.",
    "legal.s8.title": "8. Contacto",
    "legal.s8.p1": "Energix · Lima, Perú · hola@energix.pe",
    "legal.back": "Volver a la página principal"
  };

  Object.keys(en).forEach(function (k) { d["en-US"][k] = en[k]; });
  Object.keys(es).forEach(function (k) { d["es-419"][k] = es[k]; });
})();
