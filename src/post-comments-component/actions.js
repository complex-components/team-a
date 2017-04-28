export function postComment(obj) {
    return {
        type: 'ADD_COMMENTS',
        payload: {
            id: obj.id,
			postId: obj.postId,
			message: obj.message
        }
    };
}