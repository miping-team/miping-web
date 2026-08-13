/* eslint-disable @next/next/no-img-element -- Vinext's image shim conflicts with the preview renderer; this local asset has explicit dimensions. */
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <Link className="brand" href="/"><img src="/app-icon.png" alt="" width={36} height={36} /><span>미핑</span></Link>
        <Link href="/">홈으로 돌아가기 →</Link>
      </header>
      <main className="legal-main">
        <p className="section-index">LEGAL · PRIVACY</p>
        <h1>개인정보처리방침</h1>
        <p className="legal-meta">시행일: 2026년 8월 6일 · 최종 수정일: 2026년 8월 6일</p>
        <article className="legal-content">
          <p>미핑(MiPing, 이하 &quot;서비스&quot;)은 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 방침은 서비스가 어떤 개인정보를 어떤 목적으로 수집·이용하고, 어떻게 보관·파기하는지를 설명합니다.</p>

          <h2>1. 수집하는 개인정보 항목</h2>
          <h3>가. 카카오 로그인 시</h3>
          <ul>
            <li><b>필수</b>: 카카오 회원번호(이용자 식별용 고유값), 프로필 닉네임</li>
            <li><b>선택 동의</b>: 프로필 사진, 이메일 주소 — 동의하지 않아도 서비스 이용에 제한이 없습니다.</li>
          </ul>
          <h3>나. 서비스 이용 과정에서</h3>
          <ul>
            <li>출발지 <b>위치 정보</b>(좌표 및 표시용 주소) — 이용자가 직접 장소를 선택할 때만 저장됩니다.</li>
            <li>이동 수단(대중교통/자가용), 참여한 모임 정보, 투표 기록, 계산된 이동시간</li>
          </ul>
          <h3>다. 자동으로 생성·수집되는 정보</h3>
          <ul>
            <li>광고 식별자(광고 ID) — Google AdMob 광고 게재 과정에서 수집·이용됩니다.</li>
            <li>서비스 이용 과정에서 기기 정보·이용 기록 등이 생성될 수 있습니다.</li>
          </ul>
          <p>수집 방법: 카카오 로그인, 앱 내 이용자 입력, 광고 SDK 등을 통한 자동 수집</p>

          <h2>2. 개인정보의 수집·이용 목적</h2>
          <ul>
            <li>회원 식별 및 로그인 상태 유지</li>
            <li>위치 기반 중간지점 계산 및 이동시간 안내</li>
            <li>모임 생성·참여·초대·투표 기능 제공</li>
            <li>광고 게재</li>
            <li>서비스 개선 및 이용자 문의 응대</li>
          </ul>

          <h2>3. 개인정보의 보유 및 이용 기간</h2>
          <p>수집·이용 목적이 달성되거나 이용자가 회원 탈퇴(계정 연결 해제)를 하면 해당 개인정보를 지체 없이 파기합니다. 모임 관련 데이터는 모임이 종료되거나 삭제되면 파기됩니다. 다만 관련 법령에 따라 보존이 필요한 경우 그 기간 동안 보관합니다.</p>

          <h2>4. 개인정보의 제3자 제공</h2>
          <p>서비스는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 법령에 근거가 있거나 수사기관의 적법한 요청이 있는 경우에 한하여 제공할 수 있습니다.</p>

          <h2>5. 개인정보 처리의 위탁</h2>
          <p>서비스는 원활한 기능 제공을 위해 아래와 같이 개인정보 처리를 위탁하고 있습니다.</p>
          <table>
            <thead><tr><th>수탁자</th><th>위탁 업무</th></tr></thead>
            <tbody>
              <tr><td>Google LLC (Firebase)</td><td>회원 인증, 데이터 저장, 서버 기능</td></tr>
              <tr><td>Google LLC (AdMob)</td><td>광고 게재</td></tr>
              <tr><td>Kakao</td><td>카카오 로그인 인증</td></tr>
              <tr><td>Kakao · 카카오모빌리티</td><td>장소 검색 및 경로(이동시간) 조회</td></tr>
            </tbody>
          </table>

          <h2>6. 개인정보의 국외 이전</h2>
          <p>서비스는 Firebase 및 광고 기능을 이용하는 과정에서 개인정보가 국외에 이전·보관될 수 있습니다.</p>
          <table>
            <tbody>
              <tr><th>이전받는 자</th><td>Google LLC</td></tr>
              <tr><th>이전 국가</th><td>미국 등 Google 데이터센터 소재국</td></tr>
              <tr><th>이전 항목</th><td>제1항의 수집 항목</td></tr>
              <tr><th>이전 일시·방법</th><td>서비스 이용 시 네트워크를 통해 전송</td></tr>
              <tr><th>이용 목적·보유 기간</th><td>제2·3항과 동일</td></tr>
            </tbody>
          </table>

          <h2>7. 이용자의 권리와 행사 방법</h2>
          <p>이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요구할 수 있으며, 앱 내 설정에서 로그아웃 및 계정 연결 해제(탈퇴)를 할 수 있습니다. 요청은 아래 문의처로 연락하시면 지체 없이 조치합니다.</p>

          <h2>8. 광고 및 광고 식별자</h2>
          <p>서비스는 Google AdMob을 통해 배너 광고를 게재하며, 이 과정에서 광고 식별자가 이용됩니다. 이용자는 기기 설정에서 광고 식별자를 재설정하거나 맞춤형 광고를 제한할 수 있습니다.</p>
          <ul><li>Android: 설정 &gt; Google &gt; 광고</li><li>iOS: 설정 &gt; 개인정보 보호 및 보안 &gt; 추적</li></ul>

          <h2>9. 만 14세 미만 아동의 개인정보</h2>
          <p>서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다.</p>

          <h2>10. 개인정보의 안전성 확보 조치</h2>
          <p>서비스는 개인정보에 대한 접근 권한을 최소한으로 관리하고, 전송 구간을 암호화하는 등 개인정보를 안전하게 관리하기 위해 노력합니다.</p>

          <h2>11. 개인정보 보호책임자 및 문의처</h2>
          <ul><li>개인정보 보호책임자: Tr_cycle</li><li>문의 이메일: <a href="mailto:tr_cycle-miping@naver.com">tr_cycle-miping@naver.com</a></li></ul>

          <h2>12. 고지의 의무</h2>
          <p>본 개인정보처리방침의 내용이 변경되는 경우, 변경 사항을 본 페이지 또는 앱 공지를 통해 시행 전에 안내합니다.</p>
        </article>
        <div className="legal-bottom"><Link href="/">← 미핑 소개로</Link><Link href="/terms">서비스 이용약관 보기 →</Link></div>
      </main>
    </div>
  );
}
