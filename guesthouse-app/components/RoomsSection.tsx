import Image from 'next/image';
import Link from 'next/link';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';

const rooms = [
  {
    image: img1,
    name: 'Deluxe Suite',
    description: 'A calm retreat with refined detailing and soft, layered light.',
    priceWeekday: '₹1,500',
    priceWeekend: '₹2,000',
  },
  {
    image: img2,
    name: 'Premium Room',
    description: 'An understated sanctuary designed for deep comfort and quiet luxury.',
    priceWeekday: '₹1,500',
    priceWeekend: '₹2,000',
  },
];

const weeklyRates = [
  { day: 'Mon', rate: '₹1,500', isWeekend: false },
  { day: 'Tue', rate: '₹1,500', isWeekend: false },
  { day: 'Wed', rate: '₹1,500', isWeekend: false },
  { day: 'Thu', rate: '₹1,500', isWeekend: false },
  { day: 'Fri', rate: '₹1,500', isWeekend: false },
  { day: 'Sat', rate: '₹2,000', isWeekend: true },
  { day: 'Sun', rate: '₹2,000', isWeekend: true },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-warm px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">Rooms & Pricing</p>
          <h2 className="section-title">Choose Your Stay</h2>
          <p className="section-copy mt-5">
            A refined selection of spaces designed with calm, comfort, and understated elegance in mind.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {rooms.map((room, index) => (
            <article
              key={room.name + index}
              className="card-surface group overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(15,23,42,0.1)]"
            >
              <div className="overflow-hidden rounded-[24px]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-[600ms] ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="px-6 pb-7 pt-7 sm:px-8 sm:pb-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-navy">{room.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slateText/70 sm:text-[15px]">
                      {room.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gold">
                      24h Stay
                    </span>
                    <div className="text-left sm:text-right">
                      <p className="text-xs font-semibold text-slateText/70">
                        Weekday: <span className="text-sm font-bold text-navy">{room.priceWeekday}</span>
                      </p>
                      <p className="text-xs font-semibold text-slateText/70 mt-0.5">
                        Weekend: <span className="text-sm font-bold text-navy">{room.priceWeekend}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="https://api.whatsapp.com/send/?phone=919363058387&text=Hello&type=phone_number&app_absent=0" className="btn-primary px-6">
                    Book via WhatsApp
                  </Link>
                  <Link href="#" className="btn-secondary px-6">
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Weekly Tariff Breakdown */}
        <div className="mt-20 card-surface overflow-hidden bg-white/70 p-6 sm:p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-100 pb-8">
            <div>
              <h3 className="font-serif text-2xl text-navy">Weekly Tariff Schedule</h3>
              <p className="mt-2 text-sm text-slateText/70">
                Flexible 24-hour stays with rates tailored for weekdays and weekends.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slateText/60">
                <span className="h-3.5 w-3.5 rounded bg-gold/25 border border-gold" /> Weekdays (Mon - Fri)
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slateText/60">
                <span className="h-3.5 w-3.5 rounded bg-emerald/25 border border-emerald" /> Weekends (Sat - Sun)
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
            {weeklyRates.map((item, idx) => (
              <div
                key={item.day + idx}
                className={`relative flex flex-col items-center justify-center rounded-2xl p-5 border transition duration-200 hover:scale-[1.03] ${
                  item.isWeekend
                    ? 'bg-emerald/5 border-emerald/20 hover:shadow-[0_12px_24px_rgba(22,163,74,0.06)]'
                    : 'bg-gold/5 border-gold/20 hover:shadow-[0_12px_24px_rgba(201,162,39,0.06)]'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slateText/50">{item.day}</span>
                <span className="mt-3 text-lg font-bold text-navy">{item.rate}</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slateText/40">24 Hours</span>
                <div
                  className={`absolute top-2 right-2 h-2.5 w-2.5 rounded-full ${
                    item.isWeekend ? 'bg-emerald' : 'bg-gold'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
