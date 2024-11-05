declare module 'react-pageflip' {
    import { Component } from 'react';

    interface IProps {
        width: number;
        height: number;
        className?: string;
        style?: React.CSSProperties;
        maxHeight?: number;
        maxWidth?: number;
        showCover?: boolean; 
        children: React.ReactNode;
        onFlip?: (e: { data: number }) => void;
    }

    export default class HTMLFlipBook extends Component<IProps> {
        flipNext(corner?: ['top', 'bottom']): void; // Hacer que corner sea opcional
        flipPrev(corner?: ['top', 'bottom']): void; // Hacer que corner sea opcional
        // Otros métodos si es necesario
    }
}
