import { Box, Typography, Button, Stack } from "@pankod/refine-mui";
import { logo, tower } from "../assets";

interface LandingPageProps {
  onNavigate: (page: "login" | "register") => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        backgroundColor: "#0a0e27",
        color: "#fff",
      }}
    >
      {/* ─── Navbar ─── */}
      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "1rem 1.5rem", md: "1.5rem 4rem" },
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(10,14,39,0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <img src={logo} alt="EstateFlow" width={32} style={{ filter: "brightness(2)" }} />
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #6e8efb, #a777e3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.5px",
            }}
          >
            EstateFlow
          </Typography>
        </Box>

        <Stack direction="row" gap={{ xs: 1, md: 2 }}>
          <Button
            onClick={() => onNavigate("login")}
            sx={{
              color: "#c8cedd",
              fontWeight: 600,
              textTransform: "none",
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              padding: { xs: "6px 16px", md: "8px 24px" },
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.25)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => onNavigate("register")}
            sx={{
              background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
              color: "#fff",
              fontWeight: 600,
              textTransform: "none",
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              padding: { xs: "6px 16px", md: "8px 28px" },
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(110,142,251,0.4)",
              "&:hover": {
                boxShadow: "0 6px 25px rgba(110,142,251,0.55)",
                transform: "translateY(-1px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Box>

      {/* ─── Hero Section ─── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          padding: { xs: "8rem 1.5rem 4rem", md: "0 4rem" },
          gap: { xs: 4, md: 6 },
          position: "relative",
        }}
      >
        {/* Background Gradient Orbs */}
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            left: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110,142,251,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,119,227,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Left Content */}
        <Box sx={{ flex: 1, maxWidth: "620px", zIndex: 1 }}>
          <Box
            className="animate-fade-in"
            sx={{
              display: "inline-block",
              background: "rgba(110,142,251,0.12)",
              border: "1px solid rgba(110,142,251,0.25)",
              borderRadius: "50px",
              padding: "6px 20px",
              mb: 3,
            }}
          >
            <Typography sx={{ fontSize: "0.85rem", color: "#a0b4fb", fontWeight: 600 }}>
              🏠 #1 Property Management Platform
            </Typography>
          </Box>

          <Typography
            className="animate-fade-in"
            sx={{
              fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" },
              fontWeight: 800,
              lineHeight: 1.15,
              mb: 3,
              letterSpacing: "-0.02em",
            }}
          >
            Discover Your{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Perfect Home
            </Box>{" "}
            With Ease
          </Typography>

          <Typography
            className="animate-fade-in delay-100"
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              color: "#8892b0",
              lineHeight: 1.7,
              mb: 4,
              maxWidth: "520px",
            }}
          >
            Browse thousands of premium properties, connect with top agents, and
            manage your real estate portfolio — all in one seamless platform.
          </Typography>

          <Stack
            className="animate-fade-in delay-200"
            direction={{ xs: "column", sm: "row" }}
            gap={2}
            sx={{ mb: 5 }}
          >
            <Button
              onClick={() => onNavigate("register")}
              sx={{
                background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
                color: "#fff",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                padding: "14px 36px",
                borderRadius: "14px",
                boxShadow: "0 6px 20px rgba(110,142,251,0.4)",
                "&:hover": {
                  boxShadow: "0 8px 30px rgba(110,142,251,0.55)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Start Free Today →
            </Button>
            <Button
              onClick={() => onNavigate("login")}
              sx={{
                color: "#c8cedd",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                padding: "14px 36px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.25)",
                },
                transition: "all 0.3s ease",
              }}
            >
              I Already Have an Account
            </Button>
          </Stack>

          {/* Stats */}
          <Stack
            className="animate-fade-in delay-300"
            direction="row"
            gap={{ xs: 3, md: 5 }}
            sx={{ flexWrap: "wrap" }}
          >
            {[
              { value: "10K+", label: "Properties" },
              { value: "5K+", label: "Happy Clients" },
              { value: "200+", label: "Top Agents" },
            ].map((stat) => (
              <Box key={stat.label}>
                <Typography sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" }, fontWeight: 800 }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Right Image */}
        <Box
          className="animate-fade-in delay-200"
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "500px" },
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(180deg, transparent 60%, rgba(10,14,39,0.5))",
                pointerEvents: "none",
              },
            }}
          >
            <img
              src={tower}
              alt="Luxury Property"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                minHeight: "350px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ─── Features Section ─── */}
      <Box
        sx={{
          padding: { xs: "4rem 1.5rem", md: "6rem 4rem" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 800,
              mb: 2,
              letterSpacing: "-0.01em",
            }}
          >
            Why Choose{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EstateFlow
            </Box>
            ?
          </Typography>
          <Typography sx={{ color: "#8892b0", fontSize: "1.05rem", maxWidth: "550px", mx: "auto" }}>
            Everything you need to find, manage, and grow your real estate portfolio.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
            gap: 3,
            maxWidth: "1100px",
            mx: "auto",
          }}
        >
          {[
            {
              icon: "🏡",
              title: "Smart Property Search",
              desc: "Advanced filters and AI-powered recommendations to find your ideal property.",
            },
            {
              icon: "👥",
              title: "Top Verified Agents",
              desc: "Connect with experienced and verified real estate professionals you can trust.",
            },
            {
              icon: "📊",
              title: "Analytics Dashboard",
              desc: "Track your portfolio performance with real-time analytics and insights.",
            },
            {
              icon: "🔒",
              title: "Secure Transactions",
              desc: "End-to-end encrypted communication and secure document management.",
            },
            {
              icon: "📱",
              title: "Fully Responsive",
              desc: "Access your portfolio from any device — desktop, tablet, or mobile.",
            },
            {
              icon: "⚡",
              title: "Lightning Fast",
              desc: "Optimized performance ensures you never wait for property listings to load.",
            },
          ].map((feature) => (
            <Box
              key={feature.title}
              sx={{
                padding: "2rem",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(110,142,251,0.25)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Typography sx={{ fontSize: "2rem", mb: 2 }}>{feature.icon}</Typography>
              <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, mb: 1, color: "#e2e8f0" }}>
                {feature.title}
              </Typography>
              <Typography sx={{ color: "#8892b0", fontSize: "0.9rem", lineHeight: 1.6 }}>
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ─── CTA Section ─── */}
      <Box
        sx={{
          padding: { xs: "4rem 1.5rem", md: "6rem 4rem" },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            mx: "auto",
            padding: { xs: "3rem 2rem", md: "4rem" },
            borderRadius: "28px",
            background: "linear-gradient(135deg, rgba(110,142,251,0.12), rgba(167,119,227,0.08))",
            border: "1px solid rgba(110,142,251,0.15)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              fontWeight: 800,
              mb: 2,
            }}
          >
            Ready to Find Your Dream Home?
          </Typography>
          <Typography sx={{ color: "#8892b0", mb: 4, fontSize: "1rem", maxWidth: "450px", mx: "auto" }}>
            Join thousands of satisfied users who found their perfect property through EstateFlow.
          </Typography>
          <Button
            onClick={() => onNavigate("register")}
            sx={{
              background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
              color: "#fff",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1.05rem",
              padding: "14px 44px",
              borderRadius: "14px",
              boxShadow: "0 6px 20px rgba(110,142,251,0.4)",
              "&:hover": {
                boxShadow: "0 8px 30px rgba(110,142,251,0.55)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Get Started Free →
          </Button>
        </Box>
      </Box>

      {/* ─── Footer ─── */}
      <Box
        sx={{
          padding: { xs: "2rem 1.5rem", md: "2rem 4rem" },
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={logo} alt="EstateFlow" width={24} style={{ filter: "brightness(2)" }} />
          <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#8892b0" }}>
            EstateFlow
          </Typography>
        </Box>
        <Typography sx={{ color: "#6b7280", fontSize: "0.85rem" }}>
          © 2026 EstateFlow. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
