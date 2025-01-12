import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { StartPage } from './routes/login-page';
import { RegisterPage } from './routes/register-page';
import { WrapperInternshipsPage } from './routes/wrapper-internships-page';
import { StudentProfilePage } from './routes/student-profile-page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<StartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/main/student"
          element={<WrapperInternshipsPage userType="student" />}
        />
        <Route
          path="/main/company"
          element={<WrapperInternshipsPage userType="company" />}
        />
        <Route path="/student-profile" element={<StudentProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
