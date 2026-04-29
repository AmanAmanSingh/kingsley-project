# ⚡ Quick Reference Card

## 🚀 Get Started (4 Commands)

```bash
# 1. Go to project directory (already done)
cd /Users/aman/Desktop/kingsley

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Browser will show: http://localhost:5173/
```

**That's it!** App is running.

---

## 📍 Navigate the App

| Page | Icon | Features |
|------|------|----------|
| Dashboard | 📊 | Stats, charts, recent tickets |
| Tickets | 🎫 | Search, filter, create tickets |
| Teams | 👥 | Team members, status, assign |
| Reports | 📈 | Analytics, trends, export |

Click menu items to switch pages. Everything is interactive.

---

## 🎨 Customize

### Colors
Edit: `tailwind.config.js`
```javascript
colors: {
  primary: { ... },    // Change cyan color
  teal: { ... },       // Change teal color
}
```

### Logo/Title
Edit: `src/components/Sidebar.tsx`
- Line 37: Logo text
- Line 39: Subtitle

### Add New Page
1. Create `src/pages/NewPage.tsx`
2. Export from `src/pages/index.ts`
3. Import in `App.tsx`
4. Add to Sidebar menu
5. Add case in switch statement

---

## 📂 Important Files

```
Styling:
├── tailwind.config.js      # Colors, fonts, sizes
├── src/index.css           # Global styles
└── src/App.css             # App-specific styles

Components:
├── src/components/Sidebar.tsx    # Navigation
├── src/components/Header.tsx     # Top bar
├── src/components/*.tsx          # UI components
└── src/components/index.ts       # Exports

Pages:
├── src/pages/Dashboard.tsx       # Main dashboard
├── src/pages/Tickets.tsx         # Ticket list
├── src/pages/Teams.tsx           # Team directory
├── src/pages/Reports.tsx         # Analytics
└── src/pages/index.ts            # Page exports

Data:
└── src/types/index.ts            # TypeScript types

Main:
├── src/App.tsx                   # Main app
├── src/main.tsx                  # Entry point
└── index.html                    # HTML template
```

---

## 🔧 Common Tasks

### Change Primary Color
```javascript
// tailwind.config.js - line ~6
primary: {
  500: '#0ea5e9',    // Change this value
  600: '#0284c7',    // And these
  700: '#0369a1',
}
```

### Update Team Members
```typescript
// src/pages/Teams.tsx - line ~10
const teamMembers: User[] = [
  // Add your members here
];
```

### Add Sample Data
```typescript
// Any page component
const mockData = [
  // Add your data here
];
```

### Change Sidebar Items
```typescript
// src/components/Sidebar.tsx - line ~12
const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  // Add new items here
];
```

---

## 🌐 Responsive Design

### Breakpoints Used
- `sm` (640px): Small phones
- `md` (768px): Tablets, large phones
- `lg` (1024px): Laptops, desktops
- `xl` (1280px): Large desktops

### Example Usage
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 col mobile, 2 col tablet, 3 col desktop */}
</div>
```

---

## 📊 Data Models

### Ticket
```typescript
interface Ticket {
  id: string;              // ALLOC-1024
  title: string;           // Issue title
  status: TicketStatus;    // Backlog, Triaged, In Progress, etc.
  priority: Priority;      // Low, Medium, High, Critical
  type: TicketType[];      // Bug, Feature, Documentation, etc.
  assignee?: User;         // Team member handling it
  reporter: User;          // Who reported it
  created_date: string;    // ISO date
  updated_date: string;    // ISO date
}
```

### User
```typescript
interface User {
  id: string;              // Unique ID
  name: string;            // Display name
  email: string;           // Contact email
  role: string;            // Job title
  status?: 'online' | 'offline' | 'away';
  avatar?: string;         // Avatar text/image
}
```

---

## 🎯 Page Features

### Dashboard
- 4 stat cards with trends
- Line chart (weekly trends)
- Bar chart (daily volume)
- Recent tickets grid

### Tickets
- Search by ID or title
- Filter by status
- Create new button
- Responsive grid layout

### Teams
- Team member cards
- Presence status
- Quick actions
- Team statistics

### Reports
- Resolution time trend
- Team performance
- Ticket volume pie chart
- Popular issues table

---

## 🎨 Color Usage

```
Status Colors:
  Backlog: gray        #6b7280
  Triaged: amber       #f59e0b
  In Progress: blue    #3b82f6
  Waiting: amber       #f59e0b
  Resolved: green      #10b981

