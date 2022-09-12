export default function Subscribe(props){
    return(
        <div className="subscribe" id={props.id} >
            <div className="div-left" >
                <div className="sub-header" >
                    Email NewsLeter
                </div>
                <div className="sub-title" >
                    Subscribe for updates
                </div>
            </div>
            <div className="div-right" >
                <input placeholder="Name" className="sub-input" />
                <input placeholder="Email" className="sub-input-2" />
                <button className="sub-btn" >
                    Submit
                </button>
            </div>
        </div>
    )
}