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


function Home2() {




  return (
    <Stack sx={{
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <NavBar />
      <Stack sx={{ marginTop: '5rem', }}>
        <Stack direction='row' justifyContent='center'>
          <Stack alignItems='center' justifyContent='center' >
            <Stack my={1}>
              <Typography variant='h3' fontFamily="monospace" color="#8444df">Bonjour,</Typography>
              <Typography variant='h2'>
                <b>
                  {`${user.nom} ${user.prenom}`}
                </b>
              </Typography>
              <Typography variant='subtitle1'>
                Un{" "}
                <span style={{ color: "#8444df" }}>
                  <b>
                    développeur fullstack
                  </b>
                </span>
                {" "}passionné et créatif,
                <br />
                prêt à créer des applications intéractives pour
                {" "}
                <span style={{ color: "#8444df" }}>
                  {" "}
                  <b>
                    vous
                  </b>
                  {" "}
                </span>
                servir.</Typography>
            </Stack>
            <Button variant="contained" type='button' sx={{ borderRadius: '1.5rem', backgroundColor: "#8444df" }}>
              <Stack direction="row" spacing={1}>
                <Stack justifyContent="center">
                  <Download />
                </Stack>
                <Stack>
                  <Button href={cv} target="_blank" sx={{ color: "white" }}>
                    <b>
                      Télécharger le CV
                    </b>
                  </Button>

                </Stack>
              </Stack>
            </Button>
          </Stack>
          <Box flexGrow={0.3} />
          <Stack justifyContent='center'>
            <Avatar alt="avatar" src="/src/assets/photopro.jpg" sx={{ width: '15rem', height: '15rem', border: "solid #8444df 0.3rem" }} />
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
    </Stack>
  )
}

export default Home2