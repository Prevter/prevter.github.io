import { Routes, Route } from 'react-router-dom';
import FloatTool from './floattool';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/floattool/*" element={<FloatTool />} />
      </Routes>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <p>Home page</p>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h1 style={{ color: "red" }}>404</h1>
      <h3>Page Not Found</h3>
      <p>
        <a href="/">Go Home</a>
      </p>
    </div>
  );
};