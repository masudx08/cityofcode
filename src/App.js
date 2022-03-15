import { Typography, CssBaseline, AppBar, Toolbar, Container } from '@mui/material';
import Login from './component/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Landing from './component/Landing';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Account from './component/Account';

import Logout from './component/Logout';
import RequireAuth from './component/RequireAuth';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link> */}
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>s
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/account" element={
            <RequireAuth redirectTo="/login">
              <Account />
            </RequireAuth>
          }></Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
