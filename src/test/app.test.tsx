import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Home from "../app/page";
import "@testing-library/jest-dom";
import ModalLayout from "@/components/modals/ModalLayout";
import { RecoilRoot, useRecoilState } from "recoil";
import PortalProvider from "@/components/provider/PortalProvider";
import ModalState from "@/atoms/Modal/atom";

const TestComponent = () => {
  const [, setModal] = useRecoilState(ModalState);

  return (
    <>
      <button onClick={() => setModal((prev) => [...prev, "SETTING"])}>
        test
      </button>
      <div id="modal"></div>
    </>
  );
};

describe("Home", () => {
  it("홈 컴포넌트를 렌더링한다.", () => {
    render(
      <RecoilRoot>
        <PortalProvider>
          <Home />
        </PortalProvider>
      </RecoilRoot>,
    );

    const testButton = screen.getByText("test");
    expect(testButton).toBeInTheDocument();
  });
  it("모달을 토글한다.", async () => {
    render(
      <RecoilRoot>
        <PortalProvider>
          <TestComponent />
        </PortalProvider>
      </RecoilRoot>,
    );

    // 특정 버튼이나 요소를 찾아 클릭하는 대신, 실제 유저의 행동을 모방하기 위해 userEvent 사용
    const testButton = screen.getByText("test");
    userEvent.click(testButton);

    // 모달이 열렸는지 확인
    await waitFor(() => {
      const settingText = screen.getByText("SETTING");
      expect(settingText).toBeInTheDocument();
    });

    // 모달 배경 클릭하여 닫기
    const modalBackground = screen.getByTestId("modal-background");
    userEvent.click(modalBackground);

    // 모달이 닫혔는지 확인 (waitFor을 사용하여 업데이트를 기다림)
    await waitFor(() => {
      const settingText = screen.queryByText("SETTING");
      expect(settingText).not.toBeInTheDocument();
    });
  });
});
