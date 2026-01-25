'use client'

import { RootLayoutWrapper } from './RootLayoutWrapper'

export function LayoutClient({ children }) {
  return (
    <RootLayoutWrapper>
      {children}
    </RootLayoutWrapper>
  )
}
