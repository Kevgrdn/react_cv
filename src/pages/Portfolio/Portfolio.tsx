import { Button, Card, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import axios from "axios"
import { data } from '../../api/toRequest'
import { Github } from 'lucide-react'


function Portfolio() {
    const [state, setState] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(data.kevin_github_projects);
            setState(response.data);
        }

        fetchData();
    }, []);



    console.log(state);

    return (

        <>
            <NavBar />
            <Stack sx={{ my: "5rem" }}>
                <Typography variant="h2">
                    Voici la réalisation de mes projets :
                </Typography>
                <Grid container spacing={2}>
                    {
                        state.map((projects: any) => {
                            return (
                                <Grid item key={projects.id}>
                                    <Card >
                                        {
                                            projects.description ? <Typography variant="body1" color="initial">{projects.name}</Typography>
                                                : <></>
                                        }
                                        <Typography variant="body1" color="initial">{projects.description}</Typography>
                                        {
                                            !projects.language ? <></> : <Typography variant="body1" color="initial">Langage utilisé : {projects.language}</Typography>
                                        }
                                        <a href={projects.html_url}>
                                            <Button variant='outlined' color="info">
                                                <Github />
                                                Voir le projet</Button>
                                        </a>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>




            </Stack>
        </>

    )
}

export default Portfolio