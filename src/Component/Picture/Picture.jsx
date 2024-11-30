import "./Picture.css"

const Picture = ({img,p}) =>{

    return(
        <div className="pics">
           <img src= {img} alt="" />
           <p>{p}</p>
        </div>
    )

}

export default Picture