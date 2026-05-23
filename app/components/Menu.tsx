"use client";
import { motion } from "motion/react";

const SECTIONS = [
  {
    h: "FROM THE SEA",
    sub: "boats unload tuesday + friday",
    items: [
      ["Atlantic Salmon",   "Grilled · lemon · capers",          "26"],
      ["Lobster Pot Pie",   "1 lb claw + tail · pastry · sherry", "38"],
      ["Fish + Chips",      "Cod · beer batter · house tartar",   "22"],
      ["Shrimp Scampi",     "Garlic · butter · linguine",         "24"],
    ],
  },
  {
    h: "FROM THE GRILL",
    sub: "we cut to order",
    items: [
      ["Ribeye 14oz",       "Cast iron · herb butter",            "42"],
      ["NY Strip 12oz",     "Maitre d'hôtel · cracked pepper",    "36"],
      ["Pork Chop · Bone-In","Apple chutney · creamed greens",    "28"],
      ["Bacon Cheeseburger","Half pound · brioche · fries",        "18"],
    ],
  },
  {
    h: "FROM THE GARDEN",
    sub: "for the table",
    items: [
      ["Wedge Salad",       "Iceberg · blue cheese · bacon · tomato","12"],
      ["Caesar",            "Romaine hearts · anchovy · parm",    "14"],
      ["Roasted Brussels",  "Maple · pancetta · pomegranate",      "11"],
      ["Mashed Potatoes",   "Cream + butter, the only way",       "8"],
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="font-script text-3xl text-lobster">— from the kitchen —</div>
          <h2 className="mt-2 font-display text-[clamp(2.5rem,6vw,5rem)] text-deep leading-tight">THE MENU.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SECTIONS.map((s, si) => (
            <motion.div key={s.h} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: si*0.1 }} className="bg-kraft-2 p-7 border-2 border-rule-2">
              <h3 className="font-display text-3xl text-deep">{s.h}</h3>
              <div className="font-script text-xl text-lobster italic">{s.sub}</div>
              <div className="rope-rule mt-3 mb-6"/>
              <ul className="space-y-4">
                {s.items.map(([n, d, p]) => (
                  <li key={n}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xl text-deep">{n}</span>
                      <span className="flex-1 border-b border-dashed border-rule-2 translate-y-[-4px]"/>
                      <span className="font-display text-2xl text-lobster tabnum">${p}</span>
                    </div>
                    <div className="text-sm text-deep-2 italic">{d}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
