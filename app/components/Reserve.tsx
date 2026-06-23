"use client";
import { motion } from "motion/react";

export default function Reserve() {
  return (
    <section id="hours" className="py-20 md:py-28">
      <div className="rope-rule mb-12"/>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
        <div className="col-span-12 md:col-span-5">
          <div className="font-script text-3xl text-lobster">— drop anchor —</div>
          <h2 id="reserve" className="mt-2 font-display text-[clamp(2.5rem,6vw,5.5rem)] text-deep leading-[0.95]">
            284 Watchung Ave.
          </h2>
          <div className="font-script text-3xl text-seafoam mt-2">Orange · NJ · 07050</div>
          <p className="mt-7 max-w-md text-deep-2 leading-relaxed">
            On Watchung Ave between Reynolds Terrace and Berwyn. Bar
            opens at 1 PM Tuesday through Sunday. Kitchen closes an
            hour before last call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+19736770052" className="bg-lobster text-kraft px-7 py-4 font-display text-lg hover:bg-deep transition-colors">(973) 677-0052</a>
            <a href="https://maps.google.com/?q=Castaway+Restaurant+Orange+NJ" target="_blank" rel="noreferrer" className="border-2 border-deep px-7 py-4 font-display text-lg hover:bg-deep hover:text-kraft transition-colors">Directions →</a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="col-span-12 md:col-span-7">
          <div className="border-4 border-deep bg-kraft-2 p-7">
            <div className="font-display text-2xl text-deep mb-4">Open hours · weekly</div>
            <div className="rope-rule mb-4"/>
            <ul className="space-y-3">
              {[
                ["Monday","Closed (we rest)"],
                ["Tuesday","1 PM – 10 PM"],
                ["Wednesday","1 PM – 10 PM"],
                ["Thursday","1 PM – 11 PM"],
                ["Friday","1 PM – 2 AM"],
                ["Saturday","12 PM – 2 AM"],
                ["Sunday","12 PM – 10 PM"],
              ].map(([d,h]) => (
                <li key={d} className="grid grid-cols-2 py-1">
                  <span className="font-display text-xl text-deep">{d}</span>
                  <span className="font-script text-2xl text-lobster">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="rope-rule mt-12"/>
    </section>
  );
}
