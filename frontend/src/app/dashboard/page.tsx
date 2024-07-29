import Sidebar from "@/components/dashboard/sidebar";
import Workspace from "@/components/dashboard/workspace";

export default function Dashboard() {
    return (
        <main className="bg-gray-200 min-h-screen grid grid-cols-5">
            <Sidebar />
            <Workspace />
        </main >
    );
}