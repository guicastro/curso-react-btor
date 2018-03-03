import * as React from "react";

interface Props {

    label: string;
    placeholder?: string;
    style?: React.CSSProperties;
}

class TextField extends React.Component<Props> {

    render() {

        return (
            <label>
                {this.props.label}:
                <input type="text" placeholder={this.props.placeholder} style={this.props.style} />
            </label>
        );
    }

}

export default TextField;