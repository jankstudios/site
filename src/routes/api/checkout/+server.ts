import type { RequestHandler } from "./$types";
import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "$env/static/private";

const stripe = new Stripe(STRIPE_SECRET_KEY);

// SKU -> Stripe price_... mapping (YOUR REAL PRICE IDS)
const PRICE_BY_SKU: Record<string, string> = {
  ICEPOP: "price_1T0X9oPTVU1w0q41Zwy9gkkv",              // ICE Pop
  ICEPOP_X2: "price_1T0XAyPTVU1w0q41icjtPd5l",           // ICE Pop (x2)
  ICEPOP_W_STAND: "price_1T5fHMPTVU1w0q410N07Y56y",        // ICE Pop w/ Stand
  ICEPOP_W_STAND_X2: "price_1T5fJ2PTVU1w0q41c9dwmk2O",     // ICE Pop w/ Stand (x2)
  ICEPOP_STAND: "price_1T5fJuPTVU1w0q41ORpkQ9Zj",   // ICE Pop Stand
};

export const POST: RequestHandler = async ({ request, url }) => {
  const { sku, quantity } = await request.json();

  const priceId = PRICE_BY_SKU[sku];
  if (!priceId) {
    return new Response("Invalid sku", { status: 400 });
  }

  const qty = Math.max(1, Math.min(99, Number(quantity) || 1));

  const origin = url.origin;
  const cancelUrl = request.headers.get("referer") || `${origin}/`;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{
        price: priceId,
        quantity: qty,
        adjustable_quantity: { enabled: true, minimum: 1, maximum: 99 }
    }],
    automatic_tax: { enabled: true },
    shipping_address_collection: {
        allowed_countries: ["US", "CA"]
      },
  
      shipping_options: [
        {
          shipping_rate: "shr_1T5hKgPTVU1w0q41pJCUhaTp"
        }
      ],
    success_url: `${origin}/?checkout=success`,
    cancel_url: cancelUrl,
  });

  // Checkout Session returns a hosted URL you redirect to
  return new Response(JSON.stringify({ url: session.url }), {
    headers: { "content-type": "application/json" },
  });
};