import EmojiPicker from "emoji-picker-react";

export const EmojiPickerData = ({ onEmojiClick }) => {
  return (
    <div className="">
      <div className="absolute bottom-20 left-0 ">
        <EmojiPicker onEmojiClick={onEmojiClick} />
      </div>
    </div>
  );
};
