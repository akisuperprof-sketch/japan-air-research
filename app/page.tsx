/**
 * japanAir-research株式会社 コーポレートサイト
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
  FileText
} from "lucide-react";

export default function JapanAirResearchHomepage() {
  const businessItems = [
    {
      title: "空気環境改善技術の研究開発",
      text: "空気環境改善技術、イオン発生技術、VOC分解技術の研究開発を通じて、次世代の空気ソリューションを創出します。",
      icon: <FlaskConical className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "製品企画・製造・販売",
      text: "空気制御装置・空気浄化装置の企画、製造、販売までを見据えた技術基盤を構築します。",
      icon: <Cpu className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "医療・歯科向け空気環境事業",
      text: "医療機関・歯科医院に特化した空気環境改善事業を展開し、高い安全性と快適性を提供します。",
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "AI空気品質管理システム",
      text: "AIを活用した空気品質管理システムの開発により、可視化・最適制御・運用高度化を実現します。",
      icon: <Wind className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "知的財産・技術ライセンス",
      text: "知的財産権の取得、保有、運用を行い、技術ライセンス事業によるロイヤリティ収益を拡大します。",
      icon: <FileText className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "投資・海外事業展開",
      text: "子会社の株式保有及び経営管理、投資事業、海外現地法人の設立を通じて事業拡大を推進します。",
      icon: <Globe2 className="w-6 h-6 text-sky-600" />,
    },
  ];

  const steps = [
    "独自技術の研究・知財化",
    "パートナー企業へ技術提供",
    "製品・サービスへの実装",
    "販売実績に応じたロイヤリティ収入",
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <p className="text-xs font-bold tracking-[0.25em] text-sky-800 uppercase">Japan Air Research</p>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-tight">研究開発・知財・ライセンス・海外展開</p>
          </motion.div>
          <nav className="hidden gap-8 text-sm font-semibold text-slate-600 md:flex">
            {["business", "model", "global", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="transition-all hover:text-sky-700 relative group">
                {item === "business" ? "事業内容" : item === "model" ? "収益モデル" : item === "global" ? "海外展開" : "お問い合わせ"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-air-tech.png"
            alt="Advanced Air Technology Hero"
            fill
            className="object-cover opacity-15 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white/80 to-cyan-50/50" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-sky-700 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Ion Technology Holding Company
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                空気技術の<span className="text-sky-800">中核</span>を担い、
                <span className="block mt-2 bg-gradient-to-r from-sky-700 to-cyan-600 bg-clip-text text-transparent italic">
                  世界へ展開。
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 font-medium">
                japanAir-research株式会社は、Airfutureの心臓部であるイオン発生技術を軸に、
                技術提供・ライセンス・知財運用・海外展開を推進する研究開発型企業です。
                パートナー企業への技術供与とロイヤリティモデルにより、持続的な成長を実現します。
              </p>
              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="#business"
                  className="group relative flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-2xl transition-all hover:bg-slate-800 hover:-translate-y-1"
                >
                  事業内容を見る
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-200 bg-white/50 px-8 py-4 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all hover:bg-white hover:border-slate-300 hover:-translate-y-1"
                >
                  お問い合わせ
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {strengths.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -8 }}
                    className={`glass-card rounded-5xl p-8 hover:bg-white transition-all duration-500 ${index % 2 === 1 ? "sm:mt-12" : ""}`}
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest text-sky-500 mb-2">{item.label}</p>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 font-normal">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 -z-10 w-64 h-64 bg-sky-200/30 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-12 -left-12 -z-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-[100px] animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-12 mb-20 lg:px-8">
        <motion.div 
          {...fadeIn}
          className="grid gap-8 rounded-5xl bg-slate-950 p-10 text-white lg:grid-cols-4 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Wind className="w-32 h-32 text-sky-500" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-2">Our Mission</p>
            <h2 className="text-3xl font-extrabold leading-tight">世界の空気環境を、<br/>技術で変える。</h2>
          </div>
          <div className="lg:pl-8 border-l border-white/10">
            <p className="text-4xl font-black text-sky-500/50">01</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">研究開発による<br/>独自技術の創出</p>
          </div>
          <div className="lg:pl-8 border-l border-white/10">
            <p className="text-4xl font-black text-sky-500/50">02</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">ライセンスによる<br/>強固な収益基盤</p>
          </div>
          <div className="lg:pl-8 border-l border-white/10">
            <p className="text-4xl font-black text-sky-500/50">03</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">現地法人を通じた<br/>グローバル市場展開</p>
          </div>
        </motion.div>
      </section>

      <section id="business" className="bg-slate-50/50 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10">
          <Image src="/business-research.png" alt="Business Decor" width={600} height={600} className="opacity-5 blur-sm" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-sky-600 uppercase">What We Do</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">事業内容</h2>
            <div className="h-1.5 w-20 bg-sky-600 mt-6 rounded-full" />
            <p className="mt-8 text-xl leading-relaxed text-slate-600 font-medium">
              定款に基づく事業領域を、研究・技術・知財・投資・グローバル展開の5つの柱で推進します。
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
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(12, 74, 110, 0.08)" }}
                className="group flex flex-col rounded-5xl border border-slate-200 bg-white p-10 transition-all duration-300"
              >
                <div className="mb-8 p-4 rounded-3xl bg-slate-50 group-hover:bg-sky-50 transition-colors inline-block w-fit">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">{item.title}</h3>
                <p className="mt-6 text-base leading-relaxed text-slate-600 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="model" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeIn}>
              <p className="text-sm font-bold tracking-[0.3em] text-sky-600 uppercase">Royalty Model</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
                技術提供とロイヤリティで、<br />
                継続的な収益基盤を構築
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-600 font-medium">
                japanAir-research株式会社は、自社で研究開発したイオン発生技術をパートナー企業へ提供し、
                製品化・事業化を支援します。導入企業からは契約に基づきロイヤリティを受領し、
                技術の普及と収益性を両立させるモデルを採用します。
              </p>
              <div className="mt-10 p-8 rounded-5xl bg-sky-50/50 border border-sky-100 italic font-medium text-sky-800">
                『高度な研究成果を社会実装し、知財としての価値を最大化します。』
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative rounded-5xl overflow-hidden shadow-2xl group"
            >
              <Image src="/royalty-flow.png" alt="Royalty Business Flow" width={800} height={600} className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/40 p-10 flex flex-col justify-end backdrop-blur-[2px]">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <motion.div 
                      key={step} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-6"
                    >
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950 shadow-xl">
                        {index + 1}
                      </div>
                      <p className="text-lg font-bold text-white tracking-wide">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="global" className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/global-network.png" alt="Global Network" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeIn}>
              <p className="text-sm font-bold tracking-[0.3em] text-sky-400 uppercase">Global Expansion</p>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl leading-[1.1]">
                アメリカ・東南アジアへ。<br />
                世界各国市場への展開
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-slate-400 font-medium">
                海外進出においては、当社が出資する形で現地法人を設立し、
                各国の市場特性に合わせた事業展開を行います。技術・知財・経営管理機能を本社が担い、
                現地法人が販売・導入・パートナー開拓を推進する体制を構築します。
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                { title: "アメリカ市場", text: "医療、歯科、ウェルネス分野など、高付加価値市場への戦略的展開。" },
                { title: "東南アジア市場", text: "急速成長を続ける新興国市場に対し、現地ニーズに合致したソリューション。" },
                { title: "持株・経営体制", text: "子会社の経営管理を通じ、グローバルで一貫した戦略とブランド運営を統括。", span: true }
              ].map((card, idx) => (
                <motion.div 
                  key={card.title} 
                  variants={fadeIn}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className={`rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors ${card.span ? "sm:col-span-2" : ""}`}
                >
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400 font-medium">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="rounded-5xl border border-slate-200 bg-slate-50 p-12 lg:p-20 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 blur-[100px] -z-10" />
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <p className="text-sm font-bold tracking-widest text-sky-600 uppercase">Value Proposition</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">当社が目指す価値</h2>
              </div>
              <div className="lg:col-span-2 grid gap-6 sm:grid-cols-3">
                {[
                  { label: "技術", title: "研究起点の差別化", text: "模倣困難なコア技術" },
                  { label: "収益", title: "継続型収益基盤", text: "安定したストック収益" },
                  { label: "展開", title: "国内外の多面展開", text: "グローバル・ハブ" }
                ].map((item) => (
                  <div key={item.title} className="rounded-4xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                      <CheckCircle2 className="w-5 h-5 text-sky-600 mb-4" />
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900 leading-snug">{item.title}</p>
                    </div>
                    <p className="mt-4 text-xs font-bold text-sky-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 grayscale pointer-events-none">
          <Image src="/contact-corporate-bg.png" alt="Contact Background" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeIn}>
              <div className="inline-block p-2 rounded-2xl bg-sky-500/10 mb-6">
                <Mail className="w-8 h-8 text-sky-400" />
              </div>
              <p className="text-sm font-bold tracking-[0.3em] text-sky-400 uppercase">Contact Us</p>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
                技術提携・事業提携・<br />投資に関するご相談
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-slate-400 font-medium max-w-md">
                技術提供、ライセンス契約、海外展開、共同研究、資本提携に関するお問い合わせを承っております。
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="glass-card !bg-white/5 rounded-5xl border-white/10 p-10 lg:p-14 backdrop-blur-xl shadow-2xl"
            >
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Company Name</p>
                  <p className="text-2xl font-black text-white">japanAir-research株式会社</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Service scope</p>
                  <p className="text-lg font-bold text-slate-200 leading-relaxed">技術導入 / ライセンス / 共同研究 / <br/>海外展開 / 投資提携</p>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <div className="flex flex-wrap gap-5">
                    <a 
                      href="mailto:info@example.com" 
                      className="group flex items-center gap-3 rounded-2xl bg-sky-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-sky-500 hover:-translate-y-1 shadow-lg shadow-sky-900/40"
                    >
                      メールで問い合わせる
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:-translate-y-1 backdrop-blur"
                    >
                      お問い合わせフォーム
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-xs font-bold tracking-widest text-white uppercase">Japan Air Research</p>
              <p className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">© 2024 Japan Air Research Co., Ltd. All Rights Reserved.</p>
            </div>
            <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
