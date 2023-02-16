import { Button, Card, Grid, Skeleton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import axios from "axios"
import { Github } from 'lucide-react'
import { user } from '../../api/user'


function Portfolio() {
    const [state, setState] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(user.githubData);
            setState(response.data);
        }

        fetchData();
    }, []);


    return (
        <>
            <NavBar />
            {state ?
                <Stack sx={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}>
                    <Grid container md={4} lg={10} spacing={1.5} sx={{
                        justifyContent: "center",

                    }}>
                        {
                            state.map((projects: any) => {
                                return (
                                    <Grid item key={projects.id} sx={{
                                        minWidth: "33%",
                                        alignContent: "center",
                                        alignItems: "center",
                                        display: "flex"
                                    }}>
                                        <Card >
                                            <Stack justifyContent="center" spacing={1}>
                                                <Stack spacing={1} justifyContent="center">
                                                    {
                                                        projects.name &&
                                                        <Typography
                                                            variant="h6"
                                                            color="initial"
                                                            fontFamily="monospace"
                                                        >
                                                            <b>
                                                                Projet{" "}
                                                            </b>
                                                            <span
                                                                style={{
                                                                    color: "#8444df"
                                                                }}>
                                                                {projects.name}
                                                            </span>
                                                        </Typography>
                                                    }
                                                    {
                                                        projects.description &&
                                                        <Typography variant="body1" color="initial">
                                                            Description :{projects.description}
                                                        </Typography>
                                                    }
                                                    {
                                                        projects.language &&
                                                        <Typography
                                                            variant="subtitle1"
                                                            color="initial">
                                                            Langage utilisé : {projects.language}
                                                        </Typography>
                                                    }
                                                </Stack>
                                                <Button
                                                    href={projects.html_url}
                                                    sx={{
                                                        backgroundColor: "#8444df",
                                                        color: "white"
                                                    }}>
                                                    <Stack spacing={1} direction="row">
                                                        <Github />
                                                        <b>
                                                            Voir le projet
                                                        </b>
                                                    </Stack>
                                                </Button>
                                            </Stack>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Stack>
                :
                <Skeleton variant="rectangular" width={210} height={118} />
            }
        </>

    )
}

export default Portfolio