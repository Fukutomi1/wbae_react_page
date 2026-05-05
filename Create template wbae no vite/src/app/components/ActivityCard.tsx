import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ActivityCardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
}

export function ActivityCard({ title, category, date, description, imageUrl }: ActivityCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-[#8B1538] text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        <button className="flex items-center gap-2 text-gray-700 hover:text-[#8B1538] transition-colors group-hover:gap-3 transition-all">
          イベント詳細
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
