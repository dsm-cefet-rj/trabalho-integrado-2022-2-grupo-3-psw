import React from "react";
import "./styleBotaoProximoQuiz.css";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

function BotaoProximoQuiz() {
    return (
        <div>
            <div className="row">
                <div class="col-6 d-flex justify-content-center"></div>
                <div className="col-6 d-flex justify-content-end" >
                    <a className="text-decoration-none">
                        <button id="next">
                            <p>Próximo</p>
                            {/* <i BsFillArrowRightCircleFill /> */}
                        </button>
                    </a>
                </div>
            </div>
        </div>)
}

export default BotaoProximoQuiz;