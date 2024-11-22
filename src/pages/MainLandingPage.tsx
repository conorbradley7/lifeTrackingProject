 import { Box } from "@mui/material";
import BudgetBreakdownTable from "../components/MainLandingPage/BudgetBreakdownTable.tsx";
import WidgetTitleBar from "../components/MainLandingPage/WidgetTitleBar.tsx";
import { FinancialCategory, FinancialTransaction, TransactionType } from "../types/commonTypes.tsx";
import useAPI from "../hooks/useAPI.ts";
import { useEffect, useState } from "react";

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
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardGroupContainer: {
        width: '100%',
        minWidth: '40%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '6px',
        boxShadow: 'rgba(0,0,0,0.1) 1px 1px 4px 2px',
        border: '2px solid transparent',
        height: '85%',
        alignItems: 'center',
    },
    budgetBreakdownCard: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 'auto',
    },
    budgetGraphCardGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        height: '85%',
        width: '90%',
        gap: '50px',
        alignItems: 'center'
    },
    budgetTable: {
        width: '90%',
        margin: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
    },
    budgetGraphCard: {
        width: '100%',
        height: '100%',
    },
    topLevelScrollContainer: {
        minHeight: '720px',
        height: `100%`,
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        minWidth: 'max(1280px,90%)',
        justifyContent: 'center',
    },
};

const MainLandingPage = () => {
    // Fetching financial categories and transactions
    const { data: financialCategories, loading: categoriesLoading } = useAPI<FinancialCategory[]>('http://localhost:8080/api/financialCategories');
    const { data: financialTransactions, loading: transactionsLoading } = useAPI<FinancialTransaction[]>('http://localhost:8080/api/financialTransactions');

    const [incomeTransactions, setIncomeTransactions] = useState<FinancialTransaction[] | undefined>(undefined);
    const [expenseTransactions, setExpenseTransactions] = useState<FinancialTransaction[] | undefined>(undefined);
    const [savingsTransactions, setSavingsTransactions] = useState<FinancialTransaction[] | undefined>(undefined);

    const [incomeCategories, setIncomeCategories] = useState<FinancialCategory[] | undefined>(undefined);
    const [expenseCategories, setExpenseCategories] = useState<FinancialCategory[] | undefined>(undefined);
    const [savingsCategories, setSavingsCategories] = useState<FinancialCategory[] | undefined>(undefined);

    useEffect(() => {
        if (!financialTransactions || !financialCategories) return;
        setIncomeTransactions(financialTransactions.filter((transaction) => transaction.category.transactionType === TransactionType.Income));
        setExpenseTransactions(financialTransactions.filter((transaction) => transaction.category.transactionType === TransactionType.Expense));
        setSavingsTransactions(financialTransactions.filter((transaction) => transaction.category.transactionType === TransactionType.Savings));
        setIncomeCategories(financialCategories.filter((category) => category.transactionType === TransactionType.Income));
        setExpenseCategories(financialCategories.filter((category) => category.transactionType === TransactionType.Expense));
        setSavingsCategories(financialCategories.filter((category) => category.transactionType === TransactionType.Savings));

    }, [financialTransactions, financialCategories]);

    // Loading state
    const isLoading = categoriesLoading || transactionsLoading;

    return (
        <Box sx={classes.main} id={'main-landing-page'}>
            <Box sx={classes.topLevelScrollContainer} id={'cards-container'}>
                <Box sx={classes.cardGroupContainer} id={'budget-breakdown-card-container'}>
                    <Box sx={classes.card}>
                        <WidgetTitleBar widgetTitle={'Budget Breakdown - MMMM YYYY'} />
                        <Box sx={classes.budgetBreakdownCard}>
                            {isLoading ? (
                                <Box>Loading...</Box>
                            ) : (
                                <>
                                    <Box sx={[classes.budgetTable, {maxHeight: '18%'}]}>
                                        <BudgetBreakdownTable tableType={TransactionType.Income} transactionData={incomeTransactions} categoryData={incomeCategories} />
                                    </Box>
                                    <Box sx={[classes.budgetTable, {maxHeight: '55%'}]}>
                                        <BudgetBreakdownTable tableType={TransactionType.Expense} transactionData={expenseTransactions} categoryData={expenseCategories} />
                                    </Box>
                                    <Box sx={[classes.budgetTable, {maxHeight: '20%'}]}>
                                        <BudgetBreakdownTable tableType={TransactionType.Savings} transactionData={savingsTransactions} categoryData={savingsCategories} />
                                    </Box>
                                </>
                            )}
                        </Box>
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
    );
};

export default MainLandingPage;
