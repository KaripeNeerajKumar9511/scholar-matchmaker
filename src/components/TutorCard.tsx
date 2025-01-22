import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, MapPin, Star } from "lucide-react";

interface TutorCardProps {
  name: string;
  subjects: string[];
  location: string;
  rating: number;
  experience: string;
  imageUrl: string;
}

export const TutorCard = ({ name, subjects, location, rating, experience, imageUrl }: TutorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg animate-fade-in bg-white dark:bg-gray-800 border-0 shadow-md">
      <CardHeader className="relative p-0">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className="bg-accent text-white">
            <Star className="w-4 h-4 mr-1" />
            {rating}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 dark:text-white">{name}</CardTitle>
        <CardDescription className="mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
            <BookOpen className="w-4 h-4 mr-2" />
            {experience}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {subjects.map((subject) => (
            <Badge key={subject} variant="secondary" className="bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-foreground">
              {subject}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90">
          Contact Tutor
        </Button>
      </CardContent>
    </Card>
  );
};