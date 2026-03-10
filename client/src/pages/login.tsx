import { useState } from "react";
import { useLogin } from "@pankod/refine-core";
import { Box, TextField, Button, Typography, Stack } from "@pankod/refine-mui";
import { logo, tower } from "../assets";

interface LoginPageProps {
  onNavigate: (page: "register" | "landing") => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const { mutate: login } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formData.email || !formData.password) {
        setError("Email and password are required");
        setLoading(false);
        return;
      }

      login({ email: formData.email, password: formData.password });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0a0e27",
      }}
    >
      {/* Left Image Panel */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(110,142,251,0.08), rgba(167,119,227,0.05))",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110,142,251,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={() => onNavigate("landing")}
        >
          <img src={logo} alt="EstateFlow" width={32} style={{ filter: "brightness(2)" }} />
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #6e8efb, #a777e3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EstateFlow
          </Typography>
        </Box>

        {/* Center image */}
        <Box sx={{ zIndex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              maxWidth: "420px",
              width: "100%",
            }}
          >
            <img
              src={tower}
              alt="Property"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Box>

        {/* Bottom text */}
        <Box sx={{ zIndex: 1 }}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#e2e8f0", mb: 1 }}>
            Welcome Back
          </Typography>
          <Typography sx={{ color: "#8892b0", fontSize: "0.95rem", maxWidth: "400px" }}>
            Sign in to access your dashboard, manage properties, and connect with agents.
          </Typography>
        </Box>
      </Box>

      {/* Right Form Panel */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "2rem 1.5rem", sm: "3rem" },
          backgroundColor: "#fcfcfc",
          position: "relative",
        }}
      >
        {/* Mobile logo */}
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            alignItems: "center",
            gap: 1,
            mb: 4,
            cursor: "pointer",
          }}
          onClick={() => onNavigate("landing")}
        >
          <img src={logo} alt="EstateFlow" width={28} />
          <Typography className="text-gradient" sx={{ fontSize: "1.3rem", fontWeight: 800 }}>
            EstateFlow
          </Typography>
        </Box>

        <Box
          className="animate-fade-in"
          sx={{
            width: "100%",
            maxWidth: "420px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.6rem", sm: "2rem" },
              fontWeight: 800,
              color: "#11142d",
              mb: 0.5,
            }}
          >
            Sign In
          </Typography>
          <Typography sx={{ color: "#808191", mb: 4, fontSize: "0.95rem" }}>
            Enter your credentials to access your account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#f8f9fa",
                  "&:hover fieldset": { borderColor: "#6e8efb" },
                  "&.Mui-focused fieldset": { borderColor: "#6e8efb" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#f8f9fa",
                  "&:hover fieldset": { borderColor: "#6e8efb" },
                  "&.Mui-focused fieldset": { borderColor: "#6e8efb" },
                },
              }}
            />

            {error && (
              <Typography color="error" fontSize={14} textAlign="center">
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                padding: "13px",
                borderRadius: "12px",
                mt: 1,
                boxShadow: "0 4px 14px rgba(110,142,251,0.4)",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(110,142,251,0.55)",
                  transform: "translateY(-1px)",
                },
                "&.Mui-disabled": {
                  background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
                  opacity: 0.6,
                },
                transition: "all 0.3s ease",
              }}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <Stack direction="row" justifyContent="center" gap={0.5} sx={{ mt: 2 }}>
              <Typography fontSize={14} color="#808191">
                Don't have an account?
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  cursor: "pointer",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  "&:hover": { opacity: 0.8 },
                  transition: "opacity 0.2s ease",
                }}
                onClick={() => onNavigate("register")}
              >
                Sign Up
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* Footer */}
        <Typography
          variant="body2"
          color="#808191"
          sx={{
            position: "absolute",
            bottom: "1.5rem",
            textAlign: "center",
          }}
        >
          © 2026 EstateFlow. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
