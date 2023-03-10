import React, { useContext, useState, useEffect } from "react";
import { DadosContext } from "../../shared/context/contextApp";
import Helmet from "react-helmet";
const PdfPage = () => {
  const { itemPrint, setItemPrint, data } = useContext(DadosContext);
  const [indexItemPrint,setIndexItemPrint] = useState(data.findIndex((item) => item.id === itemPrint))
  return (
    <div className="w-full min-h-screen flex justify-center">
      <Helmet
        title={`orçamento-${data[indexItemPrint].equipamento}-${data[indexItemPrint].marca}-${data[indexItemPrint].modelo}-${data[indexItemPrint].nome}`}
      />
      <div className="container w-full max-w-6xl min-h-screen border p-6 border-t-8 border-orange-500">
        <header>
          <div className="box flex justify-between">
            <h1 className=" text-3xl font-semibold">
              Megatom <span className=" text-orange-500">Reparos</span>
            </h1>
            <span className=" font-semibold">
              <span className=" text-orange-500"> (21) </span> 98337-3765
              (WhatsApp) / <span className=" text-orange-500"> (21) </span>{" "}
              98053-4112
            </span>
          </div>
          <div className="box flex justify-between">
            <span className=" font-semibold">
              <span className=" text-orange-500"> Rua </span> Coronel Francisco
              Soares - 70 (Centro) - NI /{" "}
              <span className=" text-orange-500"> CEP </span> 26220-032
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500"> CNPJ: </span>{" "}
              38.316.965/0001-60
            </span>
          </div>

          <div className="box flex justify-center">
            <span className="font-semibold my-6">
              {data[indexItemPrint].dataEnt} /
            </span>
            <span className="ml-2 font-semibold my-6">
              {data[indexItemPrint].horaEnt}
            </span>
          </div>

          <div className="box flex justify-center">
            <h1 className="font-bold text-3xl my-5">
              Nota de{" "}
              {data[indexItemPrint].status === "orçamento"
                ? "Orçamento"
                : data[indexItemPrint].status === "aprovado" ||
                  data[indexItemPrint].status === "pronto"
                ? "Entrega"
                : data[indexItemPrint]}
            </h1>
          </div>
        </header>

        <section className="my-4 grid gap-2">
          <div className="box-infos justify-around flex gap-4 text-lg flex-wrap">
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">Cliente:</span>
              {data[indexItemPrint].nome}
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">Contato:</span>
              {data[indexItemPrint].contato}
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">CPF/CNPJ:</span>
              {data[indexItemPrint].documento}
            </span>
          </div>
          <div className="box-infos justify-around flex gap-4  text-lg  flex-wrap">
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">Endereço:</span>
              {data[indexItemPrint].endereco}
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">Cidade:</span>
              {data[indexItemPrint].cidade}
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">UF:</span>
              {data[indexItemPrint].uf}
            </span>
          </div>
        </section>

        <hr />
        <section className="my-4 grid gap-2">
          <div className="box-infos justify-around flex gap-4 flex-wrap  text-lg ">
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">
                Equipamento:
              </span>
              {data[indexItemPrint].equipamento}
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">Modelo:</span>
              {data[indexItemPrint].modelo}
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">Marca</span>
              {data[indexItemPrint].marca}
            </span>
          </div>
          <div className="box-infos justify-around flex gap-4 flex-wrap  text-lg ">
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">
                Acessórios:
              </span>
              {data[indexItemPrint].acessorios}
            </span>
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">Série:</span>
              {data[indexItemPrint].nSerie}
            </span>
          </div>
        </section>
        <hr />
        <section className="my-4 grid gap-2  text-lg ">
          <div className="box-infos justify-left flex gap-4 flex-wrap">
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">
                Problema Relatado:
              </span>
              {data[indexItemPrint].problema}
            </span>
          </div>
        </section>
        <hr />
        <section className="my-4 grid gap-2  text-lg ">
          <div className="box-infos justify-left flex gap-4 flex-wrap">
            <span className=" font-semibold">
              <span className=" text-orange-500 font-bold mr-1">
                Serviço Executado
              </span>
              {data[indexItemPrint].servico}
            </span>
          </div>
        </section>
        <hr />
        <section className="my-4 grid gap-2">
          <div className="box-infos justify-left items-center flex gap-4 flex-wrap">
            <span className="text-xl font-semibold">
              Valor total do Serviço:
            </span>{" "}
            <span className="text-lg">R${data[indexItemPrint].valor}</span>
          </div>
        </section>
        <hr />
        {data[indexItemPrint].status === "aprovado" ||
                  data[indexItemPrint].status === "pronto" ?  (
                    <section className="my-4 grid gap-2 mt-20 ">
                    <div className="box-infos justify-center flex flex-col gap-4 flex-wrap text-lg">
                      <span className=" text-orange-500 font-bold mr-1">
                        Condições de Serviço
                      </span>
                      <span className=" font-semibold">
                        <span className=" font-bold">1-</span> A empresa da garantia de
                        90 dias para a mão de obra e peças usadas no conserto, contados
                        a parti da data de entrega.
                      </span>
                      </div>
                      </section>
        ): (
          <section className="my-4 grid gap-2 mt-20 ">
            <div className="box-infos justify-center flex flex-col gap-4 flex-wrap text-lg">
              <span className=" text-orange-500 font-bold mr-1">
                Condições de Serviço
              </span>
              <span className=" font-semibold">
                <span className=" font-bold">1-</span> A empresa da garantia de
                90 dias para a mão de obra e peças usadas no conserto, contados
                a parti da data de entrega.
              </span>
              <span className=" font-semibold">
                <span className=" font-bold">2-</span> Os aparelhos não
                retirados no prazo máximo de 30 dias contados a partir da data
                que o equipamento ficar pronto será cobrado um taxa ao dia de R$
                5,00
              </span>
              <span className=" font-semibold">
                <span className=" font-bold">3-</span> Os aparelhos com mais de
                90 dias sem retorno do cliente será vendido para custear as
                peças usadas no serviço
              </span>
              <span className=" font-semibold">
                <span className=" font-bold">4-</span> Ao entrar em contato com
                a empresa informe o nome, equimento e o documento para facilitar
                o atendimento.
              </span>
              <span className=" font-semibold">
                <span className=" font-bold">5-</span> O aparelho será devolvido
                mediante a apresentação deta, portanto guarde-a com cuidado
              </span>
              <span className=" font-semibold">
                <span className=" font-bold">6-</span> Nosso orçamento é
                totalmente gratuito, porém pedimos um prazo máximo de 5 dias
                ÚTEIS para darmos uma posição.
              </span>
            </div>
          </section>
        ) }
      </div>
    </div>
  );
};

export default PdfPage;
