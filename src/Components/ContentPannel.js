import React from 'react';
import '../App.css';
import { DownloadBtn, ContactUs, OverviewApp, Features, Footer } from './AppComponent';

export class ContentPannel extends React.Component {
    render() {
        return (
            <div>
                <div class="themeBackgroundColor w3-large">
                    <OverviewApp />
                    <Features />

                    <div class="w3-container" id="download">
                        <div class="w3-content">
                            <h5 class="w3-center w3-padding-48">
                                <span class="w3-tag w3-wide">DOWNLOAD THE APP</span>
                            </h5>

                            <div class="w3-row w3-center w3-card w3-padding-64">
                                <a href="javascript:void(0)">
                                    <div class="w3-col s6 tablink">Exam Management System</div>
                                </a>
                                <DownloadBtn />
                            </div>
                        </div>
                    </div>
                    <ContactUs />
                    <Footer />
                </div>
            </div>
        );
    }
}