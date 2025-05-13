import { PropsWithChildren } from 'react'

export type ModalProps = PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'outlined' | 'filled' | 'ghost' | 'unstyled'
  className?: string
}>
