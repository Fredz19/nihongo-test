import { useState } from 'react';
import {
  ArrowLeft,
  Check,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'N5 Starter',
    price: 'Gratis',
    period: '',
    description: 'Coba platform dan mulai perjalanan JLPT-mu',
    features: [
      '5 Try Out N5 penuh',
      'Analisis dasar skor',
      'Review soal dengan penjelasan',
      'Akses komunitas diskusi',
      'Kanji flashcard dasar',
    ],
    notIncluded: [
      'Analisis kelemahan AI',
      'Rekomendasi belajar personal',
      'Try Out N4-N1',
      'Leaderboard & ranking',
    ],
    cta: 'Mulai Gratis',
    highlighted: false,
    color: '#4a4a4a'
  },
  {
    name: 'N4 / N3 Scholar',
    price: 'Rp 120.000',
    period: '/ bulan',
    description: 'Untuk pelajar yang serius naik level',
    features: [
      'Semua Try Out N5 & N4 (20+ tes)',
      '10 Try Out N3 penuh',
      'Analisis detail per section',
      'Deteksi kelemahan otomatis',
      'Rekomendasi belajar personal',
      'Leaderboard & ranking',
      'Grammar & Kanji deep dive',
      'Download materi PDF',
    ],
    notIncluded: [
      'Try Out N2 & N1',
      'Prioritas support',
    ],
    cta: 'Berlangganan',
    highlighted: true,
    color: '#e63946'
  },
  {
    name: 'N2 / N1 Mastery',
    price: 'Rp 250.000',
    period: '/ bulan',
    description: 'Akses penuh untuk semua level JLPT',
    features: [
      'Semua Try Out N5 sampai N1 (50+ tes)',
      'Analisis AI lanjutan & prediksi skor',
      'Grammar & Kanji deep dive',
      'Sertifikat digital completion',
      'Prioritas customer support',
      'Download semua materi',
      'Sesi konsultasi bulanan',
      'Akses fitur beta terbaru',
    ],
    notIncluded: [],
    cta: 'Jadi Master',
    highlighted: false,
    color: '#1d3557'
  }
];

const faqs = [
  {
    q: 'Bisa upgrade atau downgrade paket?',
    a: 'Ya, kamu bisa upgrade atau downgrade kapan saja. Perubahan akan aktif di periode billing berikutnya.'
  },
  {
    q: 'Apakah ada uji coba gratis?',
    a: 'Paket N5 Starter bisa digunakan gratis selamanya. Untuk paket berbayar, ada garansi 7 hari uang kembali.'
  },
  {
    q: 'Bagaimana sistem pembayaran?',
    a: 'Kami mendukung Midtrans, QRIS, dan Transfer Bank. Pembayaran bisa bulanan atau tahunan (hemat 20%).'
  },
  {
    q: 'Soal diperbarui berapa sering?',
    a: 'Bank soal diperbarui setiap 3 bulan dengan soal-soal baru yang mengikuti tren JLPT terkini.'
  },
  {
    q: 'Bisa akses di multiple device?',
    a: 'Ya, satu akun bisa login di laptop, tablet, dan smartphone secara bersamaan.'
  }
];

