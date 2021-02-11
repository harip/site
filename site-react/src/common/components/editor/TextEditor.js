import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = (props) => {
  const {post} = props;
  const [postContent, setPostContent] = useState(post.content);

  const handleEditorChange = (content, editor) => {
    setPostContent(content);
    post.newContent = content;
  }

  return (
    <Editor
      apiKey="wefhnu0ma6zh07117uwxwjj5ila4m1d1y16pp4e59wbc6log"
      initialValue={postContent}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code codesample image'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | codesample | image'
      }}
      onEditorChange={handleEditorChange}
    />
  );

}

export default TextEditor; 