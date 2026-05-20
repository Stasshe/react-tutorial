"use client";

import { useState } from "react";
import BackButton from "@/componets/back";

type Product = { id: number; name: string; price: number };

const PRODUCTS: Product[] = [
  { id: 1, name: "T-shirt", price: 1999 },
  { id: 2, name: "Mug", price: 799 },
  { id: 3, name: "Sticker", price: 199 },
];

export default function page05() {
  const [cart, setCart] = useState<Record<number, number>>({});

  function add(id: number) {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  }

  function removeOne(id: number) {
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] = next[id] - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  }

  const cartItems = Object.entries(cart).map(([idStr, qty]) => {
    const id = Number(idStr);
    const p = PRODUCTS.find((x) => x.id === id)!;
    return { ...p, qty } as Product & { qty: number };
  });

  const total = cartItems.reduce((s, it) => s + it.qty * it.price, 0);

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl font-bold my-4">EC Demo (05)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold mb-2">Products</h2>
          <ul className="space-y-2">
            {PRODUCTS.map((p) => (
              <li key={p.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-gray-600">¥{(p.price / 100).toFixed(2)}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => add(p.id)} className="px-3 py-1 bg-blue-600 text-white rounded">
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Cart</h2>
          {cartItems.length === 0 && <div className="text-gray-500">Cart is empty.</div>}
          <ul className="space-y-2">
            {cartItems.map((it) => (
              <li key={it.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <div className="font-medium">{it.name} × {it.qty}</div>
                  <div className="text-sm text-gray-600">¥{((it.price * it.qty) / 100).toFixed(2)}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => removeOne(it.id)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 p-3 border-t">
            <div className="font-semibold">Total: ¥{(total / 100).toFixed(2)}</div>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded" disabled={cartItems.length===0}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
