import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises,equimentExercises}) => {
  return (
    <Box sx={{ mt : {lg:'100px',xs:'0'}}}>
        <Typography variant='h3' mb={5}>
            Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Target Muscle</span>  Exercises.
        </Typography>

        <Stack direction = "row" sx={{p:'2',position:'relative'}}>
             {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}   
        </Stack>
        <Typography variant='h3' mb={5} mt={2}>
            Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Equipment</span> Exercises.
        </Typography>

        <Stack direction = "row" sx={{p:'2',position:'relative'}}>
             {equimentExercises.length ? <HorizontalScrollbar data={equimentExercises}/> : <Loader/>}   
        </Stack>
    </Box>
  )
}

export default SimilarExercises
