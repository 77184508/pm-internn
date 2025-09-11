import React, { useState } from 'react';
import { MapPin, BookOpen, Briefcase, Star, ArrowRight, User, GraduationCap, Target, Home, ChevronLeft } from 'lucide-react';
import './index.css'
import Navbar from "./Navbar";
import Login from "./Login"; 
const mockInternships = [
  {
    id: 1,
    title: "Digital Marketing Assistant",
    organization: "Ministry of MSME",
    sector: "Marketing",
    location: "Delhi",
    duration: "6 months",
    stipend: "₹15,000/month",
    skills: ["social media", "content creation", "digital marketing"],
    education: ["12th", "graduation", "diploma"],
    description: "Support digital marketing campaigns for MSME initiatives",
    matchScore: 0
  },
  {
    id: 2,
    title: "Data Entry Operator",
    organization: "Department of Agriculture",
    sector: "Technology",
    location: "Mumbai",
    duration: "4 months",
    stipend: "₹12,000/month",
    skills: ["computer skills", "data entry", "ms office"],
    education: ["12th", "graduation"],
    description: "Maintain agricultural databases and records",
    matchScore: 0
  },
  {
    id: 3,
    title: "Community Health Worker",
    organization: "Ministry of Health",
    sector: "Healthcare",
    location: "Bangalore",
    duration: "8 months",
    stipend: "₹18,000/month",
    skills: ["communication", "healthcare", "community outreach"],
    education: ["12th", "graduation", "nursing"],
    description: "Support community health programs in rural areas",
    matchScore: 0
  },
  {
    id: 4,
    title: "Financial Literacy Trainer",
    organization: "Department of Financial Services",
    sector: "Finance",
    location: "Chennai",
    duration: "6 months",
    stipend: "₹16,000/month",
    skills: ["teaching", "communication", "basic finance"],
    education: ["graduation", "commerce", "mba"],
    description: "Conduct financial literacy programs in rural areas",
    matchScore: 0
  },
  {
    id: 5,
    title: "Agricultural Extension Worker",
    organization: "Ministry of Agriculture",
    sector: "Agriculture",
    location: "Pune",
    duration: "10 months",
    stipend: "₹14,000/month",
    skills: ["agriculture", "farming techniques", "communication"],
    education: ["12th", "agriculture", "diploma"],
    description: "Help farmers adopt modern agricultural practices",
    matchScore: 0
  },
  {
    id: 6,
    title: "Content Creator",
    organization: "Ministry of Information & Broadcasting",
    sector: "Media",
    location: "Kolkata",
    duration: "5 months",
    stipend: "₹13,000/month",
    skills: ["writing", "content creation", "social media"],
    education: ["graduation", "journalism", "mass communication"],
    description: "Create content for government communication campaigns",
    matchScore: 0
  },
  {
    id: 7,
    title: "IT Support Assistant",
    organization: "Ministry of Electronics & IT",
    sector: "Technology",
    location: "Hyderabad",
    duration: "6 months",
    stipend: "₹17,000/month",
    skills: ["computer skills", "troubleshooting", "technical support"],
    education: ["12th", "graduation", "iti", "diploma"],
    description: "Provide technical support for government digital initiatives",
    matchScore: 0
  },
  {
    id: 8,
    title: "Rural Development Coordinator",
    organization: "Ministry of Rural Development",
    sector: "Social Work",
    location: "Jaipur",
    duration: "12 months",
    stipend: "₹20,000/month",
    skills: ["project management", "community work", "communication"],
    education: ["graduation", "social work", "rural studies"],
    description: "Coordinate rural development projects and community programs",
    matchScore: 0
  }
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
   const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const [profile, setProfile] = useState({
    education: '',
    skills: [],
    interests: [],
    location: '',
    experience: ''
  });
  const handleLogin = (email) => {
    setUserEmail(email);
    setLoggedIn(true);  // now show internship app
  };
  const [recommendations, setRecommendations] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const educationOptions = [
    { value: '10th', label: '10th Pass', icon: '📚' },
    { value: '12th', label: '12th Pass', icon: '🎓' },
    { value: 'diploma', label: 'Diploma', icon: '📜' },
    { value: 'graduation', label: 'Graduate', icon: '🎓' },
    { value: 'postgraduation', label: 'Post Graduate', icon: '👨‍🎓' },
    { value: 'iti', label: 'ITI', icon: '🔧' }
  ];

  const skillOptions = [
    { value: 'computer skills', label: 'Computer Skills', icon: '💻' },
    { value: 'communication', label: 'Communication', icon: '💬' },
    { value: 'teaching', label: 'Teaching', icon: '👨‍🏫' },
    { value: 'data entry', label: 'Data Entry', icon: '⌨️' },
    { value: 'social media', label: 'Social Media', icon: '📱' },
    { value: 'agriculture', label: 'Agriculture', icon: '🌾' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'writing', label: 'Writing', icon: '✏️' },
    { value: 'project management', label: 'Project Management', icon: '📊' },
    { value: 'technical support', label: 'Technical Support', icon: '🔧' }
  ];

  const interestOptions = [
    { value: 'technology', label: 'Technology', icon: '💻' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'education', label: 'Education', icon: '📚' },
    { value: 'agriculture', label: 'Agriculture', icon: '🌾' },
    { value: 'finance', label: 'Finance', icon: '💰' },
    { value: 'marketing', label: 'Marketing', icon: '📈' },
    { value: 'social work', label: 'Social Work', icon: '🤝' },
    { value: 'media', label: 'Media', icon: '📺' }
  ];

  const locationOptions = [
    { value: 'delhi', label: 'Delhi', icon: '🏛️' },
    { value: 'mumbai', label: 'Mumbai', icon: '🌆' },
    { value: 'bangalore', label: 'Bangalore', icon: '🏢' },
    { value: 'chennai', label: 'Chennai', icon: '🏖️' },
    { value: 'kolkata', label: 'Kolkata', icon: '🌉' },
    { value: 'hyderabad', label: 'Hyderabad', icon: '💎' },
    { value: 'pune', label: 'Pune', icon: '🎓' },
    { value: 'jaipur', label: 'Jaipur', icon: '🏰' },
    { value: 'anywhere', label: 'Anywhere in India', icon: '🇮🇳' }
  ];

  const experienceOptions = [
    { value: 'fresher', label: 'No Experience (Fresher)', icon: '🌱' },
    { value: 'some', label: 'Some Experience', icon: '📈' },
    { value: 'experienced', label: 'Experienced', icon: '⭐' }
  ];

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }
  const calculateMatchScore = (internship, candidateProfile) => {
    let score = 0;
    
    // Education match (30%)
    if (internship.education.includes(candidateProfile.education)) {
      score += 30;
    }
    
    // Skills match (40%)
    const skillMatches = candidateProfile.skills.filter(skill => 
      internship.skills.some(reqSkill => 
        reqSkill.toLowerCase().includes(skill.toLowerCase()) || 
        skill.toLowerCase().includes(reqSkill.toLowerCase())
      )
    );
    score += (skillMatches.length / candidateProfile.skills.length) * 40;
    
    // Interest match (20%)
    const sectorMatch = candidateProfile.interests.some(interest => 
      internship.sector.toLowerCase().includes(interest.toLowerCase()) ||
      internship.title.toLowerCase().includes(interest.toLowerCase())
    );
    if (sectorMatch) score += 20;
    
    // Location preference (10%)
    if (candidateProfile.location === 'anywhere' || 
        internship.location.toLowerCase().includes(candidateProfile.location.toLowerCase())) {
      score += 10;
    }
    
    return Math.min(score, 100);
  };

  const generateRecommendations = () => {
    const scoredInternships = mockInternships.map(internship => ({
      ...internship,
      matchScore: calculateMatchScore(internship, profile)
    }));
    
    const topRecommendations = scoredInternships
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5);
    
    setRecommendations(topRecommendations);
    setShowRecommendations(true);
  };

  const handleSkillToggle = (skill) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setProfile({
      education: '',
      skills: [],
      interests: [],
      location: '',
      experience: ''
    });
    setShowRecommendations(false);
    setRecommendations([]);
  };

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-8 shadow-inner">
      <div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm relative overflow-hidden"
        style={{ width: `${((currentStep + 1) / 5) * 100}%` }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Education</h2>
              <p className="text-gray-600 text-lg">What is your highest education level?</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {educationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setProfile(prev => ({ ...prev, education: option.value }))}
                  className={`p-5 rounded-xl border-2 flex items-center space-x-4 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg ${
                    profile.education === option.value
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="text-3xl p-2 bg-white rounded-lg shadow-sm">{option.icon}</div>
                  <span className="font-semibold text-lg">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Skills</h2>
              <p className="text-gray-600 text-lg">Select all skills you have (choose multiple)</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {skillOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSkillToggle(option.value)}
                  className={`p-5 rounded-xl border-2 flex items-center space-x-4 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg ${
                    profile.skills.includes(option.value)
                      ? 'border-green-500 bg-gradient-to-r from-green-50 to-teal-50 text-green-700 shadow-md'
                      : 'border-gray-200 hover:border-green-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="text-3xl p-2 bg-white rounded-lg shadow-sm">{option.icon}</div>
                  <span className="font-semibold text-lg flex-1 text-left">{option.label}</span>
                  {profile.skills.includes(option.value) && (
                    <div className="p-1 bg-green-500 rounded-full">
                      <Star className="h-4 w-4 text-white" fill="currentColor" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                <Star className="h-4 w-4" fill="currentColor" />
                <span>Selected: {profile.skills.length} skills</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Interests</h2>
              <p className="text-gray-600 text-lg">What sectors interest you most?</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {interestOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleInterestToggle(option.value)}
                  className={`p-5 rounded-xl border-2 flex items-center space-x-4 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg ${
                    profile.interests.includes(option.value)
                      ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 shadow-md'
                      : 'border-gray-200 hover:border-purple-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="text-3xl p-2 bg-white rounded-lg shadow-sm">{option.icon}</div>
                  <span className="font-semibold text-lg flex-1 text-left">{option.label}</span>
                  {profile.interests.includes(option.value) && (
                    <div className="p-1 bg-purple-500 rounded-full">
                      <Star className="h-4 w-4 text-white" fill="currentColor" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                <Briefcase className="h-4 w-4" />
                <span>Selected: {profile.interests.length} interests</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Preferred Location</h2>
              <p className="text-gray-600 text-lg">Where would you like to work?</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {locationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setProfile(prev => ({ ...prev, location: option.value }))}
                  className={`p-5 rounded-xl border-2 flex items-center space-x-4 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg ${
                    profile.location === option.value
                      ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 shadow-md'
                      : 'border-gray-200 hover:border-orange-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="text-3xl p-2 bg-white rounded-lg shadow-sm">{option.icon}</div>
                  <span className="font-semibold text-lg">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Experience</h2>
              <p className="text-gray-600 text-lg">What is your work experience level?</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {experienceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setProfile(prev => ({ ...prev, experience: option.value }))}
                  className={`p-5 rounded-xl border-2 flex items-center space-x-4 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg ${
                    profile.experience === option.value
                      ? 'border-teal-500 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 shadow-md'
                      : 'border-gray-200 hover:border-teal-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="text-3xl p-2 bg-white rounded-lg shadow-sm">{option.icon}</div>
                  <span className="font-semibold text-lg">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return profile.education !== '';
      case 1: return profile.skills.length > 0;
      case 2: return profile.interests.length > 0;
      case 3: return profile.location !== '';
      case 4: return profile.experience !== '';
      default: return false;
    }
  };

  if (showRecommendations) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 mb-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="flex items-center space-x-3 mb-6">
              <button
                onClick={resetForm}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-all duration-200 font-medium"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Back to Form</span>
              </button>
            </div>
            
            <div className="text-center mb-10 relative z-10">
              <div className="mx-auto w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform hover:scale-105 transition-transform duration-200">
                <Star className="h-12 w-12 text-white" fill="currentColor" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">Your Recommendations</h1>
              <p className="text-gray-600 text-xl">Here are the top internships matched to your profile</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {recommendations.map((internship) => (
                <div key={internship.id} className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 border border-blue-100/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden">
                  {/* Card decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-10 translate-x-10"></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{internship.title}</h3>
                      <p className="text-blue-600 font-semibold text-lg">{internship.organization}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {internship.matchScore}% Match
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <MapPin className="h-4 w-4 text-orange-600" />
                      </div>
                      <span className="font-medium">{internship.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Briefcase className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium">{internship.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-green-700 font-semibold">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <span className="text-green-600">💰</span>
                      </div>
                      <span className="text-lg">{internship.stipend}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-5 leading-relaxed">{internship.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {internship.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium border border-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    <span className="text-lg">Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center relative z-10">
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-8 py-3 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Find More Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-8 px-4">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                <User className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PM Internship</h1>
            </div>
            <p className="text-gray-600 text-lg font-medium">Find the perfect internship for you in just a few steps</p>
          </div>

          {/* Progress Bar */}
          {renderProgressBar()}

          {/* Step Content */}
          <div className="mb-8">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center relative z-10">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-8 py-3 rounded-xl flex items-center space-x-2 transition-all duration-200 font-medium ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md transform hover:scale-105'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-xl flex items-center space-x-2 transition-all duration-200 font-medium ${
                canProceed()
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>{currentStep === 4 ? 'Get Recommendations' : 'Next'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Step indicator */}
          <div className="flex justify-center space-x-3 mt-8 relative z-10">
            {[0, 1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  step <= currentStep 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg transform scale-110' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;