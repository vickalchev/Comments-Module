const postComment = () => {
    const nameInput = document.getElementById('nameInput').value;
    const commentInput = document.getElementById('commentInput').value;
    
    const createListItem = () => {

    let postListItem = document.createElement('li');
    postListItem.textContent = commentInput;
    return postListItem;
    }

    const postList = document.getElementById('postList');
    return postList.insertBefore(createListItem(commentInput), postList.children[0]); 
}

const postBtn = document.getElementById('postBtn');
postBtn.addEventListener("click", emptyInputTest = () => {
    let commentValue = document.getElementById('commentInput').value;
    if (commentValue.length > 0)
        return postComment();
});

const clearInput = () => {
    const inputs = document.querySelectorAll('#nameInput, #commentInput');

    return inputs.forEach(input => {input.value=''});
}

postBtn.addEventListener("click", clearInput);

