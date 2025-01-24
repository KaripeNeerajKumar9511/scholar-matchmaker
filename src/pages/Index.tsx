import { useState } from "react";
import { TutorRegistrationForm } from "@/components/TutorRegistrationForm";
import { StudentRegistrationForm } from "@/components/StudentRegistrationForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Index() {
  const [userType, setUserType] = useState<"tutor" | "student" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto py-12 px-4">
        {!userType ? (
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
                Who Are You Today?
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => setUserType("tutor")}
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                >
                  🎓 Tutor/Graduate
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => setUserType("student")}
                  className="w-full text-lg py-6 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300"
                >
                  👧 Student/Parent
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
              onClick={() => setUserType(null)}
              variant="ghost"
              className="mb-4 hover:bg-background/50"
            >
              ← Back to selection
            </Button>
            {userType === "tutor" ? <TutorRegistrationForm /> : <StudentRegistrationForm />}
          </motion.div>
        )}
      </div>
    </div>
  );
}