import {memo} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {FinancialTransaction} from "../../types/commonTypes.tsx";
import {mainAppBarBackground} from "../../constants/colours.ts";


const classes = {
    tableContainer:{
        maxWidth: '90%',
    },
    tableHeaderCell:{
        fontWeight: 'bold',
        color: '#FFF',
        whiteSpace: 'nowrap',
        padding: '2px 10px',
        position: 'sticky',
        top: 0,
        zIndex: 1, // Ensures the header is above other content when scrolling
        backgroundColor: 'inherit', // Keeps the header's background consistent
        fontSize: '1em',
    },
    tableBodyCell:{
        color: '#000',
        whiteSpace: 'nowrap',
        padding: '3px 10px',
        border: 'none',
        fontSize: '0.8em',
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
    transactionData: FinancialTransaction[] | null;
};

const TransactionTable : React.FC<Props> = (props:Props) => {
    const {  transactionData } = props;

    return (
        <TableContainer component={Paper} sx={classes.tableContainer}>
            <Table sx={{ minWidth: 5, borderCollapse: 'separate', }}>
                <TableHead>
                    <TableRow sx={{backgroundColor: mainAppBarBackground}}>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Date</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Type</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Category</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Amount</TableCell>
                        <TableCell sx={[{width: '25%'}, classes.tableHeaderCell]}>Details</TableCell>
                        <TableCell sx={[{width: '15%'}, classes.tableHeaderCell]}>Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionData? ( transactionData.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={[classes.tableBodyCell, {textAlign: 'left',  overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '95px'}]}>
                                {row.date}
                            </TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.category.transactionType}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.category.name}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.amount}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.description}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>---</TableCell>
                        </TableRow>)))
                        : <></>
                    }
                </TableBody>
            </Table>
        </TableContainer>

    );
}

export default memo(TransactionTable)