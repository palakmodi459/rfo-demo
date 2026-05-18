import Link from "next/link";
export default function Page() {
  return (
    <>


<nav className="fixed left-0 top-0 h-full w-64 bg-surface-container-low dark:bg-surface-dim border-r border-slate-mid/10 flex flex-col z-40 pt-6 transition-all duration-200 ease-in-out">

<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest border border-slate-mid/10 flex items-center justify-center overflow-hidden shrink-0">
<span className="material-symbols-outlined text-secondary" style={{ fontSize: "24px" }}>domain</span>
</div>
<div>
<h2 className="text-headline-md font-headline-md font-bold text-on-surface text-[18px] leading-tight">Risk Analytics</h2>
<p className="text-label-sm font-label-sm text-secondary">Suite v4.2</p>
</div>
</div>

<div className="flex-1 flex flex-col px-3 space-y-1 overflow-y-auto">
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined text-[20px] group-hover:text-pwc-orange transition-colors">strategy</span>
<span className="text-label-sm font-label-sm text-[14px]">Risk Strategy</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined text-[20px] group-hover:text-pwc-orange transition-colors">query_stats</span>
<span className="text-label-sm font-label-sm text-[14px]">Program Optimizer</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined text-[20px] group-hover:text-pwc-orange transition-colors">analytics</span>
<span className="text-label-sm font-label-sm text-[14px]">Loss Analysis</span>
</Link>

<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined icon-fill text-[20px]">shield</span>
<span className="text-label-sm font-label-sm text-[14px]">Captive Feasibility</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out group" href="/">
<span className="material-symbols-outlined text-[20px] group-hover:text-pwc-orange transition-colors">insights</span>
<span className="text-label-sm font-label-sm text-[14px]">Portfolio Insights</span>
</Link>
</div>

<div className="px-6 py-4">
<button className="w-full bg-pwc-orange hover:bg-primary-container text-on-primary text-label-sm font-label-sm py-2.5 rounded-lg transition-colors flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-[18px]">download</span>
                Export Report
            </button>
</div>

<div className="border-t border-slate-mid/10 p-3 flex flex-col space-y-1">
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 hover:text-on-surface transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined text-[20px]">help</span>
<span className="text-label-sm font-label-sm text-[14px]">Support</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 hover:text-on-surface transition-all duration-200 ease-in-out" href="/">
<span className="material-symbols-outlined text-[20px]">logout</span>
<span className="text-label-sm font-label-sm text-[14px]">Sign Out</span>
</Link>
</div>
</nav>

<div className="flex-1 ml-64 flex flex-col bg-surface min-h-screen overflow-y-auto">

<header className="flex justify-between items-center w-full px-gutter h-16 sticky top-0 z-30 bg-surface border-b border-slate-mid/10">

<div className="flex items-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" alt="PwC Logo" className="h-8 w-auto object-contain" />
</div>

<div className="flex items-center gap-2">

<div className="relative hidden md:flex items-center mr-4">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[20px]">search</span>
<input className="pl-10 pr-4 py-2 rounded-full border border-slate-mid/20 bg-surface-container-low text-body-md font-body-md focus:outline-none focus:border-pwc-orange focus:ring-1 focus:ring-pwc-orange w-64 transition-all" placeholder="Search analytics..." type="text" />
</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="w-10 h-10 ml-2 rounded-full border border-slate-mid/20 overflow-hidden cursor-pointer">
<div className="w-full h-full bg-surface-container flex items-center justify-center text-secondary"><span className="material-symbols-outlined text-[20px]">person</span></div>
</button>
</div>
</header>

<main className="flex-1 p-margin-desktop max-w-[1600px] w-full mx-auto space-y-[48px]">

<div className="flex flex-col gap-2 max-w-3xl">
<h1 className="text-display-lg font-display-lg text-on-surface">Captive Feasibility Studies</h1>
<p className="text-body-lg font-body-lg text-secondary">
                    Evaluate self-retention structures to optimize long-term Total Cost of Risk (TCOR). This analysis projects structural savings and outlines the operational path to establishing a specialized captive entity.
                </p>
</div>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 bg-surface-container-lowest border border-slate-mid/10 rounded-[12px] p-8 ambient-shadow">
<div className="flex justify-between items-end mb-8 border-b border-slate-mid/10 pb-4">
<div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">5-Year Savings Projection</h3>
<p className="text-body-md font-body-md text-secondary">Cumulative Net Present Value comparison (USD Millions)</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-mid/20 border border-slate-mid/30"></span>
<span className="text-label-sm font-label-sm text-secondary">Traditional Premium</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-pwc-orange"></span>
<span className="text-label-sm font-label-sm text-secondary">Captive Retained + Premium</span>
</div>
</div>
</div>

<div className="h-[300px] w-full flex items-end justify-between gap-4 pt-6 relative">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-tabular-nums font-tabular-nums text-secondary text-xs pb-8 -ml-2">
<span className="">$120M</span>
<span className="">$90M</span>
<span className="">$60M</span>
<span className="">$30M</span>
<span className="">$0</span>
</div>

<div className="absolute inset-0 pl-12 pb-8 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-slate-mid/10 border-dashed"></div>
<div className="w-full border-t border-slate-mid/10 border-dashed"></div>
<div className="w-full border-t border-slate-mid/10 border-dashed"></div>
<div className="w-full border-t border-slate-mid/10 border-dashed"></div>
<div className="w-full border-t border-slate-mid/20"></div>
</div>

<div className="flex-1 flex justify-around pl-12 z-10 h-full items-end pb-8">

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-1 h-[250px]">
<div className="w-1/3 bg-slate-mid/20 border border-slate-mid/30 rounded-t-sm h-[80%] transition-all hover:opacity-80"></div>
<div className="w-1/3 bg-pwc-orange border border-primary-container rounded-t-sm h-[75%] transition-all hover:opacity-80"></div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 1</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-1 h-[250px]">
<div className="w-1/3 bg-slate-mid/20 border border-slate-mid/30 rounded-t-sm h-[85%] transition-all hover:opacity-80"></div>
<div className="w-1/3 bg-pwc-orange border border-primary-container rounded-t-sm h-[70%] transition-all hover:opacity-80"></div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 2</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-1 h-[250px]">
<div className="w-1/3 bg-slate-mid/20 border border-slate-mid/30 rounded-t-sm h-[90%] transition-all hover:opacity-80"></div>
<div className="w-1/3 bg-pwc-orange border border-primary-container rounded-t-sm h-[68%] transition-all hover:opacity-80"></div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 3</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-1 h-[250px]">
<div className="w-1/3 bg-slate-mid/20 border border-slate-mid/30 rounded-t-sm h-[95%] transition-all hover:opacity-80"></div>
<div className="w-1/3 bg-pwc-orange border border-primary-container rounded-t-sm h-[65%] transition-all hover:opacity-80"></div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 4</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-1 h-[250px]">
<div className="w-1/3 bg-slate-mid/20 border border-slate-mid/30 rounded-t-sm h-[100%] transition-all hover:opacity-80"></div>
<div className="w-1/3 bg-pwc-orange border border-primary-container rounded-t-sm h-[60%] transition-all hover:opacity-80"></div>
</div>
<span className="text-tabular-nums font-tabular-nums text-on-surface font-bold mt-2">Year 5</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-end">
<div className="bg-surface-container-low px-4 py-2 rounded-lg border border-slate-mid/10 flex items-center gap-3">
<span className="material-symbols-outlined text-pwc-orange">trending_down</span>
<span className="text-body-md font-body-md text-on-surface">Projected 5-Year Savings: <strong className="text-pwc-orange font-tabular-nums">18.4%</strong> ($17.2M)</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 bg-surface-container-lowest border border-slate-mid/10 rounded-[12px] p-8 ambient-shadow flex flex-col">
<div className="mb-6">
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Structural Comparison</h3>
<p className="text-body-md font-body-md text-secondary">Qualitative assessment of Traditional vs. Captive models.</p>
</div>
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="py-4 border-b-2 border-slate-mid/20 text-label-sm font-label-sm text-secondary uppercase tracking-wider w-1/3">Factor</th>
<th className="py-4 px-4 border-b-2 border-slate-mid/20 text-label-sm font-label-sm text-on-surface uppercase tracking-wider w-1/3 bg-surface-gray/50 rounded-tl-lg">Traditional Insurance</th>
<th className="py-4 px-4 border-b-2 border-primary border-t-[3px] text-label-sm font-label-sm text-pwc-orange uppercase tracking-wider w-1/3 bg-primary/5 rounded-tr-lg">Single Parent Captive</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md">
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 text-on-surface font-medium">Cost Control</td>
<td className="py-4 px-4 text-secondary">Subject to macro market cycles &amp; standard rates.</td>
<td className="py-4 px-4 text-on-surface bg-primary/5">Directly correlates to own loss experience.</td>
</tr>
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 text-on-surface font-medium">Cash Flow</td>
<td className="py-4 px-4 text-secondary">Premiums paid upfront to insurer.</td>
<td className="py-4 px-4 text-on-surface bg-primary/5">Retain underwriting profit and investment income.</td>
</tr>
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 text-on-surface font-medium">Coverage Access</td>
<td className="py-4 px-4 text-secondary">Limited by commercial market appetite.</td>
<td className="py-4 px-4 text-on-surface bg-primary/5">Customizable policy drafting for unique risks.</td>
</tr>
<tr className="border-b border-slate-mid/10 hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 text-on-surface font-medium">Admin &amp; Compliance</td>
<td className="py-4 px-4 text-secondary">Low. Handled by insurer/broker.</td>
<td className="py-4 px-4 text-on-surface bg-primary/5">High. Requires regulatory reporting &amp; management.</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 text-on-surface font-medium">Capital Requirement</td>
<td className="py-4 px-4 text-secondary">None beyond premium payment.</td>
<td className="py-4 px-4 text-on-surface bg-primary/5">Significant upfront capitalization required.</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-12 lg:col-span-5 bg-surface-container-lowest border border-slate-mid/10 rounded-[12px] p-8 ambient-shadow">
<div className="mb-8">
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Setup Roadmap</h3>
<p className="text-body-md font-body-md text-secondary">Estimated timeline: 4 - 6 months</p>
</div>
<div className="relative pl-4">

<div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-slate-mid/20"></div>

<div className="flex gap-6 relative mb-8">
<div className="w-10 h-10 rounded-full bg-pwc-orange text-on-primary flex items-center justify-center shrink-0 z-10 shadow-sm border-4 border-surface-container-lowest">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
<div className="pt-2">
<h4 className="text-body-lg font-body-lg text-on-surface font-bold">1. Feasibility Study</h4>
<p className="text-body-md font-body-md text-secondary mt-1">Actuarial forecasting, risk mapping, and financial modeling.</p>
</div>
</div>

<div className="flex gap-6 relative mb-8">
<div className="w-10 h-10 rounded-full bg-surface border-2 border-pwc-orange text-pwc-orange flex items-center justify-center shrink-0 z-10 bg-surface-container-lowest ring-4 ring-primary/10">
<span className="text-label-sm font-label-sm">2</span>
</div>
<div className="pt-2">
<h4 className="text-body-lg font-body-lg text-pwc-orange font-bold">2. Domicile Selection</h4>
<p className="text-body-md font-body-md text-secondary mt-1">Evaluate regulatory environments, capital requirements, and tax implications.</p>
</div>
</div>

<div className="flex gap-6 relative mb-8">
<div className="w-10 h-10 rounded-full bg-surface-container-highest border border-slate-mid/30 text-secondary flex items-center justify-center shrink-0 z-10 border-4 border-surface-container-lowest">
<span className="text-label-sm font-label-sm">3</span>
</div>
<div className="pt-2">
<h4 className="text-body-lg font-body-lg text-on-surface opacity-60">3. Application &amp; Licensing</h4>
<p className="text-body-md font-body-md text-secondary mt-1 opacity-60">Submit business plan to regulatory authority and secure license.</p>
</div>
</div>

<div className="flex gap-6 relative">
<div className="w-10 h-10 rounded-full bg-surface-container-highest border border-slate-mid/30 text-secondary flex items-center justify-center shrink-0 z-10 border-4 border-surface-container-lowest">
<span className="text-label-sm font-label-sm">4</span>
</div>
<div className="pt-2">
<h4 className="text-body-lg font-body-lg text-on-surface opacity-60">4. Capitalization &amp; Ops</h4>
<p className="text-body-md font-body-md text-secondary mt-1 opacity-60">Fund the captive, issue policies, and commence ongoing management.</p>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
