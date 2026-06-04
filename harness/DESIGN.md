---
name: Warm Burrow Aesthetic
colors:
  surface: '#fff9f0'
  surface-dim: '#dfd9d1'
  surface-bright: '#fff9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3ea'
  surface-container: '#f3ede4'
  surface-container-high: '#ede7df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1b16'
  on-surface-variant: '#534439'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f6f0e7'
  outline: '#867367'
  outline-variant: '#d9c2b4'
  surface-tint: '#904d08'
  primary: '#904d08'
  on-primary: '#ffffff'
  primary-container: '#f9a15a'
  on-primary-container: '#6f3800'
  inverse-primary: '#ffb780'
  secondary: '#7b5455'
  on-secondary: '#ffffff'
  secondary-container: '#fecbcb'
  on-secondary-container: '#7a5354'
  tertiary: '#755750'
  on-tertiary: '#ffffff'
  tertiary-container: '#d3ada5'
  on-tertiary-container: '#5c403a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc4'
  primary-fixed-dim: '#ffb780'
  on-primary-fixed: '#2f1400'
  on-primary-fixed-variant: '#6f3800'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ecbaba'
  on-secondary-fixed: '#2f1314'
  on-secondary-fixed-variant: '#613d3e'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#e5beb5'
  on-tertiary-fixed: '#2b1611'
  on-tertiary-fixed-variant: '#5c403a'
  background: '#fff9f0'
  on-background: '#1d1b16'
  surface-variant: '#e7e2d9'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  column-max-width: 800px
  side-border-width: 2px
  gutter: 1.5rem
  margin-mobile: 1rem
  stack-gap: 1rem
---

## Brand & Style

The design system is built around the concept of a "Professional Burrow"—a space that feels safe, warm, and inviting while maintaining the efficiency of a high-end productivity tool. The target audience values personality in their digital interactions but requires a structured, legible environment for complex communication.

The style is a hybrid of **Modernism** and **Tactile Softness**. It avoids the sterility of typical enterprise software by utilizing organic tones and highly rounded geometry, yet remains professional through strict alignment, ample whitespace, and high-contrast typography. The emotional goal is to evoke a sense of calm focus, much like a well-organized personal study.

## Colors

The palette is derived from natural, earthy materials associated with a cozy habitat.

- **Primary (Sunflower Orange):** Used for primary actions, active states, and key highlights. It provides the "energy" of the system.
- **Secondary (Petal Pink):** Reserved for soft accents, celebratory micro-interactions, and secondary status indicators.
- **Tertiary (Walnut Brown):** The foundation for structure. Used for text, borders, and heavy emphasis lines to provide grounding and professional weight.
- **Neutral (Cream Shell):** The primary background color. It reduces eye strain compared to pure white and enhances the "warm" feeling of the interface.

## Typography

This design system utilizes **Plus Jakarta Sans** for all levels of the hierarchy. Its inherent roundness and open apertures provide a friendly, approachable character that aligns with the hamster-themed narrative.

Headlines should use heavy weights (700) to stand out against the soft background, while body text remains at a standard 400 weight for maximum legibility. For data-heavy or secondary information, use the `label` styles which incorporate slight letter spacing to maintain clarity at smaller sizes. All text should be rendered in **Walnut Brown** rather than black to keep the aesthetic soft and cohesive.

## Layout & Spacing

The layout centers on a **Vertical Central Column** (the Chat Stream). 

- **Desktop:** The main content is constrained to a max-width of 800px to ensure optimal reading lines. This central column is flanked by **2px Walnut Brown** vertical borders that run the full height of the viewport, creating a distinct "burrow" feel.
- **Sidebars:** Content outside the central column (navigation or history) lives in the "outer" space beyond the Walnut borders, utilizing a lighter cream tint to recede visually.
- **Mobile:** The side borders collapse to 1px or are removed entirely to maximize screen real estate, maintaining a 16px margin on either side of the content.
- **Rhythm:** A base-8 spacing system is used. Gaps between chat bubbles should be consistent (16px), with larger groupings (dates, session breaks) separated by 32px or 48px.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Ambient Shadows**.

- **Surface Level 0:** The main Cream Shell background.
- **Surface Level 1 (Cards/Bubbles):** White or slightly lighter cream surfaces. These use an ambient shadow: `0 4px 20px rgba(78, 52, 46, 0.06)`. The shadow color is a desaturated version of the Walnut Brown to keep it organic.
- **Interactive States:** On hover, cards should lift slightly (increasing shadow spread) or shift -2px vertically.
- **Dividers:** Use 1px solid lines in a very pale Walnut (e.g., Walnut at 10% opacity) for clean, unobtrusive separation within cards.

## Shapes

The shape language is extremely soft and organic.

- **Standard Elements:** Buttons and small inputs use a `rounded-lg` (1rem) corner radius.
- **Main Containers:** Chat bubbles and primary cards use a `rounded-2xl` (1.5rem) radius to emphasize the "friendly" nature of the bot.
- **Pill Elements:** Status indicators and chips should be fully pill-shaped (rounded-full).
- **Icons:** Use icons with rounded caps and corners to match the typography and container styles.

## Components

### Buttons
Primary buttons are filled with **Sunflower Orange** with Walnut Brown text for high contrast. Secondary buttons use a **Pastel Pink** fill or a Walnut Brown outline. All buttons are highly rounded.

### Chat Bubbles
- **User Bubbles:** Right-aligned, Walnut Brown background with Cream text.
- **Bot Bubbles:** Left-aligned, White background with a subtle Walnut border (1px) and Walnut text.
- Both use `rounded-2xl` corners, with the corner closest to the side (tail) having a slightly tighter radius (8px) to indicate direction.

### Input Fields
The main chat input is a large, `rounded-2xl` field with a Cream background and a 1px Walnut border. On focus, the border thickens to 2px and changes to Sunflower Orange, accompanied by a soft orange outer glow.

### Chips & Tags
Used for "Suggested Replies." These are pill-shaped, using a light Pastel Pink background and Walnut text. They should have a subtle hover state that darkens the pink slightly.

### Lists
Lists within cards should be separated by the 10% Walnut divider. Each list item should have a generous 12px padding to maintain the "airy" burrow feel.