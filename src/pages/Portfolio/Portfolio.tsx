import { Card, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import axios from "axios"
import { data } from '../../api/toRequest'


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
                {
                    state.map((projects: any) => {
                        return (<Stack>
                            <Card>
                                <Typography variant="body1" color="initial">{projects.name}</Typography>

                            </Card>
                        </Stack>)
                    })
                }


            </Stack>
        </>

    )
}

export default Portfolio