import Stripe from 'stripe'
import { useRuntimeConfig } from '#imports'

const { bagel: { stripeKey, host, successUrl } } = useRuntimeConfig()

const stripe = new Stripe(stripeKey)

if (!stripeKey) {
  console.error('🥯 Bagel: No Stripe API Key')
}

export function donateABagel() {
  if (!stripeKey) {
    throw new Error('🥯 Bagel: No Stripe API Key')
  }
  return stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        product_data: {
          name: 'Donate a Bagel',
        },
        unit_amount: 500,
        currency: 'USD',
      },
      quantity: 1,
    }],
    mode: 'payment',
    cancel_url: host,
    success_url: `${host}/${successUrl}`,
  }).then((checkout) => {
    return checkout.url
  })
}
