import { Navigate, Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./pages/Login/components/ProtectedRoute";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";
import { QuacProvider } from "./contexts/QuacContex";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <QuacProvider>
                <Home />
              </QuacProvider>
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
