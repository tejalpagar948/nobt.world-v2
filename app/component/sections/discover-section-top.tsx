import Link from 'next/link';
import discoverData from '../../data/homePageData.json';

const DiscoverSectionTop = () => {
  const { title, description, button } = discoverData.discoverSectionTop;

  return (
    <div className="mx-auto max-w-7xl wrapper lg:pt-27 lg:pb-18 pb-9 pt-14">
      <div className="grid grid-cols-1 items-center gap-6 lg:gap-12 lg:grid-cols-5">
        {/* LEFT CONTENT */}
        <h3 className="font-serif text-4xl leading-tight text-white lg:col-span-3 lg:text-[50px]">
          {title.split(' & ').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h3>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 lg:ml-auto max-w-xl">
          <p className="leading-relaxed text-white/70">{description}</p>

          <Link
            href={button.link}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold tracking-wide text-black transition hover:bg-gray-200">
            {button.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSectionTop;
