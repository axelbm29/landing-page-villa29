"use client";

import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Menu: React.FC = () => {
    
    const images = [
        '/pag-1.png', // Portada
        '/pag-2.png', // Página 1
        '/pag-3.png', // Página 2
        '/pag-4.png', // Página 3
        '/pag-5.png', // Página 4
        '/pag-6.png', // Página 5
        '/pag-7.png', // Página 6
        '/pag-8.png', // Contraportada
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const flipBookRef = useRef<any>(null);

    const handleFlip = (index: number) => {
        setCurrentPage(index);
    };

    const handleNextPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipNext();
        }
    };

    const handlePrevPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipPrev();
        }
    };

    return (
        <div className="relative flex mb-36 md:mb-4 flex-col py-16 items-center bg-black">
            <h1 className="link-super-large font-bold text-[#CFFF04] md:mb-8 bowlby-one-regular">CARTA</h1>

            {/* Fondo difuminado alrededor del flipbook */}
            <div className="blur-background" />
            
            <HTMLFlipBook
                width={260}
                height={530}
                ref={flipBookRef} // Asocia el ref al flipbook
                className="flipbook -mb-80 md:mb-4 overflow-hidden"
                style={{ transition: 'margin 0.3s', position: 'relative' }}
                maxWidth={600}
                maxHeight={800}
                showCover={true}
                onFlip={(e) => handleFlip(e.data)} // Maneja el evento de flip
            >
                {/* Portada del flipbook */}
                <div className="demoPage">
                    <img
                        className='mb-72'
                        src="/pag-1.png"
                        alt="Cover"
                        style={{ width: '100%', height: '100%' }}
                        onError={(e) => {
                            e.currentTarget.src = '/pag-1.png'; // Imagen de reemplazo
                        }}
                    />
                </div>

                {/* Páginas del flipbook */}
                {images.slice(1, -1).map((image, index) => (
                    <div className="demoPage" key={index}>
                        <img
                            className='mb-72'
                            src={image}
                            alt={`Page ${index + 2}`}
                            style={{ width: '100%', height: '100%' }}
                            onError={(e) => {
                                e.currentTarget.src = '/pag-1.png'; // Imagen de reemplazo
                            }}
                            onLoad={() => handleFlip(index + 1)}
                        />
                    </div>
                ))}

                {/* Contraportada */}
                <div className="demoPage">
                    <img
                        className='mb-72'
                        src="/pag-8.png"
                        alt="Back Cover"
                        style={{ width: '100%', height: '100%' }}
                        onError={(e) => {
                            e.currentTarget.src = '/pag-1.png'; // Imagen de reemplazo
                        }}
                    />
                </div>
            </HTMLFlipBook>

            {/* Controles de navegación */}
            <div className="navigation-container">
                <button 
                    onClick={handlePrevPage} 
                    className="navigation-button navigation-button-left bounce-animation bg-white hover:bg-white"
                    aria-label="Página anterior"
                >
                    <FaArrowLeft className='text-black'/>
                </button>
                <button 
                    onClick={handleNextPage} 
                    className="navigation-button navigation-button-right bounce-animation bg-white hover:bg-white"
                    aria-label="Página siguiente"
                >
                    <FaArrowRight className='text-black'/>
                </button>
            </div>

            <div className="h-4" />
        </div>
    );
};

export default Menu;
