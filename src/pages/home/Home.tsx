import { Button, Card } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import NavBar from '../../components/NavBar'
import { user } from '../../api/user'
import cv from "../../assets/cv.pdf"
import { Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'



function Home() {

  const navigate = useNavigate()

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
                  passionné et créatif,
                  <br />
                  prêt à créer des applications intéractives pour
                  <span style={{ color: "#8444df" }}>
                    <b>
                      vous
                    </b>
                  </span>
                  servir.
                </Typography>
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
                      <Stack justifyContent="center">
                        <Card
                          key={socials.url}
                          onClick={() => window.open(socials.url, "_blank")}
                          sx={{
                            width: '1rem',
                            height: "1rem",
                            padding: '0.7rem',
                            backgroundColor: '#F0FFFF',
                            border: '#F0FFFF',
                            objectFit: "fill",
                            ":hover": {
                              backgroundColor: "rgb(229, 228, 226)",
                              cursor: "pointer"
                            }
                          }}>
                          <img src={socials.icon} alt={socials.url} height="100%" width="100%" />
                        </Card>
                      </Stack>
                    )
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