"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [remoteRisk, setRemoteRisk] = useState(80);
  const [likelyRisk, setLikelyRisk] = useState(20);
  const [catastrophicRisk, setCatastrophicRisk] = useState(95);

  const handleReset = () => {
    setRemoteRisk(80);
    setLikelyRisk(20);
    setCatastrophicRisk(95);
  };

  return (
    <>


<nav className="hidden md:flex flex-col h-full w-64 border-r border-slate-mid/10 bg-surface-container-low dark:bg-surface-dim fixed left-0 top-0 z-40 pt-16">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-6">
<img src="/logo.svg" alt="PwC Logo" className="h-10 w-auto object-contain" />
<div>
<h2 className="text-headline-md font-headline-md font-bold text-on-surface">Risk Analytics</h2>
<p className="text-label-sm font-label-sm text-secondary">Suite v4.2</p>
</div>
</div>
<button className="w-full bg-pwc-orange text-white py-2 px-4 rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors duration-200">Export Report</button>
</div>
<ul className="flex-1 px-4 space-y-1">
<li className="">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined">strategy</span>
<span className="text-label-sm font-label-sm">Risk Strategy</span>
</Link>
</li>
<li className="">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/optimizer">
<span className="material-symbols-outlined">query_stats</span>
<span className="text-label-sm font-label-sm">Program Optimizer</span>
</Link>
</li>
<li className="">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/loss-analysis">
<span className="material-symbols-outlined">analytics</span>
<span className="text-label-sm font-label-sm">Loss Analysis</span>
</Link>
</li>
<li className="">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/captive-feasibility">
<span className="material-symbols-outlined">shield</span>
<span className="text-label-sm font-label-sm">Captive Feasibility</span>
</Link>
</li>
<li className="">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/portfolio">
<span className="material-symbols-outlined">insights</span>
<span className="text-label-sm font-label-sm">Portfolio Insights</span>
</Link>
</li>
</ul>
<ul className="px-4 pb-6 space-y-1 border-t border-slate-mid/10 pt-4">
<li className="">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined">help</span>
<span className="text-label-sm font-label-sm">Support</span>
</Link>
</li>
<li className="">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined">logout</span>
<span className="text-label-sm font-label-sm">Sign Out</span>
</Link>
</li>
</ul>
</nav>

<main className="flex-1 md:ml-64 flex flex-col min-h-screen">

<header className="flex justify-between items-center w-full px-gutter h-16 sticky top-0 z-50 border-b border-slate-mid/10 bg-surface dark:bg-surface-container-high md:hidden">
<img src="/logo.svg" alt="PwC Logo" className="h-8 w-auto object-contain" />
<div className="flex gap-4 items-center text-primary dark:text-primary-fixed-dim">
<button className="hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-colors duration-200 p-2 rounded-full cursor-pointer active:opacity-80 transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-colors duration-200 p-2 rounded-full cursor-pointer active:opacity-80 transition-all">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full border border-slate-mid/20 bg-surface-container flex items-center justify-center text-secondary cursor-pointer"><span className="material-symbols-outlined text-[20px]">person</span></div>
</div>
</header>

<div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full space-y-12">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-display-lg font-display-lg text-on-surface mb-2">Risk Strategy Overview</h1>
<p className="text-body-lg font-body-lg text-secondary">Optimize your risk transfer vs. retention posture based on current market conditions.</p>
</div>
<div className="flex gap-3">
<button onClick={handleReset} className="px-4 py-2 border border-outline text-on-surface rounded hover:bg-surface-container-low font-label-sm text-label-sm transition-colors">Reset Scenarios</button>
<button className="px-4 py-2 bg-pwc-orange text-white rounded hover:bg-primary-container font-label-sm text-label-sm transition-colors">Apply Strategy</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="col-span-1 lg:col-span-2 bg-white rounded-xl border border-slate-mid/10 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-pwc-orange">account_balance</span>
<h3 className="text-headline-md font-headline-md text-on-surface">Current Strategy: Moderate Retention</h3>
</div>
<p className="text-body-md font-body-md text-secondary mb-6 max-w-2xl">
                        Your current program favors retaining predictable, high-frequency losses while transferring severity risk above $5M. Market conditions suggest optimizing the buffer layer ( $1M - $5M ) could yield a 12% premium reduction.
                    </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Total Retained</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-on-surface">$12.5M</p>
</div>
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Total Transferred</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-on-surface">$50.0M</p>
</div>
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Est. Premium</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-on-surface">$4.2M</p>
</div>
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Implied TCOR</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-pwc-orange">$17.1M</p>
</div>
</div>
</div>

<div className="col-span-1 bg-white rounded-xl border border-slate-mid/10 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col">
<h3 className="text-headline-md font-headline-md text-on-surface mb-6">Risk Tolerance</h3>
<div className="space-y-6 flex-1">

<div>
<div className="flex justify-between mb-2">
<label className="text-label-sm font-label-sm text-on-surface">Remote Risk (&lt;10% Prob)</label>
<span className="text-label-sm font-label-sm font-tabular-nums text-secondary">High Transfer</span>
</div>
<input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value={remoteRisk} onChange={(e) => setRemoteRisk(Number(e.target.value))} />
<div className="flex justify-between mt-1 text-[10px] text-slate-mid">
<span className="">Retain All</span>
<span className="">Transfer All</span>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-label-sm font-label-sm text-on-surface">Likely Risk (&gt;50% Prob)</label>
<span className="text-label-sm font-label-sm font-tabular-nums text-secondary">High Retention</span>
</div>
<input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value={likelyRisk} onChange={(e) => setLikelyRisk(Number(e.target.value))} />
<div className="flex justify-between mt-1 text-[10px] text-slate-mid">
<span className="">Retain All</span>
<span className="">Transfer All</span>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-label-sm font-label-sm text-on-surface">Catastrophic Risk</label>
<span className="text-label-sm font-label-sm font-tabular-nums text-secondary">Max Transfer</span>
</div>
<input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value={catastrophicRisk} onChange={(e) => setCatastrophicRisk(Number(e.target.value))} />
<div className="flex justify-between mt-1 text-[10px] text-slate-mid">
<span className="">Retain All</span>
<span className="">Transfer All</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-mid/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="p-6 border-b border-slate-mid/10 flex justify-between items-center bg-surface-gray">
<h3 className="text-headline-md font-headline-md text-on-surface">ECOR Options Comparison</h3>
<button className="text-pwc-orange hover:text-primary-container text-label-sm font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm">download</span> Export CSV
                    </button>
</div>
<div className="overflow-x-auto table-scroll">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container-low text-label-sm font-label-sm text-secondary uppercase tracking-wider">
<th className="p-4 border-b border-slate-mid/10 font-semibold w-1/4">Metric</th>
<th className="p-4 border-b border-slate-mid/10 font-semibold">Current Program</th>
<th className="p-4 border-b border-slate-mid/10 font-semibold bg-pwc-orange/5 border-l border-pwc-orange/20 text-pwc-orange">Option A (Aggressive Ret.)</th>
<th className="p-4 border-b border-slate-mid/10 font-semibold">Option B (Conservative)</th>
</tr>
</thead>
<tbody className="font-tabular-nums text-tabular-nums text-on-surface">
<tr className="border-b border-slate-mid/5 hover:bg-surface-gray/50 transition-colors">
<td className="p-4 font-body-md text-secondary">Primary Limit</td>
<td className="p-4">$5,000,000</td>
<td className="p-4 bg-pwc-orange/5 border-l border-pwc-orange/20">$10,000,000</td>
<td className="p-4">$2,000,000</td>
</tr>
<tr className="border-b border-slate-mid/5 bg-surface-gray/30 hover:bg-surface-gray/80 transition-colors">
<td className="p-4 font-body-md text-secondary">Premium</td>
<td className="p-4">$4,200,000</td>
<td className="p-4 bg-pwc-orange/5 border-l border-pwc-orange/20 text-green-700">$3,150,000</td>
<td className="p-4 text-pwc-red">$5,800,000</td>
</tr>
<tr className="border-b border-slate-mid/5 hover:bg-surface-gray/50 transition-colors">
<td className="p-4 font-body-md text-secondary">Expected Retained Losses</td>
<td className="p-4">$12,500,000</td>
<td className="p-4 bg-pwc-orange/5 border-l border-pwc-orange/20 text-pwc-red">$14,200,000</td>
<td className="p-4 text-green-700">$10,100,000</td>
</tr>
<tr className="border-b border-slate-mid/5 bg-surface-gray/30 hover:bg-surface-gray/80 transition-colors">
<td className="p-4 font-body-md text-secondary">Collateral Requirement</td>
<td className="p-4">$6,000,000</td>
<td className="p-4 bg-pwc-orange/5 border-l border-pwc-orange/20">$8,500,000</td>
<td className="p-4">$4,500,000</td>
</tr>
<tr className="hover:bg-surface-gray/50 transition-colors font-bold text-headline-md">
<td className="p-4 text-on-surface">Total ECOR</td>
<td className="p-4">$22,700,000</td>
<td className="p-4 bg-pwc-orange/10 border-l border-pwc-orange/30 text-pwc-orange">$25,850,000</td>
<td className="p-4">$20,400,000</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="h-16"></div> 
</div>
</main>



    </>
  );
}
