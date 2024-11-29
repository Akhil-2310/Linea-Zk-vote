import { useParams } from "react-router-dom";

function GroupDetails() {
  const { id } = useParams();

  // This would typically come from an API call based on the id
  const group = {
    id: id,
    name: "Sample Group",
    description: "This is a sample group description.",
    members: 50,
    activePolls: 3,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{group.name}</h1>
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-4">{group.description}</p>
        <div className="mb-4">
          <strong>Members:</strong> {group.members}
        </div>
        <div className="mb-4">
          <strong>Active Polls:</strong> {group.activePolls}
        </div>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Join Group
        </button>
      </div>
    </div>
  );
}

export default GroupDetails;
