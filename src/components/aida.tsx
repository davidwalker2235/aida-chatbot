import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import {useState} from "react";
import Box from '@mui/material/Box';
import {Fade, Popper, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import InputComponent from "./input";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Aida = () => {
    const [showAida, setShowAida] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const onClickAida =
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setShowAida(!showAida);
        };

    return (
        <Box>
            <Popper
                sx={{ zIndex: 100000 }}
                open={showAida}
                anchorEl={anchorEl}
                placement="bottom-start"
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper sx={{padding: 2}}>
                            <TextField
                                id="outlined-multiline-flexible"
                                multiline
                                maxRows={30}
                                sx={{width:320, marginBottom: 1}}
                                disabled
                                placeholder="Hello, I'm AIDA"
                            />
                            <InputComponent />
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                onClick={onClickAida}
                style={{cursor: "pointer"}}
            >
                <Avatar alt="Remy Sharp" src="robot.png"/>
            </StyledBadge>
        </Box>
    );
}

export default Aida