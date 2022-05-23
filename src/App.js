import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/NavBar/Navbar.js";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import Activities from "./pages/Activities/Activities";
import Assignments from "./pages/Assignments/Assignments";
import Login from "./pages/Login/Login";
import Answers from "./pages/Answers/Answers";
import tokenService from "./services/TokenService";

function App() {
  let location = useLocation();
  let navigate = useNavigate();

  // Хук который срабатывает при обновление страницы.
  useEffect(() => {
    // Если маршрут пользователя не соответствует '/' (окну с авторизацией) и он пытается
    // перейти куда-либо, перебрасываем его на страницу авторизации пока не авторизуется.
    if (location.pathname !== "/" && !tokenService.getToken()) {
      navigate("/");
    } else if (location.pathname === "/" && tokenService.getToken()) {
      navigate("/profile");
    }
  });

  return (
    <>
      {/* Если токен отсутствует - скрываем меню навигации. */}
      {tokenService.getToken() && <Navbar />}
      {/* Добавляем маршрутизаторы. */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/assignments/:id/answers" element={<Answers />} />
      </Routes>
    </>
  );
}

export default App;
