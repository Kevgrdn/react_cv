import { Button, Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React from 'react'
import NavBar from '../../components/NavBar'
import cv from "../../assets/cv.pdf"

function Home() {



  return (

    <><NavBar />
      <Stack>
        <Stack direction='row' justifyContent='space-around' sx={{ marginTop: '50px' }}>
          <Stack alignItems='center'>
            <Typography variant='h3'>Hello,</Typography>
            <Typography variant='h2'>Nom Prénom</Typography>
            <Typography variant='subtitle1'>Dev Web</Typography>
            <Button variant="contained" sx={{ width: '35%', borderRadius: '1px' }} ><a target="_blank" href={cv}>CV</a></Button>

          </Stack>
          <Stack justifyContent='center'>
            <Avatar alt="avatar" src="/src/assets/avatar.png" sx={{ width: '15rem', height: '15rem' }} />
          </Stack>
        </Stack>
        <Stack sx={{ marginTop: '50px' }}>
          <Typography variant='h3'>Stack technique</Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Home