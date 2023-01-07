import { createContext, useState, useEffect } from "react";
export const DadosContext = createContext({});
//initialize firebase
import { db } from "../firebase/firebaseConfig";
import { onValue, ref, remove, set } from "firebase/database";

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

  const [data, setData] = useState(JSON.parse(localStorage.getItem("dados")));

  const getToFirebase = (e) => {
    e.preventDefault();
    localStorage.removeItem("dados");
    console.log(clientes);
    setDone(true);
    setTimeout(() => {
      localStorage.setItem("dados", JSON.stringify(clientes));
    }, 1000);

    setTimeout(() => {
      setDone(true);
    }, 1200);
  };

  const sincronizar = (e) => {
    e.preventDefault();

    let cont = 0;
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
          cont++;

          if (cont === data.length) {
            window.location.href = "/";
          }
        })
        .catch((err) => {
          alert("Aconteceu algo de errado:" + err);
        });
    });
  };

  const setNewData = (data, dados) => {
    console.log(data.id);
    set(ref(db, "Clientes/" + data.id), data)
      .then(() => {
        console.log("add");
      })
      .catch((err) => {
        alert("Aconteceu algo de errado:" + err);
      });
  };

  if (!data) {
    console.log(clientes);
    localStorage.setItem("dados", JSON.stringify([]));
  }

  //////////////////////////
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

    setNewData(dado);
    setLoading(true);
    setTimeout(() => {
      setDone(true);
    }, 500);
  };

  const editar = (dado) => {
    let dados = newData;
    setNewData(dado);
    dados[indexEdit] = dado;
    localStorage.setItem("dados", JSON.stringify(dados));
    setLoading(true);
    setTimeout(() => {
      setDone(true);
    }, 500);
  };

  const excluir = (index) => {
    let id = data[index].id;
    if (window.confirm("Quer realmente excluir  ?")) {
      set(ref(db, "Clientes/" + id), null)
        .then(() => {
          console.log("removed");
        })
        .catch((err) => {
          alert("Aconteceu algo de errado:" + err);
        });
      let dados = newData;
      const deletado = dados.splice(index, 1);
      localStorage.setItem("dados", JSON.stringify(dados));
      setLoading(true);
      setTimeout(() => {
        setDone(true);
      }, 500);
    }
  };

  // const excluir = (index) => {
  //   let dados = newData;
  //   const deletado = dados.splice(index, 1);
  //   removeItem(deletado);
  //   localStorage.setItem("dados", JSON.stringify(dados));
  //   setLoading(true);
  //   setTimeout(() => {
  //     setDone(true);
  //   }, 500);
  // };

  if (done) {
    const newData = JSON.parse(localStorage.getItem("dados"));
    setData(newData);
    setDone(false);
    setLoading(false);

    setTimeout(() => {
      sincronizar();
    }, 4000);
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
        getToFirebase,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosProvider;
