import { Box, Button, Card, CardActionArea, Container } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React from 'react'
import NavBar from '../../components/NavBar'
import { stackTechniqueImg } from '../../api/img'
import { user } from '../../api/user'
import cv from "../../assets/cv.pdf"
import { Download } from 'lucide-react'

function Home() {

  const styles = {
    blurred: {
      filter: 'blur(5px)',
      opacity: 0.5,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };






  return (
    <Container disableGutters >
      <NavBar />
      <Stack sx={{ marginTop: '5rem', }}>
        <Stack direction='row' justifyContent='center'>
          <Stack alignItems='center' justifyContent='center'>
            <Stack>
              <Typography variant='h3' fontFamily="monospace">Bonjour,</Typography>
              <Typography variant='h2'>
                <b>
                  {`${user.nom} ${user.prenom}`}
                </b>
              </Typography>
            </Stack>
            <Typography variant='subtitle1'>Développeur FullStack</Typography>
            <Button variant="contained" type='button' sx={{ borderRadius: '1.5rem' }}>
              <Stack direction="row" spacing={1}>
                <Stack>
                  <Download />
                </Stack>
                <Stack>
                  Télécharger le CV
                </Stack>
              </Stack>
            </Button>
          </Stack>
          <Box flexGrow={0.3} />
          <Stack justifyContent='center'>
            <Avatar alt="avatar" src="/src/assets/photopro.jpg" sx={{ width: '15rem', height: '15rem' }} />
          </Stack>
        </Stack>
        <Stack sx={{ marginTop: '50px' }} alignItems='center'>
          <Typography variant='h3'>Stack technique</Typography>
          <Stack direction='row' spacing={1}>
            {
              stackTechniqueImg.map((icon) => {
                return (<Card key={icon.alt} variant="outlined" sx={{ width: '3.5rem', height: '3.3rem', padding: '0.7rem', backgroundColor: '#F0FFFF', border: '#F0FFFF' }}>
                  <CardActionArea>
                    <img alt={icon.alt} src={icon.icon} width='100%' height='100%' />
                  </CardActionArea>
                </Card>)
              })
            }
          </Stack>
        </Stack>
      </Stack>
    </Container>

  )
}

export default Home