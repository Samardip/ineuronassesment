import React from 'react'
import CustomButton from '../ui/CustomButton'



export default function PageWrapper(props: any) {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen min-w-screen  py-[50px] mx-[20px] lg:mx-[250px] gap-5'>
            {props.children}
        </div>
    )
}