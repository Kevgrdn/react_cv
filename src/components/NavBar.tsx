import { Stack, AppBar, Typography, Button } from "@mui/material"
import { Briefcase, Code, Github, Home, Mail, User } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom'
import { user } from '../api/user'

function NavBar() {

    return (
        <>
            <AppBar position="fixed"
                sx={{
                    backgroundColor: "#8444df"
                }}>
                <Stack direction="row" sx={{ my: "1rem", mx: "1rem" }} justifyContent="space-between" >
                    <Stack justifyContent="center" direction="row" alignContent="center" alignItems="center" spacing={1}>
                        <Code />
                        <Typography variant="h6" sx={{
                            fontFamily: "monospace"
                        }}>
                            <b>
                                {`${user.nom} ${user.prenom}`}
                            </b>
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
                        <Button component={Link} to="/" sx={{
                            color: "white"
                        }}>
                            <Stack direction="row" spacing={1}>
                                <Home />
                                <Stack>
                                    <b>
                                        Home
                                    </b>
                                </Stack>
                            </Stack>
                        </Button>
                        <Button component={Link} to="/about" sx={{
                            color: "white"
                        }}>
                            <Stack direction="row" spacing={1}>
                                <User />
                                <Stack>
                                    <b>
                                        A propos
                                    </b>
                                </Stack>
                            </Stack>
                        </Button>

                        <Button component={Link} to="/projects" sx={{
                            color: "white"
                        }}>
                            <Stack direction="row" spacing={1}>
                                <User />
                                <Stack>
                                    <b>
                                        Projets
                                    </b>
                                </Stack>
                            </Stack>
                        </Button>
                        <Button component={Link} to="/cv" sx={{
                            color: "white"
                        }}>
                            <Stack direction="row" spacing={1}>
                                <Briefcase />
                                <Stack>
                                    <b>
                                        CV
                                    </b>
                                </Stack>
                            </Stack>
                        </Button>
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
            </AppBar>
        </>



    )
}


export default NavBar