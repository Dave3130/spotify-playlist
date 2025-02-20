import React from 'react';
import Track from '../track/track';
import './tracklist.css';

class TrackList extends React.Component {
    
    render() {
        return(
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track   key={track.id}
                                        track={track}
                                        onAdd={this.props.onAdd}
                                        onRemove={this.props.onRemove}
                                        isRemoval={this.props.isRemoval}
                                        tracks={this.props.tracks}/>
                    })
                }
            </div>
        );
    }
}

export default TrackList;