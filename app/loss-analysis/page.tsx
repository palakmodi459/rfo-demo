import Link from "next/link";
export default function Page() {
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
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/">
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
<Link className="flex items-center gap-3 px-3 py-2 rounded text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 ease-in-out" href="/loss-analysis">
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

<div className="flex-1 flex flex-col min-w-0 ml-64 bg-background">



<main className="flex-1 overflow-auto p-margin-desktop">
<div className="max-w-container-max mx-auto space-y-12">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">Loss Analysis &amp; Curves</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Visualizing loss spreads against program limits across primary layers.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1.5 rounded border border-slate-mid/10">
<span className="w-3 h-3 rounded-full bg-pwc-orange"></span>
<span className="font-label-sm text-label-sm text-on-surface">Retained</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1.5 rounded border border-slate-mid/10">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface">Transferred</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1.5 rounded border border-slate-mid/10">
<span className="w-3 h-3 rounded-full bg-pwc-tan"></span>
<span className="font-label-sm text-label-sm text-on-surface">Captive</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest border border-slate-mid/10 rounded-xl p-6 shadow-sm">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Expected Annual Loss</p>
<p className="font-headline-lg text-headline-lg text-on-surface font-tabular-nums">$63M</p>
<div className="mt-4 flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-body-md text-body-md text-sm">+2.4% vs last period</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-slate-mid/10 rounded-xl p-6 shadow-sm">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Retained Exposure</p>
<p className="font-headline-lg text-headline-lg text-on-surface font-tabular-nums text-pwc-orange">$39M</p>
<div className="mt-4 flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">pie_chart</span>
<span className="font-body-md text-body-md text-sm">61.9% of Total Expected</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-slate-mid/10 rounded-xl p-6 shadow-sm">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Risk Transfer Cost (Premium)</p>
<p className="font-headline-lg text-headline-lg text-on-surface font-tabular-nums">$24M</p>
<div className="mt-4 flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">shield</span>
<span className="font-body-md text-body-md text-sm">For $3B limit</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-slate-mid/10 rounded-xl p-8 shadow-sm">
<div className="flex justify-between items-center mb-8">
<h2 className="font-headline-md text-headline-md text-on-surface">Loss Spread Distribution</h2>
<select className="bg-surface-container-low border border-slate-mid/20 rounded font-label-sm text-label-sm py-1.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary">
<option>10,000 Iterations (Standard)</option>
<option>50,000 Iterations (High Precision)</option>
</select>
</div>

<div className="relative w-full h-[400px] border-l border-b border-slate-mid/20 flex items-end pt-8 pb-2 pl-2">

<div className="absolute left-[-50px] top-0 bottom-0 flex flex-col justify-between text-right font-tabular-nums text-tabular-nums text-on-surface-variant text-xs pr-2">
<span className="">$100M</span>
<span className="">$75M</span>
<span className="">$50M</span>
<span className="">$25M</span>
<span className="">$0</span>
</div>

<div className="absolute inset-0 border-b border-slate-mid/10 top-[25%] w-full"></div>
<div className="absolute inset-0 border-b border-slate-mid/10 top-[50%] w-full"></div>
<div className="absolute inset-0 border-b border-slate-mid/10 top-[75%] w-full"></div>

<div className="flex-1 flex items-end justify-around h-full z-10 px-4 gap-1">

<div className="w-full bg-pwc-orange/80 rounded-t hover:bg-pwc-orange transition-colors cursor-crosshair" style={{ height: "10%" }} title="1st Percentile"></div>
<div className="w-full bg-pwc-orange/80 rounded-t hover:bg-pwc-orange transition-colors cursor-crosshair" style={{ height: "15%" }}></div>
<div className="w-full bg-pwc-orange/80 rounded-t hover:bg-pwc-orange transition-colors cursor-crosshair" style={{ height: "25%" }}></div>
<div className="w-full bg-pwc-orange/80 rounded-t hover:bg-pwc-orange transition-colors cursor-crosshair" style={{ height: "40%" }}></div>
<div className="w-full bg-pwc-orange/80 rounded-t hover:bg-pwc-orange transition-colors cursor-crosshair" style={{ height: "60%" }}></div>

<div className="w-full flex flex-col justify-end h-full">
<div className="w-full bg-pwc-tan/90 rounded-t hover:bg-pwc-tan cursor-crosshair" style={{ height: "20%" }}></div>
<div className="w-full bg-pwc-orange/80 hover:bg-pwc-orange cursor-crosshair" style={{ height: "65%" }}></div>
</div>

<div className="w-full flex flex-col justify-end h-full">
<div className="w-full bg-secondary/80 rounded-t hover:bg-secondary cursor-crosshair" style={{ height: "10%" }}></div>
<div className="w-full bg-pwc-tan/90 hover:bg-pwc-tan cursor-crosshair" style={{ height: "30%" }}></div>
<div className="w-full bg-pwc-orange/80 hover:bg-pwc-orange cursor-crosshair" style={{ height: "50%" }}></div>
</div>
<div className="w-full flex flex-col justify-end h-full">
<div className="w-full bg-secondary/80 rounded-t hover:bg-secondary cursor-crosshair" style={{ height: "35%" }}></div>
<div className="w-full bg-pwc-tan/90 hover:bg-pwc-tan cursor-crosshair" style={{ height: "20%" }}></div>
<div className="w-full bg-pwc-orange/80 hover:bg-pwc-orange cursor-crosshair" style={{ height: "35%" }}></div>
</div>
<div className="w-full flex flex-col justify-end h-full">
<div className="w-full bg-secondary/80 rounded-t hover:bg-secondary cursor-crosshair" style={{ height: "55%" }}></div>
<div className="w-full bg-pwc-tan/90 hover:bg-pwc-tan cursor-crosshair" style={{ height: "10%" }}></div>
<div className="w-full bg-pwc-orange/80 hover:bg-pwc-orange cursor-crosshair" style={{ height: "20%" }}></div>
</div>
<div className="w-full flex flex-col justify-end h-full">
<div className="w-full bg-secondary/80 rounded-t hover:bg-secondary cursor-crosshair" style={{ height: "70%" }}></div>
<div className="w-full bg-pwc-orange/80 hover:bg-pwc-orange cursor-crosshair" style={{ height: "10%" }}></div>
</div>
</div>

<div className="absolute bottom-[-30px] left-0 right-0 flex justify-between text-center font-tabular-nums text-tabular-nums text-on-surface-variant text-xs px-8">
<span className="">10th</span>
<span className="">25th</span>
<span className="">50th (Median)</span>
<span className="">75th</span>
<span className="">90th</span>
<span className="">99th</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-slate-mid/10 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-6 border-b border-slate-mid/10 flex justify-between items-center bg-surface-gray">
<h3 className="font-headline-md text-headline-md text-on-surface">Loss Distribution Statistics</h3>
<button className="flex items-center gap-2 text-primary hover:text-primary-container font-label-sm text-label-sm transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Export CSV
                        </button>
</div>
<div className="overflow-x-auto table-scroll">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-slate-mid/20 bg-surface-container-lowest">
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider sticky left-0 bg-surface-container-lowest z-10">Percentile</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Probability</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Retained Loss</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Captive Allocation</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Transferred Loss</th>
<th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right font-bold">Total Gross Loss</th>
</tr>
</thead>
<tbody className="font-tabular-nums text-tabular-nums text-on-surface">
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 sticky left-0 bg-inherit z-10">Mean</td>
<td className="py-3 px-6 text-right text-on-surface-variant">-</td>
<td className="py-3 px-6 text-right">$18,245,000</td>
<td className="py-3 px-6 text-right">$5,100,000</td>
<td className="py-3 px-6 text-right">$19,155,000</td>
<td className="py-3 px-6 text-right font-medium">$42,500,000</td>
</tr>
<tr className="border-b border-slate-mid/10 bg-surface-gray hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 sticky left-0 bg-inherit z-10">50th (Median)</td>
<td className="py-3 px-6 text-right">50.0%</td>
<td className="py-3 px-6 text-right">$15,500,000</td>
<td className="py-3 px-6 text-right">$2,000,000</td>
<td className="py-3 px-6 text-right">$8,500,000</td>
<td className="py-3 px-6 text-right font-medium">$26,000,000</td>
</tr>
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 sticky left-0 bg-inherit z-10">75th</td>
<td className="py-3 px-6 text-right">25.0%</td>
<td className="py-3 px-6 text-right">$22,000,000</td>
<td className="py-3 px-6 text-right">$8,000,000</td>
<td className="py-3 px-6 text-right">$25,000,000</td>
<td className="py-3 px-6 text-right font-medium">$55,000,000</td>
</tr>
<tr className="border-b border-slate-mid/10 bg-surface-gray hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 sticky left-0 bg-inherit z-10 text-pwc-orange font-medium">90th</td>
<td className="py-3 px-6 text-right text-pwc-orange">10.0%</td>
<td className="py-3 px-6 text-right">$25,000,000</td>
<td className="py-3 px-6 text-right">$15,000,000</td>
<td className="py-3 px-6 text-right">$45,000,000</td>
<td className="py-3 px-6 text-right font-medium">$85,000,000</td>
</tr>
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low transition-colors">
<td className="py-3 px-6 sticky left-0 bg-inherit z-10 text-pwc-red font-medium">99th (Tail)</td>
<td className="py-3 px-6 text-right text-pwc-red">1.0%</td>
<td className="py-3 px-6 text-right">$25,000,000</td>
<td className="py-3 px-6 text-right">$25,000,000</td>
<td className="py-3 px-6 text-right">$115,000,000</td>
<td className="py-3 px-6 text-right font-medium">$165,000,000</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
