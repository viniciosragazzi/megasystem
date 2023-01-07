import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DadosContext } from "../context/contextApp";
import { AiOutlineLoading3Quarters, AiFillPrinter } from "react-icons/ai";
const Table = ({ data }) => {
  const {
    num,
    filterTextData,
    loading,
    setOpenModal,
    setModalMode,
    setIndexEdit,
    excluir,
    itemPrint,
    setItemPrint,
  } = useContext(DadosContext);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    setFilterText(filterTextData);
  }, [filterTextData]);

  const filteredData = data.filter(
    (item, index) =>
      (filterText.length > 2 &&
        item.nome.toLowerCase().includes(filterText.toLowerCase())) ||
      (filterText === "" && index >= num - 1 && index < num + 9)
  );

  const clickEdit = (index) => {
    setIndexEdit(index);
    setModalMode("edit");
    setOpenModal(true);
  };

  return (
    <div className=" m-4 overflow-scroll lg:md:overflow-hidden ">
      {loading ? (
        <div className="relative flex justify-center  my-20">
          <AiOutlineLoading3Quarters className="text-4xl animate-spin" />
        </div>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-center py-2 min-w-[100px]">Nome</th>
              <th className="text-center py-2 min-w-[100px]">Contato</th>
              <th className="text-center py-2 min-w-[100px]">Equipamento</th>
              <th className="text-center py-2 min-w-[100px]">Marca</th>
              <th className="text-center py-2 min-w-[100px]">Técnico</th>
              <th className="text-center py-2 min-w-[100px]">Status</th>
              <th className="text-center py-2 min-w-[100px]">Valor</th>
              <th className="text-center py-2 min-w-[100px]">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr className="bg-white" key={index}>
                <td className="border text-center py-2 min-w-[100px] font-semibold">
                  {item.nome}
                </td>
                <td className="border text-center py-2 min-w-[100px]">
                {item.contato}
                </td>
                <td className="border text-center py-2 min-w-[100px]">
                {item.equipamento}
                </td>
                <td className="border text-center py-2 min-w-[100px]">
                {item.marca}
                </td>
                <td className="border text-center py-2 min-w-[100px]">   {item.tecnico}</td>
                <td className={`border text-center py-2 min-w-[100px] capitalize text-white ${item.status === 'aprovado' ? 'bg-green-500 ' : item.status === 'orçamento' ? ' bg-slate-500' :  item.status === 'pronto' ? ' bg-blue-500' : ' bg-orange-500' }`}>
                {item.status}
                </td>{" "}
                <td className="border text-center py-2 min-w-[100px]">
                R$ {item.valor}
                </td>
                <td className="border text-center py-2 min-w-[100px]">
                  <div className="btns flex flex-col md:flex-row w-full justify-center items-center gap-3">
                    <button
                      onClick={() => {
                        clickEdit(index);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    >
                      Editar
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          excluir(index);
                        }}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Deletar
                      </button>
                      <NavLink   onClick={(e) => {
                          setItemPrint(index);
                        }}
                        className=" bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center" to="/printPage">
                        <AiFillPrinter />
                      </NavLink>
               
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
