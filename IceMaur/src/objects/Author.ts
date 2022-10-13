import * as contentful from 'contentful';
import { Document } from '@contentful/rich-text-types';
export default interface Author {
    name: string,
    title: string,
    picture: contentful.Asset,
    link: string,
    about: Document,
    spotifyPlaylistId: string,
    stackOverflowId: string
}