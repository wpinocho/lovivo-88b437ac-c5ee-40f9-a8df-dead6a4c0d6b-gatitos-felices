import { Button } from "@/components/ui/button";
import { Heart, Star, Award } from "lucide-react";

const Hero = () => {
  console.log("Componente Hero cargado");

  const stats = [
    { icon: Heart, number: "1000+", label: "Familias Felices" },
    { icon: Star, number: "15", label: "Años de Experiencia" },
    { icon: Award, number: "100%", label: "Garantía de Salud" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Encuentra tu
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}Compañero{" "}
              </span>
              Perfecto
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Descubre gatitos de raza pura, criados con amor y cuidado. 
              Cada uno busca una familia que los ame tanto como nosotros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
              >
                Ver Gatitos Disponibles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
              >
                Conoce Nuestra Historia
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&h=600&fit=crop" 
                alt="Gatito adorable"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Certificado de Salud</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">⭐ 5.0</div>
                <div className="text-xs text-gray-600">Calificación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;