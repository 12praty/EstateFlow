import { useState } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box, TextField, Button, Typography, Stack } from "@pankod/refine-mui";
import { logo, tower } from "../assets";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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
      if (isRegister) {
        if (!formData.name || !formData.email || !formData.password) {
          setError("All fields are required");
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

        // Auto-login after successful registration
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...data.user,
            userid: data.user._id,
          })
        );

        login({ email: formData.email, password: formData.password });
      } else {
        if (!formData.email || !formData.password) {
          setError("Email and password are required");
          setLoading(false);
          return;
        }

        login({ email: formData.email, password: formData.password });
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={tower} alt="tower Logo" height={200} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <img src={logo} alt="EstateFlow Logo" />
            <h1 style={{ color: "indigo" }}>EstateFlow</h1>
          </div>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {isRegister && (
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
              />
            )}
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
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
                backgroundColor: "#475be8",
                color: "#fcfcfc",
                fontSize: 16,
                fontWeight: 600,
                textTransform: "capitalize",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#1e36e8",
                },
              }}
            >
              {loading
                ? "Please wait..."
                : isRegister
                ? "Register"
                : "Login"}
            </Button>

            <Stack direction="row" justifyContent="center" gap={0.5}>
              <Typography fontSize={14} color="#808191">
                {isRegister ? "Already have an account?" : "Don't have an account?"}
              </Typography>
              <Typography
                fontSize={14}
                color="#475be8"
                sx={{ cursor: "pointer", fontWeight: 600 }}
                onClick={() => {
                  setIsRegister(!isRegister);
                  setError("");
                }}
              >
                {isRegister ? "Login" : "Register"}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
