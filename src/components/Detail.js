import React from 'react'
import {Stack, Button, Typography} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";


const Detail = ( {exerciseDetail} ) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    const extraDetail = [
      {
        icon: BodyPartImage,
        name: bodyPart,
      },
      {
        icon: TargetImage,
        name: bodyPart,
      },
      {
        icon: EquipmentImage,
        name: equipment,
      },
    ];


  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          `Strength training is the BEST!!
          <br />
          <br />
          {name} is a great exercise to target your {target}`;
        </Typography>
        {extraDetail.map( (item) => (
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background: '#ff2db' , borderRadius: '50%', width: '100px', height: '100px'}} >
              <img src={item.icon}  alt={bodyPart} style={{ width: '50ox', height: '50px'}}/>
              <Typography >
                {item.name}
              </Typography>
            </Button>
          </Stack>
        ) )}
      </Stack>
    </Stack>
  );
}

export default Detail
