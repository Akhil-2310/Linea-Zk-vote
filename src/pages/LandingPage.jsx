import { Link } from "react-router-dom";

function LandingPage() {
  const benefits = [
    {
      title: "Enhanced Privacy",
      description:
        "Zero-knowledge proofs ensure your vote remains confidential, protecting your personal information and voting choices.",
    },
    {
      title: "Tamper-Proof Results",
      description:
        "Cryptographic techniques guarantee the integrity of the voting process, making it virtually impossible to alter or manipulate votes.",
    },
    {
      title: "Increased Accessibility",
      description:
        "Participate in secure voting from anywhere, increasing engagement and representation in decision-making processes.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Secure and Private Voting with Zero Knowledge
        </h1>
        <p className="text-xl mb-8">
          Experience the future of digital democracy with our cutting-edge
          zero-knowledge voting application.
        </p>
        <Link
          to="/launch"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              {benefit.title}
            </h2>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LandingPage;
