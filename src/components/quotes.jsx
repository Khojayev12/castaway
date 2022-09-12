export default function Quotes(props){
    return(
        <div className="quote" >
            <div className="quote-star" >⭐️⭐️⭐️⭐️⭐️</div>
            <div className="quote-main" > {props.text} </div>
            <div className="quote-auth" > {props.auth} </div>
        </div>
    )
}