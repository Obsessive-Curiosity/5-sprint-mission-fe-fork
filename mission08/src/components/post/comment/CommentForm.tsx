"use client";

import Textarea from "@/components/input/Textarea";
import Button from "@/components/shared/Button";
import { useState } from "react";

export default function CommentForm() {
  const [error, setError] = useState({
    comment: "",
  });

  return (
    <form className="my-8">
      <Textarea name="comment" />
      <div className="flex justify-end mt-4">
        <Button isActive={false}>등록</Button>
      </div>
    </form>
  );
}
