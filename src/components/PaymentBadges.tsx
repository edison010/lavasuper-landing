function Mastercard() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-6 w-10 items-center">
        <span className="absolute left-0 h-6 w-6 rounded-full bg-white/90" />
        <span className="absolute left-3.5 h-6 w-6 rounded-full bg-white/50" />
      </div>
      <span className="text-sm font-semibold lowercase tracking-tight text-white/90">
        mastercard
      </span>
    </div>
  );
}

function Visa() {
  return (
    <span className="font-serif text-2xl font-black italic tracking-tight text-white">
      VISA
    </span>
  );
}

function DinersClub() {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
        <span className="h-3 w-px bg-white" />
      </span>
      <span className="font-serif text-sm font-semibold text-white">
        Diners Club
      </span>
    </div>
  );
}

function Discover() {
  return (
    <span className="flex items-center gap-1 text-lg font-bold tracking-tight text-white">
      DISC
      <span className="relative">
        O<span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
      </span>
      VER
    </span>
  );
}

export default function PaymentBadges() {
  return (
    <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl bg-slate-900 px-6 py-4 shadow-sm">
      <Mastercard />
      <Visa />
      <DinersClub />
      <Discover />
    </div>
  );
}
