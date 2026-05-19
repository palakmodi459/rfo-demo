import Link from "next/link";
export default function Page() {
  return (
    <>


<nav className="fixed left-0 top-0 h-full w-64 border-r border-slate-mid/10 bg-surface-container-low dark:bg-surface-dim z-40 pt-16 flex flex-col justify-between">

<div className="px-6 mb-8 flex flex-col items-start w-full">
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" alt="PwC Logo" className="h-10 w-auto mb-4" />
  <h2 className="text-headline-md font-headline-md font-bold text-on-surface">Risk Analytics</h2>
  <p className="text-label-sm font-label-sm text-secondary mt-1">Suite v4.2</p>
</div>

<ul className="flex flex-col flex-grow">

<li className="">
<Link className="flex items-center px-6 py-3 text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined mr-4 group-hover:text-primary transition-colors">strategy</span>
<span className="text-label-sm font-label-sm uppercase tracking-wider">Risk Strategy</span>
</Link>
</li>

<li className="">
<Link className="flex items-center px-6 py-3 text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined mr-4" style={{ fontVariationSettings: "'FILL' 1" }}>query_stats</span>
<span className="text-label-sm font-label-sm uppercase tracking-wider">Program Optimizer</span>
</Link>
</li>

<li className="">
<Link className="flex items-center px-6 py-3 text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined mr-4 group-hover:text-primary transition-colors">analytics</span>
<span className="text-label-sm font-label-sm uppercase tracking-wider">Loss Analysis</span>
</Link>
</li>

<li className="">
<Link className="flex items-center px-6 py-3 text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined mr-4 group-hover:text-primary transition-colors">shield</span>
<span className="text-label-sm font-label-sm uppercase tracking-wider">Captive Feasibility</span>
</Link>
</li>

<li className="">
<Link className="flex items-center px-6 py-3 text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined mr-4 group-hover:text-primary transition-colors">insights</span>
<span className="text-label-sm font-label-sm uppercase tracking-wider">Portfolio Insights</span>
</Link>
</li>
</ul>

<div className="p-6 border-t border-slate-mid/10">
<button className="w-full bg-pwc-orange text-on-primary py-2 px-4 rounded-DEFAULT text-label-sm font-label-sm hover:bg-primary-container transition-colors mb-6 flex items-center justify-center">
<span className="material-symbols-outlined mr-2 text-[18px]">download</span>
                Export Report
            </button>
<ul className="flex flex-col space-y-2">
<li className="">
<Link className="flex items-center text-secondary hover:text-on-surface transition-colors" href="/">
<span className="material-symbols-outlined mr-3 text-[18px]">help</span>
<span className="text-label-sm font-label-sm">Support</span>
</Link>
</li>
<li className="">
<Link className="flex items-center text-secondary hover:text-on-surface transition-colors" href="/">
<span className="material-symbols-outlined mr-3 text-[18px]">logout</span>
<span className="text-label-sm font-label-sm">Sign Out</span>
</Link>
</li>
</ul>
</div>
</nav>

<main className="ml-64 flex-grow flex flex-col min-h-screen">

<header className="px-gutter pt-margin-desktop pb-8 flex justify-between items-end border-b border-slate-mid/10 bg-surface">
<div>
<h1 className="text-display-lg font-display-lg text-on-surface">Program Optimizer</h1>
<p className="text-body-lg font-body-lg text-secondary mt-2 max-w-2xl">Evaluate retention levels, captive utility, and risk transfer efficiency across multiple confidence intervals.</p>
</div>

<div className="flex space-x-4">
<div className="flex flex-col">
<label className="text-label-sm font-label-sm text-secondary mb-1">Scenario</label>
<select className="bg-surface-container border border-slate-mid/20 rounded-DEFAULT px-4 py-2 text-tabular-nums font-tabular-nums focus:outline-none focus:border-pwc-orange focus:ring-1 focus:ring-pwc-orange">
<option>Base Case - 2024</option>
<option>Stress Test A</option>
<option>Optimized Structure</option>
</select>
</div>
<div className="flex flex-col">
<label className="text-label-sm font-label-sm text-secondary mb-1">Currency</label>
<select className="bg-surface-container border border-slate-mid/20 rounded-DEFAULT px-4 py-2 text-tabular-nums font-tabular-nums focus:outline-none focus:border-pwc-orange focus:ring-1 focus:ring-pwc-orange">
<option>USD ($M)</option>
<option>EUR (€M)</option>
</select>
</div>
</div>
</header>

<div className="grid grid-cols-12 gap-gutter px-gutter py-8">

<div className="col-span-12 lg:col-span-8 space-y-gutter">

<div className="bg-white border border-slate-mid/10 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
  {/* Header & Subtitle */}
  <div className="mb-8">
    <h3 className="text-display-sm font-display-sm text-on-surface mb-2">Economic Value of Insurance</h3>
    <div className="flex items-center text-body-md text-secondary">
      <span className="material-symbols-outlined text-pwc-red mr-2 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
      <span className="font-semibold text-pwc-orange mr-1">Option 1</span>
      provides an overall net cost of 57.5K vs
      <span className="font-semibold text-slate-800 ml-1">No Insurance</span>
    </div>
  </div>

  {/* Legend */}
  <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-4 mb-10 w-full">
    <div className="flex items-center">
      <div className="w-4 h-4 rounded-sm bg-slate-800 mr-3 border border-slate-900/10"></div>
      <span className="text-label-md font-label-md text-secondary">Retained Loss</span>
    </div>
    <div className="flex items-center">
      <div className="w-4 h-4 rounded-sm bg-pwc-orange mr-3 border border-pwc-orange/20"></div>
      <span className="text-label-md font-label-md text-secondary">Premium</span>
    </div>
    <div className="flex items-center">
      <div className="w-4 h-4 rounded-sm bg-pwc-tan mr-3 border border-pwc-tan/20"></div>
      <span className="text-label-md font-label-md text-secondary">Implied Risk Charge</span>
    </div>
    <div className="flex items-center">
      <div className="w-4 h-4 rounded-sm bg-amber-500 mr-3 border border-amber-600/20"></div>
      <span className="text-label-md font-label-md text-secondary">Price To Beat</span>
    </div>
  </div>

  {/* Chart Area */}
  <div className="relative h-[400px] w-full flex items-end pl-16 pb-12 pt-4">
    
    {/* Y-Axis Label */}
    <div className="absolute left-[-30px] top-1/2 -rotate-90 text-label-sm font-label-sm text-secondary tracking-wider transform -translate-y-1/2 whitespace-nowrap">
      Cost of Risk ($)
    </div>

    {/* Y-Axis Grid & Labels */}
    <div className="absolute inset-0 pl-16 pb-12 pt-4 flex flex-col justify-between pointer-events-none z-0">
      <div className="w-full h-0 border-t border-slate-200 flex items-center relative"><span className="absolute left-[-50px] text-label-sm text-secondary w-[40px] text-right">90M</span></div>
      <div className="w-full h-0 border-t border-slate-200 flex items-center relative"><span className="absolute left-[-50px] text-label-sm text-secondary w-[40px] text-right">75M</span></div>
      <div className="w-full h-0 border-t border-slate-200 flex items-center relative"><span className="absolute left-[-50px] text-label-sm text-secondary w-[40px] text-right">60M</span></div>
      <div className="w-full h-0 border-t border-slate-200 flex items-center relative"><span className="absolute left-[-50px] text-label-sm text-secondary w-[40px] text-right">45M</span></div>
      <div className="w-full h-0 border-t border-slate-200 flex items-center relative"><span className="absolute left-[-50px] text-label-sm text-secondary w-[40px] text-right">30M</span></div>
      <div className="w-full h-0 border-t border-slate-200 flex items-center relative"><span className="absolute left-[-50px] text-label-sm text-secondary w-[40px] text-right">15M</span></div>
      <div className="w-full h-0 border-t border-slate-300 flex items-center relative"><span className="absolute left-[-50px] text-label-sm text-secondary w-[40px] text-right">0</span></div>
    </div>

    {/* Bars */}
    <div className="relative z-10 w-full h-full flex justify-around items-end">
      
      {/* Bar 1: No Insurance (Total: 80M = 89% of 90M) */}
      <div className="w-16 flex flex-col justify-end group h-full">
        <div className="w-full h-[89%] flex flex-col justify-end hover:brightness-110 transition-all cursor-pointer shadow-sm relative">
          <div className="bg-pwc-tan w-full h-[21%] border-b border-white/20"></div>
          <div className="bg-slate-800 w-full h-[79%]"></div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-secondary hover:text-pwc-orange cursor-pointer text-[20px]">add_circle</span>
          </div>
        </div>
      </div>

      {/* Bar 2: Expiring Program (Total: 73M = 81% of 90M) */}
      <div className="w-16 flex flex-col justify-end group h-full">
        <div className="w-full h-[81%] flex flex-col justify-end hover:brightness-110 transition-all cursor-pointer shadow-sm relative">
          <div className="bg-pwc-tan w-full h-[14%] border-b border-white/20"></div>
          <div className="bg-pwc-orange w-full h-[33%] border-b border-white/20"></div>
          <div className="bg-slate-800 w-full h-[53%]"></div>
        </div>
      </div>

      {/* Bar 3: Option 1 (Total: 72M = 80% of 90M) */}
      <div className="w-16 flex flex-col justify-end group h-full">
        <div className="w-full h-[80%] flex flex-col justify-end hover:brightness-110 transition-all cursor-pointer shadow-sm relative">
          <div className="bg-pwc-tan w-full h-[15%] border-b border-white/20"></div>
          <div className="bg-amber-500 w-full h-[25%] border-b border-white/20"></div>
          <div className="bg-slate-800 w-full h-[60%]"></div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-secondary hover:text-pwc-orange cursor-pointer text-[20px]">add_circle</span>
          </div>
        </div>
      </div>

      {/* Bar 4: Option 2 (Total: 72M = 80% of 90M) */}
      <div className="w-16 flex flex-col justify-end group h-full">
        <div className="w-full h-[80%] flex flex-col justify-end hover:brightness-110 transition-all cursor-pointer shadow-sm relative">
          <div className="bg-pwc-tan w-full h-[14%] border-b border-white/20"></div>
          <div className="bg-pwc-orange w-full h-[26%] border-b border-white/20"></div>
          <div className="bg-slate-800 w-full h-[60%]"></div>
        </div>
      </div>

    </div>

    {/* X-Axis Labels (Program) */}
    <div className="absolute bottom-0 left-0 w-full h-12 flex pl-16">
      <div className="absolute left-0 bottom-3">
        <span className="text-label-sm font-label-sm text-secondary font-bold">Program</span>
      </div>
      <div className="flex-1 flex justify-around items-stretch border border-slate-200 rounded-md bg-surface-gray/30 overflow-hidden">
        <div className="text-label-sm font-label-sm text-slate-700 flex-1 flex items-center justify-center border-r border-slate-200">No Insurance</div>
        <div className="text-label-sm font-label-sm text-slate-700 flex-1 flex items-center justify-center border-r border-slate-200">Expiring Program</div>
        <div className="text-label-sm font-label-sm text-slate-700 flex-1 flex items-center justify-center border-r border-slate-200">Option 1</div>
        <div className="text-label-sm font-label-sm text-slate-800 font-bold flex-1 bg-white flex items-center justify-center shadow-sm">
          Option 2
        </div>
      </div>
    </div>

  </div>
</div>

<div className="bg-surface border border-slate-mid/10 rounded-lg shadow-ambient overflow-hidden">
<div className="p-6 border-b border-slate-mid/10 flex justify-between items-center bg-surface-container-lowest">
<h3 className="text-headline-md font-headline-md text-on-surface">Total Cost of Risk (TCOR) Detail</h3>
<button className="text-pwc-orange hover:text-primary transition-colors flex items-center text-label-sm font-label-sm">
<span className="material-symbols-outlined mr-1 text-[18px]">tune</span>
                            Edit Parameters
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-gray border-b border-slate-mid/20 text-label-sm font-label-sm text-secondary uppercase tracking-wider">
<th className="py-4 px-6 font-semibold">Probability Layer</th>
<th className="py-4 px-6 font-semibold text-right">Premium ($M)</th>
<th className="py-4 px-6 font-semibold text-right">Retained Loss ($M)</th>
<th className="py-4 px-6 font-semibold text-right">Captive Funding ($M)</th>
<th className="py-4 px-6 font-semibold text-right text-pwc-orange">Total TCOR ($M)</th>
</tr>
</thead>
<tbody className="text-tabular-nums font-tabular-nums text-on-surface">
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 font-medium">50% Base</td>
<td className="py-3 px-6 text-right">12.4</td>
<td className="py-3 px-6 text-right">8.2</td>
<td className="py-3 px-6 text-right">4.5</td>
<td className="py-3 px-6 text-right font-bold">25.1</td>
</tr>
<tr className="bg-surface-gray/30 border-b border-slate-mid/10 hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 font-medium">75% Expected</td>
<td className="py-3 px-6 text-right">14.8</td>
<td className="py-3 px-6 text-right">12.6</td>
<td className="py-3 px-6 text-right">6.0</td>
<td className="py-3 px-6 text-right font-bold">33.4</td>
</tr>
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 font-medium">95% Stress</td>
<td className="py-3 px-6 text-right">18.2</td>
<td className="py-3 px-6 text-right">24.5</td>
<td className="py-3 px-6 text-right">8.2</td>
<td className="py-3 px-6 text-right font-bold text-pwc-red">50.9</td>
</tr>
<tr className="bg-surface-gray/30 hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 font-medium">99% Tail</td>
<td className="py-3 px-6 text-right">22.5</td>
<td className="py-3 px-6 text-right">38.0</td>
<td className="py-3 px-6 text-right">12.0</td>
<td className="py-3 px-6 text-right font-bold text-pwc-red">72.5</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-gutter">

<div className="bg-charcoal-dark text-on-primary rounded-lg p-8 shadow-ambient relative overflow-hidden">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-pwc-orange opacity-20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<div className="flex items-center mb-6">
<span className="material-symbols-outlined text-pwc-orange mr-3 text-[28px]">target</span>
<h3 className="text-headline-md font-headline-md">Mathematical Sweet Spot</h3>
</div>
<p className="text-body-md font-body-md text-slate-300 mb-8">
                            Based on stochastic modeling, optimizing your retention at the <strong>75% probability</strong> layer yields the highest capital efficiency.
                        </p>
<div className="bg-white/10 rounded-DEFAULT p-6 border border-white/20 mb-8 text-center backdrop-blur-sm">
<p className="text-label-sm font-label-sm text-pwc-tan uppercase tracking-widest mb-2">Projected Annual Savings</p>
<p className="text-display-lg font-display-lg text-white">$4.2M</p>
<p className="text-tabular-nums font-tabular-nums text-emerald-400 mt-2 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] mr-1">trending_down</span>
                                14% vs Current Structure
                            </p>
</div>
<ul className="space-y-4">
<li className="flex items-start">
<span className="material-symbols-outlined text-pwc-orange mr-3 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<div>
<p className="text-tabular-nums font-tabular-nums text-white">Increase Captive Utilization</p>
<p className="text-label-sm font-label-sm text-slate-400">Shift $2M from Transferred to Captive</p>
</div>
</li>
<li className="flex items-start">
<span className="material-symbols-outlined text-pwc-orange mr-3 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<div>
<p className="text-tabular-nums font-tabular-nums text-white">Lower Primary Limits</p>
<p className="text-label-sm font-label-sm text-slate-400">Reduce to $10M layer, saving on premium</p>
</div>
</li>
</ul>
<button className="w-full mt-8 border border-pwc-orange text-pwc-orange py-3 rounded-DEFAULT text-label-sm font-label-sm hover:bg-pwc-orange hover:text-white transition-all duration-300">
                            Apply Optimized Structure
                        </button>
</div>
</div>

<div className="bg-surface border border-slate-mid/10 rounded-lg p-6 shadow-ambient">
<h4 className="text-tabular-nums font-tabular-nums text-on-surface mb-4 font-semibold border-b border-slate-mid/10 pb-2">Assumptions &amp; Variables</h4>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-label-sm font-label-sm text-secondary">Cost of Capital</span>
<span className="text-tabular-nums font-tabular-nums text-on-surface">8.5%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-label-sm font-label-sm text-secondary">Tax Rate (Blended)</span>
<span className="text-tabular-nums font-tabular-nums text-on-surface">21.0%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-label-sm font-label-sm text-secondary">Loss Development</span>
<span className="text-tabular-nums font-tabular-nums text-on-surface">Standard LDF</span>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
