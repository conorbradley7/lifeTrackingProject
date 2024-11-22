import {memo} from "react";
import {Box, Typography} from "@mui/material";
import * as colours from '../constants/colours.ts'
const classes = {
    root: {
        backgroundColor: colours.mainAppBarBackground,
        position: 'relative',
        marginTop: '0px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
    },
    title:{
        color: '#FFF',
        fontSize: '2.5em',
        marginLeft: '50px',
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
};

type Props = {
    appBarTitle: string;
    // navigationItems: [];
};

const MainAppBar : React.FC<Props> = (props:Props) => {
    const { appBarTitle} = props;
    return (
        <Box sx={classes.root}>
            <Typography sx={classes.title}>{appBarTitle}</Typography>
        </Box>
    );
}

export default memo(MainAppBar)