import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            href=""
            sx={{ mr: 2 }}
          >
            <HolidayVillageIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mural de mantenciones
          </Typography>
          <Button href="" color="inherit">¿Eres administrador?</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}