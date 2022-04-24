import '../stylesheets/title.css';
import { AiFillHome } from "react-icons/ai";
function Title() {
    return (
        <div className="row">
            <div className="col">
                <label>&lt;about/&gt;</label>
            </div>
            <div className="col">
                <label>&lt;projects/&gt;</label>
            </div>
            <div className="col">
                <AiFillHome />
            </div>
            <div className="col">
                <label>&lt;contact/&gt;</label>
            </div>
            <div className="col">
                <label>&lt;resume/&gt;</label>
            </div>
        </div>

    );
}

export default Title;
