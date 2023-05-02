import React from 'react';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {youtubeoptions,options,fetchData} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetails = () => {
  const[exerciseDetail,setExerciseDetail] = useState({});
  const[exerciseVideos,setExerciseVideos]=useState([]);
  const[targetMuscleExercises,setTargetMuscleExercises] = useState([]);
  const[equimentExercises,setEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async()=>{
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
        

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,options);
        console.log({exerciseDetailData});
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeoptions);

        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,options)
        const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,options)


        setTargetMuscleExercises(targetMuscleExercisesData);
        setEquipmentExercises(equipmentExercisesData);
    }

    fetchExercisesData()
  },[id]);
  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}/>
      <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equimentExercises={equimentExercises}/>
    </Box>
  )
}

export default ExerciseDetails
