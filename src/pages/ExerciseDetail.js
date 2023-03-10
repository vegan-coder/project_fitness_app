import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetch , fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from "../components/Detail"
import ExerciseVidoes from '../components/ExerciseVidoes'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {



const [ exerciseDetail, setExerciseDetail] = useState({});
const [ exerciseVideos , setExercisevideos] = useState([])


const { id } = useParams();

useEffect( () => {
  const fetchExerciseData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
    exerciseOptions)
    console.log({exerciseDetailData})
    setExerciseDetail(exerciseDetailData);


    const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions )
    setExercisevideos(exerciseVideoData.contents)



};

fetchExerciseData()
}, [id]);

  return (
<Box>
  <Detail exerciseDetail={exerciseDetail} />
  <ExerciseVidoes exerciseVideos={exerciseVideos}  name={exerciseDetail.name} />
  <SimilarExercises />
</Box>
    )
}

export default ExerciseDetail
