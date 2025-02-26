import PostEditor from "@/components/editor/PostEditor";
import Input from "@/components/input/Input";
import Textarea from "@/components/input/Textarea";

export default function EditBoard() {
  return (
    <form action="" className="py-4 px-6 mb-36">
      <PostEditor />

      <div className="w-full gap-6">
        <Input type="text" name="title" />
        <Textarea name="content" />
      </div>
    </form>
  );
}
