import Button from "./button.jsx";
import img from "../assets/Image_nature.png"
import "./card.css"

function Card({errorCode}){
  return(
      <div className="container">
          <div className="description">
                <p className="code">{errorCode} page</p>
                <h2 className="title"> Page Not Found</h2>
                <p className="moreDesc"> Sorry, the page you are looking for doesn't exist.  Here are some helpful links:</p>
                <div className="buttons">
                    <Button btnContenu={"Go Back"} />
                    <Button btnContenu={"Take Me Home"} bgColor={"aqua"} color={"white"}/>
                </div>
          </div>
          <div className="image">
              <img src={img} alt="nature" />
          </div>

      </div>

  )
}
export default Card