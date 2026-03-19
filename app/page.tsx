/**
 * japanAir-research株式会社 コーポレートサイト
 * プロフェッショナル改善版: 各セクションの信頼性と視認性を向上
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  Search
} from "lucide-react";

export default function JapanAirResearchHomepage() {
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

  const steps = [
    { title: "独自技術の研究・知財化", desc: "高度な研究成果を特許として権利化" },
    { title: "パートナー企業へ技術提供", desc: "メーカーやサービス事業者へ技術供与" },
    { title: "製品・サービスへの実装", desc: "パートナーを通じた迅速な市場展開" },
    { title: "実績に応じた収益化", desc: "販売利益に応じた継続的なロイヤリティ" },
  ];

  const strengths = [
    {
      label: "Core Technology",
      title: "イオン発生技術",
      text: "Airfutureの性能を支える中核技術として、幅広い製品・市場への応用展開を行います。",
    },
    {
      label: "Business Model",
      title: "技術ライセンス",
      text: "技術提供を通じて、導入企業からロイヤリティ収入を得る収益モデルを構築します。",
    },
    {
      label: "Global Strategy",
      title: "海外現地法人展開",
      text: "アメリカ・東南アジアを中心に、出資による現地法人設立と各国展開を予定しています。",
    },
    {
      label: "IP Strategy",
      title: "知財保有・運用",
      text: "技術資産を知的財産として保有・活用し、長期的な競争優位性を強化します。",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-sky-100 selection:text-sky-900">
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <p className="text-sm font-black tracking-[0.2em] text-sky-900 leading-none mb-1">Japan Air Research</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hidden sm:block">Research · Patent · License · Global</p>
          </motion.div>
          <nav className="hidden gap-8 text-[13px] font-bold text-slate-600 md:flex">
            {["business", "model", "global", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="transition-all hover:text-sky-700 relative group uppercase tracking-widest">
                {item === "business" ? "事業内容" : item === "model" ? "収益モデル" : item === "global" ? "海外展開" : "お問い合わせ"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-air-tech.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-10 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/30 to-white" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-sky-200 bg-white/50 px-5 py-2 text-xs font-black text-sky-700 shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
                ION TECHNOLOGY HOLDING
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-slate-900 sm:text-7xl lg:text-8xl leading-[1] mb-8">
                空気技術の<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-cyan-700">革新を、</span><br />世界市場へ。
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 font-medium mb-10">
                JapanAir-research株式会社は、Airfutureの技術基盤となる「イオン発生技術」を軸に、
                技術ライセンス、海外直接展開、知財運用を垂直統合。
                パートナー企業との提携を通じ、グローバルな空気ソリューションの普及を加速します。
              </p>
              <div className="flex flex-wrap gap-5">
                <a
                  href="#business"
                  className="group relative flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-sky-900 hover:-translate-y-1"
                >
                  事業内容・提携
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all hover:bg-white hover:border-slate-300 hover:-translate-y-1"
                >
                  提携・公的研究のご相談
                </a>
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid gap-6 sm:grid-cols-2">
                {strengths.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`rounded-4xl border border-slate-100 bg-white/60 p-8 shadow-xl shadow-slate-200/20 backdrop-blur-md hover:bg-white transition-all duration-500 ${index % 2 === 1 ? "sm:mt-12" : ""}`}
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 mb-2">{item.label}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div 
          {...fadeIn}
          className="grid gap-8 rounded-5xl bg-slate-950 p-12 text-white lg:grid-cols-4 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-sky-800/20 rounded-full blur-[100px]" />
          <div>
            <p className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-3">Core Philosophy</p>
            <h2 className="text-3xl font-black leading-tight">世界の空気環境を、<br/>研究と実装で変える。</h2>
          </div>
          <div className="lg:pl-10 space-y-4">
            <p className="text-4xl font-black text-white/20">01</p>
            <p className="text-sm font-bold leading-relaxed text-slate-300">模倣困難なコア技術の<br/>研究開発と知財化</p>
          </div>
          <div className="lg:pl-10 space-y-4">
            <p className="text-4xl font-black text-white/20">02</p>
            <p className="text-sm font-bold leading-relaxed text-slate-300">技術提携とライセンスによる<br/>迅速な社会実装</p>
          </div>
          <div className="lg:pl-10 space-y-4">
            <p className="text-4xl font-black text-white/20">03</p>
            <p className="text-sm font-bold leading-relaxed text-slate-300">現地資本とのアライアンスによる<br/>グローバル直接展開</p>
          </div>
        </motion.div>
      </section>

      <section id="business" className="bg-slate-50/50 py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-20">
            <p className="text-sm font-black tracking-[0.3em] text-sky-600 uppercase mb-4">Core Businesses</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl mb-8">事業内容</h2>
            <p className="text-xl leading-relaxed text-slate-600 font-medium">
              定款に基づく研究・技術・海外投資・経営管理の5つの柱を、各市場の特性に合わせて最適化します。
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {businessItems.map((item) => (
              <motion.div 
                key={item.title}
                variants={fadeIn}
                className="group relative flex flex-col rounded-4xl border border-slate-200 bg-white p-10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 rounded-3xl bg-slate-50 group-hover:bg-sky-50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 tracking-[0.2em]">{item.label}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-6">{item.title}</h3>
                <p className="text-base leading-relaxed text-slate-600 font-medium">{item.text}</p>
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-sky-600 text-xs font-bold">
                  詳細を見る <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="model" className="py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeIn}>
              <p className="text-sm font-black tracking-[0.3em] text-sky-600 uppercase mb-4">Business Model</p>
              <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-6xl mb-10">
                技術ライセンスにより、<br />
                持続的な収益基盤を。
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 font-medium mb-12">
                JapanAir-researchは、自社開発のイオン発生技術を国内外の有力メーカーへ供与します。
                契約に基づく一過性のライセンス料だけでなく、製品の普及状況に連動したロイヤリティを受領。
                技術の高い完成度と収益の安定性を両立する独自のモデルです。
              </p>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.title} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
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
            
            <motion.div 
              {...fadeIn}
              className="relative rounded-[3rem] overflow-hidden shadow-3xl group aspect-square lg:aspect-auto"
            >
              <Image 
                src="/royalty-flow-v2.png" 
                alt="Diagram showing the royalty payment flow from technology user to owner" 
                width={800} 
                height={800} 
                className="w-full h-full object-contain p-8 bg-slate-50 transition-all group-hover:scale-105" 
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-2xl border border-slate-200 p-4 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                Schematic Diagram: Licensing Hub
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="global" className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/global-network.png" alt="Global Network Connection" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeIn} className="max-w-xl">
              <p className="text-sm font-black tracking-[0.3em] text-sky-400 uppercase mb-6">Global Expansion</p>
              <h2 className="text-4xl font-black sm:text-6xl leading-[1.1] mb-10">
                北米・東南アジア圏へ。<br />
                持株会社としての資本展開。
              </h2>
              <div className="p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-lg leading-relaxed text-slate-300 font-medium">
                  単なる輸出ではなく、各国のパートナーと現地法人を設立し、資本参加。
                  日本の技術・知財戦略と現地のニーズを融合させ、スピーディーな導入事例の積み上げを推進します。
                </p>
              </div>
            </motion.div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "北米市場 (USA)", text: "ウェルネス、医療、大規模インフラ市場へ。高付加価値モデルを展開。", icon: <ShieldCheck className="w-5 h-5 text-sky-400" /> },
                { title: "東南アジア圏", text: "急拡大する中間層、新興国ニーズへ。BtoBインフラ普及を加速。", icon: <Globe2 className="w-5 h-5 text-sky-400" /> },
                { title: "持株・経営体制", text: "一貫したブランド戦略と技術管理を行うグローバル・ヘッドクォーター機能。", icon: <Lock className="w-5 h-5 text-sky-400" />, span: true }
              ].map((card, idx) => (
                <motion.div 
                  key={card.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className={`rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all ${card.span ? "sm:col-span-2" : ""}`}
                >
                  <div className="mb-6 opacity-80">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400 font-medium">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="rounded-[4rem] border border-slate-100 bg-slate-50/50 p-12 lg:p-24 shadow-sm relative"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/10 blur-[120px] -z-10" />
            <div className="grid gap-16 lg:grid-cols-3">
              <div>
                <p className="text-sm font-black tracking-widest text-sky-600 uppercase mb-4">Our Value</p>
                <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">当社が提供する<br />確かな価値</h2>
                <div className="h-1 w-12 bg-sky-500 rounded-full mb-8" />
                <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                  研究開発を起点とした独自性と、スケーラフルな収益モデル、そしてグローバルハブ機能を一貫して提供します。
                </p>
              </div>
              <div className="lg:col-span-2 grid gap-8 sm:grid-cols-3">
                {[
                  { label: "TECHNOLOGY", title: "研究起点の差別化", text: "模倣困難なコア技術", desc: "Airfutureを支える比類なきイオン生成能力。" },
                  { label: "REVENUE", title: "継続型収益基盤", text: "強固なストック収益", desc: "一時的な販売に留まらない、ライセンスモデル。" },
                  { label: "NETWORK", title: "グローバル・ハブ", text: "国内外の多面展開", desc: "国境を越えた技術提供と現地法人ネットワーク。" }
                ].map((item) => (
                  <div key={item.title} className="rounded-4xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col group transition-all hover:bg-sky-50/10">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 mb-6" />
                    <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-3 uppercase">{item.label}</p>
                    <p className="text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</p>
                    <p className="text-xs font-bold text-sky-700 mb-6">{item.text}</p>
                    <p className="mt-auto text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 grayscale pointer-events-none">
          <Image src="/contact-bg-v2.png" alt="Abstract Contact Section Background" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeIn}>
              <div className="inline-block p-4 rounded-3xl bg-sky-500/10 mb-8">
                <Mail className="w-10 h-10 text-sky-400" />
              </div>
              <p className="text-sm font-black tracking-[0.3em] text-sky-400 uppercase mb-6">Strategic Liaison</p>
              <h2 className="text-4xl font-black sm:text-6xl leading-tight mb-10">
                技術・事業提携、<br />投資に関するご相談
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 max-w-md">
                <div className="flex gap-4 items-start">
                  <Search className="w-5 h-5 text-sky-500 shrink-0 mt-1" />
                  <p className="text-sm font-bold text-slate-300">技術ライセンスの<br />導入検討</p>
                </div>
                <div className="flex gap-4 items-start">
                  <Briefcase className="w-5 h-5 text-sky-500 shrink-0 mt-1" />
                  <p className="text-sm font-bold text-slate-300">国内外での<br />事業提携・合弁</p>
                </div>
                <div className="flex gap-4 items-start">
                  <MousePointer2 className="w-5 h-5 text-sky-500 shrink-0 mt-1" />
                  <p className="text-sm font-bold text-slate-300">共同研究・<br />公的コンソーシアム</p>
                </div>
                <div className="flex gap-4 items-start">
                  <LockedIcon className="w-5 h-5 text-sky-500 shrink-0 mt-1" />
                  <p className="text-sm font-bold text-slate-300">高度専門型<br />投資スキーム</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="rounded-5xl border border-white/10 bg-white/5 p-12 lg:p-16 backdrop-blur-2xl shadow-3xl"
            >
              <div className="space-y-10">
                <div className="group">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Japan Entity</p>
                  <p className="text-3xl font-black text-white group-hover:text-sky-400 transition-colors">japanAir-research株式会社</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300">
                    <Mail className="w-4 h-4 text-sky-500" />
                    <p className="text-lg font-bold">info@japanair-research.com</p>
                  </div>
                </div>
                <div className="pt-10 border-t border-white/10">
                  <div className="flex flex-wrap gap-5">
                    <a 
                      href="mailto:info@japanair-research.com" 
                      className="group flex items-center gap-4 rounded-3xl bg-sky-600 px-10 py-5 text-sm font-black text-white transition-all hover:bg-sky-500 hover:-translate-y-1 shadow-2xl shadow-sky-900/40"
                    >
                      提携・導入の相談をする
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-4 rounded-3xl border border-white/20 bg-white/5 px-10 py-5 text-sm font-black text-white transition-all hover:bg-white/10 hover:-translate-y-1 backdrop-blur"
                    >
                      詳細資料を請求
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-xs font-black tracking-widest text-white uppercase">Japan Air Research</p>
              <p className="mt-2 text-[10px] text-slate-600 font-bold uppercase tracking-tighter italic">Transforming air through research and implementation.</p>
            </div>
            <div className="flex gap-10 text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">© 2024 JAR</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LockedIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
