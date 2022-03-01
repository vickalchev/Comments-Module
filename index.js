const postComment = () => {
    const nameInput = document.getElementById('nameInput').value;
    const commentInput = document.getElementById('commentInput').value;
    
    let postElement = document.createElement('div');
    postElement.classList.add('commentWrap');
    let comment = document.createTextNode(commentInput);
    postElement.appendChild(comment);
    return document.getElementById('postedComment').appendChild(postElement);
}

const postBtn = document.getElementById('postBtn');
postBtn.addEventListener("click", postComment);
