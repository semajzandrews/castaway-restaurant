"use client";
import { motion } from "motion/react";

const COCKTAILS = [
  { n: "Dark + Stormy",     base: "Dark rum · ginger beer · lime",        p: "11" },
  { n: "Old Fashioned",     base: "Bourbon · sugar · bitters · orange",   p: "13" },
  { n: "Castaway Manhattan",base: "Rye · sweet vermouth · cherry · house twist", p: "14" },
  { n: "Espresso Martini",  base: "Vodka · espresso · kahlua",            p: "13" },
  { n: "House Margarita",   base: "Tequila · lime · agave · salt rim",    p: "11" },
  { n: "Negroni",           base: "Gin · Campari · sweet vermouth",       p: "12" },
];

export default function Bar() {
  return (
    <section id="bar" className="py-20 md:py-28 dock-board text-kraft">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="font-script text-3xl text-rope">— behind the bar —</div>
          <h2 className="mt-2 font-display text-[clamp(2.5rem,6vw,5rem)] text-kraft leading-tight">COCKTAILS · BEER · WINE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COCKTAILS.map((c, i) => (
            <motion.div key={c.n} initial={{ opacity: 0, x: i%2?10:-10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i*0.05 }} className="flex items-baseline gap-4 border-b border-rope/40 pb-4">
              <span className="font-display text-2xl text-kraft whitespace-nowrap">{c.n}</span>
              <span className="flex-1 border-b border-dashed border-rope/30 translate-y-[-4px]"/>
              <span className="font-script text-xl text-rope italic hidden md:inline">{c.base}</span>
              <span className="font-display text-2xl text-lobster tabnum ml-auto md:ml-4">${c.p}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center font-script text-2xl text-rope">+ rotating draft list. + 30-deep wine cellar. Ask the bartender.</div>
      </div>
    </section>
  );
}
