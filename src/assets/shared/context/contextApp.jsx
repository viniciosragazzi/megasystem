import { createContext, useState, useEffect } from "react";
export const DadosContext = createContext({});
//initialize firebase
import { db } from "../firebase/firebaseConfig";
import { onValue, ref, set } from "firebase/database";

const DadosProvider = ({ children }) => {
  //Firebase

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const query = ref(db, "Clientes");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((cliente) => {
          setClientes((clientes) => [...clientes, cliente]);
        });
      }
    });
  }, []);

  /////

  const [data, setData] = useState(JSON.parse(localStorage.getItem("dados")));

  const sincronizar = (e) => {
    e.preventDefault();
    if (data.length < 1) {
      localStorage.setItem("dados", JSON.stringify(clientes));
      setDone(true);
    }
    let cont = 0
    data.map((clienteLocal) => {
      const cliente = {
        acessorios: clienteLocal.acessorios,
        cidade: clienteLocal.cidade,
        contato: clienteLocal.contato,
        dataEnt: clienteLocal.dataEnt,
        documento: clienteLocal.documento,
        endereco: clienteLocal.endereco,
        equipamento: clienteLocal.equipamento,
        horaEnt: clienteLocal.horaEnt,
        marca: clienteLocal.marca,
        modelo: clienteLocal.modelo,
        nSerie: clienteLocal.nSerie,
        nome: clienteLocal.nome,
        problema: clienteLocal.problema,
        servico: clienteLocal.servico,
        status: clienteLocal.status,
        tecnico: clienteLocal.tecnico,
        uf: clienteLocal.uf,
        valor: clienteLocal.valor,
      };
      set(ref(db, "Clientes/" + clienteLocal.nome), cliente)
        .then(() => {
          cont++
        
          if(cont === data.length){
       
          window.location.href = "/";

          }
        })
        .catch((err) => {
          alert("Aconteceu algo de errado:" + err);
        });
    });
  };
  if (!data) {
    console.log(clientes);
    localStorage.setItem("dados", JSON.stringify([]));
  }
  const [num, setNum] = useState(1);
  const [filterTextData, setFilterTextData] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [dataForm, setDataForm] = useState([]);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const [indexEdit, setIndexEdit] = useState("");
  const [itemPrint, setItemPrint] = useState("");
  let newData = JSON.parse(localStorage.getItem("dados"));

  const atualizar = (dado) => {
    let dados = [dado, ...newData];
    localStorage.setItem("dados", JSON.stringify(dados));
   
    setLoading(true);
    setTimeout(() => {
      setDone(true);
    }, 500);
  };

  const editar = (dado) => {
    let dados = newData;
    dados[indexEdit] = dado;
    localStorage.setItem("dados", JSON.stringify(dados));
    setLoading(true);
    setTimeout(() => {
      setDone(true);
    }, 500);
  };

  const excluir = (index) => {
    let dados = newData;
    dados.splice(index, 1);
    localStorage.setItem("dados", JSON.stringify(dados));
    setLoading(true);
    setTimeout(() => {
      setDone(true);
    }, 500);
  };

  if (done) {
    const newData = JSON.parse(localStorage.getItem("dados"));
    setData(newData);
    setDone(false);
    setLoading(false);
  }

  return (
    <DadosContext.Provider
      value={{
        data,
        setData,
        atualizar,
        num,
        setNum,
        filterTextData,
        setFilterTextData,
        openModal,
        setOpenModal,
        dataForm,
        setDataForm,
        loading,
        editar,
        modalMode,
        setModalMode,
        indexEdit,
        setIndexEdit,
        excluir,
        itemPrint,
        setItemPrint,
        sincronizar,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosProvider;
