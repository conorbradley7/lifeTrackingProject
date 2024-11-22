import {memo} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {FinancialCategory, FinancialTransaction, TransactionType} from "../../types/commonTypes.tsx";


const dummyBudgetTotal = 1090;
const dummyTrackedTotal = 1012;


const classes = {
    tableContainer:{
        maxWidth: '90%',
    },
    tableHeaderCell:{
        fontWeight: 'bold',
        color: '#FFF',
        whiteSpace: 'nowrap',
        padding: '2px 10px',
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1, // Ensures the header is above other content when scrolling
        backgroundColor: 'inherit', // Keeps the header's background consistent
        fontSize: '0.8em',
    },
    tableBodyCell:{
        color: '#000',
        whiteSpace: 'nowrap',
        padding: '3px 10px',
        border: 'none',
        textAlign: 'center',
        fontSize: '0.7em',
        width: 'inherit',
    },
    tableTotalCell:{
        fontWeight: 'bold',
        borderTop: '2px solid #000',
        position: 'sticky',
        bottom: 0,
        zIndex: 1, // Ensures the total row is above other content when scrolling
        backgroundColor: '#FFF', // Keeps the background consistent
        boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
    },
};

type Props = {
    tableType: string;
    transactionData?: FinancialTransaction[];
    categoryData?: FinancialCategory[];

};

const BudgetBreakdownTable : React.FC<Props> = (props:Props) => {
    const { tableType, transactionData, categoryData } = props;

    const getCategoryTotal = (category: FinancialCategory): number => {
        let total = 0;
        if(transactionData) {
            const categoryTransactions: FinancialTransaction[] = transactionData.filter(transaction => (transaction.category.id == category.id));
            categoryTransactions.forEach(transaction => total =  total + transaction.amount);
        }
        return total
    };

    const tableColor = tableType === TransactionType.Income? '#42d305': tableType == TransactionType.Expense? '#f11073' : '#24a2ff';
    const opaqueTableColor = tableType === TransactionType.Income? 'rgba(66,211,5,0.4)': tableType == TransactionType.Expense? 'rgba(241,16,115,0.4)' : 'rgba(36,162,255,0.4)';
    const lightGreyBackground = 'rgba(166,166,166,0.4)';
    const greyBackground = 'rgba(166,166,166,1)'
    return (
        <TableContainer component={Paper} sx={classes.tableContainer}>
            <Table sx={{ minWidth: 5, borderCollapse: 'separate', }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: tableColor}}>
                        <TableCell sx={[classes.tableHeaderCell, {width: '25%', textAlign: 'left'}]}>{tableType}</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Tracked</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Budget</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>% Complete</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Remaining</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Excess</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categoryData? (categoryData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={[classes.tableBodyCell, {textAlign: 'left',  overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '95px'}]}>
                                {row.name}
                            </TableCell>
                            <TableCell sx={classes.tableBodyCell}>{getCategoryTotal(row)}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>100</TableCell>
                            <TableCell sx={[classes.tableBodyCell, {
                                background: getCategoryTotal(row)>0?
                                    `linear-gradient(to right, ${opaqueTableColor} ${(getCategoryTotal(row)/100)*100}%, ${lightGreyBackground} ${(getCategoryTotal(row)/100)*100}%)`:
                                    lightGreyBackground,
                            }]}>
                                {Math.ceil((getCategoryTotal(row)/100)*100)}%
                            </TableCell>
                            <TableCell sx={classes.tableBodyCell}>{100 - getCategoryTotal(row) >= 0? 100 - getCategoryTotal(row) : '---'}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>{getCategoryTotal(row) - 100 > 0? getCategoryTotal(row) - 100 : '---'}</TableCell>
                        </TableRow>))) : <></>
                    }
                    <TableRow>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell, {textAlign: 'left'}]}>Total</TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell]}>{dummyTrackedTotal}</TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell]}>{dummyBudgetTotal}</TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell, {
                            background: dummyTrackedTotal>0?
                                `linear-gradient(to right, ${tableColor} ${(dummyTrackedTotal/dummyBudgetTotal)*100}%, ${greyBackground} ${(dummyTrackedTotal/dummyBudgetTotal)*100}%)`:
                                lightGreyBackground,
                        }]}>
                            {Math.ceil((dummyTrackedTotal/dummyBudgetTotal)*100)}%
                        </TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell]}>{dummyBudgetTotal - dummyTrackedTotal >= 0? dummyBudgetTotal - dummyTrackedTotal : '---'}</TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell]}>{dummyTrackedTotal - dummyBudgetTotal >= 0? dummyTrackedTotal - dummyBudgetTotal : '---'}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    );
}

export default memo(BudgetBreakdownTable)