import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">活動内容</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">ビジネス交流会</a></li>
              <li><a href="#" className="hover:text-white transition-colors">学術セミナー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">エンターテイメント企画</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ネットワーキング</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">イベント情報</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">定例会</a></li>
              <li><a href="#" className="hover:text-white transition-colors">特別講演会</a></li>
              <li><a href="#" className="hover:text-white transition-colors">懇親会</a></li>
              <li><a href="#" className="hover:text-white transition-colors">年間スケジュール</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">会員サービス</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">入会案内</a></li>
              <li><a href="#" className="hover:text-white transition-colors">会員特典</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">フォローする</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#8B1538] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#8B1538] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#8B1538] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#8B1538] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">© 2026 ビジネス・アカデミック・エンタメ稲門会 (WBAE). All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">サイトマップ</a>
            <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
