import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ProfileBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileHeader = styled.div`
    display: flex;
    align-items: flex-start;
    p {
        font-size: 3rem;
        align-self: center;
    }
    .pf-img {
        align-self: center;
        margin-right: 24px;
        height: 8rem;
    }
`;

const ProfileBody = styled.div`
    margin-top: 1rem;
    .body-email {
        display: flex;
        
        .body-email-icon {
            align-self: center;
            margin-right: 3px;
        }
        
        .body-email-text {
            align-self: center;
            margin-bottom: 1px;
        }
    }
`;

const Profile = ({ user }) => {
    return (
        <ProfileBlock>
            <ProfileHeader>
                    <Image className="pf-img" src={user.userImg} roundedCircle fluid />
                    <p>{user.username}</p>
            </ProfileHeader>

            <ProfileBody>
                <div className="body-email">
                        <FontAwesomeIcon className="body-email-icon" icon={faEnvelope} />
                        <p className="body-email-text">email : {user.userEmail}</p>
                </div>
            </ProfileBody>
        </ProfileBlock>
    )
}

export default Profile
