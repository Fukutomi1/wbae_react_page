import { Header } from './components/Header';
import { ActivityCard } from './components/ActivityCard';
import { Footer } from './components/Footer';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ArrowRight, Briefcase, GraduationCap, Sparkles, Users, Network, Calendar, Trophy } from 'lucide-react';

export default function App() {
  const activities = [
    {
      title: 'ビジネスネットワーキング交流会',
      category: 'Business',
      date: '2026年6月15日',
      description: '業界を超えた同窓生との出会いの場。新しいビジネスチャンスや協業の可能性を探ります。経営者、起業家、ビジネスパーソンが集う貴重な機会です。',
      imageUrl: 'https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3Nzc2NDg3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: '特別講演会：最新ビジネストレンド',
      category: 'Academic',
      date: '2026年7月20日',
      description: '第一線で活躍する卒業生を招いた特別講演。最新のビジネストレンドや業界の動向について学び、知見を深めます。質疑応答セッションも充実。',
      imageUrl: 'https://images.unsplash.com/photo-1769839271768-aee5469799ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZW1pbmFyJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3Nzc3OTQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: '夏季懇親パーティー',
      category: 'Entertainment',
      date: '2026年8月10日',
      description: 'カジュアルな雰囲気で楽しむ懇親パーティー。美味しい料理とドリンクを楽しみながら、同窓生との絆を深めます。新規入会者も大歓迎です。',
      imageUrl: 'https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3Nzc2NDg3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const pillars = [
    {
      icon: Briefcase,
      title: 'Business',
      color: 'bg-blue-100 text-blue-600',
      description: 'ビジネス交流・起業支援・キャリア開発',
      details: '同窓生間のビジネスネットワーキング、起業家支援プログラム、異業種交流会を通じて、新しいビジネス機会を創出します。'
    },
    {
      icon: GraduationCap,
      title: 'Academic',
      color: 'bg-purple-100 text-purple-600',
      description: '学術研究・知識共有・生涯学習',
      details: '最新の研究動向の共有、専門家による講演会、勉強会の開催など、継続的な学びの場を提供します。'
    },
    {
      icon: Sparkles,
      title: 'Entertainment',
      color: 'bg-pink-100 text-pink-600',
      description: '懇親会・文化活動・スポーツイベント',
      details: '季節ごとの懇親パーティー、文化鑑賞会、スポーツ大会など、楽しく交流できるイベントを企画します。'
    }
  ];

  const stats = [
    { value: '500名+', label: '会員数' },
    { value: '年50回以上', label: 'イベント開催' },
    { value: '全国15都市', label: '活動拠点' },
    { value: '創立10周年', label: '実績と信頼' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1775163560631-6ff15eb2fa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3Nzc2NDg3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="ネットワーキングイベント"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6 text-lg tracking-widest">WASEDA BUSINESS, ACADEMIC & ENTERTAINMENT ALUMNI</div>
          <h1 className="text-5xl md:text-7xl mb-6">つながる、学ぶ、楽しむ</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            早稲田の絆で、ビジネスとアカデミック、そしてエンターテイメントの世界を広げる
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-[#8B1538] hover:bg-[#6D1028] text-white px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-lg">
              入会案内を見る
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full transition-colors text-lg border border-white/30">
              イベント情報
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#8B1538] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl mb-2">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">WBAEについて</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              ビジネス・アカデミック・エンタメ稲門会（WBAE）は、早稲田大学の卒業生が
              ビジネス、学術、エンターテイメントの分野で交流し、成長し続けるための組織です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl mb-3">{pillar.title}</h3>
                  <p className="text-gray-700 mb-4">{pillar.description}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="activities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">活動内容</h2>
            <p className="text-gray-600 text-lg">多様なイベントで、同窓生との絆を深めます</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>

      <section id="members" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774094453087-0207a0cd2309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBzZW1pbmFyJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3Nzc3OTQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="パネルディスカッション"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">多様なバックグラウンドを持つメンバー</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                WBAEには、様々な業界・職種で活躍する早稲田の卒業生が集まっています。
                経営者、起業家、研究者、クリエイター、エンジニア、コンサルタントなど、
                多彩な人材との出会いが、あなたのキャリアと人生を豊かにします。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">強力なネットワーク</h3>
                    <p className="text-gray-600 text-sm">業界を超えた人脈形成の機会</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">実績ある活動</h3>
                    <p className="text-gray-600 text-sm">10年以上の歴史と信頼</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">アットホームな雰囲気</h3>
                    <p className="text-gray-600 text-sm">初参加でも安心して交流できます</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8B1538] to-[#6D1028] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-10 h-10" />
                <span className="text-lg">次回イベント</span>
              </div>
              <h2 className="text-4xl mb-6">6月ネットワーキング交流会</h2>
              <p className="text-xl mb-8 text-gray-200">
                新規メンバーも大歓迎！業界を超えた出会いと学びの場にぜひご参加ください。
                懇親会では美味しい料理とドリンクをご用意しています。
              </p>
              <button className="bg-white text-[#8B1538] hover:bg-gray-100 px-8 py-4 rounded-full transition-colors text-lg flex items-center gap-2">
                イベントに申し込む
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Briefcase className="w-8 h-8 mb-4" />
                <h3 className="text-xl mb-2">ビジネスマッチング</h3>
                <p className="text-sm text-gray-200">新しいビジネスチャンス</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <GraduationCap className="w-8 h-8 mb-4" />
                <h3 className="text-xl mb-2">特別講演</h3>
                <p className="text-sm text-gray-200">業界トップの知見</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Users className="w-8 h-8 mb-4" />
                <h3 className="text-xl mb-2">懇親会</h3>
                <p className="text-sm text-gray-200">リラックスした交流</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Network className="w-8 h-8 mb-4" />
                <h3 className="text-xl mb-2">ネットワーキング</h3>
                <p className="text-sm text-gray-200">人脈を広げる機会</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">入会のご案内</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            WBAEは早稲田大学の卒業生なら誰でも入会できます。
            年会費は10,000円で、すべてのイベントに参加いただけます。
            まずは体験参加も可能ですので、お気軽にお問い合わせください。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-[#8B1538] hover:bg-[#6D1028] text-white px-8 py-4 rounded-full transition-colors text-lg">
              入会申し込み
            </button>
            <button className="border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white px-8 py-4 rounded-full transition-colors text-lg">
              お問い合わせ
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl mb-2">①</div>
              <h3 className="mb-2">入会申し込み</h3>
              <p className="text-gray-600 text-sm">フォームから必要事項を入力</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl mb-2">②</div>
              <h3 className="mb-2">年会費のお支払い</h3>
              <p className="text-gray-600 text-sm">10,000円（年間）</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl mb-2">③</div>
              <h3 className="mb-2">イベント参加</h3>
              <p className="text-gray-600 text-sm">すべてのイベントに参加可能</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}