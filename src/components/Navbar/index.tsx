import { Button, Stack, Typography } from '@mui/material'
import { Briefcase, Code, Home, Mail, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { user } from '../../api/user'
import LinkButtons from './Buttons'

function AppNavBar() {
    return (
        <Stack minWidth={1} minHeight="7vh" sx={{
            backgroundColor: "#8444df",
        }}>
            <Stack direction="row" sx={{ my: "1rem", mx: "1rem" }} justifyContent="space-between" >
                <Stack justifyContent="center" direction="row" alignContent="center" alignItems="center" spacing={1}>
                    <Code color="white" />
                    <Typography variant="h6" sx={{
                        fontFamily: "monospace",
                        color: "white"
                    }}>
                        <b>
                            {`${user.nom} ${user.prenom}`}
                        </b>
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
                    <LinkButtons buttonIcon={<Home />} buttonTitle="Home" />
                    <LinkButtons buttonIcon={<User />} buttonTitle="A Propos" />
                    <LinkButtons buttonIcon={<User />} buttonTitle="Projets" />
                    <LinkButtons buttonIcon={<Briefcase />} buttonTitle="CV" />
                </Stack>
                <Stack>
                    <Button variant="text" href={`mailto:${user.mail}`} color="info" sx={{ backgroundColor: "white", color: "#8444df", px: "0.5rem" }}>
                        <Stack direction="row" spacing={1}>
                            <Mail />
                            <b>
                                Me Contacter
                            </b>
                        </Stack>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AppNavBar