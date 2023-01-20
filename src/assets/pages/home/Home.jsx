import React, { useContext, useState, useEffect } from "react";
import Table from "../../shared/components/Table";

import { DadosContext } from "../../shared/context/contextApp";
import { BiBlock } from "react-icons/bi";
import {
  MdOutlineNavigateNext,
  MdHome,
  MdOutlineNavigateBefore,
} from "react-icons/md";
import Modal from "../../shared/components/Modal";
const Home = () => {
  const {
    data,
    num,
    setNum,
    filterTextData,
    setFilterTextData,
    openModal,
    setOpenModal,
    loading,
    setModalMode,
    sincronizar,
    getToFirebase,
  } = useContext(DadosContext);
  const [dataFiltered, setDataFiltered] = useState(data);
  useEffect(() => {
    setDataFiltered(
      data.sort((a, b) => {
        return new Date(b.dataEnt) - new Date(a.dataEnt);
      })
    );
  }, [data]);

  return (
    <>
      {openModal ? <Modal /> : null}
      <div className="app overflow-hidden relative">
        <header>
          <nav className="flex justify-between p-5">
            <div className="logo text-xl font-bold">
              Master<span className=" text-gray-600">System</span>
            </div>
            <span className="namePage text-md font-semibold ">Dashboard</span>
          </nav>
        </header>
        <section className="tableArea my-4">
          <nav className="tableFilter flex flex-col-reverse  items-center md:flex-row  justify-center gap-10 p-4">
            <div className="input w-full border  max-w-sm min-w-[320px] rounded-full px-4 py-2 border-gray-600">
              <input
                type="text"
                placeholder="Pesquise um cliente"
                className="w-full focus:outline-none focus:placeholder:text-sm "
                value={filterTextData}
                onChange={(e) => {
                  setFilterTextData(e.target.value);
                }}
              />
            </div>
            <div className="filterBy flex items-center">
              <span className=" font-semibold">Filtra por:</span>
              <select name="filterBy" id="filterBy" className=" cursor-pointer">
                <option value="recentes" className="">
                  Recentes
                </option>
                <option value="antigos">Antigos</option>
                <option value="aberto">Abertos</option>
                <option value="entregues">Entregues</option>
              </select>
            </div>

            <div className="newClienteArea w-full max-w-[100px]">
              <button
                onClick={() => {
                  setOpenModal(true);
                  setModalMode("new");
                }}
                className="w-full bg-blue-600 text-white font-semibold px-1 py-2 rounded-full hover:bg-blue-700  transition-colors "
              >
                Novo Cliente
              </button>
            </div>
            <div className="btns flex  gap-3">
              <div
                onClick={sincronizar}
                className="switch-darkMode bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer text-center"
              >
                Sincronizar
              </div>
              <div
                onClick={getToFirebase}
                className="switch-darkMode bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer text-center"
              >
                Baixar dados Firebase
              </div>
            </div>
          </nav>

          {data.length > 0 ? (
            <>
              <Table data={dataFiltered} />{" "}
              {!loading ? (
                <div className="pageSelect w-full flex justify-center items-center">
                  {" "}
                  <MdOutlineNavigateBefore
                    className={` text-4xl cursor-pointer transition-opacity ${
                      num == 1 ? " opacity-20 cursor-default" : ""
                    } `}
                    onClick={() => {
                      num > 1 ? setNum(num - 10) : null;
                    }}
                  />
                  <MdHome
                    className={` text-4xl cursor-pointer transition-opacity ${
                      num == 1 ? " opacity-20 cursor-default" : ""
                    } `}
                    onClick={() => {
                      num > 1 ? setNum(1) : null;
                    }}
                  />
                  <MdOutlineNavigateNext
                    className={` text-4xl cursor-pointer transition-opacity ${
                      num + 10 > dataFiltered.length
                        ? " opacity-20 cursor-default"
                        : ""
                    } `}
                    onClick={() => {
                      num + 9 < dataFiltered.length ? setNum(num + 10) : null;
                    }}
                  />
                </div>
              ) : null}
            </>
          ) : (
            <div className="w-full min-h-[300px] flex  flex-col justify-center items-center gap-6">
              <BiBlock className="text-8xl" />
              <p>Nenhum item encontrado</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
