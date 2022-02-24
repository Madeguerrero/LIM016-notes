import Banner from "./banner";
import Option from "./option";

const CreateNotes = () => {
  return (
    <section className="container-banner">
      <Banner />
      <Option />
      <div className="create-notes">
        <input type="text" placeholder="Insert Tittle..."></input>
      </div>
    </section>
  );
};

export default CreateNotes;
