import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './ButtonComponent.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    title: string
    red?: boolean
}

export const ButtonComponent: React.FC<SuperButtonPropsType> = ({
                                                                    title,
                                                                    red,
                                                                    className,
                                                                    ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
                                                                }) => {
    const finalClassName = `${
        red ? s.red + ' ' + s.default : s.default
    } ${className}`

    return (
        <>
            <button
                className={finalClassName}
                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            >{title}</button>
        </>
    )
}