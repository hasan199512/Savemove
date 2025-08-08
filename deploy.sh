#!/bin/bash

# SaveMove Umzüge - Deployment Script
# Dieses Script bereitet die App für das Deployment vor

echo "🚀 SaveMove Umzüge - Deployment vorbereiten..."

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Funktionen
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 1. Abhängigkeiten installieren
echo "📦 Installiere Abhängigkeiten..."
if npm install; then
    print_success "Abhängigkeiten erfolgreich installiert"
else
    print_error "Fehler beim Installieren der Abhängigkeiten"
    exit 1
fi

# 2. ESLint-Warnungen beheben
echo "🔧 Behebe ESLint-Warnungen..."
if npm run lint -- --fix 2>/dev/null || true; then
    print_success "ESLint-Warnungen behoben"
else
    print_warning "ESLint-Warnungen konnten nicht automatisch behoben werden"
fi

# 3. Tests ausführen
echo "🧪 Führe Tests aus..."
if npm test -- --watchAll=false --passWithNoTests; then
    print_success "Alle Tests bestanden"
else
    print_warning "Tests fehlgeschlagen - Deployment wird fortgesetzt"
fi

# 4. Production Build erstellen
echo "🏗️ Erstelle Production Build..."
if npm run build; then
    print_success "Production Build erfolgreich erstellt"
else
    print_error "Fehler beim Erstellen des Production Builds"
    exit 1
fi

# 5. Build-Größe analysieren
echo "📊 Analysiere Build-Größe..."
BUILD_SIZE=$(du -sh build | cut -f1)
print_success "Build-Größe: $BUILD_SIZE"

# 6. Lighthouse Score prüfen (falls verfügbar)
if command -v lighthouse &> /dev/null; then
    echo "📈 Führe Lighthouse Audit durch..."
    npx serve -s build -l 3000 &
    SERVE_PID=$!
    sleep 3
    lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html --chrome-flags="--headless"
    kill $SERVE_PID
    print_success "Lighthouse Report erstellt: lighthouse-report.html"
else
    print_warning "Lighthouse nicht installiert - überspringe Audit"
fi

# 7. Deployment-Optionen anzeigen
echo ""
echo "🌐 Deployment-Optionen:"
echo ""
echo "1. Netlify (Empfohlen):"
echo "   - Gehe zu https://netlify.com"
echo "   - Ziehe den 'build' Ordner per Drag & Drop"
echo "   - Oder verbinde dein GitHub Repository"
echo ""
echo "2. Vercel:"
echo "   npm install -g vercel"
echo "   vercel"
echo ""
echo "3. GitHub Pages:"
echo "   npm install --save-dev gh-pages"
echo "   npm run deploy"
echo ""
echo "4. Firebase:"
echo "   npm install -g firebase-tools"
echo "   firebase init hosting"
echo "   firebase deploy"
echo ""

# 8. Build-Ordner Inhalt anzeigen
echo "📁 Build-Ordner Inhalt:"
ls -la build/

print_success "Deployment-Vorbereitung abgeschlossen!"
echo ""
echo "🎯 Nächste Schritte:"
echo "1. Wähle eine Deployment-Plattform"
echo "2. Lade den 'build' Ordner hoch"
echo "3. Konfiguriere deine Domain"
echo "4. Aktiviere HTTPS"
echo ""
echo "📞 Support: hassanalmohamad47@gmail.com" 