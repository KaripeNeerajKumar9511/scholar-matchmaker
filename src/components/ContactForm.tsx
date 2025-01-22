import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactForm = ({ tutorName, onClose }: { tutorName: string; onClose: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    toast({
      title: "Message Sent!",
      description: `Your message has been sent to ${tutorName}. They will contact you soon.`,
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-gray-50 dark:bg-gray-700"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-50 dark:bg-gray-700"
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Your Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-gray-50 dark:bg-gray-700"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-gray-50 dark:bg-gray-700"
        />
      </div>
      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
};