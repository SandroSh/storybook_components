import { PropsWithChildren } from "react";





export type ButtonProps = PropsWithChildren<{
    onClick: () => void;
    className?:string;
    size:'sm'| 'md' | 'lg' | 'xl'
    variant:'default' | 'outlined' | 'transparent' | 'filled' | 'link' | 'danger' | 'success' | 'warning' | 'unstyled';
}>;