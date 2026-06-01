import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Flame, BarChart3, Users, BookOpen, Headphones, Brain, ChevronRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ===== HERO 3D SCENE =====
function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 2, 4);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Tatami floor shader
    const tatamiVertexShader = `
      uniform float time;
      varying vec2 vUv;
      varying vec3 vPos;
      #define PI 3.14159265359
      void main() {
        vUv = uv;
        vPos = position;
        vec3 p = position;
        float t = time * 0.5;
        float wave = sin(p.x * 0.5 + t) * cos(p.z * 0.3 + t) * 0.08;
        p.y += wave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `;

    const tatamiFragmentShader = `
      precision highp float;
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      uniform vec2 resolution;
      varying vec2 vUv;
      varying vec3 vPos;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      float pattern(vec2 p, float scale) {
        return noise(p * scale + time * 0.05);
      }

      void main() {
        vec2 uv = vUv;
        vec2 res = resolution;
        vec2 p = uv * (res / min(res.x, res.y));
        vec3 base = mix(color1, color2, uv.y + noise(p * 3.0) * 0.2);
        base += color3 * pattern(uv * 8.0, 0.3) * 0.12;
        base -= smoothstep(0.49, 0.5, abs(sin(uv.x * 10.0 + noise(vec2(uv.x * 10.0, 0.0)) * 0.2))) * 0.02;
        base -= smoothstep(0.48, 0.5, abs(sin(uv.y * 10.0))) * 0.03;
        base += (noise(p * 2.0) * 0.05);
        gl_FragColor = vec4(base, 0.92);
      }
    `;

    const tatamiMaterial = new THREE.ShaderMaterial({
      vertexShader: tatamiVertexShader,
      fragmentShader: tatamiFragmentShader,
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0xf7f5f0) },
        color2: { value: new THREE.Color(0xedebe6) },
        color3: { value: new THREE.Color(0xd6d4cf) },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      transparent: true,
      side: THREE.DoubleSide
    });

    const floorGeometry = new THREE.PlaneGeometry(20, 20, 128, 128);
    const floor = new THREE.Mesh(floorGeometry, tatamiMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Cherry blossoms
    const petalCount = 40;
    const petalGeometry = new THREE.PlaneGeometry(0.12, 0.12);
    const petalMaterial = new THREE.MeshBasicMaterial({
      color: 0xffe4e9,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });

    const petals: THREE.Mesh[] = [];

    for (let i = 0; i < petalCount; i++) {
      const petal = new THREE.Mesh(petalGeometry, petalMaterial.clone());
      petal.position.set(
        (Math.random() - 0.5) * 12,
        Math.random() * 6 + 1,
        (Math.random() - 0.5) * 8
      );
      petal.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      petal.userData = {
        speed: 0.3 + Math.random() * 0.4,
        sway: Math.random() * 2,
        offset: Math.random() * Math.PI * 2
      };
      scene.add(petal);
      petals.push(petal);
    }

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    let animId: number;

    function animate() {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      tatamiMaterial.uniforms.time.value = elapsed;

      // Animate petals
      petals.forEach((petal) => {
        const data = petal.userData;
        petal.position.y -= data.speed * 0.008;
        petal.position.x += Math.sin(elapsed * 0.5 + data.offset) * 0.003;
        petal.position.z += Math.cos(elapsed * 0.3 + data.offset) * 0.002;
        petal.rotation.x += 0.01;
        petal.rotation.y += 0.015;
        petal.rotation.z += 0.008;

        // Reset if below floor
        if (petal.position.y < -0.5) {
          petal.position.y = 6;
          petal.position.x = (Math.random() - 0.5) * 12;
          petal.position.z = (Math.random() - 0.5) * 8;
        }
      });

      // Camera parallax
      targetRotation.x = mouse.y * 0.05;
      targetRotation.y = mouse.x * 0.05;
      camera.position.x += (targetRotation.y - camera.position.x) * 0.02;
      camera.position.y += (2 + targetRotation.x - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      tatamiMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }} />;
}

