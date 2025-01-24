import { useState } from "react";
import { TutorRegistrationForm } from "@/components/TutorRegistrationForm";
import { StudentRegistrationForm } from "@/components/StudentRegistrationForm";
import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type ViewType = "selection" | "login" | "register";

export default function Index() {
  const [userType, setUserType] = useState<"tutor" | "student" | null>(null);
  const [view, setView] = useState<ViewType>("selection");

  const handleBackClick = () => {
    if (view === "register" || view === "login") {
      setView("selection");
      setUserType(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto py-12 px-4">
        {view === "selection" ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                GRADTUTOR
              </h1>
              <p className="text-xl text-muted-foreground">
                Welcome to Your Learning Journey
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => {
                    setUserType("tutor");
                    setView("register");
                  }}
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                >
                  🎓 Register as Tutor/Graduate
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => {
                    setUserType("student");
                    setView("register");
                  }}
                  className="w-full text-lg py-6 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300"
                >
                  👧 Register as Student/Parent
                </Button>
              </motion.div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => setView("login")}
                  variant="outline"
                  className="w-full text-lg py-6"
                >
                  🔑 Sign In to Your Account
                </Button>
              </motion.div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Join our community of learners and educators
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleBackClick}
              variant="ghost"
              className="mb-4 hover:bg-background/50"
            >
              ← Back to selection
            </Button>
            {view === "login" ? (
              <LoginForm />
            ) : (
              userType === "tutor" ? <TutorRegistrationForm /> : <StudentRegistrationForm />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}