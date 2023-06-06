import { Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./pages/Login/components/ProtectedRoute";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
