"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const handleReset = () => {
    // Reset functionality placeholder
  };

  return (
    <>


<nav className="hidden md:flex flex-col h-full w-64 border-r border-slate-mid/10 bg-surface-container-low dark:bg-surface-dim fixed left-0 top-0 z-40 pt-16">
<div className="px-6 mb-8 mt-6">
<div className="flex items-center gap-3 mb-6">
<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" alt="PwC Logo" className="h-10 w-auto object-contain shrink-0" />
<div className="flex flex-col">
<h2 className="text-headline-md font-headline-md font-bold text-on-surface leading-tight text-[18px]">Risk<br/>Analytics</h2>
<p className="text-label-sm font-label-sm text-secondary mt-1">Suite v4.2</p>
</div>
</div>
</div>
<ul className="flex-1 px-4 space-y-1">
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined">strategy</span>
<span className="text-label-sm font-label-sm">Risk Strategy</span>
</Link>
</li>
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/optimizer">
<span className="material-symbols-outlined">query_stats</span>
<span className="text-label-sm font-label-sm">Program Optimizer</span>
</Link>
</li>
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/loss-analysis">
<span className="material-symbols-outlined">analytics</span>
<span className="text-label-sm font-label-sm">Loss Analysis</span>
</Link>
</li>
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/captive-feasibility">
<span className="material-symbols-outlined">shield</span>
<span className="text-label-sm font-label-sm">Captive Feasibility</span>
</Link>
</li>
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/portfolio">
<span className="material-symbols-outlined">insights</span>
<span className="text-label-sm font-label-sm">Portfolio Insights</span>
</Link>
</li>
</ul>
<div className="px-4 pb-4">
<button className="w-full bg-pwc-orange text-white py-2 px-4 rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors duration-200">Export Report</button>
</div>
<ul className="px-4 pb-6 space-y-1 border-t border-slate-mid/10 pt-4">
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined">help</span>
<span className="text-label-sm font-label-sm">Support</span>
</Link>
</li>
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined">logout</span>
<span className="text-label-sm font-label-sm">Sign Out</span>
</Link>
</li>
</ul>
</nav>

<main className="flex-1 md:ml-64 flex flex-col min-h-screen">

<header className="flex justify-between items-center w-full px-gutter h-16 sticky top-0 z-50 border-b border-slate-mid/10 bg-surface dark:bg-surface-container-high md:hidden">
<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" alt="PwC Logo" className="h-8 w-auto object-contain" />
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

<div className="col-span-1 lg:col-span-3 bg-white rounded-xl border border-slate-mid/10 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-pwc-orange">account_balance</span>
<h3 className="text-headline-md font-headline-md text-on-surface">Current Strategy: Moderate Retention</h3>
</div>
<p className="text-body-md font-body-md text-secondary mb-6 max-w-2xl">
                        Your current program features a $25M deductible, retaining significant high-frequency losses while transferring extreme severity risk up to a $3B limit. Analytics suggest that incorporating a Captive layer ($50M) could lower market premiums and optimize your overall Total Cost of Risk.
                    </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Total Retained</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-on-surface">$39M</p>
</div>
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Risk Charge</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-on-surface">$10M</p>
</div>
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Est. Premium</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-on-surface">$24M</p>
</div>
<div className="p-4 bg-surface-gray rounded border border-slate-mid/5">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider mb-1">Implied TCOR</p>
<p className="text-headline-lg font-headline-lg font-tabular-nums text-pwc-orange">$63M</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-6 mt-6">
  <div className="bg-white rounded-xl border border-slate-mid/10 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
    <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Risk Tolerance Levels</h3>
    <div className="text-body-md font-body-md text-secondary space-y-4 mb-8 max-w-5xl">
      <p>
        Risk Tolerance is the maximum acceptable level of unexpected losses an organization is able to absorb. It takes into account internal and external constraints that may apply to the business. Risk Tolerance is expressed in unexpected loss amount by unit of claim and/or per year (aggregate amount). It can also be defined by multi-year periods.
      </p>
    </div>

    {/* Graph Container */}
    <div className="relative w-full h-[450px] mt-16 bg-surface-gray/30 border border-slate-mid/10 rounded-lg p-6 flex flex-col overflow-visible pt-12 pb-4">
       {/* Y-Axis Label */}
       <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-label-sm font-label-sm text-secondary font-bold tracking-widest z-20">
         Probability ▶
       </div>
       
       <div className="ml-12 flex-1 relative flex flex-col">
         {/* Main Chart Area */}
         <div className="flex-1 relative">
           
           {/* SVG Curve */}
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
             <defs>
               <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#D85604" stopOpacity="0.4" />
                 <stop offset="100%" stopColor="#D85604" stopOpacity="0.0" />
               </linearGradient>
             </defs>
             <path 
               d="M 0 400 C 50 400, 100 350, 150 150 C 180 50, 220 50, 250 150 C 300 300, 400 380, 600 390 C 800 400, 1000 400, 1000 400 Z" 
               fill="url(#curveGradient)" 
               stroke="#D85604" 
               strokeWidth="3" 
             />
           </svg>

           {/* Expected cost marker */}
           <div className="absolute bottom-[20px] left-[15%] md:left-[18%] flex flex-col items-center">
             <div className="w-[1px] h-24 bg-slate-400 border-dashed border-l border-slate-400"></div>
             <div className="bg-surface-container-highest px-3 py-2 rounded text-xs text-center border border-slate-mid/20 shadow-sm mt-1 text-secondary leading-tight">
               Annual expected<br/>cost of risk
             </div>
           </div>

           {/* L1 Threshold Line */}
           <div className="absolute top-0 bottom-0 left-[35%] w-0 border-l-2 border-slate-800 border-dashed z-10 flex flex-col items-center">
              <div className="bg-[#111827] text-white text-[11px] font-bold px-3 py-1.5 rounded mt-[-15px] shadow-md whitespace-nowrap">
                 Tolerance level 1
              </div>
              <div className="text-sm font-bold text-on-surface mt-[-40px] absolute whitespace-nowrap">$7M</div>
           </div>

           {/* L2 Threshold Line */}
           <div className="absolute top-0 bottom-0 left-[65%] w-0 border-l-2 border-slate-800 border-dashed z-10 flex flex-col items-center">
              <div className="bg-[#111827] text-white text-[11px] font-bold px-3 py-1.5 rounded mt-[-15px] shadow-md whitespace-nowrap">
                 Tolerance level 2
              </div>
              <div className="text-sm font-bold text-on-surface mt-[-40px] absolute whitespace-nowrap">$96M</div>
           </div>

           {/* Floating Info Boxes using CSS clip-path to look like ribbons/arrows */}
           <div 
             className="absolute top-[35%] left-[17%] w-[17%] bg-[#FFB600] text-black p-3 shadow-md text-xs text-center flex items-center justify-center min-h-[70px] z-20 font-medium"
             style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}
           >
              Low impact
           </div>
           
           <div 
             className="absolute top-[30%] left-[36%] w-[28%] bg-pwc-orange text-white p-4 shadow-md text-xs text-center flex items-center justify-center min-h-[90px] z-20 pl-8 pr-6 font-medium leading-relaxed"
             style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)' }}
           >
              Significant impact on KPIs, may affect shareholder value but does not lead to financial stress.
           </div>

           <div 
             className="absolute top-[30%] left-[66%] w-[28%] bg-pwc-red text-white p-4 shadow-md text-xs text-center flex items-center justify-center min-h-[90px] z-20 pl-8 rounded-r-md font-medium leading-relaxed"
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
           >
              Need for financing operations or capital increase.
           </div>

         </div>

         {/* X Axis Zones */}
         <div className="h-8 flex mt-3 relative z-20 overflow-hidden rounded">
            <div className="w-[35%] bg-[#FFB600] flex items-center justify-center text-[10px] text-black font-bold tracking-widest">
               ANNUAL OVER-PERFORMANCE
            </div>
            <div className="w-[30%] bg-pwc-orange flex items-center justify-center text-[10px] text-white font-bold tracking-widest">
               AVERAGE SEVERITY
            </div>
            <div className="w-[35%] bg-pwc-red flex items-center justify-center text-[10px] text-white font-bold tracking-widest">
               HIGH SEVERITY
            </div>
         </div>
         <div className="flex relative mt-2 text-[11px] text-secondary font-medium">
            <div className="w-[35%] text-left pl-1">Cost of risk lower than expected.</div>
            <div className="w-[30%] text-center">Affordable cost drift.</div>
            <div className="w-[35%] text-right pr-1">Unaffordable cost drift.</div>
         </div>

         {/* X Axis Label */}
         <div className="text-center mt-3 text-label-sm font-label-sm text-on-surface font-bold tracking-widest">
            Claims ▶
         </div>

       </div>
    </div>
  </div>
