'use client'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { PropsWithChildren } from 'react'
import { QueryProvider } from './query-provider'
import { ToastProvider } from './toast-provider'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NuqsAdapter>
      <QueryProvider>
        {children}
        <ToastProvider />
      </QueryProvider>
    </NuqsAdapter>
  )
}
