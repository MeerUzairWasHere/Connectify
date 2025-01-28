import { CircleCheck, QrCode, Zap } from "lucide-react";

const DashboardCardsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Active Workflows</p>
            <h3 className="text-2xl font-bold text-gray-800">24</h3>
          </div>
          <div className="p-3 bg-indigo-100 rounded-full">
            <Zap className="text-purple-600 h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Executions</p>
            <h3 className="text-2xl font-bold text-gray-800">1,234</h3>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <CircleCheck className="text-green-600 h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Connected Apps</p>
            <h3 className="text-2xl font-bold text-gray-800">8</h3>
          </div>
          <div className="p-3 bg-purple-100 rounded-full">
            <QrCode className="text-yellow-600 h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardCardsList;
