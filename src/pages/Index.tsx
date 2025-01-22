import { useState } from "react";
import { TutorRegistrationForm } from "@/components/TutorRegistrationForm";
import { StudentRegistrationForm } from "@/components/StudentRegistrationForm";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [userType, setUserType] = useState<"tutor" | "student" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10">
      <div className="container mx-auto py-8">
        {!userType ? (
          <div className="max-w-md mx-auto space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter">Welcome to GradTutor</h1>
              <p className="text-muted-foreground">Connect with the perfect tutor or student</p>
            </div>
            <div className="space-y-4">
              <Button
                onClick={() => setUserType("tutor")}
                className="w-full text-lg py-6"
                variant="default"
              >
                Register as a Tutor
              </Button>
              <Button
                onClick={() => setUserType("student")}
                className="w-full text-lg py-6"
                variant="secondary"
              >
                Register as a Student
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Button
              onClick={() => setUserType(null)}
              variant="ghost"
              className="mb-4"
            >
              ← Back to selection
            </Button>
            {userType === "tutor" ? <TutorRegistrationForm /> : <StudentRegistrationForm />}
          </div>
        )}
      </div>
    </div>
  );
}