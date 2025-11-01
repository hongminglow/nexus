# Nexus Admin Dashboard

A modern, feature-rich admin dashboard built with **React 17**, **Syncfusion components**, and **Tailwind CSS**. Nexus showcases industry-standard dashboard UI patterns and reusable components commonly used in enterprise-level applications.

## 🎯 Purpose

Nexus is a comprehensive dashboard template that demonstrates:
- **Core dashboard patterns**: navigation, layouts, theming, and responsive design
- **Syncfusion integration**: production-ready data grids, charts, calendars, and editors
- **Reusable components**: a library of pre-built UI elements for rapid development
- **Best practices**: modern React patterns, routing, state management, and styling

Perfect for developers looking to kickstart admin panels, data management platforms, or analytics dashboards.

---

## ✨ Key Features

### 📊 Dashboard Pages
- **Ecommerce Dashboard**: Overview with sales metrics and key performance indicators
- **Orders**: Interactive data grid with sorting, filtering, editing, and export capabilities
- **Employees**: Employee management with grid-based data visualization
- **Customers**: Customer directory with search and status management
- **Calendar**: Scheduling interface using Syncfusion's schedule component
- **Kanban**: Task management board with drag-and-drop support
- **Color Picker**: Interactive color selection tool
- **Editor**: Rich-text editor for content creation

### 📈 Charts & Visualizations
- **Area Chart**: Trend analysis and historical data
- **Bar Chart**: Comparative metrics visualization
- **Line Chart**: Time-series data display
- **Pie Chart**: Proportional data breakdown
- **Stacked Chart**: Multi-series stacked visualization
- **Pyramid Chart**: Hierarchical data representation
- **Financial Chart**: Stock and financial data tracking
- **Color Mapping**: Data visualization with color gradients
- **Sparklines**: Compact inline charts for quick insights

### 🎨 UI Components
- **Navbar**: Top navigation with theme switching and user profile
- **Sidebar**: Responsive navigation menu with icon support
- **Button**: Customizable button component with variants
- **Cart**: Shopping cart interface
- **Chat**: Real-time messaging UI
- **Notification**: Alert and notification center
- **User Profile**: User account management panel
- **Charts Header**: Reusable chart title and metadata component
- **Footer**: Application footer with branding

### 🌓 Theming System
- **Dark & Light Modes**: Toggle between color schemes
- **Dynamic Color Theming**: Customize primary colors on-the-fly
- **Theme Settings**: User-friendly theme configuration panel
- **Responsive Design**: Mobile, tablet, and desktop optimized layouts

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 17** | UI library with modern hooks and functional components |
| **React Router v6** | Client-side routing and navigation |
| **Syncfusion EJ2** | Enterprise UI components (grids, charts, calendars, editors) |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **React Icons** | Icon library with 1000+ icons from popular icon sets |
| **PostCSS & Autoprefixer** | CSS processing and browser compatibility |

---

## 📦 Project Structure

```
nexus/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Charts/          # Chart components (SparkLine, LineChart, Pie, Stacked)
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeSettings.jsx
│   │   ├── UserProfile.jsx
│   │   ├── Cart.jsx
│   │   ├── Chat.jsx
│   │   ├── Notification.jsx
│   │   └── index.jsx        # Barrel export for all components
│   ├── pages/               # Page/route components
│   │   ├── Charts/          # Chart showcase pages (Area, Bar, Line, Pie, etc.)
│   │   ├── Ecommerce.jsx    # Main dashboard home
│   │   ├── Orders.jsx
│   │   ├── Employees.jsx
│   │   ├── Customers.jsx
│   │   ├── Calendar.jsx
│   │   ├── Kanban.jsx
│   │   ├── ColorPicker.jsx
│   │   ├── Editor.jsx
│   │   └── index.jsx        # Barrel export for all pages
│   ├── contexts/            # React Context for global state
│   │   └── ContextProvider.js
│   ├── data/
│   │   └── dummy.js         # Mock data for components and charts
│   ├── App.js               # Main app component with routing
│   ├── App.css              # Global app styles
│   ├── index.js             # React DOM render entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── .eslintrc.js             # ESLint configuration
├── craco.config.js          # Create React App config override
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 14.x
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hongminglow/nexus.git
   cd nexus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates an optimized production bundle in the `build/` directory

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject Create React App configuration (irreversible)
npm run eject
```

---

## 🎨 Using Syncfusion Components

### GridComponent (Data Table)
Used in Orders, Employees, and Customers pages for displaying and managing tabular data:
```jsx
<GridComponent
  dataSource={ordersData}
  allowPaging
  allowSorting
  allowExcelExport
  allowPdfExport
>
  <ColumnsDirective>
    <ColumnDirective field="OrderID" headerText="Order ID" />
    <ColumnDirective field="CustomerName" headerText="Customer" />
  </ColumnsDirective>
  <Inject services={[Page, Sort, Filter, ExcelExport, PdfExport]} />
</GridComponent>
```

