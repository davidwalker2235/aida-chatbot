import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import {useContext, useState} from "react";
import Box from '@mui/material/Box';
import {Fade, InputAdornment, Popper, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {OpenAIClient} from "@azure/openai";
import { AzureKeyCredential } from '@azure/core-auth';
import {ChatContext} from "../aidaProvider";

const Aida = () => {
    const {endPoint, azureApiKey, deploymentId, } = useContext(ChatContext)
    const [question, setQuestion] = useState<string>("")
    const [response, setResponse] = useState<string>("")
    const [showAida, setShowAida] = useState(false)
    const [thinking, setThinking] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const onClickAida =
        (event: any) => {
            setAnchorEl(event.currentTarget);
            setShowAida(!showAida);
        };
    const onChangeInput = ({target}: any) => {
        setQuestion(target.value)
    }


    const getResponse = async () => {
        const client = new OpenAIClient(endPoint, new AzureKeyCredential(azureApiKey));
        const result = await client.getChatCompletions(deploymentId, [
            { role: "user", content: question },
        ]);

        setResponse(result?.choices[0]?.message?.content || 'Fail');
        if (result?.choices[0]?.message?.content) setThinking(false)
    }

    const keyPress = (e: any) => {
        if(e.key === 'Enter' && !e.shiftKey){
            getResponse()
            setThinking(true)
            setQuestion("")
        }
    }

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
                                sx={{marginBottom: 1}}
                                disabled
                                fullWidth
                                value={response}
                                InputProps={{
                                    startAdornment: thinking ? <InputAdornment position="start">Thinking...</InputAdornment> : null,
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Write a question"
                                id="fullWidth"
                                multiline
                                onChange={onChangeInput}
                                value={question}
                                onKeyDown={keyPress}
                            />
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

export default Aida