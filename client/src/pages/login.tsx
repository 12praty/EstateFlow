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
        backgroundColor: "var(--background)",
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
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--primary) 8%, transparent), color-mix(in srgb, var(--chart-2) 5%, transparent))",
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
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)",
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
              background:
                "linear-gradient(135deg, var(--primary), var(--chart-2))",
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
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--foreground)",
              mb: 1,
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            sx={{
              color: "var(--muted-foreground)",
              fontSize: "0.95rem",
              maxWidth: "400px",
            }}
          >
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
          backgroundColor: "var(--card)",
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
          {/* gradient is defined in index.css but uses legacy colors; keep class, tokens drive base */}
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
              color: "var(--foreground)",
              mb: 0.5,
            }}
          >
            Sign In
          </Typography>
          <Typography
            sx={{ color: "var(--muted-foreground)", mb: 4, fontSize: "0.95rem" }}
          >
            Enter your credentials to access your account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
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
                  backgroundColor: "var(--input)",
                  "&:hover fieldset": { borderColor: "var(--ring)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--ring)" },
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
                  backgroundColor: "var(--input)",
                  "&:hover fieldset": { borderColor: "var(--ring)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--ring)" },
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
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--chart-2) 100%)",
                color: "var(--primary-foreground)",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                padding: "13px",
                borderRadius: "var(--radius)",
                mt: 1,
                boxShadow: "var(--shadow-md)",
                "&:hover": {
                  boxShadow: "var(--shadow-lg)",
                  transform: "translateY(-1px)",
                },
                "&.Mui-disabled": {
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--chart-2) 100%)",
                  opacity: 0.6,
                },
                transition: "all 0.3s ease",
              }}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <Stack direction="row" justifyContent="center" gap={0.5} sx={{ mt: 2 }}>
              <Typography fontSize={14} color="var(--muted-foreground)">
                Don't have an account?
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  cursor: "pointer",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, var(--primary), var(--chart-2))",
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
          color="var(--muted-foreground)"
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
