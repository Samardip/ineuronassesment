import React, { FC, useEffect, useState } from 'react'
import Modal from "react-modal";
import CustomButton from '../../ui/CustomButton';
import Input from '../../ui/Input';
import axios from 'axios'
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';

const EditDetailsModal: FC<{ openModal: boolean, setOpenModal: (value: boolean) => void, editData: any, edit: boolean,fetchUser:()=>void }> = ({ openModal, setOpenModal, editData, edit,fetchUser }) => {
    const width = window.screen.width;
    console.log(editData);

    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState(editData?.firstName || '');
    const [lastName, setLastName] = useState(editData?.lastName || '');
    const [phone, setPhone] = useState(editData?.phoneNumber || 0);
    const [age, setAge] = useState(editData?.age || '');
    useEffect(() => {
        setFirstName(editData?.firstName || '');
        setLastName(editData?.lastName || '');
        setPhone(editData?.phoneNumber || '');
        setAge(editData?.age || '');
    }, [editData])

    const customStyles = {
        content: {
            top: "53%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            padding: "0",
            borderRadius: "10px",
            transform: "translate(-50%, -50%)",
            overflow: 'inherit',
            width: width > 1200 ? '400px' : '370px',
            minHeight: "400px"
        },
    };

    function closeModal() {
        setOpenModal(false);
    }
    const handleAdd = (e: any) => {
        let flag = true;
        setLoading(true);
        e.preventDefault();
        if (!firstName) {
            flag = false
            setLoading(false);
            toast.error('First Name cannot be empty !!!')
        }
        else if (!lastName) {
            flag = false
            setLoading(false);
            toast.error('Last Name cannot be empty !!!')
        }
        else if (!phone || phone.length !== 10) {
            flag = false
            setLoading(false);
            toast.error('Invalid phone number !!!')
        }
        else if (!age) {
            flag = false
            setLoading(false);
            toast.error('age is either invalid or is empty !!!')
        }
        if (flag) {
            let body: any = {
                "firstName": firstName,
                "lastName": lastName,
                "phoneNumber": phone,
                "age": age
            }
            let config = {
                method: 'post',
                url: `https://blue-journalist-bbrpv.ineuron.app:4000/user/create`,
                data: body
            };
            axios(config)
                .then((res) => {
                    setLoading(false);
                    fetchUser();
                    closeModal();
                })
                .catch((rej) => {
                    setLoading(false);
                    toast.error('Adding user failed !!!')
                })
        }
    }
    const handleSubmit = (e: any) => {
        let flag = true;
        setLoading(true);
        e.preventDefault();
        if (!firstName) {
            flag = false
            setLoading(false);
            toast.error('First Name cannot be empty !!!')
        }
        else if (!lastName) {
            flag = false
            setLoading(false);
            toast.error('Last Name cannot be empty !!!')
        }
        else if (!phone || phone.length !== 10) {
            flag = false
            setLoading(false);
            toast.error('Invalid phone number !!!')
        }
        else if (!age) {
            flag = false
            setLoading(false);
            toast.error('age is either invalid or is empty !!!')
        }
        if (flag) {
            let body: any = {
                "firstName": firstName,
                "lastName": lastName,
                "phoneNumber": phone,
                "age": age
            }
            let config = {
                method: 'patch',
                url: `https://blue-journalist-bbrpv.ineuron.app:4000/user/${editData?._id}`,
                data: body
            };
            axios(config)
                .then((res) => {
                    setLoading(false);
                    fetchUser();
                    closeModal();
                })
                .catch((rej) => {
                    setLoading(false);
                    toast.error('Update failed !!!')
                })
        }
    }
    return (
        <Modal
            isOpen={openModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" ariaHideApp={false}
        >
            <div className="w-[100%] flex justify-end mr-[20px] pt-[10px] mb-[20px]">
                <button className=" font-medium flex items-center leading-[10px] mr-[10px] mt-[10px]" onClick={closeModal}>
                    X
                </button>
            </div>
            <form
                onSubmit={(e) => { edit?handleSubmit(e):handleAdd(e) }}
                className="flex flex-col justify-center items-center w-[100%] px-[20px] pb-[30px] gap-5">
                <div className='flex gap-3'>
                    <div>
                        <div className='font-bold text-md'>First Name</div>
                        <Input
                            type={'text'}
                            value={firstName}
                            name={'First Name'}
                            placeholder={'Your First Name'}
                            disabled={false}
                            onChange={(e) => { setFirstName(e.target.value) }}
                            className={`w-[100%]`}
                        // autoComplete={true}
                        />
                    </div>
                    <div>
                        <div className='font-bold text-md'>Last Name</div>
                        <Input
                            type={'text'}
                            value={lastName}
                            name={'First Name'}
                            placeholder={'Your First Name'}
                            disabled={false}
                            onChange={(e) => { setLastName(e.target.value) }}
                            className={`w-[100%]`}
                        // autoComplete={true}
                        />
                    </div>
                </div>
                <div className='w-[100%]'>
                    <div className='font-bold text-md'>Phone Number</div>
                    <Input
                        type={'tel'}
                        value={phone}
                        name={'First Name'}
                        placeholder={'Your First Name'}
                        disabled={false}
                        onChange={(e) => { 
                            console.log(parseInt(e.target.value))
                            setPhone((parseInt(e.target.value[e.target.value.length-1])>=0 && parseInt(e.target.value[e.target.value.length-1])<=9)? e.target.value:phone) }}
                        className={`w-[100%]`}
                    // autoComplete={true}
                    />
                </div>
                <div className='w-[100%]'>
                    <div className='font-bold text-md'>Age</div>
                    <Input
                        type={'number'}
                        value={age}
                        name={'First Name'}
                        placeholder={'Your First Name'}
                        disabled={false}
                        onChange={(e) => { setAge(e.target.value) }}
                        className={`w-[100%]`}
                    // autoComplete={true}
                    />
                </div>
                <div>
                    <div className='w-[100%]'>
                        {/* <div>Phone Number</div>
                    <Input
                        type={'text'}
                        value={'lastname'}
                        name={'First Name'}
                        placeholder={'Your First Name'}
                        disabled={false}
                        onChange={() => { }}
                        className={`w-[100%]`}
                    // autoComplete={true}
                    /> */}
                        {edit ?
                            <CustomButton className='w-[150px]' primary={true} type="submit">Update&nbsp;{loading && <CircularProgress size={20} />}</CustomButton>
                            :
                            <CustomButton className='w-[150px]' primary={true} type="submit">Add&nbsp;{loading && <CircularProgress size={20} />}</CustomButton>
                        }
                    </div>
                </div>
            </form>
        </Modal >
    )
}

export default EditDetailsModal