export function addArticle(message) {
    return {
        type: 'ADD_ARTICLE',
        payload: {
            id: null,
            type: 'post',
            message: message
        }
    };
}