import {Box, Button, Drawer, TextField, Typography} from "@mui/material";
import TransactionTable from "../components/TransactionTrackingPage/TransactionTable.tsx";
import useAPI from "../hooks/useAPI.ts";
import {FinancialTransaction} from "../types/commonTypes.tsx";
import {mainAppBarBackground} from "../constants/colours.ts";
import {useState} from "react";

const classes = {
    main: {
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '50px',
    },
    transactionTableContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    newTransactionBtn: {
        width: 'fit-content',
        fontWeight: 'bold',
        fontSize: '0.8em',
        backgroundColor: mainAppBarBackground,
    },
    tableTopButtonContainer: {
        display: 'flex',
        justifyContent: 'right',
        margin: '0 5% 15px 0',
    },
    drawerContent: {
        width: "300px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
}
const TransactionTrackingPage = () => {
    const { data: financialTransactions, loading: transactionsLoading } = useAPI<FinancialTransaction[]>('http://localhost:8080/api/financialTransactions');

    const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);


    return (
        <Box sx={classes.main} id={'budget-page'}>
            <Box sx={classes.tableTopButtonContainer}>
                <Button variant={"contained"} sx={classes.newTransactionBtn} onClick={() => {setIsTransactionFormOpen(true)}}>Add Transaction</Button>
            </Box>
            <Box sx={classes.transactionTableContainer}>
                {transactionsLoading ? (
                    <Box>Loading...</Box>
                ) : (
                    <TransactionTable transactionData={financialTransactions}/>
                )}
            </Box>
            <Drawer
                anchor="right"
                open={isTransactionFormOpen}
                onClose={() => setIsTransactionFormOpen(false)}
            >
                <Box sx={classes.drawerContent}>
                    <Typography variant="h6" component="h2">
                        Add New Transaction
                    </Typography>
                    <TextField label="Transaction Name" variant="outlined" fullWidth />
                    <TextField label="Amount" variant="outlined" fullWidth />
                    <TextField label="Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
                    <Button
                        variant="contained"
                        onClick={() => setIsTransactionFormOpen(false)} // Add submission logic here
                    >
                        Submit
                    </Button>
                </Box>
            </Drawer>
        </Box>
    )
}

export default TransactionTrackingPage;