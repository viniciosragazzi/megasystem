import React, { useContext, useState, useEffect } from "react";

import { DadosContext } from "../../shared/context/contextApp";

import { AiFillCloseCircle } from "react-icons/ai";
const Modal = () => {
  const { atualizar, setOpenModal, modalMode, data, itemEdit, editar } =
    useContext(DadosContext);

  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [contato, setContato] = useState("");
  const [documento, setDocumento] = useState("");
  const [equipamento, setEquipamento] = useState("");
  const [acessorios, setAcessorios] = useState("");
  const [modelo, setModelo] = useState("");
  const [valor, setValor] = useState("");
  const [marca, setMarca] = useState("");
  const [nSerie, setNSerie] = useState("");
  const [problema, setProblema] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUF] = useState("");
  const [servico, setServico] = useState("");
  const [tecnico, setTecnico] = useState("");
  const [status, setStatus] = useState("");
  const [dataEnt, setDataEnt] = useState("");
  const [horaEnt, setHoraEnt] = useState("");

  useEffect(() => {
    if (modalMode === "edit") {
      setId(itemEdit[0].id);
      setNome(itemEdit[0].nome);
      setContato(itemEdit[0].contato);
      setDocumento(itemEdit[0].documento);
      setEquipamento(itemEdit[0].equipamento);
      setAcessorios(itemEdit[0].acessorios);
      setModelo(itemEdit[0].modelo);
      setValor(itemEdit[0].valor);
      setMarca(itemEdit[0].marca);
      setNSerie(itemEdit[0].nSerie);
      setProblema(itemEdit[0].problema);
      setServico(itemEdit[0].servico);
      setTecnico(itemEdit[0].tecnico);
      setCidade(itemEdit[0].cidade);
      setEndereco(itemEdit[0].endereco);
      setUF(itemEdit[0].uf);
      setStatus(itemEdit[0].status);
      setDataEnt(itemEdit[0].dataEnt);
      setHoraEnt(itemEdit[0].horaEnt);
    }
  }, [modalMode]);
  const enviar = () => {
    if (modalMode === "new") {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      atualizar({
        id: getRandomInt(14035, 8053548),
        nome,
        contato,
        documento,
        equipamento,
        acessorios,
        modelo,
        valor,
        endereco,
        cidade,
        uf,
        marca,
        nSerie,
        problema,
        servico,
        tecnico,
        status,
        dataEnt,
        horaEnt,
      });
    } else {
      editar({
        id,
        nome,
        contato,
        documento,
        equipamento,
        acessorios,
        modelo,
        endereco,
        cidade,
        uf,
        valor,
        marca,
        nSerie,
        problema,
        servico,
        tecnico,
        status,
        dataEnt,
        horaEnt,
      });
    }

    setOpenModal(false);
  };

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      setOpenModal(false);
    }

    if (e.code == "Enter") {
      enviar();
    }
  });
  return (
    <div className="fixed w-full h-full overflow-scroll bg-[#0000005c] flex p-4 z-50 justify-center">
      <div className="container w-full max-w-3xl h-min  relative bg-white p-4  rounded-3xl flex  flex-col">
        <AiFillCloseCircle
          className=" text-3xl cursor-pointer hover:scale-105 transition-transform"
          onClick={() => {
            setOpenModal(false);
          }}
        />
        <h1 className="title text-black text-center text-4xl font-semibold">
          Gerencimento de Clientes {modalMode}
        </h1>
        <p>ID do Serviço: {id}</p>
        <form className=" mt-10 ">
          <div className="flexGroup md:flex justify-center">
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Nome
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-full-name"
                  type="text"
                  placeholder="Nome completo"
                />
              </div>
            </div>
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-contact"
                >
                  Contato
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={contato}
                  onChange={(e) => {
                    setContato(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-contact"
                  type="text"
                  placeholder="Telefone ou email"
                />
              </div>
            </div>
          </div>

          <div className="flexGroup md:flex justify-center">
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-cpf-cnpj"
                >
                  CPF/CNPJ
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={documento}
                  onChange={(e) => {
                    setDocumento(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-cpf-cnpj"
                  type="text"
                  placeholder="CPF ou CNPJ"
                />
              </div>
            </div>
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-endereco"
                >
                  Endereço
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={endereco}
                  onChange={(e) => {
                    setEndereco(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-endereco"
                  type="text"
                  placeholder="Endereço"
                />
              </div>
            </div>
          </div>
          <div className="flexGroup md:flex justify-center">
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-cidade"
                >
                  Cidade
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={cidade}
                  onChange={(e) => {
                    setCidade(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-cidade"
                  type="text"
                  placeholder="Cidade"
                />
              </div>
            </div>
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-uf"
                >
                  Estado
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={uf}
                  onChange={(e) => {
                    setUF(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-uf"
                  type="text"
                  placeholder="Estado"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
            <div className="">
              <label
                className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-equipment"
              >
                Equipamento
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                required
                value={equipamento}
                onChange={(e) => {
                  setEquipamento(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="inline-equipment"
                type="text"
                placeholder="Nome do equipamento"
              />
            </div>
          </div>
          <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
            <div className="">
              <label
                className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-accessories"
              >
                Acessórios
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                required
                value={acessorios}
                onChange={(e) => {
                  setAcessorios(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="inline-accessories"
                type="text"
                placeholder="Acessórios incluídos"
              />
            </div>
          </div>
          <div className="flexGroup md:flex justify-center">
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-model"
                >
                  Modelo
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={modelo}
                  onChange={(e) => {
                    setModelo(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-model"
                  type="text"
                  placeholder="Modelo do equipamento"
                />
              </div>
            </div>{" "}
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-model"
                >
                  Valor
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={valor}
                  onChange={(e) => {
                    setValor(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-model"
                  type="text"
                  placeholder="Valor do Serviço"
                />
              </div>
            </div>{" "}
          </div>

          <div className="flexGroup md:flex justify-center">
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px]">
              <label
                className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-brand"
              >
                Marca
              </label>
              <div className="md:w-2/3">
                <input
                  required
                  value={marca}
                  onChange={(e) => {
                    setMarca(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-brand"
                  type="text"
                  placeholder="Marca do equipamento"
                />
              </div>
            </div>
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-serial"
                >
                  Número de série
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={nSerie}
                  onChange={(e) => {
                    setNSerie(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-serial"
                  type="text"
                  placeholder="Número de série do equipamento"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
            <div className="">
              <label
                className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-reported-problem"
              >
                Problema relatado
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                value={problema}
                onChange={(e) => {
                  setProblema(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="inline-reported-problem"
                placeholder="Descreva o problema relatado"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
            <div className="">
              <label
                className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-reported-service"
              >
                Serviço Executado
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                value={servico}
                onChange={(e) => {
                  setServico(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="inline-reported-service"
                placeholder="Descreva o serviço executado"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="flexGroup md:flex justify-center">
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-technician"
                >
                  Técnico
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={tecnico}
                  onChange={(e) => {
                    setTecnico(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-technician"
                  type="text"
                  placeholder="Técnico Responsável"
                />
              </div>
            </div>
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-status"
                >
                  Status
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                >
                  <option value="loja">Loja</option>

                  <option value="orçamento">Orçamento</option>
                  <option value="aprovado">Aprovado</option>
                  <option value="pronto">Pronto</option>
                  <option value="lojaPronto">Loja / Pronto</option>

                  <option value="entregue">Entregue</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flexGroup md:flex justify-center">
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-entry-date"
                >
                  Data de entrada
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={dataEnt}
                  onChange={(e) => {
                    setDataEnt(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-entry-date"
                  type="date"
                />
              </div>
            </div>
            <div className="md:flex md:items-center gap-2 mb-6 flex-col min-w-[260px] ">
              <div className="">
                <label
                  className="block  text-slate-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-entry-time"
                >
                  Hora de entrada
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  value={horaEnt}
                  onChange={(e) => {
                    setHoraEnt(e.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                  id="inline-entry-time"
                  type="time"
                />
              </div>
            </div>
          </div>
          <div className="buttonArea w-full flex justify-center ">
            <span
              onClick={() => {
                enviar();
              }}
              className="w-full  max-w-md bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-700 transition-colors flex justify-center cursor-pointer"
            >
              Enviar
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
