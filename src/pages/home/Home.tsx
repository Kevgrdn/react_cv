import { Box, Button, Card, CardActionArea, Container } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React from 'react'
import NavBar from '../../components/NavBar'
import cv from "../../assets/cv.pdf"

function Home() {



  return (

    <><NavBar />
      <Stack sx={{ marginTop: '5rem' }}>
        <Stack direction='row' justifyContent='center'>
          <Stack alignItems='center' justifyContent='center'>
            <Typography variant='h3'>Hello,</Typography>
            <Typography variant='h2'>Nom Prénom</Typography>
            <Typography variant='subtitle1'>Dev Web</Typography>
            <Button variant="contained" sx={{ width: '35%', borderRadius: '1.5rem' }}>Contact</Button>
          </Stack>
          <Box flexGrow={0.3} />
          <Stack justifyContent='center'>
            <Avatar alt="avatar" src="/src/assets/avatar.png" sx={{ width: '15rem', height: '15rem' }} />
          </Stack>
        </Stack>
        <Stack sx={{ marginTop: '50px' }} alignItems='center'>
          <Typography variant='h3'>Stack technique</Typography>
          <Stack>
            <Card variant="outlined" sx={{ width: '3.5rem', height: '3.3rem', padding: '0.7rem', backgroundColor: '#F0FFFF', border: '#F0FFFF' }}>
              <CardActionArea>
                <img alt="react" src='/src/assets/react.png' width='100%' height='100%' />
              </CardActionArea>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Home