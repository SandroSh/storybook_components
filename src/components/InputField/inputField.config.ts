import { PropsWithChildren } from 'react';

export type InputFieldProps = PropsWithChildren<{
    id:string;
    name:string;
    value: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'outlined' | 'filled';
    className?:string;
}>;