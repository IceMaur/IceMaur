import * as contentful from 'contentful';

export default interface Article {
    title: string,
    content: contentful.RichTextContent
}