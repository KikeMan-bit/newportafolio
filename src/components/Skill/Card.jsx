import React from 'react'

export const Card = (props) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='w-10 h-10 object-contain' src={props.image} alt="" />
            <strong className='text-xs'>
                {props.title}
            </strong>
        </div>
    )
}
