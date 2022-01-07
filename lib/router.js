import {useRouter} from 'next/router'

export function reroute(path) {
  const router = useRouter()
  router.push(path)
}
