'use client';

import { useState } from 'react';
import QueryModal from './query-modal';

type Props = {
  destination: string;
  packageTitle: string;
};

export default function QueryButton({ destination, packageTitle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#D6A200] hover:bg-yellow-500 transition text-black w-full py-3 rounded-full font-semibold">
        SUBMIT YOUR QUERY
      </button>

      {open && (
        <QueryModal
          destination={destination}
          packageTitle={packageTitle}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
