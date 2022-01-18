import React from 'react'
import "./Single.css"
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../singlePost/SinglePost'

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}
