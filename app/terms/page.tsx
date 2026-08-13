/* eslint-disable @next/next/no-img-element -- Vinext's image shim conflicts with the preview renderer; this local asset has explicit dimensions. */
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <Link className="brand" href="/"><img src="/app-icon.png" alt="" width={36} height={36} /><span>미핑</span></Link>
        <Link href="/">홈으로 돌아가기 →</Link>
      </header>
      <main className="legal-main">
        <p className="section-index">LEGAL · TERMS</p>
        <h1>서비스 이용약관</h1>
        <p className="legal-meta">시행일: 2026년 8월 6일</p>
        <article className="legal-content">
          <h2>제1조 (목적)</h2>
          <p>본 약관은 이용자가 미핑(MiPing, 이하 &quot;서비스&quot;)을 이용함에 있어 서비스와 이용자 간의 권리·의무 및 책임 사항을 규정하는 것을 목적으로 합니다.</p>

          <h2>제2조 (정의)</h2>
          <ul>
            <li>&quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
            <li>&quot;모임&quot;이란 이용자가 생성하고 참여자를 초대하여 중간지점을 정하는 단위를 말합니다.</li>
            <li>&quot;중간지점&quot;이란 참여자들의 출발지와 이동시간을 바탕으로 서비스가 추천하는 만남 장소 후보를 말합니다.</li>
          </ul>

          <h2>제3조 (약관의 효력 및 변경)</h2>
          <p>본 약관은 서비스 화면 또는 본 페이지에 게시함으로써 효력이 발생합니다. 서비스는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 시행일과 변경 내용을 사전에 안내합니다.</p>

          <h2>제4조 (서비스의 내용)</h2>
          <p>서비스는 다음 기능을 제공합니다.</p>
          <ul>
            <li>카카오 로그인을 통한 회원 식별</li>
            <li>모임 생성·초대·참여 및 참여자 위치 입력</li>
            <li>위치 기반 중간지점 후보 계산 및 이동시간 안내</li>
            <li>후보 장소에 대한 투표 및 주변 장소 안내</li>
          </ul>

          <h2>제5조 (이용자의 의무)</h2>
          <ul>
            <li>이용자는 타인의 정보를 도용하거나 허위 정보를 입력해서는 안 됩니다.</li>
            <li>이용자는 서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
            <li>이용자는 관련 법령과 본 약관을 준수해야 합니다.</li>
          </ul>

          <h2>제6조 (위치정보 및 게시 내용)</h2>
          <p>이용자가 입력한 출발지 위치와 모임 정보는 같은 모임의 참여자에게 공유될 수 있습니다. 이용자는 자신이 입력·공유하는 정보에 대해 책임을 집니다. 개인정보의 처리에 관한 자세한 내용은 <Link href="/privacy">개인정보처리방침</Link>을 따릅니다.</p>

          <h2>제7조 (서비스 이용의 제한)</h2>
          <p>서비스는 이용자가 본 약관 또는 관련 법령을 위반하는 경우 사전 통지 후 이용을 제한할 수 있으며, 긴급한 사유가 있는 경우 통지를 사후에 할 수 있습니다.</p>

          <h2>제8조 (면책 및 결과의 한계)</h2>
          <ul>
            <li>중간지점 및 이동시간은 외부 지도·경로 서비스의 데이터를 바탕으로 <b>참고용으로</b> 제공되며, 실제 교통 상황·도보 구간 등에 따라 실제와 다를 수 있습니다.</li>
            <li>서비스는 천재지변, 외부 서비스(지도·경로·인증·광고 등)의 장애 등 서비스가 통제할 수 없는 사유로 인한 손해에 대해 책임을 지지 않습니다.</li>
            <li>이용자 간 또는 이용자와 제3자 간에 발생한 분쟁에 대해 서비스는 개입할 의무가 없습니다.</li>
          </ul>

          <h2>제9조 (광고)</h2>
          <p>서비스는 서비스 화면에 광고를 게재할 수 있으며, 이용자는 서비스 이용 시 노출되는 광고 게재에 동의하는 것으로 봅니다.</p>

          <h2>제10조 (준거법 및 관할)</h2>
          <p>본 약관은 대한민국 법령에 따라 해석되며, 서비스 이용과 관련하여 분쟁이 발생할 경우 관련 법령이 정한 절차에 따릅니다.</p>

          <h2>제11조 (문의)</h2>
          <p>서비스에 대한 문의는 <a href="mailto:tr_cycle-miping@naver.com">tr_cycle-miping@naver.com</a>로 연락하시기 바랍니다.</p>
        </article>
        <div className="legal-bottom"><Link href="/">← 미핑 소개로</Link><Link href="/privacy">개인정보처리방침 보기 →</Link></div>
      </main>
    </div>
  );
}
