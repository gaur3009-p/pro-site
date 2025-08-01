/**
 * Home page component - AI/ML Portfolio for Aditya Singh Gaur
 * Displays a comprehensive portfolio showcasing AI/ML projects and skills
 */

import { useState } from 'react'
import { 
  Github, 
  ExternalLink, 
  Brain, 
  MessageSquare, 
  Rocket, 
  Code, 
  Database, 
  Cpu,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Award,
  Users,
  Zap,
  Target,
  ChevronDown,
  Star
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  /**
   * Scroll to specific section smoothly
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  /**
   * Project data structure
   */
  const projects = [
    {
      id: 1,
      title: "Speech Grammar Correction via Voice Input",
      description: "AI-powered system that corrects grammatically incorrect sentences through voice input, combining ASR, NLP transformers, and TTS for complete voice-to-voice interaction.",
      image: "https://pub-cdn.sider.ai/u/U03VHZRX993/web-coder/688cee542b2b5e92a4eb2300/resource/b82d009f-242a-4012-82fe-ef57e6c70924.jpg",
      techStack: ["Python", "Gradio", "Transformers", "TTS", "Hugging Face"],
      features: [
        "Real-time speech-to-text conversion",
        "Grammar correction using fine-tuned models", 
        "Voice-based interactivity through Gradio"
      ],
      links: {
        github: "https://github.com/gaur3009-p/SHL_assign",
        demo: "https://huggingface.co/spaces/demo"
      },
      icon: Brain
    },
    {
      id: 2,
      title: "QA Bot – RAG-Based Question Answering",
      description: "Intelligent chatbot using Retrieval-Augmented Generation to answer questions from custom documents with vector databases and advanced document processing.",
      image: "https://pub-cdn.sider.ai/u/U03VHZRX993/web-coder/688cee542b2b5e92a4eb2300/resource/05f80556-c69c-4f50-b11c-24a97c8dcf00.jpg",
      techStack: ["Weaviate-Client", "Cohere", "Gradio", "PyPDFLoader"],
      features: [
        "Upload any document (PDF, DOCX, TXT)",
        "Parses and indexes with Weaviate",
        "Real-time context-aware responses"
      ],
      links: {
        github: "https://github.com/gaur3009-p/QA_Bot",
        demo: "#"
      },
      icon: MessageSquare
    },
    {
      id: 3,
      title: "Rookus Startup – GenAI Campaign Pivot",
      description: "Strategic pivot from fashion design AI to Creative Campaigns as a Service (CaaS), developing AI tools for marketing automation and content generation.",
      image: "https://pub-cdn.sider.ai/u/U03VHZRX993/web-coder/688cee542b2b5e92a4eb2300/resource/61febca2-5bc1-4894-b561-6555b33d0008.jpg",
      techStack: ["GenAI", "Marketing Automation", "SEO Tools", "CRM"],
      features: [
        "Generate marketing posters and ad content",
        "Write optimized product descriptions",
        "Integrate SEO tools and CRM workflows"
      ],
      achievement: "Runner-Up in BIT Winter Cohort (July 26th, 2025)",
      links: {
        github: "#",
        demo: "#"
      },
      icon: Rocket
    }
  ]

  /**
   * Skills data with categories
   */
  const skillCategories = [
    {
      category: "AI/ML Technologies",
      skills: [
        { name: "Prompt Engineering", icon: Brain },
        { name: "LLM Fine-tuning", icon: Cpu },
        { name: "Retrieval-Augmented Generation", icon: Database },
        { name: "Transformers", icon: Code }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Hugging Face", icon: Star },
        { name: "Gradio UI", icon: Target },
        { name: "Voice-based NLP", icon: MessageSquare },
        { name: "Vector Databases", icon: Database }
      ]
    },
    {
      category: "Business Skills",
      skills: [
        { name: "Product Strategy", icon: Target },
        { name: "Pitch Storytelling", icon: Users },
        { name: "Market Research", icon: Zap },
        { name: "Technical Leadership", icon: Award }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Aditya Singh Gaur
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === section 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                AI/ML Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming ideas into intelligent solutions through cutting-edge AI technologies, 
              from voice processing to document intelligence and startup innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate AI/ML engineer with expertise in natural language processing, 
              voice technologies, and intelligent document systems. Proven track record 
              of turning complex AI concepts into user-friendly applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://pub-cdn.sider.ai/u/U03VHZRX993/web-coder/688cee542b2b5e92a4eb2300/resource/1902e2b8-8b3e-4c91-95b1-20401d74f219.jpg" 
                alt="Aditya Singh Gaur" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    Recent Achievement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    <strong className="text-purple-400">Runner-Up</strong> in BIT Winter Cohort 
                    for strategic AI product pivot at Rookus Startup, earning investor praise 
                    and initial funding.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Voice AI", "RAG Systems", "NLP", "Transformers", "Product Strategy"].map((spec) => (
                      <Badge key={spec} variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative AI solutions that solve real-world problems through advanced 
              machine learning and natural language processing.
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <project.icon className="w-8 h-8 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.achievement && (
                      <div className="mb-6 p-4 bg-purple-600/20 rounded-lg border border-purple-400/30">
                        <p className="text-purple-300 font-medium">
                          🏆 {project.achievement}
                        </p>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button asChild className="bg-purple-600 hover:bg-purple-700">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive skill set spanning AI/ML technologies, development tools, 
              and business strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <skill.icon className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects or discussing innovative solutions? 
            I'd love to hear from you!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">aditya.gaur@example.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center gap-2">
                  <Github className="w-5 h-5 text-purple-400" />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">github.com/gaur3009-p</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Aditya Singh Gaur. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}