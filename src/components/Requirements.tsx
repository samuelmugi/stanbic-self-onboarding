import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import {ListItemIcon} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';


export   interface InfoProps {
    totalPrice: string;
}

export default function Requirements({ totalPrice }: InfoProps) {
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
               Before you proceed take note of the following Requirements
            </Typography>
            <List dense={true}>
                    <ListItem>
                        <ListItemIcon>
                            <FolderIcon />&nbsp;
                        </ListItemIcon>
                        <ListItemText
                            primary="Have a Kenyan National ID/Passport."
                        />
                    </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FolderIcon />&nbsp;
                    </ListItemIcon>
                    <ListItemText
                        primary="Your signature on a piece of paper."
                    />
                </ListItem>

            </List>

        </React.Fragment>
    );
}
