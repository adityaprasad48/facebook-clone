import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import firebase from "firebase";
import React, { useRef } from "react";
import db from "./../firebase";
import useStateValue from "./AppState";

const Messanger = () => {
  const [{ user }, dispatch] = useStateValue();
  const textRef = useRef("");
  const imgUrlRef = useRef("");

  return (
    <div className="messanger">
      <div className="messanger__top">
        <Avatar src={user.photoURL} />
        <form
          action="sumbit"
          onSubmit={(e) => {
            e.preventDefault();
            db.collection("post").add({
              message: textRef.current.value,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              profilePic: user.photoURL,
              username: user.displayName,
              image: imgUrlRef.current.value,
            });
            e.currentTarget.reset();
          }}
        >
          <input
            ref={textRef}
            type="text"
            placeholder={`what's on mind ${user.displayName}`}
          />
          <input
            ref={imgUrlRef}
            type="text"
            placeholder="Image Url (Optional)"
          />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
      </div>
      <div className="messanger__bottom">
        <div className="messanger__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messanger__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo Video</h3>
        </div>
        <div className="messanger__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default Messanger;
