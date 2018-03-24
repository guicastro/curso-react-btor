import * as React from "react";
import { Button as ButtonAntD } from 'antd';

interface Props {

  type: "primary"|"dashed"|"danger"|"ghost";
  label?: string;
  click?: React.EventHandler<any>;
  icon?: string;
  value?: string;
  style?: React.CSSProperties;
}

class Button extends React.Component<Props> {
  render() {

    const {label, type, click, style, icon} = this.props;

    return (
        <ButtonAntD type={type} onClick={click} style={style} icon={icon}>{label}</ButtonAntD>
    );
  }
}

export default Button;
