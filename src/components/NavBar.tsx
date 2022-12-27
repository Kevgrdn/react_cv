import React from 'react'
import { Stack, MenuItem, Menu, AppBar, Toolbar, Typography } from "@mui/material"
import { Code, Crown } from "lucide-react"
import { Link } from 'react-router-dom'

import logo from "../assets/dev.png"

function NavBar() {


    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h6">
                            <Code />
                        </Typography>
                        <Typography variant='subtitle1' color="white">
                            <Link to="/" >
                                About
                            </Link>
                        </Typography>
                        <Typography variant='subtitle1' color="white">
                            <Link to="/projects" >
                                Projets
                            </Link>
                        </Typography>
                        <Typography variant='subtitle1' >
                            <Link to="/education" >
                                Parcours
                            </Link>
                        </Typography>
                    </Stack>

                </Toolbar>
            </AppBar>
        </>



    )
}


export default NavBar