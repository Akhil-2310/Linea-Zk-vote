import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

function LaunchApp({ hasIdentity, setHasIdentity }) {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  const createIdentity = () => {
    setHasIdentity(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the group data to your backend
    console.log("Group created:", { groupName, groupDescription });
    // Reset form fields
    setGroupName("");
    setGroupDescription("");
    // Show a success message
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    // Navigate to the AllGroups page
    navigate("/groups");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Launch ZK Voting App
      </h1>

      {!hasIdentity ? (
        <div className="text-center">
          <p className="mb-4">
            To get started, you need to create your secure identity.
          </p>
          <button
            onClick={createIdentity}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Identity
          </button>
        </div>
      ) : (
        <section className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Create a New Voting Group</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="groupName" className="block mb-1 font-medium">
                Group Name
              </label>
              <input
                type="text"
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="groupDescription"
                className="block mb-1 font-medium"
              >
                Group Description
              </label>
              <textarea
                id="groupDescription"
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Create Group
            </button>
          </form>
        </section>
      )}

      {showToast && (
        <Toast
          message={
            hasIdentity
              ? "Group created successfully!"
              : "Identity created successfully!"
          }
        />
      )}
    </div>
  );
}

export default LaunchApp;
