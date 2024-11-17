import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './components/AddressForm';
import Info from './components/Info';
import InfoMobile from './components/InfoMobile';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';
import SitemarkIcon from './components/SitemarkIcon';
import AppTheme from './theme/AppTheme';
import ColorModeIconDropdown from './theme/ColorModeIconDropdown';
import Requirements, {InfoProps} from "./components/Requirements";
import ContactInformation from "./components/ContactInformation";
import Documents from "./components/Documents";
import Selfie from "./components/Selfie";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const stepsbak = ['Requirements', 'Contact Information', 'Documents', 'Selfie'];
// const steps = ['Shipping address', 'Payment details', 'Review your order'];
const steps = ['Requirements', 'Contact Information', 'Documents', 'Selfie'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <Requirements totalPrice='0'/>;
        case 1:
            return <ContactInformation/>;
        case 2:
            return <Documents/>;
        case 3:
            return <Selfie/>;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout(props: { disableCustomTheme?: boolean }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme/>
            <Box sx={{position: 'fixed', top: '1rem', right: '1rem'}}>
                <ColorModeIconDropdown/>
            </Box>

            <Grid
                container
                direction="column"
                sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}

            >

                <Grid
                    size={{sm: 12, md: 7, lg: 8}}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '100%',
                        width: '100%',
                        justifyContent: "center",

                        backgroundColor: {xs: 'transparent', sm: 'background.default'},
                        alignItems: 'flex-start',
                        pt: {xs: 0, sm: 16},
                        px: {xs: 2, sm: 10},
                        gap: {xs: 4, md: 8},
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: {sm: 'space-between', md: 'flex-end'},
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: {sm: '100%', md: 600},
                        }}
                    >
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                            }}
                        >
                            <Stepper
                                id="desktop-stepper"
                                activeStep={activeStep}
                                sx={{width: '100%', height: 40}}
                            >
                                {steps.map((label) => (
                                    <Step
                                        sx={{':first-child': {pl: 0}, ':last-child': {pr: 0}}}
                                        key={label}
                                    >
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: {sm: '100%', md: 600},
                            maxHeight: '720px',
                            gap: {xs: 5, md: 'none'},
                        }}
                    >
                        <Stepper
                            id="mobile-stepper"
                            activeStep={activeStep}
                            alternativeLabel
                            sx={{display: {sm: 'flex', md: 'none'}}}
                        >
                            {steps.map((label) => (
                                <Step
                                    sx={{
                                        ':first-child': {pl: 0},
                                        ':last-child': {pr: 0},
                                        '& .MuiStepConnector-root': {top: {xs: 6, sm: 12}},
                                    }}
                                    key={label}
                                >
                                    <StepLabel
                                        sx={{'.MuiStepLabel-labelContainer': {maxWidth: '70px'}}}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <Stack spacing={2} useFlexGap>
                                <Typography variant="h1">
                                    <CheckCircleIcon color={'success'} sx={{fontSize: 40, alignSelf: 'center'}}/>
                                </Typography>
                                <Typography color={"secondary"} variant="h5">Congratulations!</Typography>
                                <Typography variant="body1" sx={{color: 'text.secondary', textAlign: 'center'}}>
                           <pre>You have successfully completed the Stanbic Bank account opening process.<br/>
                              You will receive an email or SMS shortly with your account details.<br/>
                              Should you require more information, please contact our Customer Care team<br/>
                              on <strong>0711068888</strong></pre>

                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{alignSelf: 'start', width: {xs: '100%', sm: 'auto'}}}
                                >
                                    Complete
                                </Button>
                            </Stack>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box
                                    sx={[
                                        {
                                            display: 'flex',
                                            flexDirection: {xs: 'column-reverse', sm: 'row'},
                                            alignItems: 'end',
                                            flexGrow: 1,
                                            gap: 1,
                                            pb: {xs: 12, sm: 0},
                                            mt: {xs: 2, sm: 0},
                                            mb: '60px',
                                        },
                                        activeStep !== 0
                                            ? {justifyContent: 'space-between'}
                                            : {justifyContent: 'flex-end'},
                                    ]}
                                >
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon/>}
                                            onClick={handleBack}
                                            variant="text"
                                            sx={{display: {xs: 'none', sm: 'flex'}}}
                                        >
                                            Previous
                                        </Button>
                                    )}
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon/>}
                                            onClick={handleBack}
                                            variant="outlined"
                                            fullWidth
                                            sx={{display: {xs: 'flex', sm: 'none'}}}
                                        >
                                            Previous
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        endIcon={<ChevronRightRoundedIcon/>}
                                        onClick={handleNext}
                                        color={"secondary"}
                                        sx={{width: {xs: '100%', sm: 'fit-content'}}}
                                    >
                                        {activeStep === steps.length - 1 ? 'Confirm Details' : 'Continue'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </AppTheme>
    );
}
