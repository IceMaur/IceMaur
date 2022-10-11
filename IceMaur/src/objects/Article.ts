import * as contentful from 'contentful';
import { Document } from '@contentful/rich-text-types';
import Author from './Author';

export default interface Article {
    title: string,
    image: contentful.Asset,
    content: Document,
    author: contentful.Entry<Author>
}