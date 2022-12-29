import { Box, Button, Card, CardActionArea, Container, CardMedia, CardActions } from '@mui/material'
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


  return (

    <>
      <NavBar />
      <Stack sx={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <Stack>
          <Stack direction='row' justifyContent='center' spacing={20}>
            <Stack alignItems='center' justifyContent='center' spacing={2} >
              <Stack my={1}>
                <Typography variant='h2' fontFamily="monospace" color="#8444df">Bonjour,</Typography>
                <Typography variant='h1'>
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
              <Stack direction="row" spacing={3}>
                <Button variant="contained" type='button' sx={{ borderRadius: '1.5rem', backgroundColor: "#8444df" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Download />
                    <Stack direction="row">
                      <Button href={cv} target="_blank" sx={{ color: "white" }}>
                        <b>
                          Télécharger le CV
                        </b>
                      </Button>
                    </Stack>
                  </Stack>
                </Button>
                {
                  user.reseaux.map((socials) => {
                    return (
                      <Card key={socials.url} sx={{ width: '3.5rem', height: '3.3rem', padding: '0.7rem', backgroundColor: '#F0FFFF', border: '#F0FFFF', objectFit: "fill" }}>
                        <img src={socials.icon} alt={socials.url} />
                      </Card>)
                  })
                }
              </Stack>
            </Stack>
            <Stack justifyContent='center'>
              <Avatar alt="avatar" src="/src/assets/photopro.jpg" sx={{ width: '22rem', height: '22rem', border: "solid #8444df 0.3rem" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Home