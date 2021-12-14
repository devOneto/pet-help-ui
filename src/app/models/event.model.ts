import { Post } from "./post.model";

export interface Event {
    id: number,
    participatorName: string,
    post: Post
}