export default function PricingPage() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const discount = billing === 'yearly' ? 0.8 : 1;

  return (
    <div className="min-h-screen" style={{ background: '#f7f5f0' }}>
      {/* Header */}
      <header className="bg-white border-b px-6 py-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-serif">Harga</h1>
            <p className="text-xs text-sumi">Pilih paket yang sesuai dengan targetmu</p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#1a1a1a' }}>
            Investasi untuk<br />Masa Depanmu
          </h2>
          <p className="text-sumi max-w-xl mx-auto mb-8">
            Pilih paket yang sesuai dengan target JLPT-mu. Bisa upgrade atau downgrade kapan saja.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-white border" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'monthly' ? 'bg-ink text-white' : 'text-sumi'
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'yearly' ? 'bg-ink text-white' : 'text-sumi'
              }`}
            >
              Tahunan <span className="text-xs text-vermillion">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'bg-white shadow-2xl ring-2'
                  : 'bg-white/70 border'
              }`}
              style={plan.highlighted ? { borderColor: plan.color, boxShadow: `0 0 0 2px ${plan.color}` } : { borderColor: 'rgba(26,26,26,0.1)' }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: plan.color }} />
              )}

              <div className="p-8">
                {plan.highlighted && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4" style={{ background: plan.color }}>
                    Paling Populer
                  </span>
                )}

                <h3 className="text-2xl font-serif mb-1">{plan.name}</h3>
                <p className="text-sm text-sumi mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold" style={{ color: '#1a1a1a' }}>
                    {billing === 'yearly' && plan.price !== 'Gratis'
                      ? `Rp ${Math.round(parseInt(plan.price.replace(/[^0-9]/g, '')) * discount).toLocaleString('id')}`
                      : plan.price}
                  </span>
                  <span className="text-sumi">
                    {billing === 'yearly' && plan.price !== 'Gratis' ? '/ bulan' : plan.period}
                  </span>
                  {billing === 'yearly' && plan.price !== 'Gratis' && (
                    <div className="text-xs text-sumi mt-1">Dibayar tahunan</div>
                  )}
                </div>

                <button
                  onClick={() => navigate('/dashboard')}
                  className={`w-full py-3 rounded-full font-medium transition-all mb-8 ${
                    plan.highlighted
                      ? 'btn-vermillion'
                      : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm text-sumi">
                      <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">-</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="paper-card p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-serif text-center mb-10">Perbandingan Fitur Lengkap</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
                  <th className="text-left py-4 px-4 font-medium">Fitur</th>
                  <th className="text-center py-4 px-4 font-medium">N5 Starter</th>
                  <th className="text-center py-4 px-4 font-medium text-vermillion">N4/N3 Scholar</th>
                  <th className="text-center py-4 px-4 font-medium text-indigo">N2/N1 Mastery</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Jumlah Try Out', n5: '5', n4: '30+', n2: '50+' },
                  { feature: 'Bank Soal', n5: '100+', n4: '600+', n2: '1.200+' },
                  { feature: 'Analisis Skor', n5: 'Dasar', n4: 'Detail', n2: 'AI Lanjutan' },
                  { feature: 'Deteksi Kelemahan', n5: '-', n4: 'Otomatis', n2: 'AI + Prediksi' },
                  { feature: 'Review Mode', n5: 'Dasar', n4: 'Lengkap', n2: 'Deep Dive' },
                  { feature: 'Kanji Analysis', n5: 'Dasar', n4: 'Lengkap', n2: 'Advanced' },
                  { feature: 'Grammar Insights', n5: '-', n4: 'Otomatis', n2: 'Deep Dive' },
                  { feature: 'Leaderboard', n5: '-', n4: 'Otomatis', n2: 'Otomatis' },
                  { feature: 'Download Materi', n5: '-', n4: 'PDF', n2: 'Semua Format' },
                  { feature: 'Support', n5: 'Komunitas', n4: 'Email', n2: 'Prioritas' },
                ].map((row, i) => (
                  <tr key={i} className="border-b" style={{ borderColor: 'rgba(26,26,26,0.05)' }}>
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-sumi">{row.n5}</td>
                    <td className="text-center py-4 px-4">{row.n4}</td>
                    <td className="text-center py-4 px-4">{row.n2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-serif text-center mb-10">Pertanyaan Umum</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="paper-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-sumi leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Siap untuk mulai?</h2>
          <p className="text-sumi mb-8">Daftar gratis dan coba Try Out N5 pertamamu sekarang.</p>
          <button onClick={() => navigate('/dashboard')} className="btn-vermillion text-lg px-10 py-4">
            Mulai Gratis
          </button>
        </div>
      </div>
    </div>
  );
}
