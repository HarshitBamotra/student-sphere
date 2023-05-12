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
import Slider from '@mui/material/Slider';

import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';


import Ad from './ADS.png'
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AccountPrivacy() {
    return (
        <div className='selectTime' style={{ marginBottom: '30px' }}>
            <div className="cardhoonbhai">
                <h2 style={{ textAlign: "center" }}>Account Privacy</h2>
                <ul>
                    <li>
                        <input type="radio" name="name" id="one" checked />
                        <label for="one">Public</label>
                        <div className="check"></div>
                    </li>
                    <li>
                        <input type="radio" name="name" id="two" />
                        <label for="two">Private</label>
                        <div className="check"></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
function LajawabButton({ bol }) {
    return (
        <div className="LajawabButton">
            <section class="portfolio-experiment">
                <a>
                    <span class="text">{bol}</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
            </section>
        </div>
    )
}
function Extensions({ typetobata }) {
    return (
        <div className="extensionshubhai">
            <span >
                {typetobata}
            </span>
            <a href="#">CHECK</a>
        </div>
    )
}
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
function SelectAudience() {
    return (
        <div className="teracontainerbhai">
            hi
        </div>
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
    const sty = {
        fontFamily: 'Passion One',
    }
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
                        </div>

                        <FormControlLabel
                            control={<Slider
                                size="small"
                                defaultValue={40}
                                aria-label="Small"
                            />}
                            label="Smoothness"
                        />

                        <div className="partdo">
                            <FormControl component="fieldset" variant="standard">
                                <FormLabel component="legend">DISPLAY SETTINGS</FormLabel>
                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                    <FormControlLabel value="VIVID(AMOLED native)" control={<Radio />} label="VIVID(AMOLED native)" />
                                    <FormControlLabel value="NATURAL(sRGB)" control={<Radio />} label="NATURAL(sRGB)" />
                                    <FormControlLabel value="AUTO" control={<Radio />} label="AUTO" />
                                </RadioGroup>

                            </FormControl>
                        </div>
                        {/* <GeneralSelection /> */}
                        <RadioGroup name="use-radio-group" defaultValue="first">
                            <FormLabel component="legend">SET YOUR SCREEN TIME</FormLabel>
                            <FormControlLabel value="first" label="<1 HRS" control={<Radio />} />
                            <FormControlLabel value="second" label="1-2HRS" control={<Radio />} />
                            <FormControlLabel value="third" label="2-3HRS" control={<Radio />} />
                            <FormControlLabel value="fourth" label="3-4HRS" control={<Radio />} />
                            <FormControlLabel value="fifth" label="4-5HRS" control={<Radio />} />
                            <FormControlLabel value="sixth" label=">5HRS" control={<Radio />} />
                        </RadioGroup>
                    </div>
                    <SaveBTN />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="setkardu">
                        <h3>PERSONAL DETAILS</h3>
                        <div className="namewala">

                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                            />
                        </div>
                        <p>Username can be changed only once</p>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Username"
                        />
                        <h3>UPDATE CONTACT INFO</h3>
                        <div className="contactwala">
                            <TextField
                                required
                                id="outlined-required"
                                label="Email Address"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Mobile Number"
                            />
                        </div>
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="setkardu">
                        <FormControlLabel
                            label="Turn on shield" control={<Switch checked={state.TurnON} onChange={handleChanged} name="TurnON" />}
                        />
                        <AccountPrivacy />
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                TRACKERS & AD BLOCKING
                            </InputLabel>
                            <NativeSelect
                                defaultValue={10}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={10}>BASIC</option>
                                <option value={20}>PREMIUM</option>
                            </NativeSelect>
                        </FormControl>

                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="setkardu">
                        <FormControlLabel
                            label="Turn OFF notifications" control={<Switch checked={state.TurnOFF} onChange={handleChanged} name="TurnOFF" />}
                        />
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel component="legend">SPECIFIC NOTIFICATIONS</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.Chat} onChange={handleChanged} name="Chat" />} label="Chat"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.Feed} onChange={handleChanged} name="Feed" />} label="Feed"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.Post} onChange={handleChanged} name="Post" />} label="Post"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.Opportunity} onChange={handleChanged} name="Opportunity" />} label="Opportunity"
                                />
                            </FormGroup>
                        </FormControl>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel component="legend">MORE</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.Peopletaggedyou} onChange={handleChanged} name="People tagged you" />} label="People tagged you"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.ProfileVisited} onChange={handleChanged} name="Profile Visited" />} label="Profile Visited"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.Follow} onChange={handleChanged} name="Follow" />} label="Follow"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.Interaction} onChange={handleChanged} name="Interaction" />} label="Interaction"
                                />
                            </FormGroup>
                        </FormControl>
                        <SaveBTN />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className="setkardu">
                        <div className="adswalahoonbhai">
                            <FormControlLabel
                                label="Turn OFF Ads" control={<Switch checked={state.TurnOFF} onChange={handleChanged} name="TurnOFF" />}
                            />
                        </div>
                        <div className="adskabhaihoonbhai">
                            <img src={Ad} alt="Ads" width={'350px'} />
                            <div className="btnwalacontainer">
                                <div className='adswalatext'>Customizing ads can be a powerful tool for businesses to reach their target audience and maximize their advertising budget. However, not all users may have access to this feature. At our company, we offer ad customization as a premium feature exclusively available to our paid subscribers. This allows our premium users to tailor their ad campaigns to specific demographics, interests, and behaviors of their target audience, resulting in higher engagement and conversion rates. Our premium users also have access to additional resources and support to help them optimize their ad campaigns. If you're interested in taking advantage of ad customization and other premium features, consider upgrading to a premium subscription today.</div>
                                <a class="btnhubhai" href='/premium'><span>Go Premium</span><em></em></a>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <div className="setkardu">
                        <span>MANAGE EXTENSIONS</span>
                        <ul>
                            <li>
                                <Extensions  typetobata={"GENERAL "} />
                            </li>
                            <li>
                                <Extensions  typetobata={"APPLICATIONS"} />
                            </li>
                            <li>
                                <Extensions  typetobata={"BROWSER"} />
                            </li>
                            <li>
                                <Extensions  typetobata={"SPECIAL"} />
                            </li>
                        </ul>
                        <div className="savehoonbhai">
                            <LajawabButton bol={"BOOKMARKS"} />
                            <LajawabButton bol={"PASSWORDS"} />
                            <LajawabButton bol={"SAVED FEED"} />
                        </div>
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
                        <FormLabel id="demo-radio-buttons-group-label">Recommended</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.DataSaver} onChange={handleChanged} name="DataSaver" />} label="Data Saver"
                            />
                            <FormControlLabel
                                control={<Switch checked={state.locations} onChange={handleChanged} name="locations" />}
                                label="Turn on location"
                            />
                        </FormGroup>
                        <SaveBTN />
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}

function GeneralSelection() {
    return (
        <div className="general">
            <div id="form-wrapper">
                <form action="/settings" method="GET">
                    <h1 id="form-title" >SET DAILY SCREEN TIME </h1>
                    <div id="debt-amount-slider">
                        <input type="radio" name="debt-amount" id={1} defaultValue={1} required />
                        <label htmlFor={1} data-debt-amount="< 1HRS" />
                        <input type="radio" name="debt-amount" id={2} defaultValue={2} required />
                        <label htmlFor={2} data-debt-amount="1HRS-2HRS" />
                        <input type="radio" name="debt-amount" id={3} defaultValue={3} required />
                        <label htmlFor={3} data-debt-amount="2HRS-3HRS" />
                        <input type="radio" name="debt-amount" id={4} defaultValue={4} required />
                        <label htmlFor={4} data-debt-amount="4HRS-5HRS" />
                        <input type="radio" name="debt-amount" id={5} defaultValue={5} required />
                        <label htmlFor={5} data-debt-amount="5HRS+" />
                        <div id="debt-amount-pos" />
                    </div>
                </form>
                <button type="submit">Limit daily screen time</button>
            </div>
        </div>
    )
}