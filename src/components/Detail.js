import React from 'react'
import {Stack, Button, Typography} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";


const Detail = ( {exerciseDetail} ) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;



  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          `Strength training is the BEST!!
          <br />
          <br />
          {name} is a great exercise to target your {target}`;
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Detail
