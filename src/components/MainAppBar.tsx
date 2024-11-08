import {memo} from "react";
import {Box} from "@mui/material";
import * as colours from '../constants/colours.ts'
const classes = {
    root: {
        backgroundColor: colours.mainAppBarBackground,
        position: 'relative',
        marginTop: '0px',
        height: '70px',
        color: '#000',
    },
};

type Props = {
    appBarTitle: string;
    // navigationItems: [];
};

const MainAppBar : React.FC<Props> = (props:Props) => {
    const { appBarTitle} = props;
    return (
        <Box sx={classes.root}>{appBarTitle}</Box>
    );
}

export default memo(MainAppBar)