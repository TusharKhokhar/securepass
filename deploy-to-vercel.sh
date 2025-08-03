#!/bin/bash

echo "🚀 Setting up SecurePass Pro for Vercel deployment..."

# Create a backup of original files
echo "📦 Creating backups..."
cp package.json package-replit-backup.json 2>/dev/null || echo "No existing package.json to backup"
cp vite.config.ts vite-replit-backup.config.ts 2>/dev/null || echo "No existing vite.config.ts to backup"

# Copy Vercel-specific files
echo "📋 Copying Vercel configuration..."
cp package-vercel.json package.json
cp vite-vercel.config.ts vite.config.ts

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Install Vercel CLI: npm i -g vercel"
echo "2. Deploy: vercel --prod"
echo ""
echo "Or push to GitHub and connect to Vercel dashboard."
echo ""
echo "To restore Replit setup:"
echo "cp package-replit-backup.json package.json"
echo "cp vite-replit-backup.config.ts vite.config.ts"