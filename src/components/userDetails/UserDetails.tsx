import { Edit } from '@mui/icons-material';
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import PageWrapper from '../../container/PageWrapper';
import CustomButton from '../../ui/CustomButton';
import EditDetailsModal from '../editOrAddDetails/EditOrAddDetailsModal';
import UserDetailsLoader from './UserDetailsLoader';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

type Props = {}

export default function UserDetails() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editData, setEditData] = useState({});
    const [edit, setEdit] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    
    const fetchUser = () => {
        setLoading(true)
        axios('https://blue-journalist-bbrpv.ineuron.app:4000/users')
            .then((res) => {
                setUserData(res.data?.data);
                setLoading(false)

            })
            .catch(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchUser();
    }, [])
    const handleAdd = useCallback(() => {
        setOpenEditModal(true)
        setEditData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            age: ''
        })
        setEdit(false)
    }, [])

    const handleEdit = useCallback((item: any) => {
        setOpenEditModal(true)
        setEditData(item)
        setEdit(true)
    }, [])

    const handleDelete = useCallback((id: string) => {
        let newUserArray: any = [{}];
        newUserArray = userData?.filter((item: any) => {
            return item._id !== id;
        })
        let config = {
            method: 'delete',
            url: `https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,
        };
        setDeleteLoading(true);
        axios(config)
            .then((res) => {
                setDeleteLoading(false);
                setUserData(newUserArray);
            })
            .catch((rej) => {
                setDeleteLoading(false);
                toast.error('delete failed !!')
            })
    }, [userData])
    return (
        <PageWrapper>
            <div className='w-[100%] flex justify-between items-center'>
                <CustomButton className={`font-medium w-[150px]`} child='' primary={true} type='' onClick={() => { handleAdd() }}>{`Add user ->`}</CustomButton>
                {/* <div className='font-bold'>Download CSV</div> */}
            </div>
            <div className='w-[100%] overflow-auto scroll'>
                <div className='w-[600px] overflow-x-scroll lg:overflow-auto lg:w-[100%] flex flex-col gap-3 scroll'>
                    <div className='w-[100%] bg-purple-200 border border-purple-400 rounded-lg p-2 grid grid-cols-5'>
                        <div className='flex justify-center font-medium text-md'>First&nbsp;Name</div>
                        <div className='flex justify-center font-medium text-md'>Last&nbsp;Name</div>

                        <div className='flex justify-center font-medium text-md'>Phone</div>
                        <div className='flex justify-center font-medium text-md'>Age</div>

                        <div className='flex flex-row justify-evenly'>
                            <div className='font-medium text-md'>Edit</div>
                            <div className='font-medium text-md'>Delete</div>
                        </div>

                    </div>
                    {/* <div className=''> */}
                    {
                        loading ?
                            <>
                                <UserDetailsLoader />
                            </>
                            :
                            userData?.length === 0 ?
                                <div className='flex flex-col justify-center font-bold gap-2'>
                                    No user data added yet
                                    {/* <CustomButton className={`font-medium`} child='' primary={true} type='' onClick={() => { }}>{`Add user->`}</CustomButton> */}
                                </div>
                                :
                                userData?.map((item: any, index: number) => {
                                    return (
                                        <>
                                            <div key={item?.id} className={`${index % 2 === 1 ? 'bg-purple-50' : ''} w-[100%] border border-gray-200 rounded-lg p-2 grid grid-cols-5`}>
                                                <div className='flex justify-center'>{item.firstName}</div>
                                                <div className='flex justify-center'>{item.lastName}</div>

                                                <div className='flex justify-center'>{item.phoneNumber}</div>
                                                <div className='flex justify-center'>{item.age}</div>

                                                <div className='flex flex-row justify-evenly'>
                                                    <div className='flex justify-center cursor-pointer' onClick={() => {
                                                        handleEdit(item)
                                                    }}><Edit /></div>
                                                    <div className='flex justify-center cursor-pointer' onClick={() => { handleDelete(item?._id) }}><DeleteIcon /></div>
                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                    }
                </div>
            </div>
            <EditDetailsModal openModal={openEditModal} setOpenModal={setOpenEditModal} editData={editData} edit={edit} fetchUser={fetchUser} />
        </PageWrapper>
    )
}