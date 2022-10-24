import SpotifyTrack from "./SpotifyTrack";
import * as contentful from 'contentful';

export default interface Quote {
    spotifyTrack?: contentful.Entry<SpotifyTrack>
}