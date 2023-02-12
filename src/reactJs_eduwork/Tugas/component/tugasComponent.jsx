import React from "react";
// import PropTypes from 'prop-types';

class TugasComponent extends React.Component {
    state = {
        value: 0
    }
    handlePlus = () => {
        this.setState({ value: this.state.value + 1 })
    }
    handleMinus = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 })
        }
    }
    render() {
        return (
            <div>
                <h1>Tugas Membuat Komponen</h1>
                <button onClick={activateLasers}>
                    Activate Lasers
                </button>
            </div>
        )
    }
}

export default ClassComponent;