"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-48 pb-16 md:pb-24">
      <div className="rope-rule mb-12"/>
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="font-script text-3xl text-lobster sway-rope inline-block">
              washed ashore in 1998.
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="mt-3 font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] text-deep">
              Castaway.
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="mt-2 font-display text-2xl md:text-4xl text-seafoam">
              BAR · GRILL · COCKTAILS
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }} className="mt-8 max-w-xl text-lg leading-relaxed text-deep-2">
              A neighborhood bar and grill on Watchung Avenue, Orange NJ. Steaks and chops off the grill, fresh seafood from the docks, and a long bar pouring proper drinks until last call. Eight hundred reviews and counting.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65 }} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#reserve" className="bg-deep text-kraft px-7 py-4 font-display text-lg hover:bg-lobster transition-colors">Reserve a table</a>
              <a href="#menu" className="border-2 border-deep px-7 py-4 font-display text-lg hover:bg-deep hover:text-kraft transition-colors">See the menu</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: -2 }} transition={{ duration: 1.0, delay: 0.3 }} className="col-span-12 md:col-span-5">
            {/* Dock-board postcard */}
            <div className="dock-board p-8 text-kraft border-4 border-rope shadow-[12px_12px_0_0_var(--rope-2)]">
              <div className="font-script text-3xl text-rope text-center">— greetings from —</div>
              <div className="mt-2 font-display text-[clamp(2.5rem,5vw,4rem)] text-kraft text-center leading-[0.95]">
                ORANGE, NJ
              </div>
              <div className="mt-3 rope-rule"/>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-script text-xl text-rope">since</div>
                  <div className="font-display text-3xl tabnum">1998</div>
                </div>
                <div>
                  <div className="font-script text-xl text-rope">reviews</div>
                  <div className="font-display text-3xl tabnum">812</div>
                </div>
                <div>
                  <div className="font-script text-xl text-rope">rating</div>
                  <div className="font-display text-3xl tabnum">4.1★</div>
                </div>
                <div>
                  <div className="font-script text-xl text-rope">last call</div>
                  <div className="font-display text-3xl">2 AM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="rope-rule mt-16"/>
    </section>
  );
}
