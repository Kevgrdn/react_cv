import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React from 'react'
import NavBar from '../../components/NavBar'

function Home() {
  return (

    <>
      <NavBar />
      <Stack>
        <Stack direction='row' sx={{ margin: 5 }}>
          <Stack sx={{ margin: 5 }}>
            <Typography variant='h3'>Hello,</Typography>
            <Typography variant='h2'>Nom Prénom</Typography>
            <Typography variant='subtitle1'>Dev Web</Typography>
            <Button variant="contained">Contact</Button>
          </Stack>
          <Stack sx={{ margin: 5, }}>
            <Avatar alt="avatar" src="/src/assets/avatar.png" />
          </Stack>
        </Stack>
        <Stack>
          Stack technique
        </Stack>
      </Stack>
    </>
  )
}

export default Home