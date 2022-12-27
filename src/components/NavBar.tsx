import React from 'react'
import { Stack, MenuItem, Menu, AppBar, Toolbar, Typography } from "@mui/material"
import { Crown } from "lucide-react"
import { Link } from 'react-router-dom'


function NavBar() {


    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6">
                        Text
                    </Typography>
                    <Typography >
                        {/* <Link to="/home" >
                            Home
                        </Link> */}
                        {/* <Link to="/projects" >
                            About
                        </Link>
                        <Link to="/education" >
                            Contact
                        </Link> */}

                    </Typography>
                </Toolbar>
            </AppBar>
        </>



    )
}


export default NavBar