### ChartComponent (Data Visualization)
Multiple chart types for analytics:
- **AreaChart**: Trend visualization
- **BarChart**: Comparative analysis
- **PieChart**: Proportional breakdown
- **PyramidChart**: Hierarchical data
- **StackedChart**: Multi-series stacking

### ScheduleComponent (Calendar)
Event scheduling and calendar management:
```jsx
<ScheduleComponent
  data={scheduleData}
  views={['Day', 'Week', 'Month']}
  currentView='Month'
/>
```

### KanbanComponent (Task Management)
Drag-and-drop task board for workflow management.

### RichTextEditorComponent (Content Creation)
WYSIWYG editor for rich content creation with formatting options.

### ColorPickerComponent (Color Selection)
User-friendly color picker for theme customization.

---

## 🎯 ESLint Configuration

The project uses ESLint with Airbnb's style guide, customized to support:
- React 17+ (automatic JSX transform—React import not required)
- Flexible quote styles (both single and double quotes allowed)
- Relaxed stylistic rules to focus on code quality over formatting
- Trailing commas in multiline constructs for cleaner diffs

See `.eslintrc.js` for detailed rule configuration.

---

## 🌐 Routing

The application uses React Router v6 for client-side routing:

| Route | Page | Component |
|---|---|---|
| `/` | Ecommerce Dashboard | Ecommerce.jsx |
| `/ecommerce` | Dashboard | Ecommerce.jsx |
| `/orders` | Orders Management | Orders.jsx |
| `/employees` | Employee Directory | Employees.jsx |
| `/customers` | Customer Management | Customers.jsx |
| `/kanban` | Task Board | Kanban.jsx |
| `/editor` | Rich Text Editor | Editor.jsx |
| `/calendar` | Calendar/Scheduling | Calendar.jsx |
| `/color-picker` | Color Picker Tool | ColorPicker.jsx |
| `/line` | Line Chart | Charts/Line.jsx |
| `/area` | Area Chart | Charts/Area.jsx |
| `/bar` | Bar Chart | Charts/Bar.jsx |
| `/pie` | Pie Chart | Charts/Pie.jsx |
| `/financial` | Financial Chart | Charts/Financial.jsx |
| `/color-mapping` | Color Mapping Chart | Charts/ColorMapping.jsx |
| `/pyramid` | Pyramid Chart | Charts/Pyramid.jsx |
| `/stacked` | Stacked Chart | Charts/Stacked.jsx |

---

## 🎨 Theming & Customization

### Dark Mode Toggle
Click the theme icon in the Navbar to switch between light and dark modes.

### Color Theme Customization
Use the **Theme Settings** panel (accessible from the Navbar) to:
- Select predefined color palettes
- Choose primary, secondary, and accent colors
- Preview changes in real-time
- Persist theme preferences (via Context Provider)

### Tailwind CSS
Customize styles by editing:
- `tailwind.config.js` - Tailwind configuration (colors, spacing, fonts)
- `src/index.css` - Global CSS variables and overrides
- Component-level CSS files - Component-specific styles

---

## 📊 Mock Data

The `src/data/dummy.js` file contains sample data for:
- Orders with customer and shipping information
- Employee records with profiles and departments
- Customer data with contact information
- Chart datasets for all visualization types
- Calendar events
- Kanban board tasks
- Menu items and navigation links

Replace with real API calls for production use.

---

## 🔧 Development Tips

### Adding a New Page
1. Create a new file in `src/pages/` (e.g., `Analytics.jsx`)
2. Export it from `src/pages/index.jsx`
3. Add a route in `src/App.js`
4. Add a menu item in `src/data/dummy.js` (links array)

### Adding a New Component
1. Create a component file in `src/components/`
2. Export it from `src/components/index.jsx`
3. Import and use in pages or other components

### Using Context for Global State
Access global theme and menu state via `useStateContext()`:
```jsx
import { useStateContext } from "../contexts/ContextProvider";

const MyComponent = () => {
  const { currentColor, darkMode, setDarkMode } = useStateContext();
  // Use context values
};
```

---

## 🚨 Known Limitations

- Mock data only (no real backend integration)
- Responsive breakpoints optimized for common device sizes
- Syncfusion components require a valid license for commercial use
- Build size may be large due to Syncfusion library inclusion

---

## 📄 License

This project is provided as-is for educational and reference purposes.

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m 'Add MyFeature'`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

---

## 📞 Support & Questions

For issues, questions, or feature requests, please open an issue on GitHub or contact the project maintainers.

---

## 🙏 Acknowledgments

- **Syncfusion**: Enterprise-grade UI components
- **Tailwind CSS**: Utility-first CSS framework
- **React**: JavaScript library for building user interfaces
- **React Icons**: Comprehensive icon library

---

**Happy coding! 🚀**
