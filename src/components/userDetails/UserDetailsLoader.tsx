import React from 'react'

type Props = {}

export default function UserDetailsLoader({ }: Props) {
    const array = [1, 2, 3, 4, 5]
    return (
        <>
            {
                array?.map((item:any,index:number) => {
                    return (
                        <>
                            <div className={`${index % 2 === 1 ? 'bg-purple-50' : ''} w-[100%] border border-gray-200 rounded-lg p-2 grid grid-cols-5`}>
                                <div className='bg-gray-200 h-[20px] mx-2 rounded-md'></div>
                                <div className='bg-gray-200 mx-2 rounded-md'></div>

                                <div className='bg-gray-200 mx-2 rounded-md'></div>
                                <div className='bg-gray-200 mx-2 rounded-md'></div>

                                <div className='flex flex-row justify-evenly h-[20px]'>
                                    <div className='bg-gray-200 mx-2 w-[25px] h-[20px] rounded-md'></div>
                                    <div className='bg-gray-200 mx-2 w-[25px] h-[20px] rounded-md'></div>
                                </div>

                            </div>
                        </>
                    )
                })
            }
        </>
    )
}