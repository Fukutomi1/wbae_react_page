import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VehicleCardProps {
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  description: string;
}

export function VehicleCard({ name, category, price, imageUrl, description }: VehicleCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <h3 className="text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="text-lg text-red-600">{price}</div>
          <button className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors group-hover:gap-3 transition-all">
            詳細を見る
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
