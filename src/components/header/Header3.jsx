import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  PhoneIphoneOutlined, MouseOutlined, LaptopChromebookOutlined, Close,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  

  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          // @ts-ignore
          sx={{ width: 222, bgcolor: theme.palette.myColor.main, color: theme.palette.text.secondary }}
        >
          <WindowIcon />
          <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1}></Box>
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
          // @ts-ignore
          sx={{ ".MuiPaper-root": { width: 220, bgcolor: theme.palette.myColor.main } }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MouseOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Mouses</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PhoneIphoneOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Phones</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Laptops</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      
      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={3} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"About Us"} />
          <Links title={"Contact"} />
          <Links title={"Help"} />
        </Stack>
      )}

      {useMediaQuery('(max-width:1200px)') && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >
        <Box sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}>
          <IconButton
            sx={{ ":hover": { color: "red", rotate: "180deg", transition: "0.3s" }, position: "absolute", top: 0, right: 10 }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLinks: [] },
            { mainLink: "About Us", subLinks: [] },
            { mainLink: "Contact", subLinks: [] },
            { mainLink: "Help", subLinks: [] },
          ].map((item) => (
            <Accordion key={item.mainLink} elevation={0} sx={{ bgcolor: "initial" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                {item.mainLink}
              </AccordionSummary>
              <List sx={{ py: 0, my: 0 }}>
                {item.subLinks.map((link) => (
                  <ListItem key={link} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
}
