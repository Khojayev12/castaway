export default function AnEpisode(props){
    return(
        <div className="one-episode" >
            <div className="episode-pic" >
                <img src={props.pic} alt="" className="episode-photo" />
            </div>
            <div className="episode-text" >
                <div className="epi-type" >{props.type}</div>
                <div className="epi-num" > Episode {props.num} </div>
                <div className="epi-title" > {props.title} </div>
                <div className="epi-description" > {props.description} </div>
                <button className="api-view-details" > View Episode Details </button>
            </div>
        </div>
    )
}