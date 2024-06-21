import { Box, Paper, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Links({ title }) {
  const navigate = useNavigate(); // Initialize useNavigate

  let subLinks = [];
  let sectionIds = [];
  if (title === "Home") {
    subLinks = [];
    sectionIds = ["home-section-1", "home-section-2"];
  } else if (title === "About Us") {
    subLinks = [];
    sectionIds = ["about-us-section-1", "about-us-section-2", "about-us-section-3"];
  } else if (title === "Contact") {
    subLinks = [];
    sectionIds = ["contact-section-1", "contact-section-2", "contact-section-3"];
  } else if (title === "Help") {
    subLinks = [];
    sectionIds = ["help-section-1", "help-section-2", "help-section-3"];
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (page) => {
    if (page === "Home") {
      navigate("/");
    } else if (page === "About Us") {
      navigate("/about-us");
    } else if (page === "Contact") {
      navigate("/contact-us");
    } else if (page === "Help") {
      navigate("/help");
    }
  };
  

  return (
    <Box
      sx={{
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => handleNavigation(title)} // Add onClick to handle navigation
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "none",
        }}
      >
        <Paper sx={{ mt: 3 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              {subLinks.map((link, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    sx={{ display: "flex", p: 0, px: 1.5 }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the parent onClick from triggering
                      scrollToSection(sectionIds[index]);
                    }}
                  >
                    <ListItemText
                      sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }}
                      primary={link}
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
