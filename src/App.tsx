import { useMemo } from "react";
import {
  Routes,
  Route,
  useLocation,
  Link as RouterLink,
} from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Container, Box } from "@mui/material";
import Home from "./pages/Home.tsx";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./components/Footer.tsx";

const routes = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;

export default function App() {
  const location = useLocation();
  const currentTab = useMemo(() => {
    const match = routes.find((r) =>
      r.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(r.path)
    );
    return match ? match.path : false;
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Toolbar sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ fontWeight: 800, letterSpacing: 0.5, mr: 2 }}>PK</Box>
          <Tabs
            value={currentTab}
            textColor="primary"
            indicatorColor="primary"
            sx={{ ml: "auto" }}
          >
            {routes.map((r) => (
              <Tab
                key={r.path}
                label={r.label}
                value={r.path}
                component={RouterLink}
                to={r.path}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>

      <Footer />
    </Box>
  );
}
