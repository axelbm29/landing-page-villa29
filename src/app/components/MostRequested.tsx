"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import alitas from '../assets/Imagen-Alitas.png';
import cubalibre from '../assets/Imagen-Cuba-Libre.png';
import cheese from '../assets/Imagen-H.-Cheese.png';

const MostRequested = () => {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard(prevCard => (prevCard + 1) % 3); // alterna entre 0, 1 y 2 para las tres tarjetas
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col items-center py-12 px-3.5 bg-black">
            {/* Titulo */}
            <h2 className="link-super-large font-bold bowlby-one-regular text-white text-center mb-8">
                LOS MÁS PEDIDOS
            </h2>

            {/* Container de cards */}
            <div className="flex flex-wrap justify-center gap-6 min-h-[450px]">
                {/* Card 1 */}
                <div className={`border-white rounded-3xl overflow-hidden w-[300px] relative transition-transform duration-500 
                    ${activeCard === 0 ? 'transform scale-105 shadow-[0px_0px_20px_15px_rgba(255,255,255,0.3)]' : 'shadow-lg'}`}>
                    <Image
                        src={cubalibre}
                        alt="Cuba libre"
                        width={300}
                        height={600}
                        className="object-cover h-auto w-full"
                    />
                    <div className="absolute bottom-8 md:bottom-4 left-1/4 transform -translate-x-1/4 bg-[#1E1E1E] text-white py-4 px-4 rounded-lg w-4/6 z-10">
                        <h3 className="font-semibold bowlby-one-regular">Cuba Libre</h3>
                        <p className="text-sm bowlby-one-regular text-[#A711D0]">S/ 20.00</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className={`border-white rounded-3xl overflow-hidden w-[300px] relative transition-transform duration-500 
                    ${activeCard === 1 ? 'transform scale-105 shadow-[0px_0px_20px_15px_rgba(255,255,255,0.3)]' : 'shadow-lg'}`}>
                    <Image
                        src={cheese}
                        alt="Hamburguesa Cheese"
                        width={300}
                        height={600}
                        className="object-cover h-auto w-full"
                    />
                    <div className="absolute bottom-8 md:bottom-4 left-1/4 transform -translate-x-1/4 bg-[#1E1E1E] text-white py-4 px-4 rounded-lg w-4/6 z-10">
                        <h3 className="font-semibold bowlby-one-regular">Hamb. Cheese</h3>
                        <p className="text-sm bowlby-one-regular text-[#A711D0]">S/ 25.00</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className={`border-white rounded-3xl overflow-hidden w-[300px] relative transition-transform duration-500 
                    ${activeCard === 2 ? 'transform scale-105 shadow-[0px_0px_20px_15px_rgba(255,255,255,0.3)]' : 'shadow-lg'}`}>
                    <Image
                        src={alitas}
                        alt="Alitas BBQ"
                        width={300}
                        height={600}
                        className="object-cover h-auto w-full"
                    />
                    <div className="absolute bottom-8 md:bottom-4 left-1/4 transform -translate-x-1/4 bg-[#1E1E1E] text-white py-4 px-4 rounded-lg w-4/6 z-10">
                        <h3 className="font-semibold bowlby-one-regular">Alitas BBQ</h3>
                        <p className="text-sm bowlby-one-regular text-[#A711D0]">S/ 18.00</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MostRequested;
