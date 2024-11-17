import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import {CardActions, CardContent, CardMedia} from "@mui/material";
import Webcam from "react-webcam";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SaveIcon from '@mui/icons-material/Save';
import Divider from "@mui/material/Divider";


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};
export default function Selfie() {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [captureActive, setCaptureActive] = React.useState(true);


    const capture = React.useCallback(
        () => {
            // @ts-ignore
            const imageSrc = webcamRef.current.getScreenshot({width: 1920, height: 1080});
            setImgSrc(imageSrc);
            console.log(imageSrc);
        },
        [webcamRef, setImgSrc]
    );

    const retake = () => {
        setImgSrc(null);
    };

    const openCamera = () => {
        setCaptureActive(false);
    };
    return (
        <React.Fragment>
            <Typography variant="subtitle2" sx={{color: 'text.secondary'}}>
                One last step, take a Selfie
            </Typography>
            <Card
                // style={{ width: '420', height: '280' }}
            >

                    {captureActive ? (
                            <>
                            </>
                        ):
                        (  <CardContent>
                            {!imgSrc && (
                                <Webcam
                                audio={false}
                                height={430}
                                width={430}
                                imageSmoothing={true}
                                // forceScreenshotSourceSize={true}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}

                                />)}
                            </CardContent>
                        )
                    }



                {imgSrc && (<CardMedia
                    component="img"
                    sx={{width: 420, height: 430}}
                    src={imgSrc}
                    alt="Live from space album cover"
                />)}
                {!captureActive && (
                <Divider/>)}
                <CardActions>
                    {captureActive ? (
                            <Button autoFocus onClick={openCamera}>
                                Click to open Camera
                            </Button>
                        ) :
                        (<Stack direction="row" spacing={10}>

                                {!imgSrc && (<Button variant="outlined" startIcon={<PhotoCameraIcon/>}
                                                     onClick={capture}>
                                    Capture photo
                                </Button>)}
                                {imgSrc && (<>
                                        <Button variant="contained" startIcon={<PhotoCameraIcon/>}
                                                onClick={retake}>
                                            Retake photo
                                        </Button>
                                        <Button variant="contained" autoFocus startIcon={<SaveIcon/>}>
                                            Save changes
                                        </Button>
                                    </>
                                )}
                            </Stack>
                        )}

                </CardActions>
            </Card>

        </React.Fragment>
    );
}
