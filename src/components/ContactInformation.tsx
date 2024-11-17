import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid2";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import {styled} from "@mui/system";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {MenuItem} from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";



interface InfoProps {
    totalPrice: string;
}

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
export default function ContactInformation() {
    const [country, setCountry] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value);
    };
    return (
        <Grid container spacing={3}>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="first-name" required>
                    Country
                </FormLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={country} onChange={handleChange}

                >
                    <MenuItem value={'-'}>Select Country</MenuItem>
                    <MenuItem value={'KE'}>Kenya</MenuItem>
                    <MenuItem value={'KE'}>Uganda</MenuItem>
                    <MenuItem value={'KE'}>Tanzania</MenuItem>
                    <MenuItem value={'KE'}>Rwanda</MenuItem>
                </Select>
            </FormGrid>
            <FormGrid size={{xs: 12 }}>
                <FormLabel htmlFor="last-name" required>
                    Phone Number
                </FormLabel>
                <OutlinedInput
                    id="user-phone"
                    name="phoneNumber"
                    type="number"
                    placeholder="0712345678"
                    autoComplete="last name"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="email" required>
                   Email Address
                </FormLabel>
                <OutlinedInput
                    id="user-email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    size="small"
                />
            </FormGrid>

            <FormControlLabel required control={<Checkbox  />} label="Accept terms and conditions" />

        </Grid>
    );

}
