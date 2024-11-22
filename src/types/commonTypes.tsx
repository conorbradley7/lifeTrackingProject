export type navigationMenuItem = {
    id: string;
    route: string;
    title: string;
    icon?: string;
};
export enum TransactionType{
    Income = "Income",
    Expense = "Expense",
    Savings = "Savings",
}

export type FinancialCategory = {
    id: number;
    name: string;
    transactionType: TransactionType;
}

export type FinancialTransaction = {
    id: number,
    category: FinancialCategory;
    description: string,
    date: string,
    amount: number,
}