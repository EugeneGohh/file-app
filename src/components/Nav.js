import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">File App</Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <a href={process.env.SUPPORT_URL} target="_blank" rel="noreferrer">
              Customer Support
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
