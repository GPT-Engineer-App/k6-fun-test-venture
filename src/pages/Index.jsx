import { useState, useEffect } from 'react';
import { Paw, Heart, Info, Search, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const DogBreeds = () => {
  const breeds = [
    { name: 'Labrador Retriever', description: 'Friendly, outgoing, and high-spirited companions.' },
    { name: 'German Shepherd', description: 'Intelligent, capable, and extremely loyal dogs.' },
    { name: 'Golden Retriever', description: 'Intelligent, friendly, and devoted companions.' },
    { name: 'French Bulldog', description: 'Adaptable, playful, and smart little dogs.' },
    { name: 'Bulldog', description: 'Kind, courageous, and friendly dogs.' },
    { name: 'Poodle', description: 'Highly intelligent, elegant, and energetic dogs.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.map((breed, index) => (
        <motion.div
          key={breed.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <img 
                src={`https://source.unsplash.com/400x300/?${breed.name.toLowerCase().replace(' ', '-')}`} 
                alt={breed.name} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
              <p className="text-sm text-gray-600">{breed.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const FunFacts = () => {
  const facts = [
    "Dogs have a sense of smell that's up to 100,000 times stronger than humans.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Greyhounds can run up to 45 miles per hour, making them the fastest dogs.",
    "The tallest dog ever recorded was a Great Dane named Zeus, who stood 44 inches tall.",
  ];

  return (
    <div className="space-y-4">
      {facts.map((fact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex items-center p-4">
              <Info className="h-6 w-6 mr-4 text-blue-500" />
              <p>{fact}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Balanced Diet", content: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
    { title: "Regular Exercise", content: "Ensure your dog gets regular exercise through walks, playtime, and activities." },
    { title: "Veterinary Check-ups", content: "Schedule regular check-ups with a veterinarian for vaccinations and health screenings." },
    { title: "Grooming", content: "Groom your dog regularly, including brushing their coat and teeth." },
    { title: "Mental Stimulation", content: "Offer mental stimulation through training, puzzles, and interactive toys." },
  ];

  return (
    <div className="space-y-4">
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tip.content}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "All About Dogs | Your Canine Companion Guide";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-center text-blue-800">All About Dogs</h1>
          <p className="text-xl text-center text-gray-600 mb-8">Your ultimate guide to canine companions</p>
        </motion.div>

        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search for dog information..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4" />}
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds"><Paw className="mr-2 h-4 w-4" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts"><Info className="mr-2 h-4 w-4" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care"><Heart className="mr-2 h-4 w-4" /> Care Tips</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="breeds">
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Dog Breeds</CardTitle>
                    <CardDescription>Explore some of the most beloved dog breeds.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DogBreeds />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="facts">
                <Card>
                  <CardHeader>
                    <CardTitle>Fun Dog Facts</CardTitle>
                    <CardDescription>Discover interesting facts about our canine companions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FunFacts />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="care">
                <Card>
                  <CardHeader>
                    <CardTitle>Dog Care Tips</CardTitle>
                    <CardDescription>Learn how to keep your furry friend happy and healthy.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CareTips />
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
