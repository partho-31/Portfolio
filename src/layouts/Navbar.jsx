import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";

const drawerWidth = 200;

const navItems = [
  { label: "Home", action: "home" },
  { label: "About", action: "about" },
  { label: "Education", action: "education" },
  { label: "Skills", action: "skills" },
  { label: "Projects", action: "projects" },
  { label: "Contact", action: "contact" },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B82F6",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
});

function Navbar({
  window,
  onAboutClick,
  onEducationClick,
  onTechStackClick,
  onProjectClick,
  onContactClick,
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  const navigate = useNavigate()

  const handleClick = (action) => {
    switch (action) {
      case "about":
        onAboutClick?.();
        break;
      case "education":
        onEducationClick?.();
        break;
      case "skills":
        onTechStackClick?.();
        break;
      case "projects":
        onProjectClick?.();
        break;
      case "contact":
        onContactClick?.();
        break;
      case "home":
        navigate('/')
        break;
      default:
        break;
    }
    setMobileOpen(false); 
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          my: 3,
          fontWeight: 700,
          color: "#3B82F6",
        }}
      >
        Partho
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.action} disablePadding>
            <ListItemButton
              onClick={() => handleClick(item.action)}
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    typeof window !== "undefined" ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          position="static"
          sx={{
            backgroundColor: "rgba(275, 275, 275, 0)",
            color: "black",
            boxShadow: "0 2px 10px rgba(0,0,0,0)",
            pt: 2,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: "#3B82F6",
                display: { xs: "none", sm: "block" },
                ml: 4,
              }}
            >
              Partho
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, mr: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.action}
                  onClick={() => handleClick(item.action)}
                  sx={{
                    color: "text.secondary",
                    mx: 1,
                    fontWeight: 500,
                    "&:hover": {
                      color: "#3B82F6",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderRight: "none",
                boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        {/* Push content below navbar */}
        <Box component="main" sx={{ p: 0 }}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
  onAboutClick: PropTypes.func,
  onEducationClick: PropTypes.func,
  onTechStackClick: PropTypes.func,
  onProjectClick: PropTypes.func,
  onContactClick: PropTypes.func,
};

export default Navbar;
