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
    setItemEdit,
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
        (item.nome.toLowerCase().includes(filterText.toLowerCase()) ||
          item.marca.toLowerCase().includes(filterText.toLowerCase()) ||
          item.id.toString().includes(filterText.toLowerCase()) ||
          item.status.toLowerCase().includes(filterText.toLowerCase()) ||
          item.modelo.toLowerCase().includes(filterText.toLowerCase()) ||
          item.equipamento.toLowerCase().includes(filterText.toLowerCase()))) ||
      (filterText === "" && index >= num - 1 && index < num + 9)
  );

  const clickEdit = (index) => {
    const correto = filteredData.filter((item) => {
      return item.id === index;
    });
    console.log(correto);
    setItemEdit(correto);
    setModalMode("edit");
    setOpenModal(true);
  };

  const clickExcluir = (id) => {
    const correto = filteredData.filter((item) => {
      return item.id === id;
    });
    excluir(correto);
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
              <th className="text-center py-2 min-w-[100px]">ID</th>
              <th className="text-center py-2 min-w-[100px]">Nome</th>
              <th className="text-center py-2 min-w-[100px]">Contato</th>
              <th className="text-center py-2 min-w-[100px]">Equipamento</th>
              <th className="text-center py-2 min-w-[100px]">Marca</th>
              <th className="text-center py-2 min-w-[100px]">Modelo</th>
              <th className="text-center py-2 min-w-[100px]">Técnico</th>
              <th className="text-center py-2 min-w-[100px]">Status</th>
              <th className="text-center py-2 min-w-[100px]">Valor</th>
              <th className="text-center py-2 min-w-[100px]">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr className="bg-white" key={index}>
                <td
                  data-label="ID"
                  className="border text-center py-2 min-w-[100px] font-semibold"
                >
                  {item.id}
                </td>
                <td
                  data-label="Nome"
                  className="border text-center py-2 min-w-[100px] font-semibold"
                >
                  {item.nome}
                </td>
                <td
                  data-label="Contato"
                  className="border text-center py-2 min-w-[100px]"
                >
                  {item.contato}
                </td>
                <td
                  data-label="Equipamento"
                  className="border text-center py-2 min-w-[100px]"
                >
                  {item.equipamento}
                </td>
                <td
                  data-label="Marca"
                  className="border text-center py-2 min-w-[100px]"
                >
                  {item.marca}
                </td>
                <td
                  data-label="Marca"
                  className="border text-center py-2 min-w-[100px]"
                >
                  {item.modelo}
                </td>
                <td
                  data-label="Técnico"
                  className="border text-center py-2 min-w-[100px]"
                >
                  {" "}
                  {item.tecnico}
                </td>
                <td
                  data-label="Status"
                  className={`border text-center py-2 min-w-[100px] capitalize text-white ${
                    item.status === "aprovado"
                      ? "bg-green-500 "
                      : item.status === "orçamento"
                      ? " bg-slate-500"
                      : item.status === "pronto"
                      ? " bg-blue-500"
                      : item.status === "loja"
                      ? " bg-orange-500"
                      : item.status === "entregue"
                      ? " bg-purple-500"
                      : " bg-cyan-500"
                  }`}
                >
                  {item.status}
                </td>{" "}
                <td
                  data-label="Valor"
                  className="border text-center py-2 min-w-[100px]"
                >
                  R$ {item.valor}
                </td>
                <td className="border text-center py-2 min-w-[100px]">
                  <div className="btns flex  md:flex-row w-full justify-center items-center gap-3">
                    <button
                      onClick={() => {
                        clickEdit(item.id);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    >
                      Editar
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          clickExcluir(item.id);
                        }}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Deletar
                      </button>
                      <NavLink
                        onClick={(e) => {
                          setItemPrint(item.id);
                        }}
                        className=" bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center"
                        to="/printPage"
                      >
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
