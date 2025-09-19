"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { useLiveblocksExtension, FloatingToolbar } from "@liveblocks/react-tiptap";
//import { Image } from "@tiptap/extension-image";
import { TableKit } from "@tiptap/extension-table";
import { ImageResize } from "tiptap-extension-resize-image";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { FontFamily, TextStyle } from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import { useEditorStore } from "@/store/use-editor-store";
import { TextAlign } from "@tiptap/extension-text-align";

import { LineHeightExtension } from "@/extensions/line-height";
import { FontSizeExtension } from "@/extensions/font-size";
import { Ruler } from "@/app/documents/[documentId]/ruler";
import {Threads} from "@/app/documents/[documentId]/threads";
import {useStorage} from "@liveblocks/react/suspense"


interface EditorProps{
  initialContent?: string | undefined;

}

export const Editor = ({initialContent}:EditorProps) => {
  const leftMargin=useStorage((root)=>root.leftMargin)
  const rightMargin = useStorage((root)=>root.rightMargin)
  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental:true
  })
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    onCreate(props) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left:${leftMargin ?? 56}px; padding-right:${rightMargin ?? 56}px;`,
        class:
          " border focus:outline-none print:border-0 bg-white border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      liveblocks,
      StarterKit,
      LineHeightExtension.configure({
        types: ["heading", "paragraph"],
      }),
      FontSizeExtension,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
      Highlight.configure({ multicolor: true }),
      TextStyle,
      FontFamily,
      ImageResize.configure({
        inline: false,
        HTMLAttributes: {
          class: "resizable-image",
        },
        allowBase64: true,
      }), // Image,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TableKit,
    ],

    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });
  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor}/>
      </div>
    </div>
  );
};
