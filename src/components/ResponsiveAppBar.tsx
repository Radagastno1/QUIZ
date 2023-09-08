import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Trebuchet MS",
              fontWeight: 1000,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            All About
          </Typography>
          <img
            src="https://i.imgur.com/RXlvbhe.png"
            alt="paw"
            className="w-10 h-10"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
