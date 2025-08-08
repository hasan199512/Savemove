# SaveMove Umzüge - Webseite

Eine moderne, responsive Webseite für die Umzugsfirma SaveMove Umzüge.

## 🚀 Features

- **Responsive Design** - Optimiert für Desktop, Tablet und Mobile
- **Moderne UI/UX** - Mit Animationen und interaktiven Elementen
- **Kontaktformular** - Funktionales Formular mit E-Mail-Integration
- **SEO-optimiert** - Semantisches HTML und Meta-Tags
- **Barrierefrei** - WCAG-konforme Implementierung

## 📋 Technologien

- **React 19.1.1** - Moderne JavaScript-Bibliothek
- **CSS3** - Moderne Styling-Techniken
- **HTML5** - Semantisches Markup
- **Responsive Design** - Mobile-first Ansatz

## 🛠️ Installation

### Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn

### Lokale Entwicklung

1. **Repository klonen**
   ```bash
   git clone [repository-url]
   cd savemove
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm start
   ```

4. **Browser öffnen**
   - Die App läuft unter: `http://localhost:3000`

## 🏗️ Build für Production

### Production Build erstellen

```bash
npm run build
```

Dies erstellt einen optimierten Production-Build im `build/` Ordner.

### Build testen

```bash
npm run build
npx serve -s build
```

## 🌐 Deployment-Optionen

### 1. Netlify (Empfohlen)

**Schritte:**
1. Build erstellen: `npm run build`
2. `build/` Ordner zu Netlify hochladen
3. Oder GitHub-Repository mit Netlify verbinden

**Vorteile:**
- Kostenlos
- Automatische Deployments
- SSL-Zertifikat
- CDN

### 2. Vercel

**Schritte:**
1. Vercel CLI installieren: `npm i -g vercel`
2. Projekt deployen: `vercel`
3. Oder GitHub-Repository mit Vercel verbinden

**Vorteile:**
- Sehr schnell
- Automatische Deployments
- Edge Functions
- Analytics

### 3. GitHub Pages

**Schritte:**
1. `package.json` anpassen:
   ```json
   {
     "homepage": "https://[username].github.io/[repo-name]",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

2. Deployen:
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```

### 4. Firebase Hosting

**Schritte:**
1. Firebase CLI installieren: `npm install -g firebase-tools`
2. Firebase initialisieren: `firebase init hosting`
3. Build erstellen: `npm run build`
4. Deployen: `firebase deploy`

### 5. AWS S3 + CloudFront

**Schritte:**
1. S3 Bucket erstellen
2. Static Website Hosting aktivieren
3. CloudFront Distribution erstellen
4. Build hochladen

## 📱 Performance-Optimierung

### Lighthouse Score verbessern

1. **Images optimieren**
   - WebP Format verwenden
   - Lazy Loading implementieren
   - Responsive Images

2. **Code Splitting**
   - React.lazy() für Komponenten
   - Route-based Code Splitting

3. **Caching**
   - Service Worker implementieren
   - Browser Caching optimieren

## 🔧 Umgebungsvariablen

Erstellen Sie eine `.env` Datei für Production-Einstellungen:

```env
REACT_APP_SITE_URL=https://your-domain.com
REACT_APP_EMAIL=hassanalmohamad47@gmail.com
REACT_APP_PHONE=+491772277318
```

## 📊 Analytics & Monitoring

### Google Analytics

```javascript
// In index.html hinzufügen
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Error Tracking

- Sentry für Error Monitoring
- LogRocket für Session Replay

## 🔒 Sicherheit

### HTTPS erzwingen

```javascript
// In App.js
if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
  window.location.href = window.location.href.replace('http:', 'https:');
}
```

### Content Security Policy

```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';">
```

## 📈 SEO-Optimierung

### Meta-Tags

```html
<!-- In public/index.html -->
<meta name="description" content="SaveMove Umzüge - Professionelle Umzugsdienstleistungen in ganz Deutschland. Privat- und Büroumzüge, Verpackung, Lagerung und Express-Transport.">
<meta name="keywords" content="Umzug, Umzugsunternehmen, Berlin, Deutschland, Privatumzug, Büroumzug, Verpackung, Lagerung">
<meta name="author" content="Hassan Al Mohamad">
```

### Sitemap

Erstellen Sie eine `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm install --save-dev cypress
npx cypress open
```

## 📝 Scripts

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "analyze": "npm run build && npx serve -s build",
    "lighthouse": "lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html"
  }
}
```

## 🤝 Support

Bei Fragen oder Problemen:

- **E-Mail**: hassanalmohamad47@gmail.com
- **Telefon**: +49 177 227 731 8
- **Adresse**: Amendestr 12, 13409 Berlin

## 📄 Lizenz

© 2024 SaveMove Umzüge. Alle Rechte vorbehalten.

---

**Entwickelt für SaveMove Umzüge**  
*Ihr vertrauensvoller Partner für professionelle Umzüge*
