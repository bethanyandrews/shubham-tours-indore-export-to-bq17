# Dark Mode — Color Reference

---

## Section 1: Simple Overview (For Everyone)

### What colors does the website use in dark mode?

The dark mode uses a **deep, rich dark-blue background** with **soft cream-white text**. It's designed to be comfortable for nighttime browsing while keeping the same brand identity as the light mode.

Here's a plain-English breakdown of every color you see:

| Where you see it | What it looks like |
|---|---|
| **Page background** | Very dark navy-blue — deep and rich, not pure black |
| **Main text** | Soft off-white with a slight warm tint — easier on the eyes than harsh white |
| **Cards** | Slightly lighter dark blue — they gently lift off the background |
| **Popups and dialogs** | A touch lighter than cards — makes them feel like they're floating above |
| **Buttons and links (primary)** | Medium teal-green — brighter than in light mode so they're visible on dark backgrounds |
| **Button text** | Off-white / cream |
| **Section backgrounds** | Darker blue-gray — used for alternating sections, very subtle difference |
| **Faded / secondary text** | Medium gray with a cool tint — readable but clearly secondary |
| **Accent / highlights** | Warm golden-amber — same as light mode, pops beautifully against dark backgrounds |
| **Borders and dividers** | White at 10% opacity — extremely subtle, just enough to show edges |
| **Input field borders** | White at 15% opacity — slightly more visible than regular borders |
| **Error messages** | Lighter red-orange — adjusted to be readable on dark backgrounds |
| **Success indicators** | Fresh green — slightly deeper than in light mode |
| **Warning notices** | Warm amber-orange — adjusted for dark background readability |
| **WhatsApp buttons** | Standard WhatsApp green (same in both modes) |
| **Star ratings** | Golden amber (same in both modes) |
| **Gradient overlays on images** | Black fading from transparent to semi-opaque (same in both modes) |
| **CTA banner section** | Uses the teal primary as a gradient background with cream text |

### How it feels

The dark mode creates a **sleek, modern, and immersive** experience. The deep navy-blue tones feel more sophisticated than plain black, while the warm off-white text and golden accents keep it feeling inviting rather than cold. It's easy to browse at night without eye strain.

---

## Section 2: Technical Details

### CSS Custom Properties (OKLCH Color Space)

All dark-mode colors are defined in the `.dark` selector block using the **OKLCH** color space.

#### Core Backgrounds & Foregrounds

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--background` | `oklch(0.14 0.02 240)` | `#0c1220` | Page background — deep navy |
| `--foreground` | `oklch(0.95 0.005 90)` | `#f0efed` | Primary text — warm off-white |
| `--card` | `oklch(0.20 0.02 240)` | `#182030` | Card surfaces — lifted dark |
| `--card-foreground` | `oklch(0.95 0.005 90)` | `#f0efed` | Text on cards |
| `--popover` | `oklch(0.22 0.02 240)` | `#1e2638` | Popover surfaces — floated dark |
| `--popover-foreground` | `oklch(0.95 0.005 90)` | `#f0efed` | Text in popovers |

#### Brand / Primary

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--primary` | `oklch(0.55 0.14 195)` | `#1a8a8a` | Medium teal — brighter for dark bg visibility |
| `--primary-foreground` | `oklch(0.98 0.005 90)` | `#faf8f5` | Text on primary surfaces |
| `--ring` | `oklch(0.55 0.14 195)` | `#1a8a8a` | Focus ring — matches primary |

#### Secondary & Muted

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--secondary` | `oklch(0.25 0.02 240)` | `#1e2640` | Secondary surfaces — dark blue-gray |
| `--secondary-foreground` | `oklch(0.92 0.005 90)` | `#e8e7e4` | Text on secondary surfaces |
| `--muted` | `oklch(0.25 0.02 240)` | `#1e2640` | Muted backgrounds — matches secondary |
| `--muted-foreground` | `oklch(0.65 0.02 240)` | `#8a90a0` | Secondary text — medium gray-blue |

#### Accent

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--accent` | `oklch(0.78 0.16 70)` | `#d4a043` | Warm golden amber — same as light mode |
| `--accent-foreground` | `oklch(0.18 0.04 50)` | `#2e1f0a` | Text on accent surfaces |

#### Status Colors

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--destructive` | `oklch(0.704 0.191 22.216)` | `#ef4444` | Error red — lighter for dark bg |
| `--destructive-foreground` | `oklch(0.985 0 0)` | `#fbfbfb` | Text on error surfaces |
| `--warning` | `oklch(0.70 0.14 70)` | `#c4850a` | Warning amber — toned down for dark bg |
| `--warning-foreground` | `oklch(0.98 0 0)` | `#fafafa` | Text on warning surfaces |
| `--success` | `oklch(0.55 0.14 145)` | `#0d9040` | Success green — slightly deeper |
| `--success-foreground` | `oklch(0.98 0 0)` | `#fafafa` | Text on success surfaces |

