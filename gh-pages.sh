#!/bin/bash

# Clear the build directory
rm -rf public

# Copy the build output directory to public
cp -r build/* public

# Deploy to GitHub Pages
git add public
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages