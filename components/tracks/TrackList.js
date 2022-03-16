import React, { Component } from 'react'
import MasterTrack from './MasterTrack';
import Track from './Track';
import AddTrackButton from '../util/AddTrackButton';

export class TrackList extends Component {

    state = {
        tracks: []
    };

    createTrack = (fileList) => {
        this.setState({tracks: [...this.state.tracks,...fileList]});
    }

    render() {
        return (
            <div className='track-list'>
                <MasterTrack />
                
                {this.state.tracks.map((file,i) => <Track key={`${file.name}${i}`} title={file.name} songFile={file}/>)}

                <AddTrackButton processFunc={this.createTrack} />

            </div>
        )
    }
}

export default TrackList