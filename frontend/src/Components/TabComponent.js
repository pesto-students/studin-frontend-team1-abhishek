import { Box, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import PropTypes from 'prop-types';
import ConnectionsCom from "./ConnectionsComponent";
import AboutCom from './AboutComponent';
import CardCom from "./CardComponent";


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


const TabComponent = () => {


  const [value, setValue] = useState(0);
  return (
    <div>
      <Toolbar sx={{ justifyContent: "left", ml: "", mt: "2%", border: "", mx: "1%" }}>
        <Tabs value={value} onChange={(e, val) => setValue(val)}

          sx={{
            "& button:active": { backgroundColor: "primary.light" },
            "& button:hover": { backgroundColor: "primary.light" },
            "& button": { borderRadius: 2 },

          }}
          bgColor="blue"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab sx={{ color: "primary.main" }} indicatorColor="secondary"
            textColor="secondary" label="Post" />
          <Tab sx={{ color: "primary.main" }} label="Connections" />
          <Tab sx={{ color: "primary.main" }} label="About" />
        </Tabs>

      </Toolbar>
      <TabPanel value={value} index={0}>

        <Toolbar sx={{
          flexDirection: "column", mx: "", border: "", mt: "2 % ",
          borderRadius: ""
        }}>
          <CardCom />
        </Toolbar>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Toolbar sx={{
          flexDirection: "column", mx: "", border: "", mt: "2 % ",
          borderRadius: ""
        }}>
          <ConnectionsCom />
        </Toolbar>

      </TabPanel>
      <TabPanel value={value} index={2} >
        <AboutCom sx={{ mx: "20%" }} />
      </TabPanel>
    </div>
  )
}

export default TabComponent