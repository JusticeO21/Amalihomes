import { formatCurrency } from "../../../lib/format-currency/format-currency";

export function Discount({ discount, price }: { discount?: number; price: number }) {
  let finalPrice = price;
  if (discount) {
    finalPrice = price - (discount / 100) * price;
  }
  const formattedOriginalPrice = formatCurrency(price);
  const formattedFinalPrice = formatCurrency(finalPrice);

  return (
    <p className="flex gap-4 text-14 sm:text-16 lg:text-20 font-bold leading-28 flex-wrap ">
      {discount ? (
        <>
          <span className="line-through text-gray-600">{formattedOriginalPrice}</span>
          <span className="text-gray-950">{formattedFinalPrice}</span>
        </>
      ) : (
        <span className="text-gray-950">{formattedOriginalPrice}</span>
      )}
    </p>
  );
}
