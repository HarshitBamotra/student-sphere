import React from "react";

function Popup(props){

    async function deletePost(){
        const postObject={
            id:props.postId,
            username:props.username
        }
        console.log(postObject)
        // axios.post("http://localhost:5000/deletePost",postObject)
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
        close();
        // console.log(postObject);
    }

    function close(){
        console.log(props.postId);
        document.getElementById("delete-popup").style.visibility="hidden";
        props.openState = false;
    }
    function handleClick(){
        console.log(props.postId);
    }
    return (
        <div className="delete-popup-container" id="delete-popup" onClick={handleClick}>
            <div className="delete-popup-box">
                <div className="delete-popup-content">Are you sure you want to <span>delete</span> this post?</div>
                <div className="delete-popup-buttons">
                    <div className="delete-yes" onClick={deletePost}>Yes</div>
                    <div className="delete-no" onClick={close}>No</div>
                </div>
            </div>
        </div>
    )
}


export default Popup;