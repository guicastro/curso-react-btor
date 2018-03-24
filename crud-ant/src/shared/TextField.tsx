import * as React from "react";
import { Input } from 'antd';

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  number?: boolean;
  onChange: (value: string | number) => void;
}

class TextField extends React.Component<Props> {
  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (this.props.number) {
      this.handleNumberChange(value);
    } else {
      this.handleTextChange(value);
    }
  };

  handleTextChange(value: string) {
    this.props.onChange(value);
  }

  handleNumberChange(value: string) {
    const number = +value;
    console.log(value);
    if (isNaN(number)) return;

    this.props.onChange(number);
  }

  render() {
    const { label, placeholder, value } = this.props;

    return (
        <Input
          addonBefore={<span style={{ width: "80px", display: "inline-block", textAlign: "left"}}>{label}</span>}
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          className="form-control"
          style={{ marginBottom: "15px" }}
        />
    );
  }
}

export default TextField;
