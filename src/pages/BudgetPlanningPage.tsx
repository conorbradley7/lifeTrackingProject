import {Box} from "@mui/material";

const classes = {
    main: {
        background: '#0F0',
        height: '100%',
        width: '100%',
        position: 'relative',
    }
}
const BudgetPlanningPage = () => {
    return (
        <Box sx={classes.main} id={'budget-page'}></Box>
    )
}

export default BudgetPlanningPage;