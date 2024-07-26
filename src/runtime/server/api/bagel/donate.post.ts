import { eventHandler } from 'h3'
import { donateABagel } from '../../utils/stripe'

export default eventHandler(() => {
  return donateABagel().then((url) => {
    return url
  })
})
