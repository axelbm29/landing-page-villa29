import React from 'react';
import Image from 'next/image';
import alitas from '../assets/Imagen-Alitas.png';
import cubalibre from '../assets/Imagen-Cuba-Libre.png';
import cheese from '../assets/Imagen-H.-Cheese.png';

const MostRequested = () => {
    return (
        <div className="w-full flex flex-col items-center py-12 px-3.5 bg-black">
            {/* titulo */}
            <h2 className="link-super-large font-bold bowlby-one-regular text-white text-center mb-8">
                LOS MÁS PEDIDOS
            </h2>

            {/* container de card */}
            <div className="flex flex-wrap justify-center gap-6 min-h-[500px]">
                {/* card 1 */}
                <div className="border-white rounded-lg shadow-lg overflow-hidden w-[300px] relative">
                    <Image
                        src={cubalibre}
                        alt="Cuba libre"
                        width={300}
                        height={600}
                        className="object-cover h-auto w-full"
                    />
                    <div className="absolute bottom-8 md:bottom-16 left-1/4 transform -translate-x-1/4 bg-[#1E1E1E] text-white py-4 px-4 rounded-lg w-4/6">
                        <h3 className="font-semibold bowlby-one-regular">Cuba Libre</h3>
                        <p className="text-sm bowlby-one-regular text-[#A711D0]">S/ 20.00</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="border-white rounded-lg shadow-lg overflow-hidden w-[300px] relative">
                    <Image
                        src={cheese}
                        alt="Hamburguesa Cheese"
                        width={300}
                        height={600}
                        className="object-cover h-auto w-full"
                    />
                    <div className="absolute bottom-8 md:bottom-16 left-1/4 transform -translate-x-1/4 bg-[#1E1E1E] text-white py-4 px-4 rounded-lg w-4/6">
                        <h3 className="font-semibold bowlby-one-regular">Hamb. Cheese</h3>
                        <p className="text-sm bowlby-one-regular text-[#A711D0]">S/ 25.00</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="border-white rounded-lg shadow-lg overflow-hidden w-[300px] relative">
                    <Image
                        src={alitas}
                        alt="Alitas BBQ"
                        width={300}
                        height={600}
                        className="object-cover h-auto w-full"
                    />
                    <div className="absolute bottom-8 md:bottom-16 left-1/4 transform -translate-x-1/4 bg-[#1E1E1E] text-white py-4 px-4 rounded-lg w-4/6">
                        <h3 className="font-semibold bowlby-one-regular">Alitas BBQ</h3>
                        <p className="text-sm bowlby-one-regular text-[#A711D0]">S/ 18.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MostRequested;
