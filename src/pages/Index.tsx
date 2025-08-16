import { useState } from "react";
import { Header } from "@/components/Header";
import { KittenCard } from "@/components/KittenCard";
import { Cart } from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Kitten {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  description: string;
  personality: string[];
}

export interface CartItem extends Kitten {
  quantity: number;
}

const kittens: Kitten[] = [
  {
    id: 1,
    name: "Luna",
    breed: "Persa",
    age: "3 meses",
    price: 800,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    description: "Una hermosa gatita persa con pelaje sedoso y ojos azules brillantes.",
    personality: ["Cariñosa", "Tranquila", "Elegante"]
  },
  {
    id: 2,
    name: "Simba",
    breed: "Maine Coon",
    age: "4 meses",
    price: 1200,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
    description: "Un majestuoso Maine Coon con personalidad juguetona y pelaje esponjoso.",
    personality: ["Juguetón", "Inteligente", "Sociable"]
  },
  {
    id: 3,
    name: "Mimi",
    breed: "Siamés",
    age: "2 meses",
    price: 600,
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=300&fit=crop",
    description: "Una gatita siamesa muy vocal y cariñosa, perfecta para familias activas.",
    personality: ["Vocal", "Activa", "Leal"]
  },
  {
    id: 4,
    name: "Oliver",
    breed: "Británico de Pelo Corto",
    age: "5 meses",
    price: 900,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop",
    description: "Un gatito británico con carácter dulce y pelaje gris azulado.",
    personality: ["Dulce", "Independiente", "Relajado"]
  },
  {
    id: 5,
    name: "Bella",
    breed: "Ragdoll",
    age: "3 meses",
    price: 1000,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop",
    description: "Una preciosa Ragdoll con ojos azules y temperamento muy dócil.",
    personality: ["Dócil", "Cariñosa", "Paciente"]
  },
  {
    id: 6,
    name: "Max",
    breed: "Bengalí",
    age: "4 meses",
    price: 1500,
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=300&fit=crop",
    description: "Un exótico gatito bengalí con patrones únicos y energía desbordante.",
    personality: ["Energético", "Curioso", "Atlético"]
  }
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log("Tienda de gatitos cargada con", kittens.length, "gatitos disponibles");
  console.log("Items en carrito:", cartItems.length);

  const addToCart = (kitten: Kitten) => {
    console.log("Agregando al carrito:", kitten.name);
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === kitten.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === kitten.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...kitten, quantity: 1 }];
    });
  };

  const removeFromCart = (kittenId: number) => {
    console.log("Removiendo del carrito ID:", kittenId);
    setCartItems(prev => prev.filter(item => item.id !== kittenId));
  };

  const updateQuantity = (kittenId: number, quantity: number) => {
    console.log("Actualizando cantidad para ID:", kittenId, "nueva cantidad:", quantity);
    if (quantity === 0) {
      removeFromCart(kittenId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === kittenId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🐱 Tienda de Gatitos
            </h1>
            <p className="text-gray-600">
              Encuentra tu compañero felino perfecto
            </p>
          </div>
          
          <Button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-purple-600 hover:bg-purple-700"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Carrito
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kittens.map((kitten) => (
            <KittenCard
              key={kitten.id}
              kitten={kitten}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;