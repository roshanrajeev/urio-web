import React, { Component } from 'react'
import { History } from 'history'

import './Home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Register from './Register'
import Card from './Card'
import FriendsImage from '../../assets/images/problems/friends.jpg'
import SocialImage from '../../assets/images/problems/social.jpg'
import PortalImage from '../../assets/images/problems/portal.jpg'
import PhoneImage from '../../assets/images/solution/phone.svg'
import SolveCard from './SolveCard'
import SyncIcon from '../../assets/images/solution/sync.svg'
import NotesIcon from '../../assets/images/solution/notes.svg'
import CrowdsourceIcon from '../../assets/images/solution/crowdsource.svg'
import CardIcon from '../../assets/images/solution/card.svg'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

type HomeProps = {
    history: History
}

type Notification = {
    type: string
    message: string
}

type HomeState = {
    email: string
    notification: Notification | null
}

class Home extends Component<HomeProps, HomeState> {
    constructor(props: any) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    state = {
        email: '',
        notification: null,
    }

    handleRegister() {
        if (this.state.notification) {
            return
        }

        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailRegex.test(this.state.email.toLowerCase())) {
            this.setState({ notification: { type: 'error', message: 'Entered email is invalid' } })
            setTimeout(() => {
                this.setState({ notification: null })
            }, 2000)
            return
        }

        const URL = `https://script.google.com/macros/s/AKfycbzoDAWsHmNTScGUOAgOQ2iXoGICoULCO6OwUoxKE5YxLeh7VTKNSS6JPPD5eU-c8TaG/exec`

        const formData = new FormData()
        formData.append('Email', this.state.email)

        fetch(URL, { method: 'POST', body: formData })
            .then((response) => response.json())
            .then((data) => {
                if (data.result === 'success') {
                    this.props.history.push('/thankyou')
                } else {
                    this.setState({
                        notification: { type: 'error', message: 'Sorry! there was an error. Try aagain later' },
                    })
                    setTimeout(() => {
                        this.setState({ notification: null })
                    }, 2000)
                }
            })
            .catch((error) => {
                this.setState({
                    notification: { type: 'error', message: 'Sorry! there was an error. Try aagain later' },
                })
                setTimeout(() => {
                    this.setState({ notification: null })
                }, 2000)
                console.error('Error!', error.message)
            })
    }

    handleScrollToTop() {
        window.scrollTo(0, 0)
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'email') {
            this.setState({ email: e.target.value })
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="Home__hero-nav-container">
                    <div className="Home__nav-container">
                        <Navbar />
                    </div>
                    <div className="Hero">
                        <div className="Hero__content-container">
                            <h1 className="Hero__title">
                                <span className="Hero__title--primary">Is lead hunting one of your daily job?</span>
                                <span className="Hero__title--secondary">Try Urio Network Catalog App</span>
                            </h1>
                            <p className="Hero__description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <Register handleRegister={this.handleRegister} handleChange={this.handleInputChange} />
                            {this.state.notification && (
                                <p className="Hero__error">{(this.state.notification! as Notification).message}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="Problems">
                    <h1 className="Problems__title">
                        How do you manage your professional network and generate leads ?
                    </h1>
                    <div className="Problems__card-container">
                        <Card img={SocialImage} title="Professional and Social Media ?" />
                        <Card img={PortalImage} title="Premium Lead Generation Portals ?" />
                        <Card img={FriendsImage} title="Friends, Referrals &amp; Colleagues ?" />
                    </div>
                </div>

                <div className="Solution">
                    <h1 className="Solution__title">
                        We have solved all these problems for you, just via one application !
                    </h1>
                    <div className="Solution__content-container">
                        <div className="Solution__card-container">
                            <div className="Solution__card-inner-container">
                                <SolveCard
                                    icon={SyncIcon}
                                    title="Sync all your Business Cards as Searchable Contacts"
                                />
                            </div>
                            <div className="Solution__card-inner-container">
                                <SolveCard icon={CardIcon} title="Catalogue Professional Contacts" />
                            </div>
                        </div>
                        <div className="Solution__phone-container">
                            <img src={PhoneImage} alt="Phone" />
                        </div>
                        <div className="Solution__card-container">
                            <div className="Solution__card-inner-container">
                                <SolveCard icon={CrowdsourceIcon} title="Crowdsource Verified Leads" />
                            </div>
                            <div className="Solution__card-inner-container">
                                <SolveCard icon={NotesIcon} title="Add notes, birthday reminders and much more" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Home__register-btn-container">
                    <Button onClick={this.handleScrollToTop} text="Register to get early access" />
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home
