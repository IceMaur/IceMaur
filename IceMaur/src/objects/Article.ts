import * as contentful from 'contentful';

export default interface Article {
    title: string,
    image: contentful.Asset,
    content: contentful.RichTextContent
}