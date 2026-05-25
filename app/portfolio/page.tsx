import Link from "next/link";
export default function Page() {
  return (
    <>



<div className="flex flex-1 overflow-hidden">

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
<Link className="flex items-center gap-3 px-3 py-2 rounded text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 ease-in-out" href="/portfolio">
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

<main className="flex-1 md:ml-64 bg-background min-h-[calc(100vh-4rem)] p-gutter md:p-margin-desktop overflow-y-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div>
<h1 className="text-display-lg font-display-lg text-on-surface mb-2">Executive Summary</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">High-level portfolio performance and structural optimization overview for Q3.</p>
</div>
<button className="bg-pwc-orange text-on-primary px-6 py-3 rounded text-label-sm font-label-sm hover:bg-primary-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">download</span>
                    Export Full Executive Report
                </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-unit auto-rows-min">

<div className="lg:col-span-12 bg-surface-container-lowest border border-slate-mid/10 rounded-lg p-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Projected Annualized Savings</h3>
<p className="text-body-md font-body-md text-on-surface-variant">Based on proposed optimal structure vs current baseline.</p>
</div>
<div className="text-right">
<div className="text-[64px] leading-none font-display-lg text-pwc-orange font-extrabold tracking-tight">$14.2M</div>
<div className="flex items-center justify-end gap-1 text-green-600 mt-2">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-tabular-nums font-tabular-nums">+8.5% Efficiency Gain</span>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-surface-container-lowest border border-slate-mid/10 rounded-lg p-6 flex flex-col gap-6">
<div className="flex justify-between items-center border-b border-slate-mid/10 pb-4">
<h3 className="text-headline-md font-headline-md text-on-surface">Balance Sheet Impact</h3>
<button className="text-secondary hover:text-pwc-orange"><span className="material-symbols-outlined">more_horiz</span></button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-gray p-4 rounded border border-slate-mid/5">
<div className="text-label-sm font-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Retained Risk</div>
<div className="text-headline-lg font-headline-lg text-on-surface">$45.0M</div>
<div className="text-tabular-nums font-tabular-nums text-slate-mid mt-1">Current: $52.5M</div>
</div>
<div className="bg-surface-gray p-4 rounded border border-slate-mid/5">
<div className="text-label-sm font-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Capital Released</div>
<div className="text-headline-lg font-headline-lg text-on-surface">$7.5M</div>
<div className="text-tabular-nums font-tabular-nums text-slate-mid mt-1">Available for redeployment</div>
</div>
</div>


</div>

<div className="lg:col-span-5 bg-surface-container-lowest border border-slate-mid/10 rounded-lg p-6 flex flex-col gap-6">
<div className="flex justify-between items-center border-b border-slate-mid/10 pb-4">
<h3 className="text-headline-md font-headline-md text-on-surface">Optimal Structure</h3>
<span className="material-symbols-outlined text-secondary">architecture</span>
</div>
<div className="flex flex-col gap-4 flex-1">
<div className="flex justify-between items-center py-2 border-b border-slate-mid/5">
<span className="text-body-md font-body-md text-on-surface-variant">Primary Limit</span>
<span className="text-tabular-nums font-tabular-nums text-on-surface font-semibold">$100M</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-slate-mid/5">
<span className="text-body-md font-body-md text-on-surface-variant">Attachment Point</span>
<span className="text-tabular-nums font-tabular-nums text-on-surface font-semibold">$25M</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-slate-mid/5">
<span className="text-body-md font-body-md text-on-surface-variant">Captive Utilization</span>
<span className="text-tabular-nums font-tabular-nums text-on-surface font-semibold">Yes (Tier 2)</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-body-md font-body-md text-on-surface-variant">Estimated Premium</span>
<span className="text-tabular-nums font-tabular-nums text-on-surface font-semibold">$18.4M</span>
</div>
</div>
<div className="mt-auto pt-4">
<button className="w-full py-2 border border-slate-mid/20 text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-gray transition-colors">
                            View Detailed Layer Chart
                        </button>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
