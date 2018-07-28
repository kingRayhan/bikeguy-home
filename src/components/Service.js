import React, { Fragment, Component } from 'react'
import Hero from './Hero'
export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <div className="container service mb-4">
                    <div className="row">
                        <div className="col-lg-6 pl-0 service-left">
                            <div className="service-poster">
                                <div className="service-image">
                                    <img src={this.props.logo || 'https://png.icons8.com/dusk/100/ffffff/google-blog-search.png'} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 service-right">
                            <h1 className="service-title">
                                <span className="bg">BikeGuy</span> {this.props.service || null}
                            </h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}