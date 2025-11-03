import React, { useContext,useState} from "react";
import { AppContext } from "../context/AppContext";
import ClientCard from "./ClientCard";
import ProjectList from "./ProjectList";
import DashboardStats from "./DashboardStats";

const Dashboard: React.FC = () => {
  const context = useContext(AppContext);
  const [filter,setFilter]=useState<"all"| "paid" |"unpaid">("all");

  if (!context) {
    return <p className="text-red-500 text-center mt-10">Error: AppContext not found</p>;
  }

  const { state } = context;
  const { clients, projects, payments } = state;

  const filteredProjects=state.projects.filter((project)=>{
    if(filter==="all") return true;
    return project.paymentStatus===filter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Freelance Management Dashboard
        </h1>
        <p className="text-gray-500">
          Manage clients, projects, and payments efficiently
        </p>
      </header>

      {/* Dashboard Stats */}
      <DashboardStats projects={projects} payments={payments} />

      {/* Clients Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </section>

     
      {/* Projects Section */}
      <section className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">Projects</h2>

          {/* ✅ Dropdown filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as "all" | "paid" | "unpaid")}
            className="border rounded-md p-2"
          >
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
        </div>

        {/* ✅ Pass filtered projects */}
        <ProjectList projects={filteredProjects} />
      </section>
    </div>
  );
};

export default Dashboard;
