import { useState } from "react";
import axios from "axios";
import {alertaSuccess, alertaError, alertaWarning } from "../Alertas"
import Swal from "sweetalert2"; 
import { data } from "react-router-dom";

const useEmpelado  =  () =>{
    const [empleado, setEmpleado] = useState([])
    const [id, setID] = useState('')
    const [nombre, setNombre] = useState('')
    const [dni, setDni] = useState('')
    const [direccion, SetDireccion] = useState('1')
    const [email, setEmail] = useState('')
    const [titleModal, setTitleModal] = useState('')
    const [operation, setOperation] = useState('')
    const url ="https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado"

    const getEmpleados = async ()=>{
        const response = await axios.get(url)
        setEmpleado(response.data)
     
    }

    const openModal = (operation, empleado)=>{
        setID('')
        setNombre('')
        setDni('')
        SetDireccion('1')
        setEmail('')
        if (operation ===1){
            setTitleModal('Registar Empleado')
        }else if(operation ===2){
            setTitleModal('Editar Empleado')
            setID(empleado.id)
            setNombre(empleado.nombre)
            setDni(empleado.dni)
            SetDireccion(empleado.direccion)
            setEmail(empleado.email)
        }
        setOperation(operation)
    }



    const guardarEditarEmpleado =()=>{
        let payload, metodo, urlAxios

        if(nombre===""){
            alertaWarning(`Nombre del empleado en blanco ${operation}`)
        }else if(dni ===""){
            alertaWarning("Descripcion del empleado en blanco")
        }else if(direccion ===""){
            alertaWarning("Categori del empleado en blanco")
        }else if(email ===""){
            alertaWarning("Pricio del empleado en blanco")
        }else{
           payload={
            nombre:nombre,
            dni:dni,
            direccion:direccion,
            email:email
           }
           if (operation ===1){
            metodo = 'POST'
            urlAxios=url
           }else{
            metodo ='PUT'
            urlAxios=`${url}/${id}`
           }
           alertaSuccess(metodo)
           enviarSolicitud(urlAxios, metodo, payload)
        }

    }
    

    const enviarSolicitud = async (urlApi, metodo, parametros={}) =>{
        let obj={
            method:metodo,
            url:urlApi,
            data:parametros,
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }
        await axios(obj).then(()=>{
            let mensaje =''
            if( metodo==='POST'){
                mensaje="Se guardo el empleado"
            }else if ( metodo==='PUT'){
                mensaje="Se edito el empleado"
            }
            alertaSuccess(mensaje)
            document.getElementById("btnCerraModal").click()
            getEmpleados()
        }).catch((error)=>{
            alertaError(error)
        })
    }

    return {
        empleado, setEmpleado, getEmpleados, openModal, 
        id, setID,
        nombre, setNombre,
        dni, setDni,
        direccion, SetDireccion,
        email, setEmail,
        titleModal, setTitleModal,
        guardarEditarEmpleado, 

    }

}

export default useEmpelado