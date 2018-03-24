import * as React from "react";

interface Props {

  type: string;
  name: string;
  id: string;
  label: string;
  click?: React.EventHandler<any>;
  value?: string;
  classname?: string;
}

class Button extends React.Component<Props> {
  render() {

    const {label, type, name, id, classname, click} = this.props;

    return (
        <button name={name} id={id} type={type} className={classname} onClick={click}>{label}</button>
    );
  }
}

export default Button;
