import React from 'react'
import { useDispatch } from 'react-redux'
import GoogleLoginBtn from '../../components/common/GoogleLoginBtn';
import { changeField } from '../../modules/user';

const GoogleLoginBtnContainer = () => {
    const dispatch = useDispatch();
    
    const onChangeUser = (value) => {
        dispatch(
            changeField({
                key: 'user',
                value: value
            })
        );
    }

    return (
        <GoogleLoginBtn  onChangeUser={onChangeUser} />
    )
}

export default GoogleLoginBtnContainer
