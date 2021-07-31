import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const OauthKey = process.env.REACT_APP_OAUTH_KEY;

const GoogleLoginBtn = ({ onChangeUser }) => {
    const history = useHistory();

    const onSuccess = (response) => {
        console.log(response)
        const newUser = {
            username: response.profileObj.name,
            userId: response.profileObj.googleId,
            userImg: response.profileObj.imageUrl,
            userEmail: response.profileObj.email,
        }
        onChangeUser(newUser);
        history.push('/#');
    }

    return (
        <>
            <GoogleLogin
                clientId={OauthKey}
                onSuccess={onSuccess}
                render={renderProps => {
                    return <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <FontAwesomeIcon icon={faGoogle} /> 구글계정으로 로그인
                    </Button>
                }}
            />
        </>
    )
}

export default GoogleLoginBtn
