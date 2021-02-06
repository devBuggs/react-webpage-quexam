import React, { Component } from 'react';
import '../App.css';
import app from '../Assets/QU-Exam.apk';


export class DownloadBtn extends Component {
    render() {
        return (
            <div>
                <a href={app}>
                    <button className="button button1 buttondownload w3-border-bottom"><span>INSTALL IT NOW </span></button>
                </a>
                <a href={app}>
                    <button className="button button1 buttondownload"><span><i class="fas fa-download fa-4x"></i> </span></button>
                </a>
            </div>
        )
    }
}

export class Features extends Component {
    render() {
        return (
            <div class="w3-container" id="features">
                <div class="w3-content w3-text-black">
                    <div class="w3-row w3-center w3-card">
                        <h5 class="w3-center w3-padding-48">
                            <span class="w3-tag w3-wide">THE FEATURES</span>
                        </h5>
                        <a href="#" >
                            <div class="w3-col s4 tablink w3-hover-sand">QCare Registration</div>
                        </a>
                        <a href="#">
                            <div class="w3-col s4 tablink w3-hover-sand">QU Administration</div>
                        </a>
                        <a href="#" >
                            <div class="w3-col s4 tablink w3-hover-sand">New Student Registration</div>
                        </a>
                        <a href="#" >
                            <div class="w3-col s4 tablink w3-hover-sand">My Quantum/ERP</div>
                        </a>
                        <a href="#">
                            <div class="w3-col s4 tablink w3-hover-sand">QU Students ERP</div>
                        </a>
                        <a href="#" >
                            <div class="w3-col s4 tablink w3-hover-sand">New Student Login</div>
                        </a>
                        <a href="#" >
                            <div class="w3-col s4 tablink w3-hover-sand">QGC Result Portal</div>
                        </a>
                        <a href="#">
                            <div class="w3-col s4 tablink w3-hover-sand">Q-Quiz / Q-EMS</div>
                        </a>
                        <a href="#" >
                            <div class="w3-col s4 tablink w3-hover-sand">Current Student Login</div>
                        </a>
                        <p>&nbsp;</p>
                        <h5 class="w3-center w3-padding-48">
                            <span class="w3-tag w3-wide">UPCOMING FEATURES</span>
                        </h5>
                        <h3>For Q-mates</h3>
                        <p>Students can access their My Quantum/ERP accounts 24 x 7 through the app.<br></br> The app provides them a number of features like:</p>
                        <p>
                            <a href="#" >
                                <div class="w3-col s4 tablink w3-hover-sand">University Library Access</div>
                            </a>
                            <a href="#">
                                <div class="w3-col s4 tablink w3-hover-sand">University Gallery</div>
                            </a>
                            <a href="#" >
                                <div class="w3-col s4 tablink w3-hover-sand">QSPS Accessibility</div>
                            </a>
                        </p>
                        <br/>&nbsp;
                    </div>
                </div>
            </div>
        )
    }
}

export class OverviewApp extends Component {
    render() {
        return (
            <div>
                <div class="w3-container" id="overview">
                    <div class="w3-content w3-text-black" >
                        <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">Overview QU Exam App</span></h5>
                        <p>The Most Promising Private University of North India' award winning by the Big Brands Research, is just a touch away on your favourite Android Phone/Tab. Quantum University hereby QU. Now, access your “QU Exam Management System”, “QCare Registration”, “QU ERP”, QGC Result portal, QGC ERP “My Quantum”, and many more accessibility through a single touch by installing QU Exam app.</p>
                        <hr />
                        <div class="w3-panel w3-leftbar w3-rightbar w3-animate-fading w3-text-sand">
                            <p><i>"In addition to our full-life android application, we serve fresh quantum universitys features, accessibility, as well as a easy of access and other good stuff."</i></p>
                            <p>Q-Mate: Quantum University</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            errMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Form submitting logic, prevent default page refresh
    handleSubmit = (event) => {
        const { name, email, subject, message } = this.state
        event.preventDefault()
        alert('_______ Form Data ________\n' + 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message)
        console.log('_______ Form Data ________\n' + 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message)
    }

    /**
     * Method causes to store all the values of the input fields in react state single method handle
     */
    handleChange(event) {
        this.setState({
            // Computed property names
            // keys of the object are computed dynamically 
            [event.target.name]: event.target.value
        })
    }

    /**
     * Return a controlled form i.e. values of the input field not stored in DOM values are exists in react component itself as state
     */
    render() {
        return (
            <div>
                <div class="w3-container w3-padding-32" id="contact" >
                    <div class="w3-content" >
                        <h5 class="w3-center w3-padding-48">
                            <span class="w3-tag w3-wide w3-xxlarge">we want to here from you!</span>
                        </h5>
                        <p className="w3-text-sand">find us at some address at some place or you can write us below..</p>
                        <p><span class="w3-tag">FYI!</span> We regularly update QU Exam App for more features and enhanced performance.<br /> We regularly upgrade the app so don’t forget to get the latest version to get all the new features, upgrades, accessibility, and perks!</p>
                        <p className="w3-text-sand">Don’t forget to leave a review with your feedback/suggestion/idea/help..</p>
                        <form onSubmit={this.handleSubmit} id="app-contact-form">
                            <p><input class="w3-input w3-transparent w3-padding-16 w3-border w3-text-sand" type="text" placeholder="enter your full name" required name="name" value={this.state.name} onChange={this.handleChange} /></p>
                            <p><input class="w3-input w3-transparent w3-padding-16 w3-border w3-text-sand" type="email" placeholder="enter your email id" required name="email" value={this.state.email} onChange={this.handleChange} /></p>
                            <p><input class="w3-input w3-transparent w3-padding-16 w3-border w3-text-sand" type="text" placeholder="what it is about! Idea/help/suggestion" required name="subject" value={this.state.subject} onChange={this.handleChange} /></p>
                            <p><input class="w3-input w3-transparent w3-padding-16 w3-border w3-text-sand" type="text" placeholder="Let'us know what you think about our app so that we can make sure the experience is the best it can be." required name="message" value={this.state.message} onChange={this.handleChange} /></p>
                            <p><button class="button button1 buttondownload w3-border-bottom " type="submit"><span>SEND MESSAGE</span></button></p>
                        </form>
                    </div> {this.state.name + " " + this.state.email}
                </div>
            </div>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="w3-center w3-black w3-padding-48 w3-large">
                    <p className="w3-xxlarge">&copy; All Rights Reserved | 
                        <a href="http://quantumuniversity.edu.in/" class="w3-text-pink"><strong>Quantum University</strong></a></p>
                    <p className="w3-animate-fading">Engineered by <a href="https://www.linkedin.com/in/bhagwan-singh/" class="w3-hover-text-orange">Bhagwan Singh</a></p>
                </footer>
            </div>
        )
    }
}