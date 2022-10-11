import * as contentful from 'contentful';

export default interface Author {
    name: string,
    picture: contentful.Asset,
    link: string
}