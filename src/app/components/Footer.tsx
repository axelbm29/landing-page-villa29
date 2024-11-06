import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../assets/villa29-logo.png";
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="text-gray-300 p-8 bg-[#302c2c] font-calistoga">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* logo */}
        <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
          <div className="w-40 h-40 bg-cover bg-center rounded-full overflow-hidden mb-4">
            <Image
              src={logo.src}
              width={400}
              height={400}
              alt="Villa 29 Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* menu de navegacion */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Menú</h3>
          <nav className="space-y-2">
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="hover:text-gray-100">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-100">Nosotros</a></li>
              <li><a href="#" className="hover:text-gray-100">Los más pedidos</a></li>
              <li><a href="#" className="hover:text-gray-100">Promociones</a></li>
              <li><a href="#" className="hover:text-gray-100">Ubicaciones</a></li>
              <li><a href="#" className="hover:text-gray-100">Carta</a></li>
            </ul>
          </nav>
        </div>

        {/* horarios */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Horarios de Atención:</h3>
          <ul className="space-y-1 text-center md:text-left">
            <li>Lunes a Domingo</li>
            <li>7:00 PM - 11:00 PM</li>
          </ul>
        </div>

        {/* como llegar */}
        <div className="flex flex-col items-center md:items-start mr-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Cómo llegar:</h3>
          <p className="text-center md:text-left">Sec 3- Gru 29- Man F- Lote 3</p>
          <p className="text-center md:text-left">Villa El Salvador, Lima</p><br />
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Referencia:</h3>
          <p className="text-center md:text-left">Av. Mariano Pastor Sevilla</p>
          <p className="text-center md:text-left">Entre Av. José Olaya y Balandra y Av. José Carlos Mariátegui</p>
        </div>

        {/* contactos y social media */}
        <div className="flex flex-col items-center md:items-start mr-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Contáctanos:</h3>
          <p className="text-center md:text-left">987 280 900</p>
          <br />
          {/* iconos de social media */}
          <div className="flex space-x-6 mb-6 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#000000]">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#000000]">
              <FaInstagram size={30} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#000000]">
              <FaTiktok size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;