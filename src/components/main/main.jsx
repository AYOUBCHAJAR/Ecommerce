import { Box, Button, Container, Dialog, IconButton, Rating, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Visibility, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";

export default function Main() {
  const [open, setOpen] = React.useState(false);
  const [alignment, setAlignment] = React.useState('left');
  const [selectedCategory, setSelectedCategory] = React.useState('All Products');
  const [ifta7, setifta7] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const theme = useTheme();

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);

    switch (newAlignment) {
      case 'left':
        setSelectedCategory('All Products');
        break;
      case 'center':
        setSelectedCategory('Mouse category');
        break;
      case 'right':
        setSelectedCategory('Laptop category');
        break;
      case 'justify':
        setSelectedCategory('Phone category');
        break;
      default:
        setSelectedCategory('All Products');
    }
  };

  const handleOpenClick = () => {
    setifta7(true);
  };

  const handleCloseClick = () => {
    setifta7(false);
  };

  const products = [
    // Mouse category products
    {
      category: 'Mouse category',
      title: 'Logitech G Pro',
      price: '25.00$',
      description: 'The Logitech G Pro is a professional-grade wireless mouse designed for gamers. It features a lightweight and ergonomic design ...',
      image: 'src/images/pascal-m-4PchFKrUw84-unsplash.jpg',
      images: ["src/images/lasse-jensen-QkKwZYvl72E-unsplash.jpg", "src/images/matthias-haltenhof-fkNH-57nen8-unsplash.jpg"],
    },
    {
      category: 'Mouse category',
      title: 'Corsair Dark Core RGB Pro',
      price: '60.00$',
      description: 'The Corsair Dark Core RGB Pro is a wireless gaming mouse with customizable RGB lighting and a high-precision sensor.',
      image: 'src/images/Corsair Dark Core RGB Pro.1.png',
      images: ["src/images/Corsair Dark Core RGB Pro.2.jpg", "src/images/Corsair Dark Core RGB Pro.3.jpg"],
    },
    {
      category: 'Mouse category',
      title: 'Logitech MX Master 3',
      price: '100.00$',
      description: 'The Logitech MX Master 3 is an advanced wireless mouse with customizable buttons and ergonomic design.',
      image: 'src/images/Logitech MX Master 3.1.jpg',
      images: ["src/images/Logitech MX Master 3.2.jpg", "src/images/Logitech MX Master 3.3.jpg"],
    },
    {
      category: 'Mouse category',
      title: 'Razer DeathAdder V2',
      price: '50.00$',
      description: 'The Razer DeathAdder V2 is a high-precision gaming mouse with customizable RGB lighting.',
      image: 'src/images/razer-deathadder-v2-souris.jpg',
      images: ["src/images/razer-deathadder-v2-1.jpg", "src/images/Razer-Deathadder-v2-3.jpg"],
    },
    {
      category: 'Mouse category',
      title: 'SteelSeries Rival 650',
      price: '70.00$',
      description: 'The SteelSeries Rival 650 is a wireless gaming mouse with TrueMove3+ sensor technology for precise tracking.',
      image: 'src/images/SteelSeries Rival 650.1.jpg',
      images: ["src/images/SteelSeries Rival 650.2.jpg", "src/images/SteelSeries Rival 650.3.jpg"],
    },
    {
      category: 'Mouse category',
      title: 'Microsoft Surface Precision Mouse',
      price: '80.00$',
      description: 'The Microsoft Surface Precision Mouse is a versatile wireless mouse with customizable buttons and a comfortable design.',
      image: 'src/images/Microsoft Surface Precision Mouse.1.jpg',
      images: ["src/images/Microsoft Surface Precision Mouse.2.jpg", "src/images/Microsoft Surface Precision Mouse.3.jpg"],
    },
    // Laptop category products
    {
      category: 'Laptop category',
      title: 'ACER NITRO 5',
      price: '1000.0$',
      description: 'The ACER NITRO 5 is a powerful gaming laptop designed for high performance. It features a fast processor, high-resolution display, and ...',
      image: 'src/images/Nitro5-AN515-58-wallpaper-redkb-Black-01-1.webp',
      images: ["src/images/download.png", "src/images/download (1).png"],
    },
    {
      category: 'Laptop category',
      title: 'HP Spectre x360',
      price: '1200.00$',
      description: 'The HP Spectre x360 is a convertible laptop with a 13.3-inch 4K OLED display and up to 11th Gen Intel Core i7 processor.',
      image: 'src/images/HP Spectre x360.1.jpg',
      images: ["src/images/HP Spectre x360.2.jpg", "src/images/HP Spectre x360.3.jpg"],
    },
    {
      category: 'Laptop category',
      title: 'ASUS ROG Zephyrus G14',
      price: '1400.00$',
      description: 'The ASUS ROG Zephyrus G14 is a powerful gaming laptop with an AMD Ryzen 9 processor and NVIDIA GeForce RTX 3060 graphics.',
      image: 'src/images/ASUS ROG Zephyrus G14.1.jpg',
      images: ["src/images/ASUS ROG Zephyrus G14.2.jpg", "src/images/ASUS ROG Zephyrus G14.3.jpg"],
    },
    {
      category: 'Laptop category',
      title: 'Dell XPS 15',
      price: '1500.00$',
      description: 'The Dell XPS 15 features a 15.6-inch 4K UHD display and up to 11th Gen Intel Core i7 processor for powerful performance.',
      image: 'src/images/Dell XPS 15.2.png',
      images: ["src/images/Dell XPS 15.1.png", "src/images/Dell XPS 15.3.png"],
    },
    {
      category: 'Laptop category',
      title: 'MacBook Pro 14-inch',
      price: '1800.00$',
      description: 'The MacBook Pro 14-inch features the M1 Pro chip for incredible performance and up to 21 hours of battery life.',
      image: 'src/images/MacBook Pro 14-inch.1.jpg',
      images: ["src/images/MacBook Pro 14-inch.2.jpg", "src/images/MacBook Pro 14-inch.3.jpg"],
    },
    {
      category: 'Laptop category',
      title: 'Microsoft Surface Laptop Studio',
      price: '2000.00$',
      description: 'The Microsoft Surface Laptop Studio features a unique design with a 14.4-inch PixelSense Flow display and up to Intel Core i7 processor.',
      image: 'src/images/Microsoft Surface Laptop Studio.1.jpg',
      images: ["src/images/Microsoft Surface Laptop Studio.2.jpg", "src/images/Microsoft Surface Laptop Studio.3.jpg"],
    },
    // Phone category products
    {
      category: 'Phone category',
      title: 'IPHONE 15 pro max',
      price: '1600.00$',
      description: 'iPhone 15 Pro. Available in Natural Titanium, Blue Titanium, White Titanium, and Black Titanium.',
      image: 'src/images/david-svihovec-KoR_Yodl3jA-unsplash.jpg',
      images: ["src/images/iphone1.jpg", "src/images/iphone1.1.jpg"],
    },
    {
      category: 'Phone category',
      title: 'OnePlus 11T',
      price: '1000.00$',
      description: 'The OnePlus 11T features a 6.7-inch Fluid AMOLED display and a Snapdragon 8 Gen 2 processor for smooth performance.',
      image: 'src/images/OnePlus 11T.1.jpg',
      images: ["src/images/OnePlus 11T.2.jpg", "src/images/OnePlus 11T.3.jpg"],
    },
    {
      category: 'Phone category',
      title: 'Google Pixel 7 Pro',
      price: '1200.00$',
      description: 'The Google Pixel 7 Pro boasts a 6.7-inch OLED display and a 50 MP main camera for stunning photos.',
      image: 'src/images/Google Pixel 7 Pro.1.jpg',
      images: ["src/images/Google Pixel 7 Pro.2.jpg", "src/images/Google Pixel 7 Pro.3.jpg"],
    },
    {
      category: 'Phone category',
      title: 'SAMSUNG Galaxy S23 Ultra ',
      price: '1500.00$',
      description: 'SAMSUNG Galaxy S23 Ultra  features a stunning 6.8-inch Dynamic AMOLED display and a powerful Snapdragon 8 Gen 2 processor.',
      image: 'src/images/SAMSUNG Galaxy S23 Ultra .3.jpg',
      images: ["src/images/SAMSUNG Galaxy S23 Ultra .2.jpg", "src/images/SAMSUNG Galaxy S23 Ultra .1.jpg"],
    },
    {
      category: 'Phone category',
      title: 'Xiaomi Mi 12 Ultra',
      price: '1300.00$',
      description: 'The Xiaomi Mi 12 Ultra features a 6.8-inch OLED display and a Snapdragon 8 Gen 2 processor for fast performance.',
      image: 'src/images/Xiaomi Mi 12 Ultra.1.jpg',
      images: ["src/images/Xiaomi Mi 12 Ultra.2.jpg", "src/images/Xiaomi Mi 12 Ultra.3.jpg"],
    },
    {
      category: 'Phone category',
      title: 'Sony Xperia 5 Mark III',
      price: '1100.00$',
      description: 'The Sony Xperia 5 Mark III features a 6.1-inch OLED display and a Snapdragon 8 Gen 2 processor for a great user experience.',
      image: 'src/images/Sony Xperia 5 Mark III.1.jpg',
      images: ["src/images/Sony Xperia 5 Mark III.2.jpg", "src/images/Sony Xperia 5 Mark III.3.jpg"],
    },
  ];

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <Container sx={{ py: 9 }}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton sx={{ color: theme.palette.text.primary }} className='myButton' value="left" aria-label="left aligned">
            All Products
          </ToggleButton>
          <ToggleButton sx={{ mx: "16px !important" }} className='myButton' value="center" aria-label="centered">
            Mouse category
          </ToggleButton>
          <ToggleButton className='myButton' value="right" aria-label="right aligned">
            Laptop category
          </ToggleButton>
          <ToggleButton sx={{ mx: "16px !important" }} className='myButton' value="justify" aria-label="centered">
            Phone category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Typography variant="h5" sx={{ mt: 2 }}>{selectedCategory}</Typography>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {filteredProducts.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root ": { rotate: "1deg", scale: "1.1", transition: "0.35s" } }}>
            <CardMedia
              sx={{ height: 277 }}
              image={item.image}
              title={item.title}
              onClick={() => handleClickOpen(item)}
            />
            <CardContent>
              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {item.price}
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button size="small" onClick={() => handleClickOpen(item)} startIcon={<Visibility />}>
                View details
              </Button>
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            </CardActions>
          </Card>
        ))}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails product={selectedProduct} />
      </Dialog>

      <Dialog sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={ifta7}
        onClose={handleCloseClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <Checkout />
      </Dialog>
    </Container>
  );
}
