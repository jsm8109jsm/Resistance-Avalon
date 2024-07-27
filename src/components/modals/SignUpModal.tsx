import React, { useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { useUpdateNickname } from "@/apis/user/hooks";

function SignUpModal() {
  const [nickname, setNickname] = useState<string>("");
  const { mutate } = useUpdateNickname();
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-8 px-10 rounded-md focus-visible:outline-none"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-2xl font-bold text-center">
            닉네임을 입력해주세요.
          </h1>
          <div className="flex justify-center items-center gap-4">
            <TextField
              label="닉네임"
              variant="outlined"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button variant="outlined" onClick={() => mutate(nickname)}>
              확인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
