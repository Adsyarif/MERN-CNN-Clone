import React, { useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";

const TextEditor = ({ onChange, initialText }) => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} },
    formats: [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
      "align",
      "color",
    ],
  });

  if (Quill && !quill) {
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (_, oldContents) => {
        const currentContents = quill.getContents();
        const diff = currentContents.diff(oldContents);
        onChange && onChange(quill.root.innerHTML, diff);
      });
    }
  }, [quill, onChange]);

  useEffect(() => {
    if (quill && initialText) {
      quill.root.innerHTML = initialText;
    }
  }, [quill, initialText]);

  return <div ref={quillRef} />;
};

export default TextEditor;
