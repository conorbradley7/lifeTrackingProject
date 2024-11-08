import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {Box} from "@mui/material";

const classes = {
    root: {
        height: '100%',
    },
}

const rootElement = document.getElementById('appRoot');
if (rootElement){
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Box sx={classes.root}>
            <App></App>
        </Box>
    )
}
