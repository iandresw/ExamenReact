
import { useEffect } from "react"
import useEmpelado from "../hooks/UseEmpleado"
import Entrada from "./Entrada"

const Empleado= () =>{
    const {    empleado, setEmpleado, getEmpleados, openModal, 
        id, setID,
        nombre, setNombre,
        dni, setDni,
        direccion, SetDireccion,
        email, setEmail,
        titleModal, setTitleModal,
        guardarEditarEmpleado
      } = useEmpelado()

    useEffect(() => {
        getEmpleados()
    }, [])
  return (
    <div className="container-fluid">
<div className="row mt-3">
  <div className="col-12 text-center">
    <button className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modalEmpleado"
       onClick={()=>{openModal(1)}}>
        
      <i className="fa-solid fa-circle-plus"></i> Crear empleado
    </button>
  </div>
</div>

        <div className="col-12 col-lg-8 offset-lg-2 mt-3">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                       <tr>
                        <th>No.</th>
                        <th>nombre</th>
                        <th>DNI</th>
                        <th>Direccion</th>
                        <th>Email</th>
                        <th>Acciones</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                            empleado.map((empleado, i)=>(
                                <tr key={empleado.id}>
                                    <td>{i+1}</td>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.dni}</td>
                                    <td>{empleado.direccion}</td>
                                    <td>{empleado.email}</td>
                                    <td>
                                        <button className="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#modalEmpleado"  onClick={()=>{openModal(2, empleado)}} >
                                            <i className="fa-solid fa-edit"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div id='modalEmpleado' className="modal fade" aria-hidden="true" tabIndex={-1}>
        <div className="modal-dialog">
                    <div className="modal-content">
                <div className="modal-header">
                    <label className="h5">{titleModal}</label>
                </div>
                <div className="modal-body">
                 <Entrada id={"nombre"}  iconName={"fa-solid fa-person"}  inputType={"text"}  placeholder={"Nombre Empleado"}  onChange={(e)=>setNombre(e.target.value)} value={nombre}></Entrada>
                 <Entrada id={"dni"} iconName={"fa-solid fa-comment"} inputType={"text"} placeholder={"DNI Empleado"} onChange={(e)=>setDni(e.target.value)} value={dni} ></Entrada>
                 <Entrada id={"direccion"} iconName={"fa-solid fa-location-dot"} inputType={"text"} placeholder={"Direccion"} onChange={(e)=>SetDireccion(e.target.value)} value={direccion} ></Entrada>
                 <Entrada id={"email"} iconName={"fa-solid fa-envelope"} inputType={"text"} placeholder={"Email Empleado"} onChange={(e)=>setEmail(e.target.value)} value={email} ></Entrada>
                </div>
                <div className="modal-footer">
                   <button className="btn btn-success" onClick={()=>guardarEditarEmpleado()} >
                    <i className="fa-solid fa-floppy-disk"  ></i> Guardar
                   </button>
                   <button id='btnCerraModal' className="btn btn-danger" data-bs-dismiss="modal">
                    <i className="fa-solid fa-circle-xmark"></i> Cerrar
                    </button>
                </div>
            </div>
        </div>
        </div>
   </div>
  )
}

export default Empleado
