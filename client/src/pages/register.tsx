import { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@pankod/refine-mui";
import { CheckCircle } from "phosphor-react";
import { logo, tower } from "../assets";

interface RegisterProps {
  onNavigate: (page: "login" | "landing") => void;
}

export const Register: React.FC<RegisterProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formData.name || !formData.email || !formData.password) {
        setError("All fields are required");
        setLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // Show success, then redirect to login
      setSuccess(true);
      setTimeout(() => {
        onNavigate("login");
      }, 2000);
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
            top: "20%",
            left: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--chart-2) 20%, transparent) 0%, transparent 70%)",
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
            Join Our Community
          </Typography>
          <Typography
            sx={{
              color: "var(--muted-foreground)",
              fontSize: "0.95rem",
              maxWidth: "400px",
            }}
          >
            Create an account and start managing your real estate portfolio with the most powerful tools available.
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
            Create Account
          </Typography>
          <Typography
            sx={{ color: "var(--muted-foreground)", mb: 4, fontSize: "0.95rem" }}
          >
            Sign up to start managing your properties
          </Typography>

          {success ? (
            <Box
              className="animate-fade-in"
              sx={{
                textAlign: "center",
                padding: "2rem",
                borderRadius: "var(--radius)",
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--chart-2) 8%, transparent), color-mix(in srgb, var(--chart-2) 2%, transparent))",
                border:
                  "1px solid color-mix(in srgb, var(--chart-2) 20%, transparent)",
              }}
            >
              <CheckCircle
                size={40}
                weight="fill"
                color="var(--chart-2)"
                style={{ marginBottom: "0.5rem" }}
              />
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  mb: 0.5,
                }}
              >
                Registration Successful!
              </Typography>
              <Typography
                sx={{ color: "var(--muted-foreground)", fontSize: "0.9rem" }}
              >
                Redirecting you to the login page...
              </Typography>
            </Box>
          ) : (
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
                label="Full Name"
                name="name"
                value={formData.name}
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
                {loading ? "Creating Account..." : "Create Account"}
              </Button>

              <Stack direction="row" justifyContent="center" gap={0.5} sx={{ mt: 2 }}>
                <Typography fontSize={14} color="var(--muted-foreground)">
                  Already have an account?
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
                  onClick={() => onNavigate("login")}
                >
                  Sign In
                </Typography>
              </Stack>
            </Box>
          )}
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
