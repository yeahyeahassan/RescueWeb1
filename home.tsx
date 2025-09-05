import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import ThreeScene from "@/components/ThreeScene";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Rocket, 
  Trophy, 
  Globe, 
  Users, 
  FlaskConical, 
  Code, 
  Palette, 
  Cog, 
  Mail, 
  Phone, 
  Share2,
  NotebookPen,
  ChevronDown,
  Handshake,
  InfoIcon,
  Microchip,
  PaintbrushVertical,
  Box
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient cosmic-bg">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Mars landscape background" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <div className="inline-flex items-center bg-primary/20 border border-primary/40 rounded-full px-6 py-2 mb-8">
              <Trophy className="text-primary mr-3 h-5 w-5" />
              <span className="text-primary font-semibold">🏆 1st in Asia • 6th Worldwide • 100/100 Science Award</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold mb-6 leading-tight">
              <span className="text-foreground">UIU RESCUE</span><br />
              <span className="text-primary">ROVER TEAM</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Pioneering the future of space exploration through cutting-edge robotics, 
              representing Bangladesh on the global stage of Mars rover competitions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:scale-105 hover-glow transition-all duration-300 text-lg font-semibold px-8 py-4"
                data-testid="button-join-mission"
              >
                <Rocket className="mr-3 h-5 w-5" />
                Join Our Mission
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg font-semibold px-8 py-4"
                data-testid="button-become-sponsor"
              >
                <Handshake className="mr-3 h-5 w-5" />
                Become a Sponsor
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer" data-testid="card-asia-champion">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-space font-bold text-primary mb-2">1st</div>
                  <div className="text-muted-foreground">Asia Champion</div>
                </CardContent>
              </Card>
              <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer" data-testid="card-global-ranking">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-space font-bold text-primary mb-2">6th</div>
                  <div className="text-muted-foreground">Global Ranking</div>
                </CardContent>
              </Card>
              <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer" data-testid="card-science-award">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-space font-bold text-primary mb-2">100/100</div>
                  <div className="text-muted-foreground">Science Award</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('projects')}>
          <ChevronDown className="text-primary h-8 w-8" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Our <span className="text-primary">Projects</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to Mars simulation - explore our generations of rovers and UAVs designed to conquer the Red Planet.
            </p>
          </div>
          
          {/* Rover Generations */}
          <div className="mb-20">
            <h3 className="text-3xl font-space font-bold text-center mb-12">Rover <span className="text-primary">Generations</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "MAVEN",
                  description: "First generation rover focusing on basic navigation and mobility systems.",
                  tags: ["Navigation", "Mobility"],
                  image: "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "TELOS", 
                  description: "Enhanced with advanced sensor integration and autonomous capabilities.",
                  tags: ["Sensors", "Autonomy"],
                  image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "YGGDRASIL",
                  description: "Competition-ready rover with scientific analysis and equipment servicing.",
                  tags: ["Science", "Servicing"],
                  image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "AXIOS",
                  description: "Latest generation with AI-powered decision making and full autonomy.",
                  tags: ["AI", "Full Auto"],
                  image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((rover, index) => (
                <Card key={index} className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group" data-testid={`card-rover-${rover.name.toLowerCase()}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={rover.image} 
                      alt={`${rover.name} rover prototype`} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-space font-bold text-primary mb-3">{rover.name}</h4>
                    <p className="text-muted-foreground mb-4">{rover.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {rover.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* UAV Systems */}
          <div>
            <h3 className="text-3xl font-space font-bold text-center mb-12">UAV <span className="text-primary">Systems</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group" data-testid="card-uav-maarc">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="MAARC UAV system" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-8">
                  <h4 className="text-3xl font-space font-bold text-primary mb-4">MAARC</h4>
                  <p className="text-muted-foreground mb-6">Mars Aerial Reconnaissance Craft designed for high-altitude surveying and mapping of Martian terrain.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Mapping", "Reconnaissance", "High-Altitude"].map((tag, index) => (
                      <span key={index} className="bg-primary/20 text-primary px-4 py-2 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group" data-testid="card-uav-icarus">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="ICARUS UAV system" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-8">
                  <h4 className="text-3xl font-space font-bold text-primary mb-4">ICARUS</h4>
                  <p className="text-muted-foreground mb-6">Next-generation UAV with advanced flight control systems and extended operational capabilities.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Extended Flight", "Advanced Control", "Long Range"].map((tag, index) => (
                      <span key={index} className="bg-primary/20 text-primary px-4 py-2 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* 3D Model Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-space font-bold mb-8">Interactive <span className="text-primary">3D Models</span></h3>
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-12">
                <ThreeScene />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-background relative cosmic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Our <span className="text-primary">Achievements</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating our journey of excellence in international robotics competitions and space exploration challenges.
            </p>
          </div>
          
          {/* Achievement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer" data-testid="card-achievement-urc">
              <CardContent className="p-8 text-center">
                <Trophy className="text-primary h-12 w-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-space font-bold text-primary mb-2">URC 2025</h3>
                <p className="text-muted-foreground mb-6">University Rover Challenge</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Global Ranking</span>
                    <span className="font-bold text-primary">6th Place</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Asia Ranking</span>
                    <span className="font-bold text-primary">1st Place</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Science Award</span>
                    <span className="font-bold text-primary">100/100</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer" data-testid="card-achievement-tasks">
              <CardContent className="p-8">
                <h3 className="text-2xl font-space font-bold text-primary mb-4">Competition Tasks</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Cog className="text-primary h-5 w-5" />, text: "Autonomous Navigation" },
                    { icon: <FlaskConical className="text-primary h-5 w-5" />, text: "Science Exploration" },
                    { icon: <Globe className="text-primary h-5 w-5" />, text: "Extreme Retrieval" },
                    { icon: <Cog className="text-primary h-5 w-5" />, text: "Equipment Servicing" }
                  ].map((task, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {task.icon}
                      <span>{task.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer" data-testid="card-achievement-arc">
              <CardContent className="p-8 text-center">
                <Trophy className="text-primary h-12 w-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-space font-bold text-primary mb-2">ARC Excellence</h3>
                <p className="text-muted-foreground mb-6">Asian Rover Challenge</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Overall Performance</span>
                    <span className="font-bold text-primary">Outstanding</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Technical Innovation</span>
                    <span className="font-bold text-primary">Excellence</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievement Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-space font-bold text-center mb-12">Journey to <span className="text-primary">Excellence</span></h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
              
              {[
                { year: "2023", description: "Team Formation & First Prototype", position: "left" },
                { year: "2024", description: "ARC Participation & Regional Recognition", position: "right" },
                { year: "2025", description: "URC Global Success - 1st Asia, 6th Worldwide", position: "left" }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center mb-12">
                  {item.position === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer" data-testid={`timeline-${item.year}`}>
                          <CardContent className="p-6">
                            <h4 className="text-xl font-space font-bold text-primary mb-2">{item.year}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background ${index === 2 ? 'animate-glow' : ''}`}></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background"></div>
                      <div className="w-1/2 pl-8">
                        <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer" data-testid={`timeline-${item.year}`}>
                          <CardContent className="p-6">
                            <h4 className="text-xl font-space font-bold text-primary mb-2">{item.year}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Our <span className="text-primary">Mission</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Earth from space representing our cosmic mission" 
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Pioneering Space Exploration",
                  description: "We are the bridge between Earth and Mars, representing Bangladesh's ambitious vision in the cosmic arena. Our mission transcends borders, uniting brilliant minds to push the boundaries of what's possible in space robotics and exploration."
                },
                {
                  title: "Bangladesh's Space Legacy", 
                  description: "From the banks of the Bengal delta to the vast expanse of Mars, we carry our nation's dreams among the stars. Every rover we build, every mission we complete, writes Bangladesh's name in the annals of space exploration history."
                },
                {
                  title: "Future Generations",
                  description: "We are not just building rovers; we are building the future. Training the next generation of space engineers, scientists, and explorers who will take humanity's first steps on Mars and beyond."
                }
              ].map((mission, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer" data-testid={`card-mission-${index}`}>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-space font-bold text-primary mb-6">{mission.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{mission.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-background cosmic-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Our <span className="text-primary">Team</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the brilliant minds behind Bangladesh's space exploration success story.
            </p>
          </div>
          
          {/* Advisors */}
          <div className="mb-16">
            <h3 className="text-3xl font-space font-bold text-center mb-12">Faculty <span className="text-primary">Advisors</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Dr. Advisor Name",
                  role: "Senior Faculty Advisor",
                  description: "Expert in robotics and autonomous systems with 15+ years experience.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Dr. Advisor Name",
                  role: "Technical Advisor", 
                  description: "Specialist in space systems and mechanical engineering design.",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Dr. Advisor Name",
                  role: "Research Advisor",
                  description: "Leading researcher in AI and machine learning applications.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
              ].map((advisor, index) => (
                <Card key={index} className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group" data-testid={`card-advisor-${index}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={advisor.image} 
                      alt="Faculty advisor" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-space font-bold text-primary mb-2">{advisor.name}</h4>
                    <p className="text-muted-foreground mb-4">{advisor.role}</p>
                    <p className="text-sm text-muted-foreground">{advisor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Leadership Team */}
          <div className="mb-16">
            <h3 className="text-3xl font-space font-bold text-center mb-12">Leadership <span className="text-primary">Team</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Team Captain", role: "Project Leadership", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Technical Lead", role: "Systems Integration", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Operations Manager", role: "Logistics & Strategy", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Science Lead", role: "Research & Analysis", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
              ].map((leader, index) => (
                <Card key={index} className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group" data-testid={`card-leader-${index}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt="Team leader" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-space font-bold text-primary mb-1">{leader.title}</h4>
                    <p className="text-sm text-muted-foreground">{leader.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Webmasters Section */}
          <div>
            <h3 className="text-3xl font-space font-bold text-center mb-12">Web <span className="text-primary">Masters</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Microchip className="text-primary h-10 w-10" />,
                  title: "Electrical Systems",
                  description: "Circuit design, power management, and electronic integration expertise."
                },
                {
                  icon: <PaintbrushVertical className="text-primary h-10 w-10" />,
                  title: "UI/UX Design", 
                  description: "User interface design and experience optimization for mission control systems."
                },
                {
                  icon: <Box className="text-primary h-10 w-10" />,
                  title: "3D Graphics",
                  description: "Three.js implementation and 3D visualization for rover simulation and presentation."
                }
              ].map((webmaster, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer text-center" data-testid={`card-webmaster-${index}`}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{webmaster.icon}</div>
                    <h4 className="text-xl font-space font-bold text-primary mb-2">{webmaster.title}</h4>
                    <p className="text-muted-foreground">{webmaster.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Join Our <span className="text-primary">Mission</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Are you ready to be part of Bangladesh's space exploration journey? We welcome passionate students from all disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating on robotics project" 
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-space font-bold">We Need <span className="text-primary">You</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <Cog className="text-primary h-8 w-8" />, title: "Engineering", subtitle: "Mechanical, Electrical, Computer, Aerospace" },
                  { icon: <FlaskConical className="text-primary h-8 w-8" />, title: "Sciences", subtitle: "Physics, Chemistry, Mathematics, Biology" },
                  { icon: <Code className="text-primary h-8 w-8" />, title: "Programming", subtitle: "AI/ML, Robotics, Web Development, Embedded" },
                  { icon: <Palette className="text-primary h-8 w-8" />, title: "Design", subtitle: "UI/UX, 3D Modeling, Graphics, Media" }
                ].map((skill, index) => (
                  <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer" data-testid={`card-skill-${skill.title.toLowerCase()}`}>
                    <CardContent className="p-6">
                      <div className="mb-3">{skill.icon}</div>
                      <h4 className="text-lg font-space font-bold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.subtitle}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:scale-105 hover-glow transition-all duration-300 px-8 py-4"
                  data-testid="button-apply-now"
                >
                  <Rocket className="mr-3 h-5 w-5" />
                  Apply Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4"
                  data-testid="button-learn-more"
                >
                  <InfoIcon className="mr-3 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-20 bg-background cosmic-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Partner With <span className="text-primary">Excellence</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in shaping the future of space exploration. Become a sponsor and be part of Bangladesh's journey to Mars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Globe className="text-primary h-12 w-12" />,
                title: "Global Recognition",
                description: "Partner with Asia's #1 rover team with worldwide recognition and media coverage."
              },
              {
                icon: <Users className="text-primary h-12 w-12" />,
                title: "Talent Pipeline", 
                description: "Access to brilliant engineering minds and future space technology leaders."
              },
              {
                icon: <Rocket className="text-primary h-12 w-12" />,
                title: "Innovation Partnership",
                description: "Collaborate on cutting-edge robotics and space technology development."
              }
            ].map((benefit, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer text-center" data-testid={`card-sponsor-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-2xl font-space font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:scale-105 hover-glow transition-all duration-300 px-12 py-6 text-xl"
              data-testid="button-become-sponsor-main"
            >
              <Handshake className="mr-4 h-6 w-6" />
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join our mission or learn more? Contact us today and be part of Bangladesh's space exploration story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer" data-testid="card-contact-email">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Mail className="text-primary h-6 w-6" />
                    <h3 className="text-2xl font-space font-bold">Email</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">marsrover@uiu.ac.bd</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer" data-testid="card-contact-phone">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Phone className="text-primary h-6 w-6" />
                    <h3 className="text-2xl font-space font-bold">Phone</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">+880 1796-992356</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:scale-105 transition-all duration-500 cursor-pointer" data-testid="card-contact-social">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Share2 className="text-primary h-6 w-6" />
                    <h3 className="text-2xl font-space font-bold">Follow Us</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {["Facebook", "LinkedIn", "YouTube", "Instagram", "Twitter"].map((platform, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground p-4 rounded-lg transition-all duration-300 text-center"
                        data-testid={`link-social-${platform.toLowerCase()}`}
                      >
                        <div className="text-2xl">{platform.charAt(0)}</div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-space font-bold text-primary mb-8">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-semibold mb-2">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-muted border-border focus:ring-primary"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-semibold mb-2">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-muted border-border focus:ring-primary"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Message Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-muted border-border focus:ring-primary"
                      data-testid="input-subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-semibold mb-2">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-muted border-border focus:ring-primary resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:scale-105 hover-glow transition-all duration-300 py-4"
                    data-testid="button-send-message"
                  >
                    <NotebookPen className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Rocket className="text-primary-foreground h-6 w-6" />
              </div>
              <h3 className="text-3xl font-space font-bold text-primary">UIU Rescue Rover Team</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pioneering Bangladesh's journey to Mars through innovation, excellence, and unwavering determination. 
              Together, we reach for the stars.
            </p>
            
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">
                © 2025 UIU Rescue Rover Team. All rights reserved. | Reaching for Mars, one rover at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