// ===== KANJI SCROLL SECTION =====
function KanjiScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardText, setCardText] = useState('力');
  const [isFlipped, setIsFlipped] = useState(false);

  const kanjiPairs = [
    { kanji: '力', meaning: 'Power' },
    { kanji: '学', meaning: 'Study' },
    { kanji: '夢', meaning: 'Dream' },
    { kanji: '愛', meaning: 'Love' },
    { kanji: '日本', meaning: 'Japan' },
    { kanji: '成功', meaning: 'Success' },
    { kanji: '未来', meaning: 'Future' },
    { kanji: '知識', meaning: 'Knowledge' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));
      
      const pairIndex = Math.min(
        Math.floor(scrollProgress * kanjiPairs.length),
        kanjiPairs.length - 1
      );
      
      const flipProgress = (scrollProgress * kanjiPairs.length) % 1;
      const shouldShowMeaning = flipProgress > 0.5;
      
      setIsFlipped(shouldShowMeaning);
      setCardText(shouldShowMeaning ? kanjiPairs[pairIndex].meaning : kanjiPairs[pairIndex].kanji);

      if (cardRef.current) {
        const rotationY = flipProgress * 180;
        const rotationZ = flipProgress * 5;
        cardRef.current.style.transform = `translateY(-50%) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center" style={{ background: '#f7f5f0' }}>
        {/* Background Kanji */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden" style={{ opacity: 0.12 }}>
          <div className="text-center" style={{ fontSize: '25vw', fontFamily: "'Noto Serif JP', serif", lineHeight: 1.2, color: '#1a1a1a' }}>
            {kanjiPairs.map((pair, i) => (
              <div key={i} className="select-none">{pair.kanji}</div>
            ))}
          </div>
        </div>

        {/* Flip Card */}
        <div className="relative z-10" style={{ perspective: '1000px' }}>
          <div
            ref={cardRef}
            className="glass-card flex items-center justify-center"
            style={{
              width: '320px',
              height: '200px',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            <span
              className="text-5xl font-bold"
              style={{
                fontFamily: isFlipped ? "'Noto Serif JP', serif" : "'Noto Serif JP', serif",
                color: '#1a1a1a'
              }}
            >
              {cardText}
            </span>
          </div>
          <p className="text-center mt-6 text-sumi text-sm tracking-wider uppercase">
            {isFlipped ? 'Scroll to learn more' : 'Gulir untuk terjemahan'}
          </p>
        </div>
      </div>
    </div>
  );
}

// ===== FEATURE BENTO GRID =====
function FeatureBento() {
  const features = [
    {
      title: 'Adaptive Mock Tests',
      desc: 'Simulasi ujian JLPT dengan format dan waktu yang identik dengan ujian sesungguhnya. Timer, navigasi soal, dan sistem penilaian terstandarisasi.',
      icon: <BookOpen className="w-8 h-8" />,
      image: '/assets/study-desk.jpg',
      large: true
    },
    {
      title: 'Performance Analytics',
      desc: 'Pelacakan skor detail per-section dengan grafik perkembangan dan identifikasi area lemah.',
      icon: <BarChart3 className="w-6 h-6" />,
      image: '/assets/analytics.jpg',
      large: false
    },
    {
      title: 'Community Leaderboard',
      desc: 'Bersaing dengan pelajar lain, lihat peringkat, dan tetap termotivasi.',
      icon: <Users className="w-6 h-6" />,
      image: '/assets/leaderboard.jpg',
      large: false
    }
  ];

  return (
    <section className="py-24 px-6" style={{ background: '#f7f5f0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Fitur Platform</p>
          <h2 className="text-4xl md:text-5xl font-serif" style={{ color: '#1a1a1a', lineHeight: 1.2 }}>
            Semua yang kamu butuhkan<br />untuk lulus JLPT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large card */}
          <div className={`paper-card row-span-2 p-8 flex flex-col ${features[0].large ? 'min-h-[480px]' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg" style={{ background: 'rgba(230, 57, 70, 0.1)' }}>
                <span className="text-vermillion">{features[0].icon}</span>
              </div>
              <h3 className="text-2xl font-serif">{features[0].title}</h3>
            </div>
            <p className="text-sumi mb-6 leading-relaxed">{features[0].desc}</p>
            <img src={features[0].image} alt={features[0].title} className="mt-auto rounded-lg w-full h-64 object-cover" />
          </div>

          {/* Stacked cards */}
          {features.slice(1).map((feature, i) => (
            <div key={i} className="paper-card p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(29, 53, 87, 0.1)' }}>
                  <span className="text-indigo">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-serif">{feature.title}</h3>
              </div>
              <p className="text-sumi mb-4 leading-relaxed text-sm">{feature.desc}</p>
              <img src={feature.image} alt={feature.title} className="mt-auto rounded-lg w-full h-36 object-cover" />
            </div>
          ))}
        </div>

        {/* Additional feature pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: <Headphones className="w-5 h-5" />, label: 'Listening Section' },
            { icon: <Brain className="w-5 h-5" />, label: 'Grammar Analysis' },
            { icon: <Flame className="w-5 h-5" />, label: 'Study Streak' },
            { icon: <BookOpen className="w-5 h-5" />, label: 'Kanji Flashcards' },
          ].map((item, i) => (
            <div key={i} className="paper-card p-4 flex items-center gap-3 cursor-pointer">
              <span className="text-sumi">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PRICING SECTION =====
function PricingSection() {
  const navigate = useNavigate();
  const plans = [
    {
      name: 'N5 Starter',
      price: 'Gratis',
      period: '',
      description: 'Coba platform dan mulai perjalanan JLPT-mu',
      features: ['5 Try Out N5', 'Analisis Dasar', 'Review Soal', 'Akses Komunitas'],
      cta: 'Mulai Gratis',
      highlighted: false
    },
    {
      name: 'N4 / N3 Scholar',
      price: 'Rp 120.000',
      period: '/ bulan',
      description: 'Untuk pelajar yang serius naik level',
      features: ['Semua Try Out N5 & N4', '10 Try Out N3', 'Analisis Detail per Section', 'Deteksi Kelemahan', 'Rekomendasi Belajar', 'Leaderboard'],
      cta: 'Berlangganan',
      highlighted: true
    },
    {
      name: 'N2 / N1 Mastery',
      price: 'Rp 250.000',
      period: '/ bulan',
      description: 'Akses penuh untuk semua level JLPT',
      features: ['Semua Try Out N5-N1', 'Analisis AI Lanjutan', 'Grammar & Kanji Deep Dive', 'Sertifikat Digital', 'Prioritas Support', 'Download Materi'],
      cta: 'Jadi Master',
      highlighted: false
    }
  ];

  return (
    <section className="py-24 px-6" style={{ background: '#f7f5f0' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Harga</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#1a1a1a' }}>
            Investasi untuk Masa Depanmu
          </h2>
          <p className="text-sumi max-w-xl mx-auto">Pilih paket yang sesuai dengan target JLPT-mu. Bisa upgrade atau downgrade kapan saja.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'bg-white shadow-xl border-t-4'
                  : 'bg-white/60 border'
              }`}
              style={plan.highlighted ? { borderTopColor: '#e63946' } : { borderColor: 'rgba(26,26,26,0.1)' }}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#e63946' }}>
                  Paling Populer
                </span>
              )}
              <h3 className="text-xl font-serif mb-2">{plan.name}</h3>
              <p className="text-sumi text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ color: '#1a1a1a' }}>{plan.price}</span>
                <span className="text-sumi">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#e63946' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/dashboard')}
                className={`w-full py-3 rounded-full font-medium transition-all ${
                  plan.highlighted
                    ? 'btn-vermillion'
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== NAVBAR =====
function Navbar({ transparent }: { transparent: boolean }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = transparent && !scrolled ? 'bg-transparent' : 'bg-canvas/90 backdrop-blur-md border-b';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`} style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="text-xs font-bold tracking-widest" style={{ color: '#1a1a1a' }}>
          NIHONGO
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('/')} className="text-sm hover:text-vermillion transition-colors">Beranda</button>
          <button onClick={() => navigate('/dashboard')} className="text-sm hover:text-vermillion transition-colors">Dashboard</button>
          <button onClick={() => navigate('/pricing')} className="text-sm hover:text-vermillion transition-colors">Harga</button>
          <button onClick={() => navigate('/dashboard')} className="btn-vermillion text-sm py-2 px-6">Mulai Belajar</button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-canvas border-t p-6 space-y-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <button onClick={() => { navigate('/'); setMenuOpen(false); }} className="block w-full text-left">Beranda</button>
          <button onClick={() => { navigate('/dashboard'); setMenuOpen(false); }} className="block w-full text-left">Dashboard</button>
          <button onClick={() => { navigate('/pricing'); setMenuOpen(false); }} className="block w-full text-left">Harga</button>
          <button onClick={() => { navigate('/dashboard'); setMenuOpen(false); }} className="btn-vermillion w-full">Mulai Belajar</button>
        </div>
      )}
    </nav>
  );
}

// ===== FOOTER =====
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="py-20 px-6 border-t" style={{ background: '#f7f5f0', borderColor: 'rgba(26,26,26,0.1)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-serif mb-16" style={{ color: '#1a1a1a', opacity: 0.1 }}>
          Let's Study.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-sumi">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/dashboard')} className="hover:text-vermillion transition-colors">Dashboard</button></li>
              <li><button onClick={() => navigate('/mocktest/N5')} className="hover:text-vermillion transition-colors">Try Out</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-vermillion transition-colors">Harga</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-sumi">Sumber Daya</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-sumi">Blog JLPT</span></li>
              <li><span className="text-sumi">Tips Belajar</span></li>
              <li><span className="text-sumi">Jadwal Ujian</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-sumi">Komunitas</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-sumi">Discord</span></li>
              <li><span className="text-sumi">Instagram</span></li>
              <li><span className="text-sumi">YouTube</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-sumi">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-sumi">Kebijakan Privasi</span></li>
              <li><span className="text-sumi">Syarat & Ketentuan</span></li>
              <li><span className="text-sumi">Hubungi Kami</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-xs text-sumi" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          &copy; 2025 NihonGo. Semua hak dilindungi. Dibuat dengan untuk pelajar Indonesia.
        </div>
      </div>
    </footer>
  );
}

// ===== MAIN LANDING PAGE =====
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroCanvas />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="glass-card p-10 md:p-16 rounded-lg">
            <p className="section-label mb-6">Platform Try Out JLPT #1 Indonesia</p>
            <h1 className="text-5xl md:text-7xl font-serif mb-6" style={{ color: '#1a1a1a', lineHeight: 1.1, letterSpacing: '-2px' }}>
              Master the JLPT
            </h1>
            <p className="text-lg text-sumi mb-8 max-w-lg mx-auto leading-relaxed">
              Simulasi ujian, analisis real-time, dan jalur belajar adaptif untuk N5 hingga N1. 
              Dirancang khusus untuk pelajar Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/dashboard')} className="btn-vermillion">
                Mulai Gratis
              </button>
              <button onClick={() => navigate('/pricing')} className="btn-outline">
                Lihat Harga
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-xs text-sumi tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-sumi to-transparent" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-6 border-y" style={{ background: '#f7f5f0', borderColor: 'rgba(26,26,26,0.1)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '1.200+', label: 'Soal Tersedia' },
            { value: '50+', label: 'Try Out N5-N3' },
            { value: '10.000+', label: 'Pelajar Aktif' },
            { value: '85%', label: 'Tingkat Kelulusan' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold font-serif" style={{ color: '#1a1a1a' }}>{stat.value}</div>
              <div className="text-xs text-sumi mt-1 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kanji Scroll */}
      <KanjiScrollSection />

      {/* Feature Bento */}
      <FeatureBento />

      {/* How It Works */}
      <section className="py-24 px-6" style={{ background: '#1a1a1a' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Cara Kerja</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              3 Langkah Menuju<br />Sertifikat JLPT
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pilih Level', desc: 'Pilih level JLPT targetmu: N5 untuk pemula, N4, atau N3 untuk intermediate.' },
              { step: '02', title: 'Ikuti Try Out', desc: 'Kerjakan soal dalam kondisi mirip ujian sesungguhnya dengan timer dan format standar.' },
              { step: '03', title: 'Analisis & Perbaiki', desc: 'Lihat analisis detail, identifikasi kelemahan, dan fokus belajar pada area yang perlu ditingkatkan.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-serif mb-4" style={{ color: '#e63946', opacity: 0.3 }}>{item.step}</div>
                <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: '#f7f5f0' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: '#1a1a1a' }}>
            Siap untuk Lulus JLPT?
          </h2>
          <p className="text-sumi mb-8 leading-relaxed">
            Bergabung dengan ribuan pelajar Indonesia yang telah berhasil melewati ujian JLPT 
            dengan bantuan platform kami.
          </p>
          <button onClick={() => navigate('/dashboard')} className="btn-vermillion text-lg px-10 py-4">
            Mulai Try Out Gratis
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
