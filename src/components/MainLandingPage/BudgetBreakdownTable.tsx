import {memo} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const dummyData = [
    {
        category: 'Rent',
        tracked: 600,
        budget: 600,
    },
    {
        category: 'Fun & Activities',
        tracked: 124,
        budget: 200,
    },
    {
        category: 'Groceries',
        tracked: 200,
        budget: 180,
    },
    {
        category: 'Car & Fuel',
        tracked: 88,
        budget: 70,
    },
    {
        category: 'Golf & Tennis',
        tracked: 0,
        budget: 40,
    },
]
const dummyBudgetTotal = 1090;
const dummyTrackedTotal = 1012;


const classes = {
    tableContainer:{
        maxWidth: '100%',
    },
    tableHeaderCell:{
        fontWeight: 'bold',
        fontSize: '0.8em',
        color: '#FFF',
        whiteSpace: 'nowrap',
        padding: '5px 10px',
    },
    tableBodyCell:{
        fontSize: '0.8em',
        color: '#000',
        whiteSpace: 'nowrap',
        padding: '5px 10px',
        border: 'none',
        textAlign: 'center',
    },
    tableTotalCell:{
        fontWeight: 'bold',
        borderTop: '2px solid #000'
    },
};

type Props = {
    tableType: string;
};

const BudgetBreakdownTable : React.FC<Props> = (props:Props) => {
    const { tableType } = props;

    const tableColor = tableType === 'Income'? '#42d305': tableType == 'Expenses'? '#f11073' : '#24a2ff';
    const opaqueTableColor = tableType === 'Income'? 'rgba(66,211,5,0.4)': tableType == 'Expenses'? 'rgba(241,16,115,0.4)' : 'rgba(36,162,255,0.4)';
    const lightGreyBackground = 'rgba(166,166,166,0.4)';
    return (
        <TableContainer component={Paper} sx={classes.tableContainer}>
            <Table sx={{ minWidth: 5 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: tableColor}}>
                        <TableCell sx={[{width: '50%', color:'#FFF'}, classes.tableHeaderCell]}>{tableType}</TableCell>
                        <TableCell sx={[{width: '10%'}, classes.tableHeaderCell]}>Tracked</TableCell>
                        <TableCell sx={[{width: '10%'}, classes.tableHeaderCell]}>Budget</TableCell>
                        <TableCell sx={[{width: '10%'}, classes.tableHeaderCell]}>% Complete</TableCell>
                        <TableCell sx={[{width: '10%'}, classes.tableHeaderCell]}>Remaining</TableCell>
                        <TableCell sx={[{width: '10%'}, classes.tableHeaderCell]}>Excess</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dummyData.map((row) => (
                        <TableRow
                            key={row.category}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={[classes.tableBodyCell, {textAlign: 'left'}]}>
                                {row.category}
                            </TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.tracked}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.budget}</TableCell>
                            <TableCell sx={[classes.tableBodyCell, {
                                background: row.tracked>0?
                                    `linear-gradient(to right, ${opaqueTableColor} ${(row.tracked/row.budget)*100}%, ${lightGreyBackground} ${(row.tracked/row.budget)*100}%)`:
                                    lightGreyBackground,
                            }]}>
                                {Math.ceil((row.tracked/row.budget)*100)}%
                            </TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.budget - row.tracked >= 0? row.budget - row.tracked : '---'}</TableCell>
                            <TableCell sx={classes.tableBodyCell}>{row.tracked - row.budget > 0? row.tracked - row.budget : '---'}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell, {textAlign: 'left'}]}>Total</TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell]}>{dummyTrackedTotal}</TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell]}>{dummyBudgetTotal}</TableCell>
                        <TableCell sx={[classes.tableBodyCell, classes.tableTotalCell, {
                            background: dummyTrackedTotal>0?
                                `linear-gradient(to right, ${opaqueTableColor} ${(dummyTrackedTotal/dummyBudgetTotal)*100}%, ${lightGreyBackground} ${(dummyTrackedTotal/dummyBudgetTotal)*100}%)`:
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