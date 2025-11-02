import React from "react";
import { Client } from "../types/models";

interface Props {
  client: Client;
}

const ClientCard: React.FC<Props> = ({ client }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
      <p className="text-sm text-gray-500">{client.country}</p>
      <p className="mt-2 text-sm text-gray-600">
        {client.email ? (
          <a href={`mailto:${client.email}`} className="underline hover:text-blue-600">
            {client.email}
          </a>
        ) : (
          <span className="italic text-gray-400">Email not provided</span>
        )}
      </p>
    </div>
  );
};

export default ClientCard;
