import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


interface ILinkButtons {
    buttonTitle: string,
    buttonIcon: React.ReactNode
}

function LinkButtons({ buttonTitle, buttonIcon }: ILinkButtons) {
    return (
        <Button component={Link} to="/" sx={{
            color: "white",
            ":hover": { backgroundColor: 'white', color: "#8444df" }
        }}>
            <Stack direction="row" spacing={1} >
                {buttonIcon}
                <Stack >
                    <b>
                        {buttonTitle}
                    </b>
                </Stack>
            </Stack>
        </Button>

    )
}

export default LinkButtons