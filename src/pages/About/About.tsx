import { Box, Button, Card, CardActionArea, Container } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import NavBar from '../../components/NavBar'
import { user } from '../../api/user'
import { Download } from 'lucide-react'

function About() {

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
        <Stack alignItems='center'>
          <Typography variant='h3'>Stack technique</Typography>
          <Stack direction='row' spacing={1}>
            {
              user.stackTechnique.map((icon) => {
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

export default About