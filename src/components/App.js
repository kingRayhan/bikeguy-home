import React, { Fragment, Component } from 'react'
import Hero from './Hero'
import Services from './Services'
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Hero />
                <Services />

                <footer className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-muted">
                                Maintained by <a href="https://www.facebook.com/electronthemes/"> ElectronThemes</a> since 2016 - {(new Date()).getFullYear()}
                            </p>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}