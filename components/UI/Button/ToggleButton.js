import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({className, children, ...props}) => {
    const {variant} = props

    return (
        <div
            onClick={props.onClick}
            className={clsx(
                `duration-300 p-[6px] transition rounded-medium border-[1px] w-fit cursor-pointer`,
                variant === 'red' &&
                'bg-timeRed hover:bg-timeRedHover  circle-boxShadow z-[900] !border-0 !text-white',
                className
            )}
        >
            {props.content}
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf([
        'default',
        'red',
    ]),
}

export default Button
