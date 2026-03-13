# CV Application

A dynamic, interactive CV builder application that allows users to create, edit, and preview professional CVs in real-time. Built with modern web technologies for a smooth user experience.

## Features

- **Personal Details Management** - Add and update your name, email, phone number, and location
- **Education History** - Track multiple education entries with degree, school, location, dates, and descriptions
- **Work Experience** - Manage work history with company name, position, location, date range, and role descriptions
- **Live Preview** - See your CV update in real-time as you enter information
- **Split-View Interface** - Input form on the left, live CV preview on the right

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS
- **Package Manager**: npm
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd CV-Application
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (Vite default)

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/
│   ├── App.jsx                 # Main application component
│   ├── Aside.jsx              # Left sidebar with input forms
│   ├── Resume.jsx             # Main CV display area
│   ├── PersonalDetailsInput.jsx
│   ├── PersonalDetailsCV.jsx
│   ├── EducationInputs.jsx
│   ├── EducationCV.jsx
│   ├── WorksInput.jsx
│   └── WorksCV.jsx
└── styles/
    ├── App.css
    ├── Aside.css
    └── Resume.css
```

## How to Use

1. **Start with Personal Details** - Enter your name, email, phone number, and location in the personal details section
2. **Add Education** - Include your educational background with degree, school name, location, and graduation dates
3. **Add Work Experience** - Document your professional experience with company, position, and employment period
4. **View CV** - Your CV updates in real-time as you type on the right side of the screen

## Author

**FORSAKANG CHOFOR JUNIOR**
