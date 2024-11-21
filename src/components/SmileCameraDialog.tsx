import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {ButtonBase, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {styled} from "@mui/system";
import Webcam from "react-webcam";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Card from "@mui/material/Card";
import SelfieCapture from "./smile-id/SelfieCapture";

const WebcamComponent = () => <Webcam/>;


const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const ImageButton = styled(ButtonBase)(({theme}) => ({
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
        width: '1000% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',
});

const Image = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

// @ts-ignore
const ImageBackdrop = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
}));

const ImageMarked = styled('span')(({theme}) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
}));


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export default function SmileCameraDialog(props: any) {


    const [open, setOpen] = React.useState(false);
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(
        () => {
            // @ts-ignore
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
            console.log(imageSrc);
        },
        [webcamRef, setImgSrc]
    );

    const retake = () => {
        setImgSrc(null);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>

            <>

                <Button variant="outlined" onClick={handleClickOpen}>
                   Take Smile ID
                </Button>
            </>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{m: 0, p: 2}} id="customized-dialog-title">
                    Scan ID Front
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon/>
                </IconButton>
                <DialogContent dividers>

                    <Card sx={{display: 'flex'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <CardContent sx={{flex: '1 0 auto'}}>

                                <SelfieCapture
                                    hideInstructions={true}
                                    showNavigation={true}
                                    onCapture={''}
                                />
                            </CardContent>


                        </Box>

                    </Card>
                </DialogContent>
                <DialogActions>
                    <Stack direction="row" spacing={2}>

                                <Button autoFocus onClick={handleClose}>
                                    Save changes
                                </Button>


                    </Stack>

                </DialogActions>

            </BootstrapDialog>
        </React.Fragment>
    );
}
