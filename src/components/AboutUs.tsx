import { Heart, Award, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  console.log("Componente AboutUs cargado");

  const values = [
    {
      icon: Heart,
      title: "Amor por los Felinos",
      description: "Cada gatito es tratado con amor y cuidado desde el primer día"
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Criadores certificados con más de 15 años de experiencia"
    },
    {
      icon: Users,
      title: "Familias Felices",
      description: "Más de 1,000 familias han encontrado su compañero perfecto"
    },
    {
      icon: Shield,
      title: "Salud Certificada",
      description: "Todos nuestros gatitos cuentan con certificados veterinarios"
    }
  ];

  const team = [
    {
      name: "María González",
      role: "Fundadora & Criadora Principal",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "15 años de experiencia en crianza de felinos de raza"
    },
    {
      name: "Carlos Rodríguez",
      role: "Veterinario Especialista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      description: "Especialista en medicina felina con certificación internacional"
    },
    {
      name: "Ana Martínez",
      role: "Coordinadora de Adopciones",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Experta en comportamiento felino y proceso de adopción"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una familia apasionada por los felinos, dedicada a criar y cuidar gatitos 
            de las mejores razas para encontrarles el hogar perfecto donde serán amados y cuidados.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Todo comenzó en 2008 cuando María, nuestra fundadora, rescató a su primera gatita persa. 
              La experiencia de cuidar y criar felinos se convirtió en su pasión, llevándola a 
              especializarse en diferentes razas.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hoy, después de más de 15 años, hemos ayudado a más de 1,000 familias a encontrar 
              su compañero felino perfecto, siempre priorizando el bienestar y la salud de 
              nuestros gatitos.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Conoce Nuestros Gatitos
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop" 
              alt="Gatitos jugando"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Familias Felices</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para encontrar tu compañero perfecto?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Explora nuestro catálogo de adorables gatitos esperando un hogar lleno de amor
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Ver Gatitos Disponibles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;