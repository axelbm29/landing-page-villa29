import React from 'react'
import burgers from '../assets/Burgers.png'
import Image from 'next/image'

const About = () => {
    return (
        <div className="w-full h-full flex justify-center py-24 px-10 bg-black">
            {/* container de la card */}
            <div className="bg-[#CFFF04] card-about-border-radius shadow-lg flex flex-col md:flex-row items-center w-full max-w-5xl min-h-[520px]">
                {/* lado izquierdo */}
                <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-center space-y-2">
                    <h2 className="text-black text-3xl sm:text-3xl md:text-5xl font-bold bowlby-one-regular leading-none mb-8 animate-heartbeat">
                        ¿ABURRIDO
                        <br />
                        DE LA
                        <br />
                        RUTINA?
                    </h2>
                    <Image
                        src={burgers}
                        alt='Burgers'
                        width={450}
                        height={270}
                        className="rounded-lg w-full max-w-[300px] mt-8 animate-heartbeat sm:max-w-[450px] sm:w-[200px] md:w-[400px]"
                    />
                </div>

                {/* lado derecho */}
                <div className="md:w-1/2 p-6 text-justify flex flex-col justify-center">
                    <p className="text-xs sm:text-sm md:text-lg leading-relaxed text-black mb-4 md:pr-9 font-semibold font-inter">
                        En Villa 29, creemos que cada comida cuenta una historia. Nos esforzamos por ofrecer un menú que no solo satisface el paladar, sino que también celebra la rica cultura culinaria que nos rodea. Cada plato es una obra maestra, elaborado con ingredientes frescos y locales que despiertan los sentidos y crean momentos memorables.
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg leading-relaxed text-black md:pr-9 md:pb-0 pb-4 font-semibold font-inter">
                        Ubicados en el corazón de Villa el Salvador, somos un restobar dedicado a ofrecerte una experiencia inolvidable en un ambiente acogedor y familiar.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
