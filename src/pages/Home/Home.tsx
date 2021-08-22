import React, { Component } from 'react'

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

class Home extends Component {
    constructor(props: any) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister() {
        console.log(this)
    }

    handleScrollToTop() {
        window.scrollTo(0, 0)
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
                            <Register handleRegister={this.handleRegister} />
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
                            <img src={PhoneImage} alt="Phone Image" />
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
