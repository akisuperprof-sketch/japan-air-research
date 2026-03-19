/**
 * JapanAir-Research株式会社 コーポレートサイト
 * プロフェッショナル・最適化版: 演出の整理と保守性の向上
 */
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Wind, 
  ShieldCheck, 
  Globe2, 
  FlaskConical, 
  Cpu, 
  Briefcase, 
  ArrowRight,
  CheckCircle2,
  Mail,
  FileText,
  MousePointer2,
  Lock,
  Search,
  Zap,
  Award,
  Network,
  MapPin
} from "lucide-react";

// 標準のアニメーション設定
const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

// スプラッシュ画面
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-48 h-48"
      >
        <Image src="/logo-splash.png" alt="Splash Loading Logo" fill className="object-contain" priority />
      </motion.div>
    </motion.div>
  );
};

// 空気流動演出
const AirFlowVisual = ({ intensity = 0.2 }: { intensity?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-sky-200/15 rounded-full blur-[100px] animate-orb" 
        style={{ opacity: intensity }}
      />
      <div 
        className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-blue-100/10 rounded-full blur-[80px] animate-orb-reverse" 
        style={{ opacity: intensity }}
      />
      <svg className="absolute top-1/3 left-0 w-full h-1/2 opacity-[0.04] hidden sm:block" viewBox="0 0 1000 400" preserveAspectRatio="none">
        <path d="M-100,200 Q200,80 500,200 T1100,200" fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-300 animate-air-path" />
        <path d="M-100,300 Q300,180 450,300 T1050,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-300 animate-air-path" style={{ animationDelay: '-8s' }} />
      </svg>
    </div>
  );
};

