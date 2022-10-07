import { Box, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import PropTypes from 'prop-types';
import Connections from "./Connections";
import About from './About';
import Card1 from "./Card1";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const Tab1 = () => {

  const [value, setValue] = useState(0);
  return (
    <div>

      <Toolbar sx={{ justifyContent: "left", bgcolor: "white", mx: "10%", mt: "", borderLeft: 1, borderRight: 1 }}>
        <Tabs value={value} onChange={(e, val) => setValue(val)} sx={{ bgcolor: "1%", mx: "10%", }}
        // TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        >
          <Tab sx={{}} label="Post" />
          <Tab sx={{}} label="Connections" />
          <Tab label="About" />
        </Tabs>

      </Toolbar>
      <TabPanel value={value} index={0}>

        <Toolbar sx={{
          flexDirection: "column", mx: "10%", border: "ridge", bgcolor: "white", mt: "2 % ",
        }}>
          <Card1 />
        </Toolbar>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Connections />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <About />
      </TabPanel>

    </div>
  )
}

export default Tab1