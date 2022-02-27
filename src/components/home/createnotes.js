import Banner from "./banner";
import Option from "./option";

/*handleRemove(id){
  alert('remove: ', id)

}*/

const CreateNotes = () => {
  return (
    <section className="container-banner">
      <Banner />
      <Option />
      <div className="notesCreate">
        <span onClick={() => this.handleRemove()}>&times;</span>
        <input type="text" placeholder="Insert Tittle..."></input>
        <div className="notesBody"></div>
      </div>
    </section>
  );
};

export default CreateNotes;
