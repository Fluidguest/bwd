import {
  DashboardLayout,
  KPISection,
  TransactionsTable,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Here&apos;s an overview of your business.
          </p>
        </div>

        {/* KPI Cards */}
        <KPISection />

        {/* Transactions Table */}
        <TransactionsTable />
      </div>
    </DashboardLayout>
  );
}
