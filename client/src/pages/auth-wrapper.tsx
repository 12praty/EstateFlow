import { useState } from "react";
import LandingPage from "./landing-page";
import { LoginPage } from "./login";
import { Register } from "./register";

type AuthView = "landing" | "login" | "register";

export const Login: React.FC = () => {
  const [currentView, setCurrentView] = useState<AuthView>("landing");

  const handleNavigate = (page: AuthView) => {
    setCurrentView(page);
  };

  switch (currentView) {
    case "landing":
      return <LandingPage onNavigate={handleNavigate} />;
    case "login":
      return <LoginPage onNavigate={handleNavigate} />;
    case "register":
      return <Register onNavigate={handleNavigate} />;
    default:
      return <LandingPage onNavigate={handleNavigate} />;
  }
};
