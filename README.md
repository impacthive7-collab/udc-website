# UDC Website — Ultimate Distribution Company

> Built on Trust. Powered by Partnership.

A professional, dynamic, WOW-factor website for **Ultimate Distribution Company (UDC)** — Saudi Arabia's premier IT distributor.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — custom brand colors
- **Framer Motion** — scroll animations, page transitions
- **next-intl** — 3 languages: Arabic 🇸🇦 · English 🇬🇧 · Chinese 🇨🇳
- **Lucide React** — icons
- **Netlify** — hosting

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/en` `/ar` `/zh` | Home |
| `/[locale]/about` | About UDC |
| `/[locale]/solutions` | Solutions overview |
| `/[locale]/solutions/cybersecurity` | Cybersecurity |
| `/[locale]/solutions/cloud-computing` | Cloud Computing |
| `/[locale]/solutions/xdr-mdr` | XDR & MDR |
| `/[locale]/solutions/iot-ai` | IoT & AI |
| `/[locale]/solutions/networking` | Networking |
| `/[locale]/solutions/it-operations` | IT Operations |
| `/[locale]/solutions/professional-services` | Professional Services |
| `/[locale]/services` | Services |
| `/[locale]/vendors` | Vendors (9 partners) |
| `/[locale]/insights` | Insights/Blog |
| `/[locale]/careers` | Careers |
| `/[locale]/contact` | Contact |

## 🎨 Brand Colors

```
Primary:  #1a4591 (Royal Blue)
Accent:   #0066ff
Dark:     #0a0f1e
Card:     #0d1425
```

## 💻 Local Development

```bash
# Install dependencies (must unset NODE_ENV=production first)
$env:NODE_ENV = "development"
npm install --include=dev

# Run dev server
npm run dev
# Open http://localhost:3000/en
```

## 🏗️ Build

```bash
$env:NODE_ENV = "development"
npm install --include=dev
npm run build
```

## 🌐 Deploy to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variable: `NODE_ENV=production` (Netlify sets this automatically)
6. Install Netlify Next.js plugin: `@netlify/plugin-nextjs`

Or drag & drop the `.next` folder to Netlify manually.

## 📞 Contact

- Email: info@udc.net.sa  
- Phone: +966 55 332 2001  
- Website: udc.net.sa
