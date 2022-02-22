const principalLogo = new URL ("./logo.png", import.meta.url);
const Index = () => {
  
  return (
    <section className="container-banner">
      <div className="banner" >
        <img src = {principalLogo} id="img_banner"></img>
        <input type="search" placeholder="Buscar" id="search">
        </input>                  
      </div>
    </section>
  );
};
export default Index;
