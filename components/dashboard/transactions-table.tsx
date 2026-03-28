"use client";

import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  status: "completed" | "pending" | "failed";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    description: "Client Payment - Acme Corp",
    category: "Revenue",
    date: "Mar 28, 2026",
    amount: 12500,
    type: "income",
    status: "completed",
  },
  {
    id: "2",
    description: "Software License - Adobe",
    category: "Software",
    date: "Mar 27, 2026",
    amount: 599,
    type: "expense",
    status: "completed",
  },
  {
    id: "3",
    description: "Consulting Fee - Tech Solutions",
    category: "Revenue",
    date: "Mar 26, 2026",
    amount: 8750,
    type: "income",
    status: "pending",
  },
  {
    id: "4",
    description: "Office Supplies",
    category: "Operations",
    date: "Mar 25, 2026",
    amount: 234,
    type: "expense",
    status: "completed",
  },
  {
    id: "5",
    description: "Monthly Subscription - AWS",
    category: "Infrastructure",
    date: "Mar 24, 2026",
    amount: 1850,
    type: "expense",
    status: "completed",
  },
  {
    id: "6",
    description: "Project Milestone - Beta Inc",
    category: "Revenue",
    date: "Mar 23, 2026",
    amount: 25000,
    type: "income",
    status: "completed",
  },
];

const statusStyles = {
  completed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  failed: "bg-destructive/10 text-destructive",
};

export function TransactionsTable() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Your latest financial activities</p>
        </div>
        <button className="text-sm font-medium text-primary hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-muted/50 transition-colors duration-150"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        transaction.type === "income"
                          ? "bg-success/10"
                          : "bg-destructive/10"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpRight className="h-4 w-4 text-success" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-card-foreground">
                      {transaction.description}
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="text-sm text-muted-foreground">
                    {transaction.category}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="text-sm text-muted-foreground">
                    {transaction.date}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`text-sm font-medium ${
                      transaction.type === "income"
                        ? "text-success"
                        : "text-card-foreground"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                      statusStyles[transaction.status]
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right">
                  <button className="rounded p-1 hover:bg-accent transition-colors duration-150">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
