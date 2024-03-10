"use client";

import NavBar from "@/components/navbar";
import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { Button } from "@mui/base/Button";
import InputField from "@/components/inputField";
import InputFieldFiltro from "@/components/inputFieldFiltro";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";

function HomePage() {
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  
  return (
    <div>
      <div className="flex mt-10">
        <label className="text-5xl font-extrabold font-poppins-700 italic">
          Próximos Recordatorios
        </label>
        <Button className="ml-auto" onClick={handleShowFilter}>
          <IoFilterOutline
            size={50}
            className={`transition-colors duration-300 ease-in-out ${
              showFilter ? "text-[#f03e74]" : ""
            }`}
          />
        </Button>
        <div className="w-2/6">
          <InputFieldFiltro></InputFieldFiltro>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-6 w-10/12 h-tabla rounded-lg hover:scrollbar-thumb-sky-500 active:scrollbar-thumb-sky-400 scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll">
          <table className="min-w-full divide-y divide-gray-200 h-full">
          <thead className="bg-[#84A98C] sticky top-0">
              <tr>
                <th className="px-6 py-3 text-center text-xl font-poppins-700 uppercase tracking-wider">
                  Nombre del Recordatorio
                </th>
                <th className="px-6 py-3 text-center text-xl font-poppins-700 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-center text-xl font-poppins-700 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-center text-xl font-poppins-700 uppercase tracking-wider ">
                  Descripción
                </th>
                <th className="px-6 py-3 text-center text-xl font-poppins-700 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-center text-xl font-poppins-700 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            {/* Aquí iría el cuerpo de la tabla (tbody) */}
            <tbody className="bg-white divide-y divide-[#D0D5DD]">
              <tr className="bg-[#F5F5F5]">
                <td className="px-6 py-4 whitespace-nowrap ">Recordatorio 1</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-07</td>
                <td className="px-6 py-4 whitespace-nowrap">Importante</td>
                <td className="px-6 py-4 max-w-[40%] max-h-[3.2rem] overflow-hidden">
                  <div className="line-clamp-3 text-sm text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.dldmsld dlmsdlkms ldmsldmls sldmlsdmls lmdlsdls
                    lmdlsmdl almdsalmdladlmamd alsmdalsmalmd almdaldmlda
                    lamdsladlmadl admladmla aldmladmlad lmdladlmad almdlamdla
                    lmdlamdla almdlamd
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Activo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <Button className="mr-3">
                        <MdOutlineModeEditOutline size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegTrashAlt size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegCheckCircle size={25} />
                      </Button>
                    </div>
                </td>
              </tr>
              <tr className="bg-[#BD6B73]/10">
                <td className="px-6 py-4 whitespace-nowrap">Recordatorio 2</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-08</td>
                <td className="px-6 py-4 whitespace-nowrap">Normal</td>
                <td className="px-6 py-4 whitespace-nowrap max-w-[10px] overflow-hidden">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Inactivo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <Button className="mr-3">
                        <MdOutlineModeEditOutline size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegTrashAlt size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegCheckCircle size={25} />
                      </Button>
                    </div>
                </td>
              </tr>

              <tr className="bg-[#F5F5F5]">
                <td className="px-6 py-4 whitespace-nowrap ">Recordatorio 1</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-07</td>
                <td className="px-6 py-4 whitespace-nowrap">Importante</td>
                <td className="px-6 py-4 max-w-[40%] max-h-[3.2rem] overflow-hidden">
                  <div className="line-clamp-3 text-sm text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.dldmsld dlmsdlkms ldmsldmls sldmlsdmls lmdlsdls
                    lmdlsmdl almdsalmdladlmamd alsmdalsmalmd almdaldmlda
                    lamdsladlmadl admladmla aldmladmlad lmdladlmad almdlamdla
                    lmdlamdla almdlamd
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Activo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <Button className="mr-3">
                        <MdOutlineModeEditOutline size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegTrashAlt size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegCheckCircle size={25} />
                      </Button>
                    </div>
                </td>
              </tr>
              <tr className="bg-[#BD6B73]/10">
                <td className="px-6 py-4 whitespace-nowrap">Recordatorio 2</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-08</td>
                <td className="px-6 py-4 whitespace-nowrap">Normal</td>
                <td className="px-6 py-4 whitespace-nowrap max-w-[10px] overflow-hidden">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Inactivo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <Button className="mr-3">
                        <MdOutlineModeEditOutline size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegTrashAlt size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegCheckCircle size={25} />
                      </Button>
                    </div>
                </td>
              </tr>
              <tr className="bg-[#F5F5F5]">
                <td className="px-6 py-4 whitespace-nowrap ">Recordatorio 1</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-07</td>
                <td className="px-6 py-4 whitespace-nowrap">Importante</td>
                <td className="px-6 py-4 max-w-[40%] max-h-[3.2rem] overflow-hidden">
                  <div className="line-clamp-3 text-sm text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.dldmsld dlmsdlkms ldmsldmls sldmlsdmls lmdlsdls
                    lmdlsmdl almdsalmdladlmamd alsmdalsmalmd almdaldmlda
                    lamdsladlmadl admladmla aldmladmlad lmdladlmad almdlamdla
                    lmdlamdla almdlamd
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Activo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <Button className="mr-3">
                        <MdOutlineModeEditOutline size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegTrashAlt size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegCheckCircle size={25} />
                      </Button>
                    </div>
                </td>
              </tr>
              <tr className="bg-[#BD6B73]/10">
                <td className="px-6 py-4 whitespace-nowrap">Recordatorio 2</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-08</td>
                <td className="px-6 py-4 whitespace-nowrap">Normal</td>
                <td className="px-6 py-4 whitespace-nowrap max-w-[10px] overflow-hidden">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Inactivo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <Button className="mr-3">
                        <MdOutlineModeEditOutline size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegTrashAlt size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegCheckCircle size={25} />
                      </Button>
                    </div>
                </td>
              </tr>
              <tr className="bg-[#F5F5F5]">
                <td className="px-6 py-4 whitespace-nowrap ">Recordatorio 1</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-07</td>
                <td className="px-6 py-4 whitespace-nowrap">Importante</td>
                <td className="px-6 py-4 max-w-[40%] max-h-[3.2rem] overflow-hidden">
                  <div className="line-clamp-3 text-sm text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.dldmsld dlmsdlkms ldmsldmls sldmlsdmls lmdlsdls
                    lmdlsmdl almdsalmdladlmamd alsmdalsmalmd almdaldmlda
                    lamdsladlmadl admladmla aldmladmlad lmdladlmad almdlamdla
                    lmdlamdla almdlamd
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Activo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <Button className="mr-3">
                        <MdOutlineModeEditOutline size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegTrashAlt size={25} />
                      </Button>
                      <Button className="mr-3">
                        <FaRegCheckCircle size={25} />
                      </Button>
                    </div>
                </td>
              </tr>
              <tr className="bg-[#BD6B73]/10">
                <td className="px-6 py-4 whitespace-nowrap">Recordatorio 2</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-02-08</td>
                <td className="px-6 py-4 whitespace-nowrap">Normal</td>
                <td className="px-6 py-4 whitespace-nowrap max-w-[10px] overflow-hidden">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Inactivo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Button className="mr-3">
                      <MdOutlineModeEditOutline size={25} />
                    </Button>
                    <Button className="mr-3">
                      <FaRegTrashAlt size={25} />
                    </Button>
                    <Button className="mr-3">
                      <FaRegCheckCircle size={25} />
                    </Button>
                  </div>
                </td>
              </tr>
              {/* Puedes agregar más filas aquí */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
