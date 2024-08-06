import './Button.module.css';
import { ButtonProps } from "./Button.props.ts";
import cn from 'classnames';

function Button({children, className, ...props}: ButtonProps) {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    );
}

export default Button