</div>

<div className="bg-white rounded-xl border border-slate-mid/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="p-6 border-b border-slate-mid/10 flex justify-between items-center bg-surface-gray">
<h3 className="text-headline-md font-headline-md text-on-surface">ECoR Results</h3>
<button className="text-pwc-orange hover:text-primary-container text-label-sm font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm">download</span> Export CSV
</button>
</div>
<div className="overflow-x-auto table-scroll pb-4">
<table className="w-full text-left border-collapse min-w-[1100px]">
<thead>
<tr className="bg-pwc-orange text-white text-sm font-semibold tracking-wide">
<th className="p-4 border-b border-white/20 w-[24%] align-top">
   <div className="font-bold mb-1 text-base tracking-widest text-white">Metric</div>
</th>
<th className="p-4 border-b border-white/20 align-top text-center w-[16%]">
   <div className="font-bold mb-1 text-base text-white">Gross</div>
</th>
<th className="p-4 border-b border-white/20 align-top text-center w-[20%] border-l border-white/20">
   <div className="font-bold mb-1 text-base text-white">Current</div>
   <div className="text-[11px] text-white/80 font-normal leading-relaxed mt-2 opacity-90">
     Deductible: 25 M<br/>
     Limit: $3 B<br/>
     Different sub-limits applicable
   </div>
