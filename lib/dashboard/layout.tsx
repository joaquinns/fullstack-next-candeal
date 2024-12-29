import { SidebarDashboard } from "../../app/ui/SidebarDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarDashboard />
      <main className="flex-1 overflow-y-auto p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
