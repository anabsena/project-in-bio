import Header from '@/app/components/landing-page/Header'
import Button from '@/app/components/ui/Button'
import Input from '@/app/components/ui/Input'
import { Rocket } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>

      <Header/>
      <div className='h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto'>
<div className='flex items-center gap-4'>
  <h1 className='text-4xl font-bold text-white'>Escolha seu link</h1>
  <Rocket className='size-10'></Rocket>
</div>
<form action="" className='w-full flex items-center gap-2'>
  <span className='text-white'>projectinbio.com/</span>
  <Input/>
  <Button variant='primary' className='w-[126px]'>Criar</Button>
</form>
<div>
  <span className='text-accent-pink'>Erro de exemplo</span>
</div>
      </div>
    </div>
  )
}

export default page