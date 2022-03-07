import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('./shop');
  })
  return (
    <NextUIProvider>

    </NextUIProvider>
  )
}

export default Home