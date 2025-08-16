import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";

interface NavigationProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navigation = ({ cartItemsCount, onCartClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("Navegación cargada, items en carrito:", cartItemsCount);

  const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Gatitos", href: "#kittens" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Gatitos Felices
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              className="relative bg-purple-600 hover:bg-purple-700"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Carrito
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;