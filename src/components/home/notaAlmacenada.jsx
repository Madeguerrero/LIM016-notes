import React, { useState } from "react"
import Optionbar from "./optionbar";
import { updateNewNote } from "../../firebaseConfi";
import {RiDeleteBin6Line} from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";



const NotaAlmacenada =({note,deleteNote,setNotas})=>{ //destructurando las propiedades de props
    
    const {id,description,date,title,label} = note // destructurando las propiedades de note
    const [texDescription,setTexDescription] = useState(description);
    const [err,setErr]= useState(false); 
    const [ocultarModal,setOcultarModal]= useState(false);
    
    
   
    const handleSubmit=(idNote)=>{
        console.log(idNote,texDescription)
        if(texDescription !== ""){
            console.log("podemos actualizar")
          updateNewNote(idNote,{description: texDescription}); 
          setOcultarModal(true);
        }else{
            console.log("no puedes actualizar")
            setErr(true);

        }
      } 

    return (
        <> 
        <section className="sectNotes" style={{background:label}}>
            <div key={id} rows="20" cols="20" className="notesObtained" >
              <p>{title}</p>
              <hr></hr>
              {`${texDescription}`}
            </div>
            <div className="FooterNotes2">
              <p className="dateNote">{`${date}`}</p>
              <RiDeleteBin6Line className="noteDeleteForever" size='1.4em' onClick={() => deleteNote(id)}/>
              <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={"#exampleModal"+id}  data-bs-whatever="@fat" onClick={() =>  setOcultarModal(true)} ><RiEditBoxLine size='1.4em' /></button>
              <div className="modal fade" id={"exampleModal"+id}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label >Title:</label>
                          <p className="form-control" name={title}>{title}</p>
                        </div>
                        <div className="mb-3">
                          <label  className="col-form-label">Description:</label>
                          <textarea className="form-control"  defaultValue={description}  onChange={(e) => {setTexDescription(e.target.value); setErr(false)}} ></textarea>
                        </div>
                        {(err === true) && ( <p>Campo vacio o no hay modificaciones</p>)} 
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                      <button type="button" className="btn btn-primary"  data-bs-dismiss={(ocultarModal === true) ? "modal" : ""} onClick={() =>handleSubmit(id)} >Save change</button>
                    </div>
                  </div>
                </div>
              </div>
             {/*  <Optionbar className="noteOption2" /> */}
            </div>
          </section>
         </>
          )
        }

        export default NotaAlmacenada;
    
