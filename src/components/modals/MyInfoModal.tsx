import myInfoState from "@/atoms/myInfo/atom";
import Image from "next/image";
import { useRecoilState } from "recoil";
// import { useUpdateNickname } from "@/apis/user/hooks";

function MyInfoModal() {
  const [myInfo] = useRecoilState(myInfoState);
  // const [nickname, setNickname] = useState<string>("");
  // const { mutate } = useUpdateNickname();
  console.log(myInfo);
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-beige rounded-2xl focus-visible:outline-none w-[37.5rem] h-[17.5rem]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <div className="w-full h-10 flex justify-center items-center bg-light_beige rounded-t-2xl">
          <div className="w-1/2 h-full flex justify-center items-center border-r border-solid border-r-beige">
            정보
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            전적
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="bg-white p-4 w-full h-full rounded-2xl flex gap-4 items-center">
            <Image
              src={myInfo.profileImg}
              alt={`${myInfo.nickname}의 프로필 사진`}
              width={176}
              height={176}
              className="rounded-full"
            />
            <div className="flex flex-col justify-between items-start h-[11rem] w-full">
              <h1 className="text-2xl font-bold text-center">
                {myInfo.nickname}
              </h1>
              <div className="flex gap-4 justify-center flex-col w-full">
                <div className="flex justify-start items-center">
                  30전 20승 10패 (66.6%)
                </div>
                <div className="flex justify-end items-center">전적 보기</div>
              </div>
              {/* <TextField
          label="닉네임"
          variant="outlined"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button variant="outlined" onClick={() => mutate(nickname)}>
          확인
        </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfoModal;
