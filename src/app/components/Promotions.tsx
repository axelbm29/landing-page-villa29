import React from 'react';
import Image from 'next/image';
import promoImage2 from '../assets/Anuncios2.png';

const Promotions = () => {
    return (
        <div className="w-full flex flex-col items-center py-12 px-4 bg-black">
            {/* titulo */}
            <h2 className="text-[#CFFF04] bowlby-one-regular font-bold link-super-large text-center mb-8">
                PROMOCIONES
            </h2>

            {/* imagen de promocion */}
            <div className="w-full max-w-screen-lg overflow-hidden rounded-lg mb-8">
                <Image
                    src={promoImage2}
                    alt="Promoción Alitas"
                    layout="responsive"
                    width={1200}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* texto */}
            <p className="font-inter text-white text-center text-lg leading-relaxed max-w-screen-xl px-4">
                Todos los 15 y fines de cada mes, disfruta de nuestras alitas a solo 15 soles, en el sabor que prefieras. 
                ¡Ven y prueba nuestras alitas bañadas en salsas irresistibles! No te lo pierdas y celebra con nosotros en Villa 29.
            </p>
        </div>
    );
}

export default Promotions;
