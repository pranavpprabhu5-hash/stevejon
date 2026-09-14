---
name: Steve Jon Solutions
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#00759f'
  on-tertiary-container: '#e1f2ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is engineered to evoke a sense of technical precision, high-velocity shipping, and premium software craftsmanship. It targets high-growth startups and enterprise engineering teams who value clarity and performance.

The aesthetic follows a **Modern Corporate** direction with heavy influences from **Glassmorphism** and **Minimalism**. It prioritizes a "developer-first" feel through the use of precise lines, subtle semi-transparent overlays, and a sophisticated dark-mode-first approach. Visual interest is generated through light refraction effects and surgical-grade typography rather than loud ornamentation.

## Colors
The palette is anchored in a deep, cosmic navy to provide a high-contrast foundation for technical data and code. 

- **Primary Accent:** Electric Blue (#2563EB) is used for call-to-actions, active states, and focus indicators.
- **Backgrounds:** The primary dark base is #0F172A, but for deep depth, #020617 is used as the canvas.
- **Accents:** Tertiary light blue is reserved for data visualization and secondary highlights.
- **Functional Colors:** Success (Emerald 500), Warning (Amber 500), and Error (Rose 500) follow standard SaaS conventions but are desaturated slightly to match the professional tone.

## Typography
The system utilizes **Inter** for all primary interface elements, leveraging its "Display" variant for headings to achieve a tight, modern aesthetic.

- **Headings:** Use SemiBold (600) or Bold (700) with negative letter-spacing for a "Linear-inspired" look.
- **Monospace:** **JetBrains Mono** is introduced for technical labels, IDs, and code snippets to reinforce the software engineering focus.
- **Hierarchy:** Maintain a clear vertical rhythm by ensuring body text never drops below 14px for accessibility.

## Layout & Spacing
This design system employs a **Fluid Grid** model based on a 4px baseline shift. 

- **Desktop:** 12-column grid with a 1280px max-width container. 
- **Gaps:** Large 24px-32px gutters are preferred to maintain the "premium" airy feel.
- **Padding:** Content sections should use generous vertical padding (80px - 120px) to separate distinct product features.
- **Mobile:** Transition to a 4-column grid with 16px margins. Horizontal scrolling is preferred for data tables and code blocks.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Glassmorphism** rather than traditional heavy shadows.

- **Surface 1 (Base):** #020617 (Background).
- **Surface 2 (Cards):** #0F172A with a 1px border of `rgba(255, 255, 255, 0.1)`.
- **Surface 3 (Modals/Popovers):** Glassmorphic effect using `backdrop-filter: blur(12px)` and a slightly lighter fill.
- **Shadows:** Use extremely subtle, large-radius ambient shadows (0 20px 40px rgba(0,0,0,0.4)) only for top-level floating elements like dropdowns or dialogs.

## Shapes
The shape language is controlled and geometric. A `rounded-md` (8px) standard is used for primary containers and inputs, providing a balance between approachable softness and technical rigidity. 

Large sections and feature cards use `rounded-xl` (24px) to create a distinct framing effect. Interactive elements like buttons should maintain a consistent corner radius to appear "solid."

## Components
- **Buttons:** Primary buttons use a subtle top-to-bottom gradient of Electric Blue. Secondary buttons are "Ghost" style with a 1px border that brightens on hover.
- **Cards:** Feature cards must include a 1px border (`white/10`). On hover, the border should transition to `primary/40` and a subtle inner glow should appear.
- **Navigation:** The top navbar is a floating glass container with a `saturate(180%)` and `blur(20px)` backdrop filter. 
- **Inputs:** Dark fills (#020617) with a subtle inset shadow and high-contrast focus rings in Electric Blue.
- **Chips:** Small, uppercase labels using JetBrains Mono with low-opacity background tints (e.g., `primary/20`).
- **Icons:** Use thin-stroke (1.5pt) linear icons. Avoid filled icons unless used as active state indicators.