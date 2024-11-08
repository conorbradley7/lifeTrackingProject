import {Box} from "@mui/material";
import BudgetBreakdownTable from "../components/MainLandingPage/BudgetBreakdownTable.tsx";

const classes = {
    main: {
        background: '#FFF',
        height: '100%',
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    cardsContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardGroupContainer:{
        width: '100%',
        minWidth: '40%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '15px',
        borderRadius: '6px',
        boxShadow: 'rgba(0,0,0,0.1) 1px 1px 4px 2px',
        border: '2px solid transparent',
    },
    budgetBreakdownCard:{
        width: '90%',
        height: '85%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    budgetGraphCardGrid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        height: '85%',
        width: '90%',
        gap: '50px',
        alignItems: 'center'
    },
    budgetGraphCard:{
        width: '100%',
        height: '100%',
    },
    topLevelScrollContainer:{
        minHeight: '720px',
        height: `100%`,
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        minWidth: 'max(1280px,90%)',
        justifyContent: 'center',
    },
}
const MainLandingPage = () => {
    return (
        <Box sx={classes.main} id={'main-landing-page'}>
            <Box sx={classes.topLevelScrollContainer} id={'cards-container'}>
                <Box sx={classes.cardGroupContainer} id={'budget-breakdown-card-container'}>
                    <Box sx={[classes.card, classes.budgetBreakdownCard]}>
                        <BudgetBreakdownTable tableType={'Income'}/>
                        <BudgetBreakdownTable tableType={'Expenses'}/>
                        <BudgetBreakdownTable tableType={'Savings'}/>
                    </Box>
                </Box>
                <Box sx={classes.cardGroupContainer} id={'widget-grid-container'}>
                    <Box sx={classes.budgetGraphCardGrid} id={'graph-cards-grid'}>
                        <Box sx={[classes.card, classes.budgetGraphCard]}></Box>
                        <Box sx={[classes.card, classes.budgetGraphCard]}></Box>
                        <Box sx={[classes.card, classes.budgetGraphCard]}></Box>
                        <Box sx={[classes.card, classes.budgetGraphCard]}></Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default MainLandingPage;