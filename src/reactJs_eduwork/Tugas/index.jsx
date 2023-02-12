import React from "react";
import TugasComponent from "./component/tugasComponent";
import TugasKomponen from "./component/tugasKomponen";

class Tugas extends React.Component {
    render(){
        return(
            <div>
                <TugasComponent/>
                <TugasKomponen/>
            </div>
        )
    }
}
export default Tugas;