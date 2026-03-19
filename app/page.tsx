/**
 * japanAir-research株式会社 コーポレートサイト
 * プレミアム改善版: 会社概要、提携メリット、背景アニメーションを追加
 */
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  BarChart3,
  Network
} from "lucide-react";

// 背景の空気・イオンの流れを表現する軽量コンポーネント
const AirFlowBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100/30 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-cyan-100/20 rounded-full blur-[100px] animate-float-reverse" />
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-blue-50/20 rounded-full blur-[100px] animate-pulse-slow" />
      
      {/* 流れるライン（CSSアニメーション） */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <filter id="blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <path d="M-100,200 Q200,100 500,250 T1200,150" stroke="currentColor" fill="none" strokeWidth="2" className="text-sky-400 animate-draw-flow" />
        <path d="M-100,500 Q300,400 600,550 T1300,450" stroke="currentColor" fill="none" strokeWidth="1" className="text-cyan-400 animate-draw-flow-delay" />
      </svg>
    </div>
  );
};

export default function JapanAirResearchHomepage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
    {
      title: "高度な研究資産へのアクセス",
      desc: "長年の研究で培われた独自のイオン発生・制御技術を、貴社製品に即座に組み込むことが可能です。",
      icon: <FlaskConical className="w-6 h-6 text-sky-500" />
    },
    {
      title: "知財戦略による競争優位",
      desc: "強固な特許ポートフォリオを背景にした技術供与により、競合他社に対する明確な差別化を実現します。",
      icon: <Award className="w-6 h-6 text-sky-500" />
    },
    {
      title: "グローバル展開の並走支援",
      desc: "北米・東南アジアの現地拠点と連携し、技術面・経営面から海外市場への導入をサポートします。",
      icon: <Network className="w-6 h-6 text-sky-500" />
    },
    {
      title: "継続的な技術アップデート",
      desc: "次世代のVOC分解技術やAI制御など、当社の最新R&D成果を優先的に共有・提供します。",
      icon: <Zap className="w-6 h-6 text-sky-500" />
    }
  ];

  const companyInfo = [
    { label: "商号", value: "japanAir-research株式会社" },
    { label: "主要事業域", value: "空気環境改善技術の研究開発、イオン発生技術の知財管理・ライセンス、海外直接投資事業" },
    { label: "技術ドメイン", value: "高精度イオン制御、揮発性有機化合物(VOC)分解、AI空気品質最適化システム" },
    { label: "グローバル拠点", value: "日本（本社）、北米・東南アジア（現地法人・提携拠点展開予定）" },
    { label: "目的", value: "空気を科学する技術の社会実装を通じ、グローバルな健康と快適性に寄与する" }
  ];

  const steps = [
    { title: "独自技術の研究・知財化", desc: "高度な研究成果を特許として権利化" },
    { title: "パートナー企業へ技術提供", desc: "メーカーやサービス事業者へ技術供与" },
    { title: "製品・サービスへの実装", desc: "パートナーを通じた迅速な市場展開" },
    { title: "実績に応じた収益化", desc: "販売利益に応じた継続的なロイヤリティ" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-sky-100 selection:text-sky-900">
      <AirFlowBackground />
      
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <p className="text-sm font-black tracking-[0.2em] text-sky-900 leading-none mb-1 uppercase">Japan Air Research</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hidden sm:block italic">Leading Ion & Air Flow R&D</p>
          </motion.div>
          <nav className="hidden gap-8 text-[12px] font-black text-slate-600 md:flex">
            {["business", "overview", "benefits", "model", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="transition-all hover:text-sky-700 relative group uppercase tracking-[0.15em]">
                {item === "business" ? "事業内容" : item === "overview" ? "会社概要" : item === "benefits" ? "提携メリット" : item === "model" ? "収益モデル" : "お問い合わせ"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/hero-air-tech.png"
            alt="Hero Visual"
            fill
            className="object-cover opacity-5 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="inline-flex items-center gap-3 mb-8 rounded-2xl border border-sky-100 bg-white/80 px-4 py-2 text-[10px] font-black text-sky-700 shadow-sm backdrop-blur-sm tracking-widest uppercase">
                <span className="flex h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                Professional Air Solution R&D
              </div>
              <h1 className="text-6xl font-black tracking-tighter text-slate-900 sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
                空気を<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-cyan-600">サイエンス</span><br />する。
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-slate-600 font-medium mb-10">
                JapanAir-research株式会社は、独自開発のイオン発生・VOC分解技術を核とした、
                技術ライセンスと海外展開を推進する研究開発型企業です。
                パートナー企業との共創により、空気の質を劇的に向上させます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group relative flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-sky-900 hover:-translate-y-1"
                >
                  技術提携・導入の相談
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#business"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/50 px-8 py-4 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all hover:bg-white hover:-translate-y-1"
                >
                  事業内容を見る
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-sky-100/20 blur-3xl rounded-full" />
              <div className="relative border border-white/50 bg-white/40 backdrop-blur-2xl rounded-[3rem] p-12 shadow-3xl shadow-slate-200/20 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-400/10 rounded-full blur-[60px]" />
                <div className="grid grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-2">
                    <p className="text-xs font-black text-sky-600 tracking-widest uppercase">Precision</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">99.9%</p>
                    <p className="text-[10px] text-slate-500 font-bold leading-tight">VOC Decomposition Accuracy In Lab Conditions</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black text-sky-600 tracking-widest uppercase">Network</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">Global</p>
                    <p className="text-[10px] text-slate-500 font-bold leading-tight">USA, Japan, and Southeast Asia Deployment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-white py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto rounded-[3rem] border border-slate-100 bg-slate-50/50 p-10 lg:p-20 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                <p className="text-sm font-black tracking-[0.3em] text-sky-600 uppercase mb-4">Corporate Overview</p>
                <h2 className="text-4xl font-black text-slate-900 leading-tight">会社概要</h2>
                <div className="h-1 w-10 bg-sky-500 rounded-full mt-6" />
              </div>
              <div className="lg:w-2/3 w-full space-y-8">
                {companyInfo.map((info) => (
                  <div key={info.label} className="border-b border-slate-200 pb-6 group">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-sky-500 transition-colors">
                      {info.label}
                    </p>
                    <p className="text-lg font-bold text-slate-800 leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="bg-slate-50 py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-20">
            <p className="text-sm font-black tracking-[0.3em] text-sky-600 uppercase mb-4">Partnership Benefits</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl mb-8">提携メリット</h2>
            <p className="text-xl leading-relaxed text-slate-600 font-medium">
              JapanAir-researchとの提携は、単なる技術導入に留まらず、貴社の製品価値と市場競争力を最大化するための戦略的投資となります。
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col sm:flex-row gap-8 rounded-4xl bg-white p-10 shadow-xl shadow-slate-200/30 transition-all hover:-translate-y-1 hover:bg-sky-50/10"
              >
                <div className="p-5 rounded-3xl bg-slate-50 group-hover:bg-white transition-colors h-fit shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-sky-800 transition-colors">{benefit.title}</h3>
                  <p className="text-base leading-relaxed text-slate-500 font-medium">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-20 text-center mx-auto">
            <p className="text-sm font-black tracking-[0.3em] text-sky-600 uppercase mb-4">Our Operations</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl mb-8">事業内容</h2>
            <div className="h-1.5 w-16 bg-sky-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {businessItems.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col rounded-4xl border border-slate-100 bg-white p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 rounded-3xl bg-slate-50 group-hover:bg-sky-50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-300 tracking-[0.2em]">{item.label}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="model" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeIn}>
              <p className="text-sm font-black tracking-[0.3em] text-sky-600 uppercase mb-4">Value Cycle</p>
              <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-6xl mb-10">
                技術提供と継続収益。<br />
                持続可能な成長モデル。
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.title} 
                    className="flex gap-6 group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-lg font-black text-white group-hover:bg-sky-700 transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-1">{step.title}</p>
                      <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-10">
              <Image 
                src="/royalty-flow-v2.png" 
                alt="Business Diagram" 
                width={800} 
                height={600} 
                className="w-full h-auto object-contain" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image src="/contact-bg-v2.png" alt="Contact Background" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black tracking-[0.3em] text-sky-400 uppercase mb-6">Strategic Alliance</p>
              <h2 className="text-4xl font-black sm:text-6xl leading-tight mb-10">
                技術提携・投資等、<br />共創のご相談はこちら。
              </h2>
              <p className="text-lg text-slate-400 font-medium mb-12 max-w-md leading-relaxed">
                以下の内容について、専任担当者が技術ドキュメントや実績案をご提示いたします。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {["技術ライセンス導入", "国内外の事業提携・JV", "共同研究・公的研究", "専門型投資スキーム"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 opacity-80" />
                    <p className="text-sm font-bold text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              {...fadeIn}
              className="rounded-5xl border border-white/10 bg-white/5 p-12 lg:p-16 backdrop-blur-2xl shadow-3xl"
            >
              <div className="space-y-12">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Japan Air Research Co., Ltd.</p>
                  <p className="text-3xl font-black text-white hover:text-sky-400 transition-colors cursor-default">japanAir-research株式会社</p>
                </div>
                
                <div className="grid gap-5">
                  <a 
                    href="mailto:info@japanair-research.com" 
                    className="flex items-center justify-between group rounded-3xl bg-sky-600 px-8 py-5 text-sm font-black text-white transition-all hover:bg-sky-500 hover:-translate-y-1 shadow-2xl shadow-sky-900/40"
                  >
                    <span>技術提携・導入の相談</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a 
                    href="mailto:info@japanair-research.com" 
                    className="flex items-center justify-between group rounded-3xl border border-white/20 bg-white/5 px-8 py-5 text-sm font-black text-white transition-all hover:bg-white/10 hover:-translate-y-1 backdrop-blur"
                  >
                    <span>投資・JV設立の相談</span>
                    <Briefcase className="w-4 h-4" />
                  </a>
                  <a 
                    href="mailto:info@japanair-research.com" 
                    className="flex items-center justify-between group rounded-3xl border border-white/20 bg-white/5 px-8 py-5 text-sm font-black text-white transition-all hover:bg-white/10 hover:-translate-y-1 backdrop-blur"
                  >
                    <span>その他のお問い合わせ</span>
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-40 pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex flex-col items-start max-w-xs">
              <p className="text-sm font-black tracking-widest text-white uppercase mb-4">Japan Air Research</p>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed tracking-tight">
                高度な空気科学技術を、持続可能なビジネスモデルを通じて世界へ実装する。
                Airfutureプロジェクト中核知財保有会社。
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 lg:gap-24">
              <div className="space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Section</p>
                <div className="flex flex-col gap-3 text-[11px] font-bold text-slate-500">
                  <a href="#business" className="hover:text-white transition-colors">Business</a>
                  <a href="#overview" className="hover:text-white transition-colors">Overview</a>
                  <a href="#model" className="hover:text-white transition-colors">Revenue Cycle</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Legal</p>
                <div className="flex flex-col gap-3 text-[11px] font-bold text-slate-500">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
              <div className="space-y-4 col-span-2 sm:col-span-1">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Contact</p>
                <div className="flex flex-col gap-3 text-[11px] font-bold text-slate-500 leading-relaxed">
                  <p>〒xxx-xxxx <br />東京都所在（本社オフィス）</p>
                  <p>info@japanair-research.com</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-20 text-[10px] text-slate-600 font-bold text-center tracking-[0.2em] uppercase">
            © 2024 Japan Air Research Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
