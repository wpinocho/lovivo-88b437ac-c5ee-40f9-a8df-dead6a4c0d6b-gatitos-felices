import { Heart, Star, Award } from "lucide-react";

export const Header = () => {
  console.log("Renderizando Header de la tienda");
  
  return (
    <header className="bg-white shadow-sm border-b-2 border-pink-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl">🐾</div>
            <div>
              <h1 className="text-2xl font-bold text-purple-800">
                Gatitos Felices
              </h1>
              <p className="text-sm text-gray-600">
                Tu tienda de confianza desde 2020
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>Criados con amor</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>5 estrellas</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-purple-500" />
              <span>Certificados</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};