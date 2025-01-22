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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Perfect Tutor
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Connect with qualified tutors for personalized learning
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 animate-fade-in">
            Get Started
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <TutorFilters />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.name} {...tutor} />
          ))}
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Tutors",
                description: "All our tutors go through a strict verification process",
              },
              {
                title: "Personalized Matching",
                description: "Find tutors that match your learning style and needs",
              },
              {
                title: "Flexible Schedule",
                description: "Book sessions at times that work best for you",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;