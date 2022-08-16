import Head from "next/head";
import React from "react";
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Head>
        <title>User Management</title>
        <meta name="description" content="User CRUD app" />
      </Head>
      <main>
        <h1>User Management tool</h1>
        <p>Users List</p>
      </main>

      <footer>
        <span>Placeholder for footer</span>
      </footer>
    </div>
  );
}