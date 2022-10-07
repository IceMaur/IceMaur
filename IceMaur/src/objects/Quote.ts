import Author from "./Author";
import * as contentful from 'contentful';

export default interface Quote {
    quote: string,
    author: contentful.Entry<Author>
}