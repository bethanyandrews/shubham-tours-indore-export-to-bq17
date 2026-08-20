# Light Mode — Color Reference

---

## Section 1: Simple Overview (For Everyone)

### What colors does the website use?

The light mode of the website uses a **clean, warm off-white background** with **deep dark-blue text** — easy on the eyes and very readable.

Here's a plain-English breakdown of every color you see:

| Where you see it | What it looks like |
|---|---|
| **Page background** | A warm, very faint cream-white — not a harsh pure white |
| **Main text** | Very dark navy blue — almost black, but softer |
| **Cards and popups** | Pure white — they stand out slightly against the creamy background |
| **Buttons and links (primary)** | Deep teal-green — the signature brand color of the website |
| **Button text** | Off-white / cream — sits on top of the teal buttons |
| **Section backgrounds (alternating)** | A very light warm gray with a hint of beige — gives sections visual separation |
| **Faded / secondary text** | Medium gray with a cool blue undertone — used for descriptions, captions |
| **Accent / highlights** | Warm golden-amber — used for star ratings, badges, and eye-catching elements |
| **Borders and dividers** | Very light gray with a warm tint — subtle, not harsh |
| **Error messages** | Bold red-orange |
| **Success indicators** | Fresh green — used for checkmarks and confirmation elements |
| **Warning notices** | Warm golden-yellow — used for the fleet info banner |
| **WhatsApp buttons** | Standard WhatsApp green (#16a34a) |
| **Star ratings** | Golden amber (#fbbf24) |
| **Gradient overlays on images** | Black fading from transparent to semi-opaque — makes text readable on photos |
| **CTA banner section** | Uses the teal primary color as a full background with cream text on top |

### How it feels

The light mode gives a **professional, trustworthy, and warm** feeling. The teal-green primary color conveys reliability and calm, while the golden accents add a touch of premium quality. The warm off-whites prevent the clinical feel that pure white backgrounds often create.

---

## Section 2: Technical Details

### CSS Custom Properties (OKLCH Color Space)

All theme colors are defined using the **OKLCH** color space in `:root` for maximum perceptual uniformity.

#### Core Backgrounds & Foregrounds

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--background` | `oklch(0.985 0.002 90)` | `#faf9f7` | Page background — warm off-white |
| `--foreground` | `oklch(0.16 0.02 240)` | `#0f1729` | Primary text — near-black with blue undertone |
| `--card` | `oklch(1 0 0)` | `#ffffff` | Card surfaces |
| `--card-foreground` | `oklch(0.16 0.02 240)` | `#0f1729` | Text on cards |
| `--popover` | `oklch(1 0 0)` | `#ffffff` | Popover/dialog surfaces |
| `--popover-foreground` | `oklch(0.16 0.02 240)` | `#0f1729` | Text in popovers |

#### Brand / Primary

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--primary` | `oklch(0.35 0.1 195)` | `#0d4f4f` | Deep teal — buttons, links, brand elements |
| `--primary-foreground` | `oklch(0.98 0.005 90)` | `#faf8f5` | Text on primary surfaces |
| `--ring` | `oklch(0.45 0.1 195)` | `#1a6b6b` | Focus ring — slightly lighter teal |

#### Secondary & Muted

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--secondary` | `oklch(0.95 0.01 90)` | `#f0ede8` | Secondary surface — warm light gray |
| `--secondary-foreground` | `oklch(0.25 0.04 240)` | `#1e2640` | Text on secondary surfaces |
| `--muted` | `oklch(0.95 0.005 90)` | `#f0efed` | Muted backgrounds — section alternation |
| `--muted-foreground` | `oklch(0.50 0.02 240)` | `#6b7080` | Secondary text, captions, descriptions |

#### Accent

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--accent` | `oklch(0.78 0.16 70)` | `#d4a043` | Warm golden amber — ratings, highlights |
| `--accent-foreground` | `oklch(0.18 0.04 50)` | `#2e1f0a` | Text on accent surfaces |

#### Status Colors

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--destructive` | `oklch(0.577 0.245 27.325)` | `#dc2626` | Error red |
| `--destructive-foreground` | `oklch(0.985 0 0)` | `#fbfbfb` | Text on error surfaces |
| `--warning` | `oklch(0.84 0.16 84)` | `#eab308` | Warning yellow-amber |
| `--warning-foreground` | `oklch(0.28 0.07 46)` | `#422006` | Text on warning surfaces |
| `--success` | `oklch(0.60 0.15 145)` | `#16a34a` | Success green |
| `--success-foreground` | `oklch(0.98 0 0)` | `#fafafa` | Text on success surfaces |

#### Borders & Inputs

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--border` | `oklch(0.90 0.01 90)` | `#e3e0d9` | Border color — warm light gray |
| `--input` | `oklch(0.90 0.01 90)` | `#e3e0d9` | Input field borders |

#### Chart Colors

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--chart-1` | `oklch(0.35 0.1 195)` | `#0d4f4f` | Teal (matches primary) |
| `--chart-2` | `oklch(0.78 0.16 70)` | `#d4a043` | Amber (matches accent) |
| `--chart-3` | `oklch(0.55 0.12 160)` | `#2d8a6e` | Muted green |
| `--chart-4` | `oklch(0.70 0.14 50)` | `#c07a28` | Burnt orange |
| `--chart-5` | `oklch(0.45 0.08 240)` | `#3b4c75` | Slate blue |

#### Sidebar (mirrors core tokens)

| Token | OKLCH Value | Approx. Hex | Role |
|---|---|---|---|
| `--sidebar` | `oklch(0.98 0.005 90)` | `#f7f5f2` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.16 0.02 240)` | `#0f1729` | Sidebar text |
| `--sidebar-primary` | `oklch(0.35 0.1 195)` | `#0d4f4f` | Active item highlight |
| `--sidebar-primary-foreground` | `oklch(0.98 0.005 90)` | `#f7f5f2` | Text on active item |
| `--sidebar-accent` | `oklch(0.95 0.01 90)` | `#f0ede8` | Hover/accent surface |
| `--sidebar-accent-foreground` | `oklch(0.25 0.04 240)` | `#1e2640` | Text on accent surface |
| `--sidebar-border` | `oklch(0.90 0.01 90)` | `#e3e0d9` | Sidebar dividers |
| `--sidebar-ring` | `oklch(0.45 0.1 195)` | `#1a6b6b` | Focus ring |

#### Hardcoded Utility Colors (Tailwind classes used directly in components)

| Tailwind Class | Hex | Usage |
|---|---|---|
| `bg-green-600` / `hover:bg-green-700` | `#16a34a` / `#15803d` | WhatsApp and CTA buttons |
| `text-green-600` / `text-green-400` | `#16a34a` / `#4ade80` | Checkmarks, WhatsApp links |
| `fill-amber-400` / `text-amber-400` | `#fbbf24` | Star ratings |
| `bg-amber-50` / `border-amber-300` / `text-amber-800` | `#fffbeb` / `#fcd34d` / `#92400e` | Fleet info warning banner |
| `bg-black/70` through `bg-black/20` | Black at various opacities | Image overlay gradients |

---

## Section 3: Alternative Color Combinations

Below are three alternative palettes that would work well for a travel / cab service website while keeping the same warm, trustworthy feel.

---

### Alternative A: "Ocean Blue & Sunset"

A fresh blue primary with warm coral accents — energetic and travel-oriented.

| Token | New OKLCH Value | Approx. Hex | Visual |
|---|---|---|---|
| `--background` | `oklch(0.98 0.003 230)` | `#f5f7fa` | Cool white |
| `--foreground` | `oklch(0.18 0.02 240)` | `#111827` | Near-black |
| `--primary` | `oklch(0.40 0.12 240)` | `#1e3a8a` | Deep ocean blue |
| `--primary-foreground` | `oklch(0.98 0 0)` | `#fafafa` | White |
| `--accent` | `oklch(0.72 0.18 40)` | `#e07040` | Warm sunset coral |
| `--accent-foreground` | `oklch(0.15 0.04 30)` | `#2a1008` | Dark brown |
| `--muted` | `oklch(0.95 0.005 230)` | `#eef1f5` | Cool light gray |
| `--muted-foreground` | `oklch(0.50 0.01 240)` | `#6b7280` | Medium gray |
| `--ring` | `oklch(0.50 0.12 240)` | `#2563eb` | Bright blue |
| `--success` | `oklch(0.60 0.15 145)` | `#16a34a` | Green (same) |
| `--warning` | `oklch(0.80 0.15 84)` | `#eab308` | Amber (same) |
| `--destructive` | `oklch(0.577 0.245 27)` | `#dc2626` | Red (same) |

**Best for:** A more modern, corporate look. The blue builds trust (used by Uber, Ola), and the coral accent grabs attention for booking buttons.

---

### Alternative B: "Forest Green & Gold"

Rich green paired with luxurious gold — earthy, premium, and very suitable for a travel company.

| Token | New OKLCH Value | Approx. Hex | Visual |
|---|---|---|---|
| `--background` | `oklch(0.98 0.005 100)` | `#f8f7f2` | Warm parchment white |
| `--foreground` | `oklch(0.15 0.03 150)` | `#0a1f15` | Very dark green-black |
| `--primary` | `oklch(0.38 0.10 160)` | `#155e3d` | Deep forest green |
| `--primary-foreground` | `oklch(0.98 0.005 90)` | `#faf8f5` | Warm white |
| `--accent` | `oklch(0.75 0.14 85)` | `#c49b2e` | Rich gold |
| `--accent-foreground` | `oklch(0.15 0.04 80)` | `#2a1f05` | Dark brown |
| `--muted` | `oklch(0.95 0.008 100)` | `#f0eee6` | Warm cream-gray |
| `--muted-foreground` | `oklch(0.48 0.02 150)` | `#5a6e62` | Muted sage |
| `--ring` | `oklch(0.48 0.10 160)` | `#1e7a50` | Medium green |
| `--success` | `oklch(0.55 0.14 145)` | `#0d9040` | Bright green |
| `--warning` | `oklch(0.82 0.15 84)` | `#d4a017` | Warm gold |
| `--destructive` | `oklch(0.577 0.245 27)` | `#dc2626` | Red (same) |

**Best for:** A premium, nature-inspired feel. Works especially well for a business that emphasizes pilgrimage and scenic travel routes.

---

### Alternative C: "Warm Charcoal & Marigold"

Sophisticated dark-warm neutrals with vibrant Indian marigold as the highlight — modern and culturally resonant.

| Token | New OKLCH Value | Approx. Hex | Visual |
|---|---|---|---|
| `--background` | `oklch(0.97 0.004 60)` | `#f5f3ef` | Warm stone-white |
| `--foreground` | `oklch(0.20 0.01 60)` | `#2a2720` | Warm charcoal |
| `--primary` | `oklch(0.35 0.03 60)` | `#4a433a` | Dark warm gray-brown |
| `--primary-foreground` | `oklch(0.97 0.005 60)` | `#f5f2ed` | Cream white |
| `--accent` | `oklch(0.80 0.19 65)` | `#e5920a` | Vibrant marigold orange |
| `--accent-foreground` | `oklch(0.15 0.04 50)` | `#2a1a05` | Deep brown |
| `--muted` | `oklch(0.94 0.006 60)` | `#eceae4` | Warm light gray |
| `--muted-foreground` | `oklch(0.52 0.01 60)` | `#7a7368` | Warm medium gray |
| `--ring` | `oklch(0.70 0.17 65)` | `#c47a08` | Focused orange-gold |
| `--success` | `oklch(0.60 0.15 145)` | `#16a34a` | Green (same) |
| `--warning` | `oklch(0.84 0.16 84)` | `#eab308` | Amber (same) |
| `--destructive` | `oklch(0.577 0.245 27)` | `#dc2626` | Red (same) |

**Best for:** A stylish, culturally rooted design. The marigold accent is bold and distinctly Indian, pairing beautifully with understated neutrals. Great for standing out from the sea of blue/green cab websites.

---

### Quick comparison

| Palette | Primary Feel | Best Suited For |
|---|---|---|
| **Current (Teal & Gold)** | Calm, trustworthy, warm | All-around professional cab service |
| **A: Ocean Blue & Sunset** | Modern, corporate, energetic | Competing with ride-hailing apps |
| **B: Forest Green & Gold** | Premium, earthy, spiritual | Pilgrimage and scenic tour emphasis |
| **C: Charcoal & Marigold** | Sophisticated, bold, cultural | Standing out with Indian identity |
