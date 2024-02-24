import "./button.css"

function Button ({btnContenu,bgColor,color}){
    return(
        <button style={{backgroundColor:bgColor,color:color}} className="btn">{btnContenu}</button>
    )
}
export default Button