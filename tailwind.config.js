/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "secondary-fixed-dim": "#bec6e0",
        "surface-container": "#1d2022",
        "on-primary-fixed": "#00174b",
        "error-container": "#93000a",
        "primary": "#b4c5ff",
        "background": "#101415",
        "primary-fixed-dim": "#b4c5ff",
        "on-primary-container": "#eeefff",
        "surface-container-highest": "#323537",
        "tertiary-container": "#00759f",
        "on-background": "#e0e3e5",
        "on-error-container": "#ffdad6",
        "tertiary": "#7bd0ff",
        "inverse-on-surface": "#2d3133",
        "surface-tint": "#b4c5ff",
        "primary-container": "#2563eb",
        "on-secondary-container": "#adb4ce",
        "error": "#ffb4ab",
        "on-surface": "#e0e3e5",
        "on-tertiary-container": "#e1f2ff",
        "surface": "#101415",
        "on-secondary-fixed": "#131b2e",
        "secondary": "#bec6e0",
        "tertiary-fixed-dim": "#7bd0ff",
        "on-primary": "#002a78",
        "on-tertiary-fixed": "#001e2c",
        "surface-container-lowest": "#0b0f10",
        "tertiary-fixed": "#c4e7ff",
        "outline": "#8d90a0",
        "primary-fixed": "#dbe1ff",
        "secondary-container": "#3f465c",
        "surface-container-low": "#191c1e",
        "outline-variant": "#434655",
        "surface-bright": "#363a3b",
        "inverse-surface": "#e0e3e5",
        "surface-container-high": "#272a2c",
        "on-primary-fixed-variant": "#003ea8",
        "inverse-primary": "#0053db",
        "secondary-fixed": "#dae2fd",
        "on-secondary": "#283044",
        "on-tertiary": "#00354a",
        "on-error": "#690005",
        "surface-dim": "#101415",
        "on-surface-variant": "#c3c6d7",
        "on-tertiary-fixed-variant": "#004c69",
        "surface-variant": "#323537",
        "on-secondary-fixed-variant": "#3f465c"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "margin-desktop": "48px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "unit": "4px",
        "container-max": "1280px"
      },
      "fontFamily": {
        "headline-lg": ["Inter"],
        "display": ["Inter"],
        "headline-lg-mobile": ["Inter"],
        "label-sm": ["JetBrains Mono"],
        "headline-md": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"]
      },
      "fontSize": {
        "headline-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "display": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "label-sm": ["12px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "headline-md": ["30px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
