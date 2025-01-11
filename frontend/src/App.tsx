import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { StartPage } from './routes/login-page';
import { RegisterPage } from './routes/register-page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<StartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/main/student"
          element={<div style={{ color: 'black' }}>Student Main Page</div>}
        />
        <Route
          path="/main/company"
          element={<div style={{ color: 'black' }}>Company Main Page</div>}
        />
      </Routes>
    </>
  );
}

export default App;
