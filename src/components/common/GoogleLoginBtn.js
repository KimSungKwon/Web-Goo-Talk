import React from 'react'
import { Button } from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const OauthKey = process.env.REACT_APP_OAUTH_KEY;

const GoogleLoginBtn = () => {

    const onSuccess = (response) => {
        console.log(response)
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
