import React from 'react'
import style from './style.module.css'

const validation = /[^a-zA-Z ( ) (0-9)$]/

class Input extends React.Component {
    state = {
        valueOfInput: '',
    }

    render() {
        return (
            <div className={style.Control}>
                <input
                    className={style.Search}
                    type="text"
                    value={this.state.valueOfInput}
                    onChange={e =>
                        this.setState({
                            valueOfInput: validation.test(e.target.value)
                                ? this.state.valueOfInput
                                : e.target.value,
                        })
                    }
                />
            </div>
        )
    }
}

export default Input
