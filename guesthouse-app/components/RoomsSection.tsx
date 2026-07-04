import Image from 'next/image';
import Link from 'next/link';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';

const rooms = [
  {
    image: img1,
    name: 'Deluxe Suite',
    description: 'A calm retreat with refined detailing and soft, layered light.',
    price: '₹2,500/night',
  },
  {
    image: img2,
    name: 'Premium Room',
    description: 'An understated sanctuary designed for deep comfort and quiet luxury.',
    price: '₹1,800/night',
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-warm px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">Rooms</p>
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
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-navy">{room.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slateText/70 sm:text-[15px]">
                      {room.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{room.price}</p>
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
      </div>
    </section>
  );
}
