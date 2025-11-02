import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProjectList: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    return <p className="text-red-500">Error: AppContext not found</p>;
  }

  const { state, dispatch } = context;
  const { clients, projects } = state;

  const markAsPaid = (projectId: string, amount: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project || project.paymentStatus === "paid") return;

    dispatch({ type: "MARK_PROJECT_PAID", payload: { projectId } });
    dispatch({
      type: "ADD_PAYMENT",
      payload: { projectId, amount, date: new Date().toISOString() },
    });
  };

  return (
    <div className="space-y-4">
      {projects.map((project) => {
        const client = clients.find((c) => c.id === project.clientId);

        return (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-between border"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-500">
                Client: {client ? client.name : <span className="italic">Client not found</span>}
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="capitalize">{project.status}</span>
              </p>
              <p className="text-sm text-gray-500">
                Payment:{" "}
                <span
                  className={
                    project.paymentStatus === "paid" ? "text-green-600" : "text-yellow-600"
                  }
                >
                  {project.paymentStatus}
                </span>
              </p>
              <p className="text-sm text-gray-500">Budget: ${project.budget.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-2">
              {project.paymentStatus === "unpaid" ? (
                <button
                  onClick={() => markAsPaid(project.id, project.budget)}
                  className="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Mark as Paid
                </button>
              ) : (
                <span className="px-3 py-1.5 bg-gray-200 text-gray-600 rounded-md cursor-not-allowed">
                  Paid
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
