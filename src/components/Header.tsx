import { Heart } from "lucide-react";

export const Header = () => {
  console.log("Header component loaded");
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Gatitos Felices</h1>
        </div>
      </div>
    </header>
  );
};