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
<Link className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-on-secondary-fixed-variant hover:bg-secondary-container/50 dark:hover:bg-inverse-surface hover:text-on-surface transition-all duration-200 ease-in-out" href="/loss-analysis">
<span className="material-symbols-outlined">analytics</span>
<span className="text-label-sm font-label-sm">Loss Analysis</span>
</Link>
</li>
<li className=" ">
<Link className="flex items-center gap-3 px-3 py-2 rounded text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 ease-in-out" href="/captive-feasibility">
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

<div className="flex-1 ml-64 flex flex-col bg-surface min-h-screen overflow-y-auto">



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
<span className="w-4 h-[2px] bg-slate-mid/50"></span>
<span className="text-label-sm font-label-sm text-secondary">Traditional Premium</span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-[2px] bg-pwc-orange"></span>
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

<div className="absolute inset-0 pl-12 pb-8 pt-6 pointer-events-none z-10">
    <svg className="w-full h-full overflow-visible">
        {/* Traditional Line */}
        <line x1="10%" y1="20%" x2="30%" y2="15%" stroke="#64748b" strokeWidth="2" />
        <line x1="30%" y1="15%" x2="50%" y2="10%" stroke="#64748b" strokeWidth="2" />
        <line x1="50%" y1="10%" x2="70%" y2="5%" stroke="#64748b" strokeWidth="2" />
        <line x1="70%" y1="5%" x2="90%" y2="0%" stroke="#64748b" strokeWidth="2" />
        
        <circle cx="10%" cy="20%" r="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <circle cx="30%" cy="15%" r="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <circle cx="50%" cy="10%" r="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <circle cx="70%" cy="5%" r="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <circle cx="90%" cy="0%" r="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />

        {/* Captive Line */}
        <line x1="10%" y1="25%" x2="30%" y2="30%" stroke="#ea5504" strokeWidth="2" />
        <line x1="30%" y1="30%" x2="50%" y2="32%" stroke="#ea5504" strokeWidth="2" />
        <line x1="50%" y1="32%" x2="70%" y2="35%" stroke="#ea5504" strokeWidth="2" />
        <line x1="70%" y1="35%" x2="90%" y2="40%" stroke="#ea5504" strokeWidth="2" />
        
        <circle cx="10%" cy="25%" r="5" fill="#f8fafc" stroke="#ea5504" strokeWidth="2" />
        <circle cx="30%" cy="30%" r="5" fill="#f8fafc" stroke="#ea5504" strokeWidth="2" />
        <circle cx="50%" cy="32%" r="5" fill="#f8fafc" stroke="#ea5504" strokeWidth="2" />
        <circle cx="70%" cy="35%" r="5" fill="#f8fafc" stroke="#ea5504" strokeWidth="2" />
        <circle cx="90%" cy="40%" r="5" fill="#f8fafc" stroke="#ea5504" strokeWidth="2" />
    </svg>
</div>

<div className="flex-1 flex justify-around pl-12 z-10 h-full items-end pb-8">
<div className="flex flex-col items-center gap-2 w-full px-2"><span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 1</span></div>
<div className="flex flex-col items-center gap-2 w-full px-2"><span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 2</span></div>
<div className="flex flex-col items-center gap-2 w-full px-2"><span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 3</span></div>
<div className="flex flex-col items-center gap-2 w-full px-2"><span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 4</span></div>
<div className="flex flex-col items-center gap-2 w-full px-2"><span className="text-tabular-nums font-tabular-nums text-on-surface font-bold mt-2">Year 5</span></div>
</div>
</div>
<div className="mt-4 flex justify-end">
<div className="bg-surface-container-low px-4 py-2 rounded-lg border border-slate-mid/10 flex items-center gap-3">
<span className="material-symbols-outlined text-pwc-orange">trending_up</span>
<span className="text-body-md font-body-md text-on-surface">Projected 5-Year Savings: <strong className="text-pwc-orange font-tabular-nums">18.4%</strong> ($17.2M)</span>
</div>
</div>
</div>

