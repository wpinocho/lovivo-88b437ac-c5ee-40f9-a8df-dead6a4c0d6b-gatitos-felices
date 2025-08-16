import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  console.log("Componente Contact cargado");

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Av. Principal 123", "Ciudad de México, CDMX"]
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+52 55 1234 5678", "WhatsApp disponible"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gatitosfelices.com", "adopciones@gatitosfelices.com"]
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 9:00 - 18:00", "Sáb: 10:00 - 16:00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros gatitos? ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Mapa de ubicación</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <Input 
                    placeholder="Tu nombre completo"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input 
                    placeholder="Tu número de teléfono"
                    className="bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <Input 
                  placeholder="¿En qué podemos ayudarte?"
                  className="bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <Textarea 
                  placeholder="Cuéntanos más detalles..."
                  rows={5}
                  className="bg-white"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;