Priority Colors:
  Critical: red        #ef4444
  High: orange         #f97316
  Medium: blue         #3b82f6
  Low: green           #10b981

Action Colors:
  Primary: cyan        #0ea5e9
  Secondary: gray      #e5e7eb
  Success: green       #10b981
  Danger: red          #ef4444
```

---

## 📝 Component Props

### Card
```jsx
<Card 
  className=""     // Additional classes
  hover={true}     // Show hover effect
  onClick={() => {}} // Click handler
>
  {children}
</Card>
```

### Button
```jsx
<Button
  label="Click me"
  variant="primary"  // primary, secondary, success, danger, ghost
  size="md"         // sm, md, lg
  onClick={() => {}}
  disabled={false}
  loading={false}
  icon={<Icon />}
/>
```

### Badge
```jsx
<Badge
  label="Status"
  variant="success"  // default, success, warning, danger, info
/>
```

### StatCard
```jsx
<StatCard
  title="Total"
  value={100}
  change={+12}      // Percentage
  icon={<Icon />}
  color="cyan"      // cyan, green, red, orange
/>
```

---

## 🚢 Build & Deploy

### Build for Production
```bash
npm run build
```
Creates optimized `dist/` folder.

### Preview Build
```bash
npm run preview
```
Test production build locally.

### Deploy (Examples)
```bash
# Vercel
npm install -g vercel
vercel

# Netlify
# Connect Git repo, auto-deploys on push

# Any hosting
# Upload contents of dist/ folder
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port in use | `npm run dev -- --port 3000` |
| Module not found | `rm -rf node_modules && npm install` |
| Hot reload not working | Restart dev server |
| TypeScript errors | Check `src/types/index.ts` |
| Styling not applying | Clear cache, restart server |
| Charts not showing | Check data format |

---

## 📚 Key Concepts

### React Hooks Used
- `useState`: State management
- `map()`: Render lists
- Event handlers: onClick, onChange, etc.

### Tailwind Classes
- `grid grid-cols-1 md:grid-cols-2`: Responsive grid
- `bg-cyan-500`: Cyan background
- `text-white`: White text
- `p-4 md:p-6`: Responsive padding
- `hover:shadow-lg`: Hover effects

### TypeScript
- Type all props
- Interface all data models
- Use strict mode

---

## ✨ Tips & Tricks

1. **Mobile Testing**: Use browser DevTools (F12) → Mobile device toggle
2. **Colors**: Use Tailwind color picker or check config
3. **Performance**: Use Chrome DevTools Lighthouse tab
4. **Debug**: Check browser console (F12)
5. **Code Quality**: TypeScript provides type hints

---

## 🔗 Useful Links

- [React Docs](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

## 📋 Checklist for First Time

- [ ] Opened terminal in kingsley folder
- [ ] Ran `npm install`
- [ ] Ran `npm run dev`
- [ ] Opened http://localhost:5173
- [ ] Explored all 4 pages
- [ ] Tested mobile responsiveness
- [ ] Tested search and filters

---

## 🎯 Next Goal

After familiarizing yourself:
1. Customize colors
2. Change company name/logo
3. Add your team members
4. Connect to real API
5. Deploy to production

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Status**: Ready to Use

🚀 **Happy Coding!**
