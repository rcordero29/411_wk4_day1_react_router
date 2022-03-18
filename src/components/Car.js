import React from 'react';
import cars from '../cars.json';
import SimpleContainer from './details';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import material ui components here //
// Container, Paper, Chip //
const Car = (props) => {
  //read the props.match.params.id
  //filter array cars based on Id get from props and the
  // id found in the object
  //display the car info using material chips
  let carId = props.match.params.id;
  console.log(props.match.params.id);

  let foundCar = cars.find((element) => element.id == carId);
  console.log(foundCar);
  return (
    <div className="carDetails">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 800,
                height: 400,
              },
            }}
          >
            <Paper elevation={3}>
              <Stack direction="row" spacing={1}>
                <div>
                  <h1>{foundCar.Name}</h1>
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`id:${foundCar.id}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Name:${foundCar.Name}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Miles_per_Gallon:${foundCar.Miles_per_Gallon}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`cylinder:${foundCar.Cylinders}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Displacement:${foundCar.Displacement}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Horsepower:${foundCar.Horsepower}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Weight_in_lbs:${foundCar.Weight_in_lbs}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Acceleration:${foundCar.Acceleration}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Year:${foundCar.Year}`}
                  />
                  <Chip
                    label="Chip Filled"
                    padding="10"
                    label={`Origin:${foundCar.Origin}`}
                  />
                </div>
              </Stack>
            </Paper>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Car;
