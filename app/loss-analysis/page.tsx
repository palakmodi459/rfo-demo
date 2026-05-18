import Link from "next/link";
export default function Page() {
  return (
    <>


<nav className="flex flex-col h-full w-64 border-r border-slate-mid/10 bg-surface-container-low fixed left-0 top-0 z-40 transition-all duration-200 ease-in-out">
<div className="h-16 flex items-center px-gutter border-b border-slate-mid/10">
<span className="text-headline-md font-headline-md font-bold text-on-surface truncate">Risk Analytics</span>
</div>
<div className="px-6 py-4 border-b border-slate-mid/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest border border-slate-mid/10 flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-on-surface-variant">domain</span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Suite v4.2</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4">
<ul className="space-y-1">

<li className="">
<Link className="flex items-center gap-3 px-gutter py-3 text-secondary hover:bg-secondary-container/50 hover:text-on-surface transition-colors duration-200 cursor-pointer" href="/">
<span className="material-symbols-outlined">strategy</span>
<span className="font-body-md text-body-md">Risk Strategy</span>
</Link>
</li>

<li className="">
<Link className="flex items-center gap-3 px-gutter py-3 text-secondary hover:bg-secondary-container/50 hover:text-on-surface transition-colors duration-200 cursor-pointer" href="/optimizer">
<span className="material-symbols-outlined">query_stats</span>
<span className="font-body-md text-body-md">Program Optimizer</span>
</Link>
</li>

<li className="">
<Link className="flex items-center gap-3 px-gutter py-3 text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 cursor-pointer active:opacity-80" href="/">
<span className="material-symbols-outlined fill-icon">analytics</span>
<span className="font-body-md text-body-md">Loss Analysis</span>
</Link>
</li>

<li className="">
<Link className="flex items-center gap-3 px-gutter py-3 text-secondary hover:bg-secondary-container/50 hover:text-on-surface transition-colors duration-200 cursor-pointer" href="/captive-feasibility">
<span className="material-symbols-outlined">shield</span>
<span className="font-body-md text-body-md">Captive Feasibility</span>
</Link>
</li>

<li className="">
<Link className="flex items-center gap-3 px-gutter py-3 text-secondary hover:bg-secondary-container/50 hover:text-on-surface transition-colors duration-200 cursor-pointer" href="/portfolio">
<span className="material-symbols-outlined">insights</span>
<span className="font-body-md text-body-md">Portfolio Insights</span>
</Link>
</li>
</ul>
</div>
<div className="p-4 border-t border-slate-mid/10">
<button className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-2 px-4 rounded hover:bg-primary-container transition-colors duration-200">
                Export Report
            </button>
<ul className="mt-4 space-y-1">
<li className="">
<Link className="flex items-center gap-3 px-4 py-2 text-secondary hover:bg-secondary-container/50 hover:text-on-surface transition-colors duration-200 rounded" href="/">
<span className="material-symbols-outlined text-[20px]">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</Link>
</li>
<li className="">
<Link className="flex items-center gap-3 px-4 py-2 text-secondary hover:bg-secondary-container/50 hover:text-on-surface transition-colors duration-200 rounded" href="/">
<span className="material-symbols-outlined text-[20px]">logout</span>
<span className="font-label-sm text-label-sm">Sign Out</span>
</Link>
</li>
</ul>
</div>
</nav>

<div className="flex-1 flex flex-col min-w-0 ml-64 bg-background">

<header className="flex justify-between items-center w-full px-gutter h-16 sticky top-0 z-50 border-b border-slate-mid/10 bg-surface">
<div className="flex items-center">
<span className="text-headline-md font-headline-md font-black text-pwc-orange"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" alt="PwC Logo" className="h-10 w-auto object-contain" /></span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="pl-10 pr-4 py-1.5 bg-surface-container-low border border-slate-mid/20 rounded-full font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-shadow" placeholder="Search..." type="text" />
</div>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim border border-slate-mid/10 overflow-hidden cursor-pointer ml-2">
<div className="w-full h-full bg-surface-container flex items-center justify-center text-secondary"><span className="material-symbols-outlined text-[20px]">person</span></div>
</div>
</div>
</header>

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
<p className="font-headline-lg text-headline-lg text-on-surface font-tabular-nums">$42.5M</p>
<div className="mt-4 flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-body-md text-body-md text-sm">+2.4% vs last period</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-slate-mid/10 rounded-xl p-6 shadow-sm">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Retained Exposure</p>
<p className="font-headline-lg text-headline-lg text-on-surface font-tabular-nums text-pwc-orange">$18.2M</p>
<div className="mt-4 flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">pie_chart</span>
<span className="font-body-md text-body-md text-sm">42.8% of Total Expected</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-slate-mid/10 rounded-xl p-6 shadow-sm">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Risk Transfer Cost (Premium)</p>
<p className="font-headline-lg text-headline-lg text-on-surface font-tabular-nums">$8.9M</p>
<div className="mt-4 flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">shield</span>
<span className="font-body-md text-body-md text-sm">For $150M limit</span>
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
