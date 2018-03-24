import * as React from "react";

interface Props {

  label: string;
  type: string;
  name: string;
  id: string;
  value?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  classdiv?: string;
  classinput?: string;
  onChange: (value: string | number) => void;
  /* para eventos, (é o que entre) => é o que sai)*/
  number?: boolean;
}

class TextInput extends React.Component<Props> {

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

    const value = evt.target.value;
    if(this.props.number) {
      this.handleNumberChange(value);
    }
    else {
      this.handleTextChange(value);
    }
  };

  handleTextChange(value: string) {
    this.props.onChange(value);
  };

  handleNumberChange(value: string) {
    const number = +value;
    if(isNaN(number)) return;
    this.props.onChange(number);
  };

  render() {

    const { label, type, id, name, value, placeholder, style, classdiv, classinput } = this.props;

    return (
      <div className={classdiv}>
        <label>{label}</label>
        <input type={type}
                id={id} name={name}
                value={value}
                placeholder={placeholder}
                className={classinput}
                style={style}
                onChange={this.handleChange} />
      </div>
    );
  }
}

export default TextInput;
