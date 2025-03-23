"use client";

import { useState } from "react";

export default function Home() {
  const [km, setKm] = useState<number | "">(0);
  const [price, setPrice] = useState<number | "">(32);
  const [consumption, setConsumption] = useState<number | "">(6.5);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Saver</h1>
        <ul className="list-inside text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] w-full">
          <li className="mb-2 tracking-[-.01em] w-full">
            <input
              type="number"
              placeholder="počet km autem"
              className="w-full"
              value={km}
              onChange={(e) => setKm(e.target.value && Number(e.target.value))}
            />
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <input
              type="number"
              placeholder="cena za 1l paliva"
              className="w-full"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value && Number(e.target.value))
              }
            />
          </li>
          <li className="tracking-[-.01em]">
            <input
              type="number"
              placeholder="spotřeba na 100km"
              className="w-full"
              value={consumption}
              onChange={(e) =>
                setConsumption(e.target.value && Number(e.target.value))
              }
            />
          </li>
        </ul>

        <div className="w-full">
          Celkem: {(((consumption || 0) * (price || 0)) / 100) * (km || 0)} Kč
        </div>
      </main>
    </div>
  );
}
