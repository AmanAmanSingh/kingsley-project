# Setup & Installation Guide

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18 & React DOM
- TypeScript
- Tailwind CSS
- Recharts (for data visualization)
- Lucide React (for icons)
- Vite (build tool)
- And other development dependencies

### Step 2: Start Development Server
```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:5173/
- **Network**: Check terminal for network URL

Press `q` to stop the server.

### Step 3: Open in Browser
Navigate to http://localhost:5173/ in your preferred browser.

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR). Changes refresh instantly without full page reload.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Starts a local server to preview the production build before deployment.

### Type Checking
```bash
npm run type-check
```
Runs TypeScript type checking without building (if configured).

### Linting (Optional)
```bash
npm run lint
```
Checks code quality and style (if ESLint is configured).

### Formatting (Optional)
```bash
npm run format
```
Automatically formats code (if Prettier is configured).

## 🎯 Project Organization

### Folder Structure

```
kingsley/
├── node_modules/              # Installed dependencies
├── public/                     # Static assets (favicon, etc.)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── StatCard.tsx
│   │   ├── TicketCard.tsx
│   │   └── index.ts
│   ├── pages/                  # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Tickets.tsx
│   │   ├── Teams.tsx
│   │   ├── Reports.tsx
│   │   └── index.ts
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts
│   ├── hooks/                  # Custom React hooks (ready for expansion)
│   ├── utils/                  # Utility functions (ready for expansion)
│   ├── services/               # API services (ready for expansion)
│   ├── context/                # React context (ready for expansion)
│   ├── assets/                 # Images, icons, etc.
│   ├── App.tsx                 # Main app component with routing
│   ├── App.css                 # App-specific styles
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + Tailwind directives
├── index.html                  # HTML entry point
├── package.json                # Project metadata & dependencies
├── package-lock.json           # Locked dependency versions
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TypeScript config for app code
├── tsconfig.node.json          # TypeScript config for build files
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
├── .gitignore                  # Git ignore patterns
└── README.md                   # Project documentation
```

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
// tailwind.config.js
colors: {
  primary: { ... },      // Change primary color
  teal: { ... },         // Change secondary color
}
```

### Components
All components are in `src/components/`:
- Easy to customize styling
- Export pattern for clean imports
- Reusable across all pages

### Pages
Add new pages in `src/pages/`:
1. Create new `.tsx` file
2. Export from `src/pages/index.ts`
3. Add to navigation in `Sidebar.tsx`
4. Handle routing in `App.tsx`

### Data & Types
- Type definitions in `src/types/index.ts`
- Update types when adding new features
- Full TypeScript support throughout

## 🔌 Adding Features

### Adding a New Page
1. Create `src/pages/MyPage.tsx`
2. Export from `src/pages/index.ts`
3. Add menu item to `Sidebar.tsx`
4. Add case in `App.tsx` switch statement

### Adding a New Component
1. Create `src/components/MyComponent.tsx`
2. Export from `src/components/index.ts`
3. Use in pages or other components

### Adding Dummy Data
- Each page has `mockData` arrays
- Easy to replace with real API calls
- Current setup uses React state with hooks

### Connecting to Real API
1. Create service file in `src/services/`
2. Replace mock data with API calls
3. Update types as needed
4. Handle loading/error states

## 📱 Responsive Features

The app is fully responsive with:
- **Mobile**: Hamburger menu, stacked layout
- **Tablet**: Two-column layout
- **Desktop**: Three-column layout
- **Large Screen**: Optimized full-width layout

Testing responsive design:
```bash
# In browser DevTools:
1. Press F12 or Right-Click → Inspect
2. Click device toggle (mobile phone icon)
3. Test different screen sizes
```

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Other Platforms
- Copy contents of `dist/` folder
- Upload to your hosting service
- Ensure SPA routing is configured

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Not Working
1. Save file again
2. Check browser console for errors
3. Restart dev server: `npm run dev`

### TypeScript Errors
1. Check `src/types/index.ts` for type definitions
2. Verify imports are correct
3. Use TypeScript strict mode

### Styling Issues
1. Ensure Tailwind CSS is installed
2. Check `index.css` has Tailwind directives
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart dev server

## ✅ Verification Checklist

After setup, verify:
- ✓ Development server runs without errors
- ✓ All pages load correctly
- ✓ Navigation between pages works
- ✓ Responsive design works on mobile
- ✓ Charts and data display correctly
- ✓ No TypeScript errors in console
- ✓ Styling looks correct

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Recharts Documentation](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Getting Help

If you encounter issues:
1. Check this guide first
2. Review inline code comments
3. Check component prop types
4. Look at existing components for examples
5. Check browser console for error messages

## 🎓 Next Steps

1. **Customize Colors**: Edit `tailwind.config.js`
2. **Add Real Data**: Replace mock data with API calls
3. **Add Authentication**: Implement login/logout
4. **Add More Pages**: Extend with additional features
5. **Deploy**: Push to production

---

**Happy Coding!** 🚀