<div className="col-span-12 bg-surface-container-lowest border border-slate-mid/10 rounded-[12px] p-8 ambient-shadow mt-6">
<div className="flex justify-between items-end mb-8 border-b border-slate-mid/10 pb-4">
<div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Captive Capital vs. Equalization Reserve</h3>
<p className="text-body-md font-body-md text-secondary">Projected 5-Year Capital Accumulation (USD Millions)</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-primary"></span>
<span className="text-label-sm font-label-sm text-secondary">Captive Capital ($50M)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-pwc-orange"></span>
<span className="text-label-sm font-label-sm text-secondary">Equalization Reserve</span>
</div>
</div>
</div>

<div className="h-[300px] w-full flex items-end justify-between gap-4 pt-6 relative">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-tabular-nums font-tabular-nums text-secondary text-xs pb-8 -ml-2">
<span className="">$60M</span>
<span className="">$45M</span>
<span className="">$30M</span>
<span className="">$15M</span>
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
<div className="flex items-end justify-center w-full gap-2 h-[250px] pt-6">
<div className="w-1/2 max-w-[40px] bg-primary border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/cap" style={{ height: '83.3%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-primary opacity-0 group-hover/cap:opacity-100 transition-opacity">$50M</span>
</div>
<div className="w-1/2 max-w-[40px] bg-pwc-orange border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/bar" style={{ height: '11.6%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-pwc-orange opacity-0 group-hover/bar:opacity-100 transition-opacity">$7.0M</span>
</div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 1</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-2 h-[250px] pt-6">
<div className="w-1/2 max-w-[40px] bg-primary border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/cap" style={{ height: '83.3%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-primary opacity-0 group-hover/cap:opacity-100 transition-opacity">$50M</span>
</div>
<div className="w-1/2 max-w-[40px] bg-pwc-orange border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/bar" style={{ height: '13.0%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-pwc-orange opacity-0 group-hover/bar:opacity-100 transition-opacity">$7.8M</span>
</div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 2</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-2 h-[250px] pt-6">
<div className="w-1/2 max-w-[40px] bg-primary border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/cap" style={{ height: '83.3%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-primary opacity-0 group-hover/cap:opacity-100 transition-opacity">$50M</span>
</div>
<div className="w-1/2 max-w-[40px] bg-pwc-orange border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/bar" style={{ height: '14.6%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-pwc-orange opacity-0 group-hover/bar:opacity-100 transition-opacity">$8.8M</span>
</div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 3</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-2 h-[250px] pt-6">
<div className="w-1/2 max-w-[40px] bg-primary border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/cap" style={{ height: '83.3%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-primary opacity-0 group-hover/cap:opacity-100 transition-opacity">$50M</span>
</div>
<div className="w-1/2 max-w-[40px] bg-pwc-orange border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/bar" style={{ height: '16.3%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-pwc-orange opacity-0 group-hover/bar:opacity-100 transition-opacity">$9.8M</span>
</div>
</div>
<span className="text-tabular-nums font-tabular-nums text-secondary mt-2">Year 4</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full px-2">
<div className="flex items-end justify-center w-full gap-2 h-[250px] pt-6">
<div className="w-1/2 max-w-[40px] bg-primary border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/cap" style={{ height: '83.3%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-primary opacity-0 group-hover/cap:opacity-100 transition-opacity">$50M</span>
</div>
<div className="w-1/2 max-w-[40px] bg-pwc-orange border border-primary-container rounded-t-sm transition-all hover:opacity-80 relative group/bar" style={{ height: '18.3%' }}>
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-tabular-nums font-semibold text-pwc-orange opacity-0 group-hover/bar:opacity-100 transition-opacity">$11.0M</span>
</div>
</div>
<span className="text-tabular-nums font-tabular-nums text-on-surface font-bold mt-2">Year 5</span>
</div>

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
