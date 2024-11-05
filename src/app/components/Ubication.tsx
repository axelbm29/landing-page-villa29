import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Importa los íconos que usabas antes

const Ubication = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12 px-3.5 bg-black">
            {/* Title */}
            <h2 className="text-white bowlby-one-regular text-center link-super-large font-bold mb-8">UBÍCANOS</h2>

            {/* Content container */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8">
                
                {/* Left side: Info card */}
                <div className="bg-[#CFFF04] p-8 items-center justify-center rounded-lg w-full md:w-[500px] min-h-[500px] flex flex-col mb-8 md:mr-8 md:w-1/3 md:mb-0 text-center">
                    {/* Location Info */}
                    <div className="flex flex-col items-center mb-8">
                        <FaMapMarkerAlt className="text-[#1E1E1E] text-5xl mb-4" />
                        <h3 className="text-[#1E1E1E] font-bold text-xl bowlby-one-regular">UBICACIÓN</h3>
                        <p className="text-[#1E1E1E] text-center mt-2 font-inter">Sector 3 Grupo 29 Manzana F Lote 3<br />Villa el Salvador</p>
                    </div>

                    {/* Schedule Info */}
                    <div className="flex flex-col items-center">
                        <FaClock className="text-[#1E1E1E] text-5xl mb-4 mt-8" />
                        <h3 className="text-[#1E1E1E] font-bold text-xl bowlby-one-regular">HORARIO</h3>
                        <p className="text-[#1E1E1E] text-center mt-2 font-inter">Lun, Mie, Jue, Vie, Sab, Dom</p>
                        <p className="text-[#1E1E1E] text-center font-inter">7:00 PM A 11:00 PM</p>
                    </div>
                </div>

                {/* Right side: Google Maps iframe */}
                <div className="w-full md:w-[500px] h-[500px]">
                    <iframe
                        title="Ubicación Villa 29"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.6546436771227!2d-76.93998178877996!3d-12.22732528967385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bb19c9df1a9f%3A0x6012235930662eed!2sVilla%2029%20RestoBar!5e0!3m2!1ses-419!2spe!4v1730786903077!5m2!1ses-419!2spe"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Ubication;
