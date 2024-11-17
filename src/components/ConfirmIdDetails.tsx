import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {width} from "@mui/system";

export default function ConfirmIdDetails() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                style={{width: '90%'}}
                variant="contained"
                onClick={handleClickOpen}>
                Confirm Document Details
            </Button>
            <Dialog
                open={open}
                maxWidth={'xs'}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                   Confirm Document Details
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please confirm this is your National ID Number?<br/>
                        <strong>12334567</strong><br/>
                        <br/>
                        <strong>Note:</strong><br/>
                        This number will be used to automatically fetch your<br/>
                        <strong> KRA
                            PIN</strong>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleClose} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}