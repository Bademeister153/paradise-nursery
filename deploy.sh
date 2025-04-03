#!/usr/bin/env sh

# Baue das Projekt
npm run build

# Navigiere zum Ausgabeverzeichnis
cd out

# Initialisiere ein Git-Repository
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Pushe zum gh-pages Branch
git push -f https://github.com/LukasWie/paradise-nursery.git master:gh-pages

cd - 