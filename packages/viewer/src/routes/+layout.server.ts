import main from '../../public/refs/heads/main.json'
import undecidable from '../../public/refs/heads/undecidable-data.json'

const bundleHost = import.meta.env.VITE_BUNDLE_HOST

export const load = () => {
  if (bundleHost?.includes('localhost')) {
    return undecidable
  }
}
