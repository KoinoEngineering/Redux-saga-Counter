
import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles, createStyles, Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button"


/** Components **/
/** BaseButton 後々のことを考えていったんラップしてみる **/
export type BaseButtonProp = Partial<
    ButtonProps
>;

class BaseButton extends React.Component<BaseButtonProp>{
    render() {
        const { id, value, children } = this.props;
        return <Button id={id} value={value}>{children}</Button>;
    }
}


/** Calclator 計算機本体 **/
const CalcStyles = createStyles({

})

interface CalclateProp {

}

class CalclateComponent extends React.Component<CalclateProp> {
    render() {
        return (
            <div>
                <div>
                    displayArea
                </div>
                <div>
                    <BaseButton>TEST</BaseButton>
                </div>
            </div>
        );
    }
}

const Calclator = withStyles(CalcStyles)(CalclateComponent);

ReactDOM.render(<Calclator />, document.getElementById('root'));
