import React from 'react';

// import { NavLink } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';

function NavElement(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // let link = "/" + props.id;
    return (

        <Box sx={{ width: '100%', bgcolor: 'black', color: "white" }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label={props.name} />
            </Tabs>
        </Box>
    )
}
export default NavElement;