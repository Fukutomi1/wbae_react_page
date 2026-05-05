import { Menu, Search, User, Globe } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#8B1538] rounded-full flex items-center justify-center text-white font-bold text-lg">
                WBAE
              </div>
              <div>
                <div className="text-lg font-bold text-[#8B1538]">ビジネス・アカデミック・エンタメ稲門会</div>
                <div className="text-xs text-gray-600">Waseda Business, Academic & Entertainment Alumni</div>
              </div>
            </div>
            <nav className="hidden lg:flex gap-6">
              <a href="#about" className="text-gray-700 hover:text-[#8B1538] transition-colors">稲門会について</a>
              <a href="#activities" className="text-gray-700 hover:text-[#8B1538] transition-colors">活動内容</a>
              <a href="#events" className="text-gray-700 hover:text-[#8B1538] transition-colors">イベント</a>
              <a href="#members" className="text-gray-700 hover:text-[#8B1538] transition-colors">メンバー</a>
              <a href="#join" className="text-gray-700 hover:text-[#8B1538] transition-colors">入会案内</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-1">
              <Globe className="w-5 h-5 text-gray-700" />
              <span className="text-sm text-gray-700">EN</span>
            </button>
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <a href="#about" className="block py-2 text-gray-700 hover:text-[#8B1538]">稲門会について</a>
            <a href="#activities" className="block py-2 text-gray-700 hover:text-[#8B1538]">活動内容</a>
            <a href="#events" className="block py-2 text-gray-700 hover:text-[#8B1538]">イベント</a>
            <a href="#members" className="block py-2 text-gray-700 hover:text-[#8B1538]">メンバー</a>
            <a href="#join" className="block py-2 text-gray-700 hover:text-[#8B1538]">入会案内</a>
          </nav>
        )}
      </div>
    </header>
  );
}
