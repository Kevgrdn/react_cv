import { Divider, Grid, Stack, Typography, Box } from '@mui/material'
import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { user } from '../../api/user'
import NavBar from '../../components/NavBar'

function Cv() {
    return (

        <>
            <NavBar />
            <Stack sx={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: "100vh",
            }}>
                <Stack direction="column" justifyContent="center" maxWidth="90%" spacing={1}>
                    <Stack spacing={1} width="100%">
                        <Typography variant='h5' fontFamily="monospace" sx={{
                            color: "#8444df"
                        }}>
                            <b>
                                {`${user.nom} ${user.prenom}`}
                            </b>
                        </Typography>
                        <Typography>
                            <Stack spacing={1} direction="row">
                                <Mail />
                                <b>
                                    <a style={{
                                        color: "black",
                                        textDecoration: "none"
                                    }} href={`mailto:${user.mail}`}> {user.mail}</a>
                                </b>
                            </Stack>
                        </Typography>
                        <Typography>
                            <Stack spacing={1} direction="row">
                                <Phone />
                                <b>
                                    <a style={{
                                        color: "black",
                                        textDecoration: "none"
                                    }} href={`tel:${user.tel}`}> {user.tel}</a>
                                </b>
                            </Stack>
                        </Typography>
                    </Stack>
                    <Stack>
                    </Stack>
                    <Divider />

                    <Stack direction="column" width="100%" spacing={1}>
                        <Typography variant="h6" fontFamily="monospace" color="initial" sx={{
                            color: "#8444df"
                        }}>
                            <b>
                                Expériences
                            </b>
                        </Typography>
                        {user.experiences.map((experience) => {
                            return (
                                <Stack key={experience.nom} direction="row" justifyContent="space-between">
                                    <Stack direction="row" justifyContent="space-between" spacing={3} >
                                        <Stack direction="column">
                                            <Stack>
                                                <Typography variant="h6" color="initial">
                                                    {experience.nom}
                                                </Typography>
                                                <Typography variant="body1" color="initial">
                                                    <i style={{
                                                        color: "#8444df"
                                                    }}>
                                                        <b>
                                                            {experience.entreprise}{" "}
                                                        </b>
                                                        à {experience.lieu}
                                                    </i>
                                                </Typography>
                                            </Stack>
                                            <Stack direction="row">
                                                <Typography variant="body1" color="initial">
                                                    Depuis
                                                    <i>
                                                        {experience.dateDebut}{" "}
                                                    </i>
                                                    jusqu'a
                                                    <i>
                                                        {" "} {experience.dateFin}
                                                    </i>
                                                </Typography>

                                            </Stack>
                                        </Stack>
                                        <Stack >
                                            <Typography variant="body1" color="initial">
                                                {experience.description}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>


                                //     {experience.projets &&
                                //     <Grid item>
                                //         {experience.projets.map((projet) => {
                                //             return (
                                //                 <Grid item key={projet.nom}>
                                //                     <Grid item>
                                //                         {projet.nom}
                                //                     </Grid>
                                //                     <Grid item>
                                //                         {projet.frontend}
                                //                     </Grid>
                                //                     <Grid item>
                                //                         {projet.frontend.map((frontend, i) => {
                                //                             return (
                                //                                 <Grid item key={frontend
                                //                                     + i}>
                                //                                     {frontend}
                                //                                 </Grid>
                                //                             )
                                //                         })}
                                //                     </Grid>
                                //                     <Grid item>
                                //                         {projet.backend.map((backend, i) => {
                                //                             return (
                                //                                 <Grid item key={backend + i}>
                                //                                     {backend}
                                //                                 </Grid>
                                //                             )
                                //                         })}
                                //                     </Grid>
                                //                     <Grid item>
                                //                         {projet.lien}
                                //                     </Grid>
                                //                 </Grid>
                                //             )
                                //         }
                                //         )}
                                //     </Grid>
                                // }
                            )
                        }
                        )}
                    </Stack>

                    <Grid item>

                    </Grid>
                </Stack>


            </Stack>

        </>
    )
}

export default Cv