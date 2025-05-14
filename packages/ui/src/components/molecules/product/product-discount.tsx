import { formatCurrency } from "../../../lib/format-currency/format-currency";

export function Discount({ discount, price }: { discount?: number; price: number }) {
  let finalPrice = price;
  if (discount) {
    finalPrice = price - (discount / 100) * price;
  }
  const formattedOriginalPrice = formatCurrency(price);
  const formattedFinalPrice = formatCurrency(finalPrice);

  return (
    <p className="flex gap-2 text-20 font-bold leading-28">
      {discount ? (
        <>
          <span className="line-through text-5D5D5D">{formattedOriginalPrice}</span>
          <span className="text-gray-950">{formattedFinalPrice}</span>
        </>
      ) : (
        <span className="text-gray-950">{formattedOriginalPrice}</span>
      )}
    </p>
  );
}
