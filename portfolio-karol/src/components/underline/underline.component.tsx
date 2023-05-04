import './underline.style.css';

export function Underline({ color }: any) {
    return (
        <span className={`underline underline-${color}`}></span>
    )
}