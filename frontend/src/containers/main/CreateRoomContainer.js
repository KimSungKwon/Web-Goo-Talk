import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CreateRoom from '../../components/main/createRoom/CreateRoom';
import { changeField, initialize } from '../../modules/write';

const CreateRoomContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ write }) => ({ 
        title: write.title,
        body: write.body,
    }))

    const onChangeField = useCallback(
        (payload) => {
            dispatch(changeField(payload))
        },
        [dispatch],
    )

    // initalize when component unmounted
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return (
        <CreateRoom onChangeField={onChangeField} title={title} body={body} />
    )
}

export default CreateRoomContainer