</th>
<th className="p-4 border-b border-white/20 align-top text-center w-[20%] bg-black/10 border-l border-white/20">
   <div className="font-bold mb-1 text-base text-white">Option 1</div>
   <div className="text-[11px] text-white/80 font-normal leading-relaxed mt-2 opacity-90">
     Deductible: 25 M<br/>
     Captive: $50 M P.O.<br/>
     Limit: $3 B<br/>
     Different sub-limits applicable
   </div>
</th>
<th className="p-4 border-b border-white/20 align-top text-center w-[20%] border-l border-white/20">
   <div className="font-bold mb-1 text-base text-white">Option 2</div>
   <div className="text-[11px] text-white/80 font-normal leading-relaxed mt-2 opacity-90">
     Deductible: 25 M<br/>
     Captive: $50 M P.O., 100 M AGG<br/>
     Limit: $3 B<br/>
     Different sub-limits applicable
   </div>
</th>
</tr>
</thead>
<tbody className="font-tabular-nums text-sm text-on-surface">
{/* Row 1 */}
<tr className="border-b border-slate-mid/5 hover:bg-surface-gray/50 transition-colors">
<td className="p-4 font-body-md text-secondary leading-tight">
   Total Market Premium (MP)<br/>
   <span className="text-[10px] text-slate-mid italic">For Options 1-2 keeps ECoR at the level of the current program</span>
</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center">24,000,000</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10">
   17,400,000<br/>
   <span className="text-green-600 text-xs font-semibold">(-6,600,000)</span>
</td>
<td className="p-4 text-center border-l border-slate-mid/10">
   19,400,000<br/>
   <span className="text-green-600 text-xs font-semibold">(-4,600,000)</span>
