export default function Footer() {
  return (
    <footer className="bg-deep text-kraft pt-14 pb-10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
        <div className="font-display text-4xl text-kraft">Castaway</div>
        <div className="font-script text-2xl text-rope">— bar & grill · Orange NJ —</div>
        <p className="mt-5 max-w-sm mx-auto text-kraft/75 italic">
          Steaks, seafood, cocktails. 284 Watchung Ave, Orange NJ. Eight hundred reviews and counting.
        </p>
        <div className="rope-rule mt-10"/>
        <div className="mt-4 font-script text-xl text-rope"><a href="https://bysemaj.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline transition-opacity hover:opacity-80">built · bysemaj.com</a></div>
      </div>
    </footer>
  );
}