#### Borders & Inputs

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--border` | `oklch(1 0 0 / 10%)` | `rgba(255,255,255,0.10)` | Borders — white at 10% opacity |
| `--input` | `oklch(1 0 0 / 15%)` | `rgba(255,255,255,0.15)` | Input borders — white at 15% opacity |

#### Chart Colors

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--chart-1` | `oklch(0.55 0.14 195)` | `#1a8a8a` | Teal (matches dark-mode primary) |
| `--chart-2` | `oklch(0.78 0.16 70)` | `#d4a043` | Amber (matches accent) |
| `--chart-3` | `oklch(0.65 0.12 160)` | `#3da882` | Brighter green (boosted for dark) |
| `--chart-4` | `oklch(0.70 0.14 50)` | `#c07a28` | Burnt orange (same) |
| `--chart-5` | `oklch(0.50 0.10 240)` | `#3b5aa0` | Slate blue (slightly brighter) |

#### Sidebar

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--sidebar` | `oklch(0.18 0.02 240)` | `#141c30` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.95 0.005 90)` | `#f0efed` | Sidebar text |
| `--sidebar-primary` | `oklch(0.55 0.14 195)` | `#1a8a8a` | Active item |
| `--sidebar-primary-foreground` | `oklch(0.98 0.005 90)` | `#faf8f5` | Active item text |
| `--sidebar-accent` | `oklch(0.25 0.02 240)` | `#1e2640` | Hover surface |
| `--sidebar-accent-foreground` | `oklch(0.92 0.005 90)` | `#e8e7e4` | Hover text |
| `--sidebar-border` | `oklch(1 0 0 / 10%)` | `rgba(255,255,255,0.10)` | Sidebar dividers |
| `--sidebar-ring` | `oklch(0.45 0.1 195)` | `#1a6b6b` | Focus ring |

#### Hardcoded Utility Colors (Tailwind classes with dark: variant)

| Tailwind Class | Hex | Usage |
|---|---|---|
| `dark:bg-amber-950/30` | `#451a03` at 30% | Fleet warning banner background |
| `dark:border-amber-700` | `#b45309` | Fleet warning banner border |
| `dark:text-amber-400` | `#fbbf24` | Warning icon in fleet banner |
| `dark:text-amber-200` | `#fde68a` | Warning text in fleet banner |
| `dark:text-green-400` | `#4ade80` | Checkmarks in fleet feature lists |
| `dark:bg-amber-900/50` | `#78350f` at 50% | Warning icon background circle |
| `bg-green-600` (no dark variant) | `#16a34a` | WhatsApp / CTA buttons (same both modes) |
| `fill-amber-400` / `text-amber-400` | `#fbbf24` | Star ratings (same both modes) |

### Key differences from light mode

| Token | Light Mode | Dark Mode | Why |
|---|---|---|---|
| `--primary` | `oklch(0.35 0.1 195)` — deep teal | `oklch(0.55 0.14 195)` — brighter teal | Needs more luminance to be visible on dark backgrounds |
| `--destructive` | `oklch(0.577 ...)` — darker red | `oklch(0.704 ...)` — brighter red | Lighter red is more readable on dark surfaces |
| `--border` | Solid warm gray | White at 10% opacity | Opacity-based borders blend naturally with any dark surface |
| `--warning` | Bright amber | Toned-down amber | Prevents excessive brightness / glare on dark backgrounds |
| `--chart-3` | `oklch(0.55 ...)` — muted green | `oklch(0.65 ...)` — brighter green | Boosted luminance for dark-bg readability |

---

## Section 3: Alternative Color Combinations

Below are three alternative dark-mode palettes. Each is paired with its corresponding light-mode alternative from the light-mode document.

---

### Alternative A: "Ocean Blue & Sunset" (Dark Version)

Deep midnight blue with warm coral highlights.

