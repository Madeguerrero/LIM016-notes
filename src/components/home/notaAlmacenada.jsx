import React, { useEffect, useState } from "react"
import Optionbar from "./optionbar";



const NotaAlmacenada =({note,deleteNote,setNotas})=>{ //destructurando las propiedades de props
    
    const {id,description,date,title} = note // destructurando las propiedades de note

    return (
        <> 
        <section className="sectNotes">
            <div key={id} rows="20" cols="20" className="notesObtained">
              <p>{title}</p>
              <hr></hr>
              {`${description}`}
            </div>
            <div className="FooterNotes2">
              <p className="dateNote">{`${date}`}</p>
              <button type="button" onClick={() => deleteNote(id)}>delete</button>
              <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={"#exampleModal"+id}  data-bs-whatever="@fat" >Edit</button>
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
                          <input type="text" className="form-control" name="title" defaultValue= {title} /* onChange={handleChange} */ />
                        </div>
                        <div className="mb-3">
                          <label  className="col-form-label">Description:</label>
                          <textarea className="form-control"  defaultValue={description}/* onChange={handleChange} */></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                      <button type="button" className="btn btn-primary" /* onClick={() =>handleSubmit(nota.id)} */>Save change</button>
                    </div>
                  </div>
                </div>
              </div>
              <Optionbar className="noteOption2" />
            </div>
          </section>
         </>
          )
        }

        export default NotaAlmacenada;
    
