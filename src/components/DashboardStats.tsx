import React from "react";
import { Project, Payment } from "../types/models";

interface Props {
  projects: Project[];
  payments: Payment[];
}

const DashboardStats: React.FC<Props> = ({ projects, payments }) => {
  const totalProjects = projects.length;
  const paidCount = projects.filter((p) => p.paymentStatus === "paid").length;
  const unpaidCount = totalProjects - paidCount;
  const totalPayments = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      <div className="bg-white p-4 rounded-lg shadow border">
        <p className="text-sm text-gray-500">Total Projects</p>
        <p className="text-2xl font-bold text-gray-800">{totalProjects}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow border">
        <p className="text-sm text-gray-500">Paid / Unpaid</p>
        <p className="text-2xl font-bold text-gray-800">
          {paidCount} / <span className="text-yellow-600">{unpaidCount}</span>
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow border">
        <p className="text-sm text-gray-500">Total Payments</p>
        <p className="text-2xl font-bold text-gray-800">${totalPayments.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DashboardStats;