| Token | New OKLCH Value | Approx. Hex | Visual |
|---|---|---|---|
| `--background` | `oklch(0.13 0.02 250)` | `#0a0f1e` | Deep midnight blue |
| `--foreground` | `oklch(0.95 0.003 230)` | `#e8ecf2` | Cool off-white |
| `--card` | `oklch(0.18 0.02 250)` | `#121a30` | Lifted midnight |
| `--primary` | `oklch(0.55 0.14 240)` | `#3b82f6` | Bright ocean blue |
| `--primary-foreground` | `oklch(0.98 0 0)` | `#fafafa` | White |
| `--accent` | `oklch(0.75 0.18 40)` | `#e07040` | Warm sunset coral |
| `--accent-foreground` | `oklch(0.98 0 0)` | `#fafafa` | White |
| `--muted` | `oklch(0.22 0.02 250)` | `#1a2240` | Dark blue-gray |
| `--muted-foreground` | `oklch(0.60 0.01 240)` | `#8892a8` | Cool medium gray |
| `--border` | `oklch(1 0 0 / 10%)` | `rgba(255,255,255,0.10)` | White 10% |

**Best for:** A sleek, tech-forward dark mode. The blue feels modern and the coral accents add warmth to what could otherwise feel cold.

---

### Alternative B: "Forest Green & Gold" (Dark Version)

Deep forest darkness with rich gold highlights — luxurious and warm.

| Token | New OKLCH Value | Approx. Hex | Visual |
|---|---|---|---|
| `--background` | `oklch(0.12 0.02 160)` | `#081510` | Deep forest black |
| `--foreground` | `oklch(0.93 0.008 100)` | `#e8e5dc` | Warm parchment-white |
| `--card` | `oklch(0.18 0.02 160)` | `#102218` | Lifted dark green |
| `--primary` | `oklch(0.52 0.12 160)` | `#22a06a` | Bright forest green |
| `--primary-foreground` | `oklch(0.98 0.005 90)` | `#faf8f5` | Warm white |
| `--accent` | `oklch(0.78 0.15 85)` | `#d4a83a` | Rich gold |
| `--accent-foreground` | `oklch(0.12 0.02 80)` | `#1a1505` | Dark brown-black |
| `--muted` | `oklch(0.22 0.02 160)` | `#182a20` | Dark muted green |
| `--muted-foreground` | `oklch(0.62 0.02 150)` | `#7a9a88` | Soft sage gray |
| `--border` | `oklch(1 0 0 / 8%)` | `rgba(255,255,255,0.08)` | White 8% |

**Best for:** A premium, immersive experience. The dark greens feel like a deep forest at night, and the gold accents create a luxurious, almost royal atmosphere. Particularly fitting for the spiritual/pilgrimage travel emphasis.

---

### Alternative C: "Warm Charcoal & Marigold" (Dark Version)

Rich warm blacks with vibrant marigold pops — dramatic and distinctly Indian.

| Token | New OKLCH Value | Approx. Hex | Visual |
|---|---|---|---|
| `--background` | `oklch(0.13 0.01 60)` | `#141210` | Very dark warm charcoal |
| `--foreground` | `oklch(0.93 0.005 60)` | `#e8e5e0` | Warm cream-white |
| `--card` | `oklch(0.19 0.01 60)` | `#201e1a` | Lifted warm dark |
| `--primary` | `oklch(0.45 0.04 60)` | `#5c5548` | Medium warm charcoal |
| `--primary-foreground` | `oklch(0.97 0.005 60)` | `#f5f2ed` | Cream white |
| `--accent` | `oklch(0.82 0.19 65)` | `#f0a010` | Bright marigold orange |
| `--accent-foreground` | `oklch(0.12 0.03 50)` | `#1a1005` | Near-black brown |
| `--muted` | `oklch(0.22 0.01 60)` | `#282420` | Dark warm gray |
| `--muted-foreground` | `oklch(0.60 0.01 60)` | `#908880` | Warm medium gray |
| `--border` | `oklch(1 0 0 / 8%)` | `rgba(255,255,255,0.08)` | White 8% |

**Best for:** A bold, culturally grounded dark mode. The warm charcoal background feels cozy (not cold), and the bright marigold is a striking, unmistakably Indian highlight that draws the eye to key actions. Looks great with travel photography.

---

### Quick comparison

| Palette | Dark-Mode Feel | Best Suited For |
|---|---|---|
| **Current (Navy & Teal)** | Professional, calming, balanced | Reliable all-around dark mode |
| **A: Midnight Blue & Coral** | Modern, techy, energetic | App-like experience, younger audience |
| **B: Forest Black & Gold** | Luxurious, immersive, premium | High-end travel / spiritual journeys |
| **C: Warm Charcoal & Marigold** | Bold, dramatic, cultural | Standing out with Indian visual identity |

---

### Implementation note

To apply any alternative, replace the corresponding OKLCH values in the `.dark { }` block of the main stylesheet. Each alternative is designed so that the light-mode and dark-mode variants of the same palette share a consistent identity — switch both together for the best results.
