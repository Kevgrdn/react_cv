import { Stack, AppBar, Typography, Button } from "@mui/material"
import { Briefcase, Code, Github, Home, User } from "lucide-react"
import { Link } from 'react-router-dom'
import { user } from '../api/user'

function NavBar() {


    return (
        <>
            <AppBar position="fixed"
                sx={{
                    backgroundColor: "#8444df"
                }}>
                <Stack direction="row" sx={{ my: "1rem", mx: "1rem" }} justifyContent="space-between" >
                    <Stack justifyContent="center">
                        <Code />
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
                        <Typography variant='subtitle1' color="white" sx={{}}>
                            <Link to="/" >
                                <Stack direction="row" spacing={1}>
                                    <Stack>
                                        <Home />
                                    </Stack>
                                    <Stack>
                                        <b>
                                            Home
                                        </b>
                                    </Stack>
                                </Stack>
                            </Link>
                        </Typography>
                        <Typography variant='subtitle1' color="white" sx={{}}>
                            <Link to="/about" >
                                <Stack direction="row" spacing={1}>
                                    <Stack>
                                        <User />
                                    </Stack>
                                    <Stack>
                                        <b>
                                            About
                                        </b>
                                    </Stack>
                                </Stack>

                            </Link>
                        </Typography>
                        <Typography variant='subtitle1' color="white">
                            <Link to="/projects"  >
                                <Stack direction="row" spacing={1}>
                                    <Stack>
                                        <Github />
                                    </Stack>
                                    <Stack>
                                        <b>
                                            Projets
                                        </b>
                                    </Stack>
                                </Stack>

                            </Link>
                        </Typography>
                        <Typography variant='subtitle1' >
                            <Link to="/cv"  >
                                <Stack direction="row" spacing={1}>
                                    <Stack>
                                        <Briefcase />
                                    </Stack>
                                    <Stack>
                                        <b>
                                            CV
                                        </b>
                                    </Stack>
                                </Stack>


                            </Link>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="subtitle2">
                            <Button variant="contained" color="info" sx={{ backgroundColor: "white", color: "white", ":hover": { backgroundColor: "blue", color: "white" } }}>
                                <b>
                                    <a href={`mailto:${user.mail}`}>Me contacter</a>
                                </b>
                            </Button>
                        </Typography>
                    </Stack>
                </Stack>
            </AppBar>
        </>



    )
}


export default NavBar