# SEMS — Landing Page

Landing page de **SEMS (Smart Energy Management System)**, el producto de la startup **Energix**.

SEMS conecta un medidor inteligente (EOS) al medidor general del hogar para
monitorear el consumo eléctrico en tiempo real, estimar el gasto por dispositivo,
enviar alertas, generar recomendaciones personalizadas y proyectar la factura —
ayudando a los hogares a reducir hasta un 20–30% su recibo de luz.

## 🧱 Stack

- **[Astro](https://astro.build)** — generación de sitio estático, óptimo para performance y SEO.
- **[Tailwind CSS v4](https://tailwindcss.com)** — sistema de diseño con tokens personalizados.
- **0 dependencias de UI** — todos los componentes y el mockup del dashboard están hechos a mano con HTML/CSS.

## 🎨 Dirección visual

Estética **"energía verde + acento eléctrico"** sobre un fondo oscuro tipo dashboard:

- Verde sostenibilidad (`brand`) + lima eléctrico (`volt`) como acentos.
- Fondo oscuro (`ink`) con grid sutil y resplandores radiales.
- Glassmorphism en navegación, animaciones `float`/`reveal` y micro-interacciones.
- Respeta `prefers-reduced-motion` para accesibilidad.

## 📐 Estructura de secciones

1. **Hero** — propuesta de valor (ahorro + control) con mockup del panel en vivo.
2. **Stats** — métricas clave (ahorro, % consumo residencial Perú, tiempo real, instalación).
3. **Problema** — la energía del hogar como "caja negra".
4. **Cómo funciona** — 4 pasos: medidor → perfiles → monitoreo → ahorro.
5. **Características** — bento grid de módulos (monitoreo, alertas, recomendaciones, ranking, proyección).
6. **Segmentos** — Propietarios de vivienda e Inquilinos/estudiantes.
7. **Planes** — Básica / Premium / Anual con 30 días de prueba gratis.
8. **FAQ** — preguntas frecuentes.
9. **CTA** + **Footer**.

## 🚀 Desarrollo

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:4321)
npm run build      # build de producción → dist/
npm run preview    # previsualizar el build
```

## 📁 Estructura

```
src/
├── components/      # Header, Hero, DashboardMock, Stats, Problem,
│                    # HowItWorks, Features, Segments, Pricing, FAQ, CTA, Footer
├── layouts/         # Layout.astro (SEO, fuentes, meta)
├── pages/           # index.astro
└── styles/          # global.css (design system / tokens)
public/              # favicon, assets estáticos
```

---

Hecho para **Energix** · Universidad Peruana de Ciencias Aplicadas (UPC).
