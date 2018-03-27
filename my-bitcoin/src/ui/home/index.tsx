import * as React from 'react';
import { Button } from 'antd';
import { connect, Dispatch } from 'react-redux';

interface Props {
    counter: number;
    add: () => {};
    remove: () => {};
}
function Home(props: Props) {

    return(
        <React.Fragment>
            <h1>Página de Home</h1>
            <br />
            <Button type="dashed" onClick={props.remove}>-</Button>
            <span> {props.counter} </span>
            <Button type="dashed" onClick={props.add}>+</Button>
        </React.Fragment>
    );
}

const mapStateToProps = (state: any, props: any) => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, props: any) => ({
    add() {
        dispatch({
            type: 'COUNTER_ADD'
        });
    },
    remove() {
        dispatch({
            type: 'COUNTER_SUBTRACT'
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);