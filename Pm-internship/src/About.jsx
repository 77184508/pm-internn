import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">About PM Internship</h1>
        
        {/* Images Section */}
        <div className="flex justify-center gap-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
            alt="Students collaborating"
            className="rounded-xl shadow-md w-32 h-32 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
            alt="Engineer working"
            className="rounded-xl shadow-md w-32 h-32 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
            alt="Team discussion"
            className="rounded-xl shadow-md w-32 h-32 object-cover"
          />
        </div>

        <p className="text-lg text-gray-700 mb-4">
          In India, thousands of engineering students and graduates face significant challenges in finding meaningful internships and placements. Despite having technical knowledge, many struggle due to lack of industry connections, limited access to opportunities, and the gap between academic learning and practical skills required by employers.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The competition is intense, and often, deserving candidates miss out simply because they are unaware of available openings or do not have guidance on how to apply effectively. Rural and semi-urban students are especially affected, as most opportunities are concentrated in major cities and information does not always reach everyone equally.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          PM Internship aims to bridge this gap by providing a platform that connects students with relevant internships across the country. Our mission is to make the process transparent, accessible, and tailored to each individual's skills and interests. We believe every engineer deserves a fair chance to gain real-world experience and build a successful career.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you are a fresher looking for your first internship or a graduate seeking placement opportunities, PM Internship is here to support you at every step. Together, let's empower the youth of India and build a brighter future for our nation.
        </p>
        <div className="mt-8 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-semibold shadow">
            Empowering Engineers. Connecting Opportunities.
          </span>
        </div>
      </div>
    </div>
  );
}
export default About;