export default function JapanAirResearchHomepage() {
  const [loading, setLoading] = useState(true);

  const businessItems = [
    {
      label: "R&D",
      title: "空気環境改善技術の研究開発",
      text: "空気環境改善技術、イオン発生技術、VOC分解技術の研究開発を通じて、次世代の空気ソリューションを創出します。",
      icon: <FlaskConical className="w-5 h-5 text-sky-600" />,
    },
    {
      label: "MANUFACTURING",
      title: "製品企画・製造・販売",
      text: "空気制御装置・空気浄化装置の企画、製造、販売までを見据えた技術基盤を構築します。",
      icon: <Cpu className="w-5 h-5 text-sky-600" />,
    },
    {
      label: "MEDICAL",
      title: "医療・歯科向け空気環境事業",
      text: "医療機関・歯科医院に特化した空気環境改善事業を展開し、高い安全性と快適性を提供します。",
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
    },
    {
      label: "AI SYSTEM",
      title: "AI空気品質管理システム",
      text: "AIを活用した空気品質管理システムの開発により、可視化・最適制御・運用高度化を実現します。",
      icon: <Wind className="w-5 h-5 text-sky-600" />,
    },
    {
      label: "LICENSE",
      title: "知的財産・技術ライセンス",
      text: "知的財産権の取得、保有、運用を行い、技術ライセンス事業によるロイヤリティ収益を拡大します。",
      icon: <FileText className="w-5 h-5 text-sky-600" />,
    },
    {
      label: "INVESTMENT",
      title: "投資・海外事業展開",
      text: "子会社の株式保有及び経営管理、投資事業、海外現地法人の設立を通じて事業拡大を推進します。",
      icon: <Globe2 className="w-5 h-5 text-sky-600" />,
    },
  ];

  const benefits = [
    { title: "高度な研究資産の供与", desc: "長年の研究で培われた独自のイオン発生技術を、貴社製品に即座に組み込むことが可能です。", icon: <FlaskConical className="w-6 h-6 text-sky-500" /> },
    { title: "強固な技術競争優位", desc: "特許ポートフォリオを背景にした技術供与により、競合に対する明確な差別化を実現します。", icon: <Award className="w-6 h-6 text-sky-500" /> },
    { title: "グローバルな並走支援", desc: "北米・東南アジアの現地拠点と連携し、海外市場への導入・展開をサポートします。", icon: <Network className="w-6 h-6 text-sky-500" /> },
    { title: "持続的なR&D成果共有", desc: "次世代のVOC分解技術やAI制御など、当社の最新研究成果を優先的に共有します。", icon: <Zap className="w-6 h-6 text-sky-500" /> }
  ];

  const companyInfo = [
    { label: "名称", value: "JapanAir-Research株式会社" },
    { label: "所在地", value: "東京都港区芝4-5-12 三田ハイツ901 (TOP Office)" },
    { label: "主要事業", value: "空気環境改善技術のR&D、知財管理、海外直接展開" },
    { label: "目的", value: "気体制御技術の社会実装を通じ、グローバルな健康と快適性に寄与する" }
  ];

  const steps = [
    { title: "独自技術の研究・知財化", desc: "高度な研究成果を特許として権利化" },
    { title: "パートナー企業へ技術提供", desc: "メーカーやサービス事業者へ技術供与" },
    { title: "製品・サービスへの実装", desc: "パートナーを通じた迅速な市場展開" },
    { title: "実績に応じた収益化", desc: "販売利益に応じた継続的なロイヤリティ" },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-sky-50 selection:text-sky-900">
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <header className="fixed top-0 z-50 w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative w-44 h-8">
            <Image src="/logo-yoko.png" alt="Corporate Logo" fill className="object-contain object-left" priority />
          </motion.div>
          <nav className="hidden gap-8 text-[11px] font-black tracking-widest text-slate-500 md:flex">
            {["business", "overview", "benefits", "model", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="transition-all hover:text-sky-700 relative group uppercase">
                {item === "business" ? "事業内容" : item === "overview" ? "概要" : item === "benefits" ? "提携利益" : item === "model" ? "収益" : "窓口"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section: 静かで洗練された第一印象 */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden animate-flow-bg bg-gradient-to-br from-white via-sky-50/20 to-white">
        <AirFlowVisual intensity={0.25} />
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
          <Image src="/hero-air-tech.png" alt="Air Tech Background" fill className="object-cover" priority />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-2 mb-8 rounded-xl border border-sky-100 bg-white/60 px-3 py-1.5 text-[9px] font-black text-sky-700 shadow-sm backdrop-blur uppercase tracking-[0.2em]">
                <span className="h-1 w-1 rounded-full bg-sky-500 animate-pulse"></span>
                Ionization Research & Intellectual Property
              </div>
              <h1 className="text-6xl font-black tracking-tighter text-slate-900 sm:text-7xl lg:text-8xl leading-[0.9] mb-10">
                空気を<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-cyan-600">サイエンス</span><br />する。
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-slate-600 font-medium mb-10 font-sans">
                JapanAir-Research株式会社は、独自開発のイオン発生・VOC分解技術を核とする、
                環境技術ライセンスとグローバル事業展開を推進する研究開発企業です。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-sky-900 hover:-translate-y-1">
                  技術導入・提携のご相談
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:block">
              <div className="relative border border-white/50 bg-white/10 backdrop-blur-2xl rounded-[3rem] p-12 shadow-3xl shadow-slate-200/10 grayscale-[0.2]">
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-sky-600 tracking-widest uppercase">Efficacy Rate</p>
                    <p className="text-3xl font-black text-slate-900">99.9%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-sky-600 tracking-widest uppercase">Base Network</p>
                    <p className="text-3xl font-black text-slate-900">Global</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 会社概要: 整理された情報の提示 */}
      <section id="overview" className="bg-white py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto rounded-[3rem] border border-slate-100 bg-slate-50/50 p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[50%] bg-sky-200/10 rounded-full blur-[80px]" />
            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
              <div className="lg:w-1/4">
                <h2 className="text-3xl font-black text-slate-900 leading-tight">概要</h2>
                <div className="h-0.5 w-8 bg-sky-500 rounded-full mt-4" />
              </div>
              <div className="lg:w-3/4 w-full space-y-6">
                {companyInfo.map((info) => (
                  <div key={info.label} className="border-b border-slate-200 pb-5 group transition-colors hover:border-sky-200">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{info.label}</p>
                    <p className="text-base font-bold text-slate-800 leading-relaxed font-sans">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 提携メリット: カード自体の視認性を優先 */}
      <section id="benefits" className="bg-slate-50/50 py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-2xl mb-20 text-center sm:text-left">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl mb-6">提携メリット</h2>
            <p className="text-lg text-slate-500 font-medium font-sans">Strategic value for sustainable differentiation.</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} {...fadeUp} transition={{ duration: 0.8, delay: idx * 0.1 }} className="flex flex-col sm:flex-row gap-6 rounded-4xl bg-white p-8 shadow-xl shadow-slate-200/20 hover:shadow-2xl transition-all duration-300">
                <div className="p-4 rounded-2xl bg-sky-50 h-fit shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium font-sans">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 事業内容: フェードアップを統一 */}
      <section id="business" className="bg-white py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl mb-8">事業内容</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {businessItems.map((item, idx) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.8, delay: idx * 0.05 }} className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-sky-50 transition-colors">{item.icon}</div>
                  <span className="text-[9px] font-black text-slate-300 tracking-[0.2em]">{item.label}</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 font-medium font-sans">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 収益モデル: 静的、理解優先 */}
      <section id="model" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl mb-10 text-center sm:text-left">収益サイクル。</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-6 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-base font-black text-white">{index + 1}</div>
                    <div>
                      <p className="text-base font-bold text-slate-900 mb-1">{step.title}</p>
                      <p className="text-xs text-slate-500 font-medium font-sans">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-8 border border-slate-100">
              <Image src="/royalty-flow-v2.png" alt="Revenue Flow Diagram" width={800} height={600} className="w-full h-auto object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / 窓口: 演出を最小限に抑え、信頼感を確保 */}
      <footer id="contact" className="bg-slate-950 py-32 text-white relative overflow-hidden animate-flow-bg bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
        <AirFlowVisual intensity={0.12} />
        <div className="absolute inset-0 z-0 opacity-[0.05] grayscale pointer-events-none">
          <Image src="/contact-bg-v2.png" alt="Institutional Liaison Background" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl font-black sm:text-5xl leading-tight mb-10 text-center sm:text-left">提携・投資の窓口。</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {["技術ライセンス導入", "国内外の事業提携", "公的研究・開発支援", "専門型資本提携"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 opacity-60" />
                    <p className="text-sm font-bold text-slate-400 font-sans">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div {...fadeUp} className="rounded-[3rem] border border-white/5 bg-white/5 p-10 lg:p-14 backdrop-blur-2xl shadow-3xl">
              <div className="space-y-10">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 font-sans">Corporate Liaison Office</p>
                  <p className="text-2xl font-black text-white hover:text-sky-400 transition-colors uppercase">JapanAir-Research株式会社</p>
                </div>
                <div className="grid gap-4">
                  <a href="mailto:info@w-c-air.com" className="flex items-center justify-between group rounded-2xl bg-sky-600 px-8 py-5 text-sm font-black text-white transition-all hover:bg-sky-500 hover:-translate-y-1 shadow-2xl">
                    <span>提携・導入のご相談</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="mailto:info@w-c-air.com" className="flex items-center justify-between group rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-sm font-black text-white transition-all hover:bg-white/10 hover:-translate-y-1">
                    <span>その他お問い合わせ</span>
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-40 pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex flex-col items-center sm:items-start max-w-sm mx-auto sm:mx-0">
              <div className="relative w-36 h-8 mb-6 grayscale opacity-60 brightness-200">
                <Image src="/logo-yoko.png" alt="JapanAir-Research Horizontal Logo" fill className="object-contain object-left" />
              </div>
              <p className="text-[10px] text-slate-600 font-bold leading-relaxed italic font-sans text-center sm:text-left">
                Specialized in deep-tech ionization and air quality optimization through long-term R&D. 
                Focused on global implementation through strategic alliances.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 w-full lg:w-auto">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">Office</p>
                </div>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed font-sans">
                  〒108-0014 東京都港区芝4-5-12<br />三田ハイツ901 (TOP Office)
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-3.5 h-3.5 text-sky-500" />
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">Mail</p>
                </div>
                <p className="text-[10px] font-bold text-slate-500 font-sans">info@w-c-air.com</p>
              </div>
            </div>
          </div>
          <p className="mt-20 text-[9px] text-slate-700 font-bold text-center tracking-[0.2em] uppercase">© 2024 JapanAir-Research株式会社. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
