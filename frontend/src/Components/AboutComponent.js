import { Divider, Grid, Typography, Box, } from '@mui/material'
import React from 'react'

const AboutCom = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        border: "",
        backgroundColor: ""

      }}>


      <Box sx={{ mx: "2%", my: "", border: "", bgcolor: "" }}>
        <Grid container sx={{ border: "", }}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", }}>
            <Typography sx={{ ml: "2%", }}>
              Name : Danish Viquar Khan
            </Typography>
            <Divider sx={{ borderColor: "secondary.light", ml: "2%", mr: "60%" }} />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{}}>
            <Typography sx={{ ml: "2%", bgcolor: "", width: "50%", borderRadius: "5px" }} >
              School  : K.G.M National High School
            </Typography>
            <Divider sx={{ borderColor: "secondary.light", ml: "2%", mr: "60%" }} />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%" }}>
            <Typography sx={{ ml: "2%", bgcolor: "", width: "50%", borderRadius: "5px" }}>
              College  : D.N.Patel College of Engineering Shahada
            </Typography>
            <Divider sx={{ borderColor: "secondary.light", ml: "2%", mr: "60%" }} />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{}}>
            <Typography sx={{ ml: "2%", bgcolor: "", width: "50%", borderRadius: "5px", border: "", mb: 1 }}>
              Intrest   :
            </Typography>
            <Divider sx={{ borderColor: "secondary.light", ml: "2%", mr: "60%" }} />
          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}

export default AboutCom
// ................................................



// import { Grid, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import React from 'react'



// const AboutCom = () => {
//   return (
//     <Box
//       sx={{
//         height: '100%',
//         width: '100%',

//       }}>

//       <Box sx={{}}>
//         <Box sx={{ mx: "2%", my: "", border: 1, borderRadius: 5 }}>
//           <Grid container sx={{ border: "", }}>
//             <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", }}>
//               <Typography sx={{ ml: "2%" }}>
//                 Name : Danish Viquar Khan
//               </Typography>
//             </Grid>
//             <Grid item lg={12} md={12} sm={12} xs={12} sx={{}}>
//               <Typography sx={{ ml: "2%" }} >
//                 School  : K.G.M National High School
//               </Typography>

//             </Grid>
//             <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%" }}>
//               <Typography sx={{ ml: "2%" }}>
//                 College  : D.N.Patel College of Engineering Shahada
//               </Typography>

//             </Grid>
//             <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", }}>
//               <Typography sx={{ ml: "2%" }}>
//                 Intrest :
//               </Typography>

//             </Grid>
//           </Grid>
//         </Box>

//       </Box>

//     </Box>
//   )
// }

// export default AboutCom