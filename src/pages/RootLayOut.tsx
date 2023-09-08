import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <ResponsiveAppBar />
      </header>
      <main className=" flex flex-col flex-1 justify-center">
        <Outlet />
      </main>
      <footer className="bg-black flex justify-evenly">
        <Button variant="text" sx={{ color: "white", fontSize: "large" }}>
          Källor
        </Button>
        <Button variant="text" sx={{ color: "white", fontSize: "large" }}>
          Hjälp djuren
        </Button>
        <Button variant="text" sx={{ color: "white", fontSize: "large" }}>
          Kontakt
        </Button>
      </footer>
    </div>
  );
}
