import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          ZK Voting
        </Link>
        <div>
          <Link to="/" className="text-white mr-4">
            Home
          </Link>
          <Link
            to="/launch"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
