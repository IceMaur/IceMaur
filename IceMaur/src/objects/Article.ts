import * as contentful from 'contentful';
import { Document } from '@contentful/rich-text-types';

export default interface Article {
    title: string,
    image: contentful.Asset,
    content: Document
}