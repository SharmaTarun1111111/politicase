import React from 'react';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#293346",
        maxWidth: "100vw",
        color: "white",
        padding: 5,
        height: "auto",
      }}
    >
      {/* Main Heading */}
      <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
        PIT Case - Tarun
      </h1>
    </Box>
  );
};

export default Header;
