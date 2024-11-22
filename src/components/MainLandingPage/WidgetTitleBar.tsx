import {Box, Typography} from "@mui/material";
import * as colours from '../../constants/colours.ts'
const classes = {
    root: {
        backgroundColor: colours.mainAppBarBackground,
        width: '100%',
        textAlign: 'center',
        borderRadius: '6px 6px 0 0',
        padding: '5px 0'
    },
    title:{
        color: '#FFF',
        fontWeight: 'bold',
    },
};

type Props = {
    widgetTitle: string;
};

const WidgetTitleBar: React.FC<Props> = (props: Props) => {
    const { widgetTitle } = props;



    return (
        <Box sx={classes.root}>
            <Typography sx={classes.title}>
                {widgetTitle}
            </Typography>
        </Box>
    );
}

export default WidgetTitleBar