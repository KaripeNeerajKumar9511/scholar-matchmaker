import { Button } from "@/components/ui/button";
import { TutorCard } from "@/components/TutorCard";
import { TutorFilters } from "@/components/TutorFilters";

const tutors = [
  {
    name: "Dr. Priya Sharma",
    subjects: ["Mathematics", "Physics"],
    location: "Delhi",
    rating: 4.8,
    experience: "8 years experience",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Rahul Verma",
    subjects: ["Chemistry", "Biology"],
    location: "Mumbai",
    rating: 4.9,
    experience: "6 years experience",
    imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Anjali Desai",
    subjects: ["English", "Literature"],
    location: "Bangalore",
    rating: 4.7,
    experience: "5 years experience",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-20">
        <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/25"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
              GRADTUTOR
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in max-w-2xl mx-auto">
              Connect with qualified graduate tutors for personalized learning experiences
            </p>
            <div className="flex gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Find a Tutor
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                Become a Tutor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <TutorFilters />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.name} {...tutor} />
          ))}
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Choose GRADTUTOR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Tutors",
                description: "All our tutors go through a strict verification process",
                emoji: "🛡️"
              },
              {
                title: "Smart Matching",
                description: "AI-powered matching based on your learning style",
                emoji: "🎯"
              },
              {
                title: "Flexible Learning",
                description: "Schedule sessions that work best for you",
                emoji: "📚"
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;