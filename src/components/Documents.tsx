import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Radio} from "@mui/material";
import ScanDocument from "./ScanDocument";
import Divider from "@mui/material/Divider";
import ConfirmIdDetails from "./ConfirmIdDetails";


export default function Documents() {
    return (
        <React.Fragment>

            <Typography variant="h5" gutterBottom>
                We need to validate your documents. Please take a photo of your ID/Passport
            </Typography>
            <FormControl>
                <FormLabel required id="demo-row-radio-buttons-group-label">Select Document Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="nationalid" control={<Radio/>} label="National ID"/>
                    <FormControlLabel value="passport" control={<Radio/>} label="Passport"/>

                </RadioGroup>
                <Divider/>
                <ScanDocument
                    docType={"idfront"}
                    imagedisplayurl={'./assets/images/idfront.jpg'}
                    title={'Take Front ID Photo'}
                />
                <Divider/>
                <ScanDocument
                    docType={"idback"}
                    imagedisplayurl={'./assets/images/idback.jpg'}
                    title={'Take Back ID Photo'}
                />
                <Divider/>
                <ConfirmIdDetails/>
            </FormControl>


        </React.Fragment>
    );
}
