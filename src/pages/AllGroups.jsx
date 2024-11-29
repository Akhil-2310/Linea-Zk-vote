import { Link } from "react-router-dom";

function AllGroups() {
  // This would typically come from an API call
  const groups = [
    {
      id: 1,
      name: "Community Council",
      description: "Voting on local community issues",
    },
    {
      id: 2,
      name: "Tech Startup",
      description: "Decision making for our startup",
    },
    { id: 3, name: "University Senate", description: "Academic policy voting" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div key={group.id} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{group.name}</h2>
            <p className="mb-4">{group.description}</p>
            <Link
              to={`/group/${group.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Join Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGroups;
