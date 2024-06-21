// @ts-ignore
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

import IconSection from "./iconSection";
import { Link as ScrollLink } from 'react-scroll';



const mySlider = [
  { text: "LAPTOP", link: "src/images/dell-yNvVnPcurD8-unsplash.jpg" },
  { text: "PHONE", link: "src/images/screen-post-0ePrvkOL3bw-unsplash.jpg" },
  { text: "MOUSE", link: "src/images/Screenshot 2024-05-13 111633.png" },
];
export default function Hero() {
  const theme = useTheme();
  
  return (
    
    <Container >
      <Box
        sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link}  className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                    }}
                    variant="h5"
                  >
                    NEW COLLECTION
                  </Typography>

                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"white"} mr={1} variant="h4">
                      white
                    </Typography>
                    <Typography color={"#D23F57"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $999.00
                  </Typography>

                  <ScrollLink
  to="bottom-of-page"
  spy={true}
  smooth={true}
  duration={500}
  offset={-100}
  href="#"
  style={{
    fontSize:'1rem',
    padding: '8px 20px', // Adjust padding to match the original button
    marginTop: '2px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
    color: 'black',
    borderRadius: '1px',
    transition: 'background-color 0.2s, box-shadow 0.2s', // Transition background-color and box-shadow
    textDecoration: 'none', // Remove underline from link
    display: 'inline-flex', // Ensure inline display for flex properties to work
    alignItems: 'center', // Align items vertically in the center
    gap: '5px', // Add gap between icon and text
  }}
  onMouseEnter={(e) => {
    // @ts-ignore
    e.target.style.backgroundColor = 'red';
    // @ts-ignore
    e.target.style.boxShadow = '0px 4px 16px rgba(43, 52, 69, 0.1)';
  }}
  onMouseLeave={(e) => {
    // @ts-ignore
    e.target.style.backgroundColor = 'white';
    // @ts-ignore
    e.target.style.boxShadow = '0px 4px 16px rgba(43, 52, 69, 0.1)';
  }}
>
  shop now
</ScrollLink>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} style={{ width: '300px', height: '200px' }}src="src\images\homescreenify-b18ZsVX464c-unsplash.jpg" alt="" />

            <Box
              sx={{
                position: "absolute",
                top: "40%",
                transform: "translateY(-50%)",
                left: 22,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVAL
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                MOUSE
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                }}
              >
                SALE 20% OFF
              </Typography>

                <ScrollLink
                  to="bottom-of-page"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  href="#"
                  style={{
                    textDecoration:"none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "color 0.2s", // Only transition the color property
                  }}
                  onMouseEnter={(e) => {
                    // @ts-ignore
                    e.target.style.color = "#D23F57";
                  }}
                  onMouseLeave={(e) => {
                    // @ts-ignore
                    e.target.style.color = "white";
                  }}
                >
                  shop now
                  <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                </ScrollLink>

            </Box>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} style={{ width: '300px', height: '200px' }} src="src\images\freestocks-gBVGfXZ8lmA-unsplash.jpg" alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                transform: "translateY(-50%)",
                left: 22,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                NEW
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                LAPTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "white",
                }}
              >
                PHONES
              </Typography>

              <ScrollLink
                  to="bottom-of-page"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  href="#"
                  style={{
                    textDecoration:"none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "color 0.2s", // Only transition the color property
                  }}
                  onMouseEnter={(e) => {
                    // @ts-ignore
                    e.target.style.color = "#D23F57";
                  }}
                  onMouseLeave={(e) => {
                    // @ts-ignore
                    e.target.style.color = "white";
                  }}
                >
                  shop now
                  <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                </ScrollLink>
            </Box>
          </Box>
        </Box>
      </Box>

      <IconSection/>
      <div id="bottom-of-page" />
    </Container>
  );
}