</td>
</tr>
{/* Row 2 */}
<tr className="border-b border-slate-mid/5 bg-surface-gray/30 hover:bg-surface-gray/80 transition-colors">
<td className="p-4 font-body-md text-secondary leading-tight">
   Average Retained Loss (AR)<br/>
   <span className="text-[10px] text-slate-mid italic">(Based on 100,000 simulations)</span>
</td>
<td className="p-4 text-center text-slate-mid">63,000,000</td>
<td className="p-4 text-center">39,000,000</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10 text-green-700">38,000,000</td>
<td className="p-4 text-center border-l border-slate-mid/10 text-green-700">38,000,000</td>
</tr>
{/* Row 3 */}
<tr className="border-b border-slate-mid/5 hover:bg-surface-gray/50 transition-colors">
<td className="p-4 font-body-md text-secondary leading-tight">
   Average Captive/SIR Loss (AC)<br/>
   <span className="text-[10px] text-slate-mid italic">(Based on 100,000 simulations)</span>
</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10 text-pwc-red">5,000,000</td>
<td className="p-4 text-center border-l border-slate-mid/10 text-pwc-red">5,000,000</td>
</tr>
{/* Row 4 */}
<tr className="border-b border-slate-mid/5 bg-surface-gray/30 hover:bg-surface-gray/80 transition-colors">
<td className="p-4 font-body-md text-secondary">
   Captive Fixed Costs and Fronting Fees (EXPC) <span className="text-[10px] text-slate-mid italic">(Assumed¹)</span>
</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10 text-pwc-red">600,000</td>
<td className="p-4 text-center border-l border-slate-mid/10 text-pwc-red">600,000</td>
</tr>
{/* Row 5 */}
<tr className="border-b border-slate-mid/5 hover:bg-surface-gray/50 transition-colors">
<td className="p-4 font-body-md text-secondary">
   IRC (Based on 11% WACC)
</td>
<td className="p-4 text-center text-slate-mid">17,000,000</td>
<td className="p-4 text-center">10,000,000</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10 text-pwc-red">11,000,000</td>
<td className="p-4 text-center border-l border-slate-mid/10 text-green-700">10,000,000</td>
</tr>
{/* Row 6 */}
<tr className="border-b border-slate-mid/5 bg-surface-gray/30 hover:bg-surface-gray/80 transition-colors">
<td className="p-4 font-body-md text-secondary">
   IRC Captive
</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10 text-pwc-red">1,000,000</td>
<td className="p-4 text-center border-l border-slate-mid/10 text-pwc-red">1,000,000</td>
</tr>

{/* Row 7 - TOTAL ECOR - Emphasized */}
<tr className="border-b border-slate-mid/10 bg-primary text-white font-bold text-base shadow-sm tracking-wide">
<td className="p-4">ECOR (=AR+AC+MP+IRC)</td>
<td className="p-4 text-center text-white/80">80,000,000</td>
<td className="p-4 text-center">73,000,000</td>
<td className="p-4 text-center border-l border-white/20 bg-black/10">73,000,000</td>
<td className="p-4 text-center border-l border-white/20">73,000,000</td>
</tr>


{/* Row 9 */}
<tr className="border-b border-slate-mid/5 bg-surface-gray/30 hover:bg-surface-gray/80 transition-colors">
<td className="p-4 font-body-md text-secondary">1/250 Retained Loss Event incl. Captive</td>
<td className="p-4 text-center text-slate-mid">2,800,000,000</td>
<td className="p-4 text-center">681,000,000</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10 text-pwc-red">681,000,000</td>
<td className="p-4 text-center border-l border-slate-mid/10 text-pwc-red">681,000,000</td>
</tr>
{/* Row 10 */}
<tr className="border-b border-slate-mid/5 hover:bg-surface-gray/50 transition-colors">
<td className="p-4 font-body-md text-secondary">Average Transferred Loss</td>
<td className="p-4 text-center">0</td>
<td className="p-4 text-center">23,000,000</td>
<td className="p-4 text-center bg-pwc-orange/5 border-l border-pwc-orange/10 text-pwc-red">20,000,000</td>
<td className="p-4 text-center border-l border-slate-mid/10 text-pwc-red">20,000,000</td>
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
