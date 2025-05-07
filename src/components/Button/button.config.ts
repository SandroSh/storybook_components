import { PropsWithChildren } from "react";





export type ButtonProps = PropsWithChildren<{
    onClick: () => void;
    size:'sm'| 'md' | 'lg' | 'xl'
    variant:'primary' | 'secondary' | 'transparent';
}>;