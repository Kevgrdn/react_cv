import { Grid } from '@mui/material'
import React from 'react'
import { user } from '../../api/user'
import NavBar from '../../components/NavBar'

function Cv() {
    return (

        <>
            <NavBar />
            <Grid container>
                <Grid item>
                    {`${user.nom} ${user.prenom}`}
                </Grid>
                <Grid item>
                    {user.mail}
                </Grid>
                <Grid item>
                    {user.adresse.rue}
                </Grid>
                <Grid item>
                    {user.experiences.map((experience) => {
                        return (
                            <Grid item key={experience.nom}>
                                <Grid item>
                                    {experience.nom}
                                </Grid>
                                <Grid item>
                                    {experience.entreprise}
                                </Grid>
                                <Grid item>
                                    {experience.lieu}
                                </Grid>
                                <Grid item>
                                    {experience.dateDebut}
                                </Grid>
                                <Grid item>
                                    {experience.dateFin}
                                </Grid>
                                {experience.description &&
                                    <Grid item>
                                        {experience.description}
                                    </Grid>
                                }
                                {experience.projets &&
                                    <Grid item>
                                        {experience.projets.map((projet) => {
                                            return (
                                                <Grid item key={projet.nom}>
                                                    <Grid item>
                                                        {projet.nom}
                                                    </Grid>
                                                    <Grid item>
                                                        {projet.frontend}
                                                    </Grid>
                                                    <Grid item>
                                                        {projet.frontend.map((frontend, i) => {
                                                            return (
                                                                <Grid item key={frontend
                                                                    + i}>
                                                                    {frontend}
                                                                </Grid>
                                                            )
                                                        })}
                                                    </Grid>
                                                    <Grid item>
                                                        {projet.backend.map((backend, i) => {
                                                            return (
                                                                <Grid item key={backend + i}>
                                                                    {backend}
                                                                </Grid>
                                                            )
                                                        })}
                                                    </Grid>
                                                    <Grid item>
                                                        {projet.lien}
                                                    </Grid>
                                                </Grid>
                                            )
                                        }
                                        )}
                                    </Grid>
                                }
                            </Grid>
                        )
                    }
                    )}
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </>
    )
}

export default Cv