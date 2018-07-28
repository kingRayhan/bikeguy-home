import React, { Fragment, Component } from 'react'
import Service from './Service'
export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-8 service-container ml-auto mr-auto">
                            <Service service="Blog">
                                <a href="https://blog.bikeguybd.com/" target="_blank" className="btn btn-primary btn-yellow">Read Articles</a>
                            </Service>
                            <Service service="Forum">

                                <a href="https://forum.bikeguybd.com/" target="_blank" className="btn btn-primary btn-yellow">Ask Question</a>
                            </Service>
                            <Service service="Radio" logo="https://cdn1.iconfinder.com/data/icons/computer-hardware-glyphs-vol-2/52/mic__microphone__voice__conference__sound__record__audio-512.png">

                                <a href="https://radio.bikeguybd.com/" target="_blank" className="btn btn-primary btn-yellow">Listen Now</a>
                            </Service>
                            <Service service="Group" logo="https://png.icons8.com/color/1600/group-foreground-selected.png">
                                <a href="https://www.facebook.com/groups/BikeGuy/" target="_blank" className="btn btn-primary btn-yellow">Join Group</a>
                            </Service>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}