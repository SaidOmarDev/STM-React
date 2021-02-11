import React from 'react'
import { Form, Formik, useField } from 'formik'
import * as Yup from 'yup'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import {AiOutlineLogout} from 'react-icons/ai'
import './profileInfo.css'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../../../actions/AuthActions'
import { useHistory } from 'react-router-dom'

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="form-control" {...field} {...props}/>
            {meta.touched && meta.error ? 
                (<div className="error">{meta.error}</div>) : 
                (<div className="noerror"></div>)
            }
        </>
    )
}
const MyFileInput = ({...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input {...field} {...props}/>
            {meta.touched && meta.error ? 
                (<div className="error">{meta.error}</div>) : 
                (<div className="noerror"></div>)
            }
        </>
    )
}

const ProfileInfo = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const logoutHandler = () => {
        dispatch(logout());
        history.replace('/')
    }

    return ( 
        <div className="profile-data pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-8">
                    <div className="wishlist-header">
                        <span>Update Profile Info</span>
                        <Button onClick={logoutHandler}>Sign out <AiOutlineLogout /></Button>
                    </div>
                    <div className="profile-info">
                        <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                phone: '',
                                currentPassword: '',
                                newPassword: '',
                                imageUrl: '',
                                confirmNewPassword: ''
                            }}
                            validationSchema={Yup.object().shape({
                                imageUrl: Yup.string(),
                                fullName: Yup.string(),
                                email: Yup.string().email('*Invalid email address'),
                                phone: Yup.number('*Phone must be a number'),
                                currentPassword: Yup.string(),
                                newPassword: Yup.string().min(8, '* Must be 8 character or more'),
                                confirmNewPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
                            })}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    setSubmitting(false); 
                                    console.log(values) 
                                }, 400)
                            }}
                        >
                            <Form>
                                <div className="user-prief">
                                    <img src="/images/avatar.png" alt=""/>
                                    <div className="user-info">
                                        <div className="file btn">
                                            <span><i className="far fa-edit"></i>Change photo</span>
                                            <MyFileInput 
                                                type="file"
                                                name="imageUrl"
                                            />
                                        </div>
                                        <p>Said Omar</p>
                                    </div>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <MyTextInput 
                                                label="Full Name"
                                                name="fullName"
                                                type="text"    
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <MyTextInput
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                disabled={true}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <MyTextInput
                                                label="Phone"
                                                name="phone"
                                                type="tel"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <MyTextInput
                                                label="Current Password"
                                                name="currentPassword"
                                                type="password"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <MyTextInput
                                                label="New Password"
                                                name="newPassword"
                                                type="password"
                                                placeholder="Your New Password"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <MyTextInput
                                                label="Confirmed New Password"
                                                name="confirmNewPassword"
                                                type="password"
                                                placeholder="Your Confirmed Password"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Button type="submit">Update Profile</Button>
                            </Form>
                        </Formik>
                        {/* <form action="">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" className="form-control" id="fname" placeholder="First Name" value="Said"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" className="form-control" id="lname" placeholder="Last Name" value="Omar"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="E-mail Address" value="ex@gmail.com" disabled/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="Phone Number"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="npassword">New Password</label>
                                    <input type="password" className="form-control" id="npassword" placeholder="New Password"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            <button type="submit" className="btn">Update Profile</button>
                        </form> */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileInfo;