import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, Heart } from "lucide-react";
import type { CartItem } from "@/pages/Index";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (kittenId: number) => void;
  onUpdateQuantity: (kittenId: number, quantity: number) => void;
  totalPrice: number;
}

export const Cart = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  totalPrice,
}: CartProps) => {
  console.log("Renderizando carrito con", items.length, "items");
  console.log("Total del carrito: $", totalPrice);

  const handleCheckout = () => {
    console.log("Iniciando proceso de checkout");
    alert("¡Gracias por tu adopción! Nos pondremos en contacto contigo pronto. 🐱💕");
    onClose();
  };

  if (items.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              🛒 Tu Carrito de Adopción
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🐱</div>
            <p className="text-gray-500 mb-4">
              Tu carrito está vacío
            </p>
            <p className="text-sm text-gray-400">
              ¡Agrega algunos gatitos adorables para adoptar!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            🛒 Tu Carrito de Adopción
            <Badge variant="secondary">{items.length} gatito{items.length !== 1 ? 's' : ''}</Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.breed}</p>
                <div className="flex items-center gap-2 mt-1">
                  {item.personality.slice(0, 2).map((trait, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="w-3 h-3" />
                </Button>
                
                <span className="w-8 text-center font-semibold">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-purple-600">
                  ${item.price * item.quantity}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4 mt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-purple-600">
              ${totalPrice}
            </span>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Seguir Viendo
            </Button>
            <Button
              onClick={handleCheckout}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Heart className="w-4 h-4 mr-2" />
              Adoptar Ahora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};