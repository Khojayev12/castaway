export default function Header() {
  return (
    <div className="header">
      <div className="logo"> <a href="#home" className="my-href" >Castaway</a>  </div>
      <div className="sections" >
        <div className="each-section" ><a href="#home" className="my-href" > Home </a> </div>
        <div className="each-section" > <a href="#episodes" className="my-href" > Episodes </a></div>
        <div className="each-section" > <a href="#about" className="my-href" >About</a> </div>
        <div className="each-section" > <a href="#contact" className="my-href" >Contact</a> </div>
      </div>
    </div>
  );
}
