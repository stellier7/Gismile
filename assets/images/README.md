# Gi Smile HN — Image Assets

Drop client media here and reference paths from `js/config.js`.

## Directory layout

```
assets/images/
  logo.png              ← TODO: clinic logo (set branding.logoUrl in config.js)
  hero.jpg              ← TODO: hero background (set branding.heroImageUrl)
  dentist.jpg           ← template placeholder (replace when adding doctors)
  dentists/             ← TODO: one photo per doctor (see config.js dentists[])
    doctor-name.jpg
  gallery/
    smile-01.jpg …      ← TODO: replace with real before/after photos
  financing/
    Bac.png             ← included (BAC Credomatic)
    Ficohsa.png         ← included (Ficohsa)
```

## Still needed for Gi Smile HN

| File | Purpose |
| --- | --- |
| `logo.png` (or `.jpg`/`.svg`) | Header/footer logo |
| `hero.jpg` | Hero section background |
| `gallery/smile-*.jpg` | Smile gallery (5 placeholder slots) |
| `dentists/*.jpg` | Doctor headshots (section hidden until added) |

Financing logos (BAC, Ficohsa) are already included.
