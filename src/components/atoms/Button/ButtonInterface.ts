export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick: () => void;
    className?: string;
    isLoading?: boolean;
}
