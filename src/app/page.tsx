'use client'
import { numberToWords } from '@persian-tools/persian-tools'
import { useState } from 'react'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'

export default () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setRandomNumber(Math.floor(Math.random() * 10000000000) * 10)
    setVisible(false)
  }

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="mx-auto grid min-h-svh w-full place-items-center bg-blue-500 p-4 text-white sm:max-w-sm">
      <div className="grid gap-4">
        <h1 className="text-center font-black text-2xl">
          Welcome to Num 2 Word
        </h1>
        <p className="text-center">{randomNumber.toLocaleString('en-US')}</p>
        <p
          className={cn(
            'text-center duration-200',
            visible ? 'opacity-100' : 'opacity-0'
          )}
        >
          {numberToWords(randomNumber / 10)} تومان
        </p>
        <div className="flex items-center justify-center gap-2">
          <Button
            className="bg-white text-gray-800 hover:bg-white/80"
            onClick={toggleVisible}
          >
            نمایش
          </Button>
          <Button
            className="bg-white text-gray-800 hover:bg-white/80"
            onClick={handleClick}
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  )
}
