import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './settings.css'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function SaveBTN() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (<>
        <button className="setbtn" onClick={handleClick}>
            SAVE CHANGES
            <DoneAllIcon />
        </button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Changes saved!
            </Alert>
        </Snackbar>
    </>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Settings() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    });

    const handleChanged = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };


    return (
        <div className="settings">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: '100%' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: '#2a2a2a' }}
                >
                    <Tab className='categorywala' icon={<BubbleChartIcon />} label="GENERAL" {...a11yProps(0)} />
                    <Tab className='categorywala' icon={<AccountCircleIcon />} label="ACCOUNT" {...a11yProps(1)} />
                    <Tab className='categorywala' icon={<PrivacyTipIcon />} label="PRIVACY" {...a11yProps(2)} />
                    <Tab className='categorywala' icon={<NotificationsIcon />} label="NOTIFICATIONS" {...a11yProps(3)} />
                    <Tab className='categorywala' icon={<AddTaskIcon />} label="ADS" {...a11yProps(4)} />
                    <Tab className='categorywala' icon={<TurnedInIcon />} label="SAVED" {...a11yProps(5)} />
                    <Tab className='categorywala' icon={<EqualizerIcon />} label="OPTIMIZATIONS" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="setkardu">
                        <div className="partek">
                            <FormControl component="fieldset" variant="standard">
                                <FormLabel component="legend">DISPLAY SETTINGS</FormLabel>
                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                    <FormControlLabel value="VIVID(AMOLED native)" control={<Radio />} label="VIVID(AMOLED native)" />
                                    <FormControlLabel value="NATURAL(sRGB)" control={<Radio />} label="NATURAL(sRGB)" />
                                    <FormControlLabel value="AUTO" control={<Radio />} label="AUTO" />
                                </RadioGroup>

                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch checked={state.MultiControl} onChange={handleChanged} name="MultiControl" />} label="MultiControl"
                                    />
                                    <FormControlLabel
                                        control={<Switch checked={state.jason} onChange={handleChanged} name="jason" />}
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={<Switch checked={state.antoine} onChange={handleChanged} name="antoine" />}
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                            </FormControl>
                        </div>
                        <div className="partdo">

                        </div>
                        <div className="partteen">

                        </div>
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="setkardu">
                        <h3>PERSONAL DETAILS</h3>
                        <h3>UPDATE CONTACT INFO</h3>
                        <h3>MORE</h3>
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="setkardu">
                        <FormControlLabel
                            label="Turn on shield" control={<Switch checked={state.TurnON} onChange={handleChanged} name="TurnON" />}
                        />
                        <li>Password Manager</li>
                        <li>Payment Method</li>
                        <li>Saved Address</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="setkardu">
                        <FormControlLabel
                            label="Turn OFF notifications" control={<Switch checked={state.TurnOFF} onChange={handleChanged} name="TurnOFF" />}
                        />
                        <hr />
                        <li>CHAT </li>
                        <li>FEED </li>
                        <li>OPPORTUNITIES</li>
                        <li>POST </li>
                        <li>PEOPLE WHO VIEWED </li>
                        <li>INTERACTION</li>
                        <li>SEND EMAIL</li>
                        email address
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className="setkardu">
                        <li>A COMMON MISCONCEPTOIN</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <div className="setkardu">
                        <li>A COMMON MISCONCEPTOIN</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <li>A COMMON MISCONCEPTION</li>
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <div className="setkardu">
                        <div className="part-ek">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Performance Modes</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="High Performance" control={<Radio />} label="High Performance" />
                                    <FormControlLabel value="Optimized" control={<Radio />} label="Optimized" />
                                    <FormControlLabel value="Quiet" control={<Radio />} label="Quiet" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="part-do">

                            <FormLabel id="demo-radio-buttons-group-label">Advance Features</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.StudioMode} onChange={handleChanged} name="StudioMode" />} label="Studio Mode"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.booting} onChange={handleChanged} name="booting" />}
                                    label="Auto Booting"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.HDR} onChange={handleChanged} name="HDR" />}
                                    label="HDR +"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.protect} onChange={handleChanged} name="protect" />}
                                    label="Protect Battery"
                                />
                            </FormGroup>
                        </div>
                        <SaveBTN />
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}