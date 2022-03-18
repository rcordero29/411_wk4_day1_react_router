import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


//  const SimpleContainer = (props) => {
//   let carId = props.match.params.id
//   console.log(props.match.params.id);

//   let foundCar = cars.find((element) => element.id == carId )
//   console.log(foundCar);
//   return (
//     <div className='carDetails'>
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="md">
//         <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 800,
//           height: 400,
//         },
//       }}
//     >
//       <Paper elevation={3}>
//       <Stack direction="row" spacing={1}>
//         <div>
//           <h1></h1>
//         </div>
//       <Chip label="Chip Filled" padding="10" />
//     </Stack>
        
//         </Paper>
      
//     </Box>
//       </Container>
//     </React.Fragment>

//     </div>
//   );
//   };

//   export default SimpleContainer