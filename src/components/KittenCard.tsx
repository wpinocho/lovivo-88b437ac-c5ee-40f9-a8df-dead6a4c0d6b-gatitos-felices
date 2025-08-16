import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { Kitten } from "@/pages/Index";

interface KittenCardProps {
  kitten: Kitten;
  onAddToCart: (kitten: Kitten) => void;
}

export const KittenCard = ({ kitten, onAddToCart }: KittenCardProps) => {
  console.log("Renderizando tarjeta para gatito:", kitten.name);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={kitten.image} 
          alt={kitten.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-purple-600">{kitten.age}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">5.0</span>
          </div>
        </div>
        
        <p className="text-purple-600 font-medium mb-2">{kitten.breed}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{kitten.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {kitten.personality.map((trait, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            ${kitten.price.toLocaleString()}
          </div>
          <Button 
            onClick={() => onAddToCart(kitten)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            Adoptar
          </Button>
        </div>
      </div>
    </div>
  );
};