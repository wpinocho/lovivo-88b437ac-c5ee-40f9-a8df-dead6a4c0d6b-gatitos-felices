import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { Kitten } from "@/pages/Index";

interface KittenCardProps {
  kitten: Kitten;
  onAddToCart: (kitten: Kitten) => void;
}

export const KittenCard = ({ kitten, onAddToCart }: KittenCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  
  console.log("Renderizando tarjeta para gatito:", kitten.name);

  const handleAddToCart = () => {
    console.log("Botón agregar al carrito clickeado para:", kitten.name);
    onAddToCart(kitten);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log("Gatito", kitten.name, isLiked ? "ya no es favorito" : "marcado como favorito");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isLiked ? "fill-pink-500 text-pink-500" : "text-gray-400"
            }`}
          />
        </button>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            {kitten.age}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <span className="text-2xl font-bold text-purple-600">
            ${kitten.price}
          </span>
        </div>
        
        <p className="text-gray-600 mb-1">{kitten.breed}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {kitten.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {kitten.personality.map((trait, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-pink-200 text-pink-700"
            >
              {trait}
            </Badge>
          ))}
        </div>
        
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adoptar
        </Button>
      </div>
    </div>
  );
};