import { Box, Button, Card, CardActionArea, Container, Divider, Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import NavBar from '../../components/NavBar'
import { user } from '../../api/user'
import cv from "../../assets/cv.pdf"
import Grid from '@mui/material/Grid'
import { Download } from 'lucide-react'

function About() {

  return (
    <Paper sx={{ width: "100%", height: "100%", boxShadow: 'none' }}>
      <Container disableGutters>
        <NavBar />
        <Stack>
          <Card>
            <Stack spacing={1} direction='row' alignItems='center' sx={{ marginTop: '5rem', }}>
              <Stack sx={{ width: '50%' }}>
                <Stack direction='column' justifyContent='center' alignItems='center'>
                  <Box flexGrow={0.3} />
                  <Stack justifyContent='center'>
                    <Avatar alt="avatar" src="/src/assets/photopro.jpg" sx={{ width: '15rem', height: '15rem', borderRadius: '0rem' }} />
                  </Stack>
                  <Box flexGrow={0.3} />
                  <Stack>
                    <Stack alignItems='center' justifyContent='center'>
                      <Typography variant='h5'>
                        <b>
                          {`${user.nom} ${user.prenom}`}
                        </b>
                      </Typography>
                      <Typography variant='subtitle1'>Développeur FullStack</Typography>
                    </Stack>
                    <Stack>
                      <Button href={cv} target="_blank" variant="contained" type='button' sx={{ backgroundColor: "#8444df", height: '2rem', marginBottom: '0.5rem' }}>
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
                  </Stack>
                </Stack>
              </Stack>
              <Divider flexItem orientation='vertical' />
              <Stack sx={{ width: '50%', height: '100%' }}>
                <Stack alignItems='center'>
                  <Typography variant='h3'>Stack technique</Typography>
                  <Stack direction='row'>
                    <Grid container columns={3}>
                      {
                        user.stackTechnique.map((icon) => {
                          return (<Grid xs={1}><Card key={icon.alt} variant="outlined" sx={{ width: '3.5rem', height: '3.3rem', padding: '0.7rem', backgroundColor: '#F0FFFF', border: '#F0FFFF' }}>
                            <CardActionArea>
                              <img alt={icon.alt} src={icon.icon} width='100%' height='100%' />
                            </CardActionArea>
                          </Card></Grid>)
                        })
                      }
                    </Grid>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>

    </Paper >
  )
}

export default About