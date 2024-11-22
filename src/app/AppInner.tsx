import MainAppBar from "../components/MainAppBar.tsx";
import * as messages from "../locales/lang/en.json";
import {memo} from "react";
import {Box} from "@mui/material";
import * as colours from "../constants/colours.ts";
import AppRouter from "./AppRouter.tsx";

const classes = {
    root : {
        width: '100%',
        height: '100%',
    },
    mainAppContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
    },
    mainAppWindow: {
            flexGrow: 1,
            height: `calc(100% - 70px)`,
            width: `100%`,
            overflow: 'hidden',
            display: 'flex',
            fontFamily: '"Roboto", sans-serif',
            backgroundColor: colours.mainAppWindowBackground,
        },
    };
const AppInner = () => {
    return (
        <Box id={'appInner'} sx={classes.root}>
            <MainAppBar
                appBarTitle={messages.root.appTitle}
            />
            <Box id={'main-app-container'} sx={classes.mainAppWindow}>
                <AppRouter />
            </Box>
        </Box>
    )
}

export default memo(AppInner);