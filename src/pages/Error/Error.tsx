import React from 'react'
import Typography from '@mui/material/Typography'
import error from "../../assets/erreur404.png"
import { Stack } from '@mui/system'
function Error() {
    return (
        <Stack justifyContent="center" alignContent="center" alignItems="center" width="auto">
            <Stack maxWidth="50%">

                <img src={error} alt="404" />
            </Stack>
        </Stack>
    )
}

export default Error