/* eslint-disable @next/next/no-img-element -- Vinext's image shim conflicts with the preview renderer; these local assets have explicit dimensions. */
import Link from "next/link";
import type { CSSProperties } from "react";

// Lucide icon paths (DESIGN.md §6: Lucide only), inlined so the site needs no icon package.
const icons = {
  plus: <><path d="M5 12h14" /><path d="M12 5v14" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  down: <path d="m6 9 6 6 6-6" />,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
  left: <path d="m15 18-6-6 6-6" />,
};

function Icon({ name, size = 20 }: { name: keyof typeof icons; size?: number }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

const features = [
  {
    label: "실제 이동시간",
    title: "지도의 가운데 말고,\n실제 이동시간으로",
    body: "각자의 출발지와 교통수단으로 예상 이동시간을 계산해요. 가장 오래 걸리는 사람의 시간이 짧은 곳부터 보여줘요.",
    visual: <TimeVisual />,
  },
  {
    label: "6명까지 한 방에",
    title: "카톡 하나로\n모두 한 방에",
    body: "방을 만들고 카카오톡으로 초대하거나 6자리 코드를 보내요. 출발 위치는 각자 본인만 고칠 수 있어요.",
    visual: <InviteVisual />,
  },
  {
    label: "후보 최대 6곳",
    title: "후보를 보고,\n함께 추천해요",
    body: "후보를 넘겨 보며 한 사람당 3곳까지 추천해요. 고른 곳까지 각자의 가는 길과 실시간 도착정보도 바로 봐요.",
    visual: <RecommendVisual />,
  },
];

const steps: { icon: keyof typeof icons; title: string; body: string }[] = [
  { icon: "plus", title: "방 만들기", body: "카카오로 로그인하고 약속방을 만들어요." },
  { icon: "send", title: "친구 초대", body: "카카오톡이나 6자리 코드로 불러요." },
  { icon: "pin", title: "출발지 입력", body: "각자 출발 위치와 교통수단을 정하고 참석을 켜요." },
  { icon: "heart", title: "찾고 추천하기", body: "공평한 후보를 함께 보고 마음에 드는 곳을 추천해요." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="미핑 홈으로">
          <img src="/app-icon.png" alt="" width={36} height={36} />
          <span>미핑</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#features">기능</a>
          <a href="#how">이용 방법</a>
          <a href="#fairness">공평함의 기준</a>
        </nav>
        <a className="header-cta" href="#coming-soon">출시 소식</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">모두에게 공평한 중간지점</p>
          <h1>우리, 어디서 만날까?<br />모두 30분대인 곳에서.</h1>
          <p className="hero-description">
            미핑은 지도 위의 가운데가 아니라 각자의 실제 이동시간을 비교해,
            누구 한 사람만 멀리 오지 않는 약속 장소를 찾아드려요.
          </p>
          <div className="hero-actions">
            <StoreButtons />
            <a className="text-link" href="#how">먼저 둘러보기 <Icon name="down" size={16} /></a>
          </div>
          <ul className="hero-points" aria-label="미핑 주요 특징">
            <li>6명까지 한 방</li>
            <li>대중교통 · 자가용</li>
            <li>로그인 없이도 2곳 비교</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="미핑 앱 중간지점 결과 화면 예시">
          <div className="phone">
            <div className="phone-screen">
              <div className="app-bar">
                <Icon name="left" size={18} />
                <div><strong>토요일 저녁 약속</strong><small>4명 중 3명 참석</small></div>
                <span />
              </div>
              <div className="mini-map" aria-hidden="true">
                <span className="road road-a" />
                <span className="road road-b" />
                <span className="road road-c" />
                <svg className="routes" viewBox="0 0 300 300" preserveAspectRatio="none">
                  <path d="M52 58 Q110 90 150 140" />
                  <path d="M252 70 Q210 110 150 140" />
                  <path d="M66 236 Q100 180 150 140" />
                </svg>
                <span className="start-dot start-a">수</span>
                <span className="start-dot start-b">민</span>
                <span className="start-dot start-c">지</span>
                <span className="mid-pin"><Icon name="pin" size={40} /></span>
              </div>
              <div className="result-sheet">
                <span className="sheet-handle" />
                <p className="result-label">가장 공평해요</p>
                <div className="result-title">
                  <div><strong>성수역</strong><span>모두 29~32분</span></div>
                  <span className="heart-btn"><Icon name="heart" size={18} /></span>
                </div>
                <FairnessBar times={[29, 31, 32]} min={20} max={40} />
                <p className="result-note">가장 오래 32분 · 차이 3분</p>
                <div className="member-row"><Avatars names={["수", "민", "지"]} /><span>3명 모두 30분대</span></div>
              </div>
            </div>
          </div>
          <div className="float-panel">
            <Icon name="clock" size={18} />
            <div><small>이동시간 차이</small><b>최대 3분</b></div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="미핑 서비스 요약">
        <div><strong>6명</strong><span>한 방에 함께</span></div>
        <div><strong>6곳</strong><span>공평한 후보 추천</span></div>
        <div><strong>3곳</strong><span>한 사람이 추천할 수 있는 후보</span></div>
      </section>

      <section className="section-pad" id="features">
        <div className="section-heading">
          <p className="section-index">핵심 기능</p>
          <h2>장소를 정하는 순간부터<br />좋은 약속이 되도록</h2>
          <p>누군가의 양보로 정해지는 장소가 아니라, 모두의 이동을 함께 생각하는 만남을 만들어요.</p>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <article className="feature-card" key={feature.label}>
              <div className="feature-copy">
                <p className="chip">{feature.label}</p>
                <h3>{feature.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p className="feature-body">{feature.body}</p>
              </div>
              <div className="feature-visual" aria-hidden="true">{feature.visual}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="how" id="how">
        <div className="how-inner">
          <div className="section-heading left">
            <p className="section-index">이용 방법</p>
            <h2>약속 장소 고민,<br />네 단계면 끝</h2>
            <p>복잡한 계산은 미핑이 할게요. 친구들은 각자 출발지만 알려주세요.</p>
          </div>
          <ol className="step-list">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-icon"><Icon name={step.icon} size={22} /></span>
                <span className="step-count">{index + 1}단계</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fairness section-pad" id="fairness">
        <div className="fairness-copy">
          <p className="section-index">공평함의 기준</p>
          <h2>평균보다 중요한 건,<br />가장 오래 걸리는 사람</h2>
          <p>미핑은 후보마다 가장 오래 걸리는 사람의 이동시간을 먼저 봐요. 한 사람의 긴 이동이 평균 속에 숨지 않도록요.</p>
          <ul className="rules">
            <li><b>가장 오래 걸리는 시간</b>이 짧은 후보부터</li>
            <li><b>환승 한 번은 5분</b>으로 쳐서 한 번에 오는 길을 우대</li>
            <li><b>차이가 20분을 넘는 후보</b>는 뒤로 보내고 알려줘요</li>
          </ul>
        </div>
        <div className="comparison" aria-label="중간지점 후보 이동시간 비교 예시">
          <div className="compare-head"><span>후보 비교</span><small>예상 이동시간</small></div>
          <div className="candidate">
            <p className="result-label">가장 공평해요</p>
            <div className="candidate-title"><strong>성수역</strong><span>모두 28~36분</span></div>
            <FairnessBar times={[28, 33, 36]} min={10} max={50} />
            <p className="result-note">가장 오래 36분 · 차이 8분</p>
          </div>
          <div className="candidate is-muted">
            <p className="candidate-label">2번째 후보</p>
            <div className="candidate-title"><strong>시청역</strong><span>15~48분</span></div>
            <FairnessBar times={[15, 22, 48]} min={10} max={50} />
            <p className="result-note">한 명 오래 걸려요 · 차이 33분</p>
          </div>
        </div>
      </section>

      <section className="privacy section-pad">
        <div className="privacy-card">
          <span className="privacy-icon"><Icon name="shield" size={28} /></span>
          <div className="privacy-copy">
            <p className="section-index">안심하고 쓰도록</p>
            <h2>필요한 정보만,<br />투명하게 다뤄요</h2>
            <p>출발 위치는 직접 선택할 때만 저장되고, 같은 방의 참여자에게만 보여요. 무엇을 왜 모으고 언제 지우는지 숨김없이 안내해요.</p>
          </div>
          <div className="legal-links">
            <Link href="/privacy">개인정보처리방침 <Icon name="arrow" size={18} /></Link>
            <Link href="/terms">서비스 이용약관 <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="final-cta" id="coming-soon">
        <img className="final-app-icon" src="/app-icon-original.png" alt="미핑 앱 아이콘" width={88} height={88} />
        <p>우리의 다음 약속</p>
        <h2>이번에는,<br />미핑에서 만나요</h2>
        <span>Android와 iPhone 앱을 준비하고 있어요.</span>
        <StoreButtons />
      </section>

      <footer>
        <div className="footer-brand"><img src="/app-icon.png" alt="" width={30} height={30} /><strong>미핑</strong><span>모두에게 공평한 중간지점</span></div>
        <div className="footer-links"><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">서비스 이용약관</Link><a href="mailto:tr_cycle-miping@naver.com">문의</a></div>
        <p>© 2026 MiPing. All rights reserved.</p>
        <p className="store-credits">Apple 및 Apple 로고는 Apple Inc.의 상표입니다. Google Play 및 Google Play 로고는 Google LLC의 상표입니다.</p>
      </footer>
    </main>
  );
}

/** Dots on a time axis, like the app's FairnessBar: close dots = fair. */
function FairnessBar({ times, min, max }: { times: number[]; min: number; max: number }) {
  const pos = (t: number) => `${((t - min) / (max - min)) * 100}%`;
  return (
    <div className="fair-bar" aria-hidden="true">
      <span className="fair-span" style={{ left: pos(Math.min(...times)), right: `calc(100% - ${pos(Math.max(...times))})` }} />
      {times.map((t, i) => <i key={i} style={{ left: pos(t), "--i": i } as CSSProperties} />)}
    </div>
  );
}

function Avatars({ names }: { names: string[] }) {
  return <span className="avatars">{names.map((n) => <i key={n}>{n}</i>)}</span>;
}

function Row({ name, time, width }: { name: string; time: string; width: string }) {
  return <div className="time-row"><i>{name}</i><span><b style={{ width }} /></span><strong>{time}</strong></div>;
}

function TimeVisual() {
  return (
    <div className="panel">
      <p className="result-label">가장 공평해요</p>
      <div className="candidate-title"><strong>성수역</strong><span>모두 29~32분</span></div>
      <div className="time-rows">
        <Row name="수" time="32분" width="80%" />
        <Row name="민" time="29분" width="72%" />
        <Row name="지" time="31분" width="77%" />
      </div>
      <p className="result-note">가장 오래 32분 · 차이 3분</p>
    </div>
  );
}

function InviteVisual() {
  return (
    <div className="panel">
      <p className="caption">토요일 저녁 약속</p>
      <strong className="panel-title">친구를 초대해 주세요</strong>
      <div className="invite-code"><span>482 916</span><b>복사</b></div>
      <div className="member-row"><Avatars names={["수", "민", "지", "현"]} /><span className="attend">{[1, 1, 1, 0].map((on, i) => <i key={i} className={on ? "on" : ""} />)}</span><small>3/4 참석</small></div>
    </div>
  );
}

function RecommendVisual() {
  const list = [
    ["가장 공평해요", "성수역", "모두 29~32분", 3, true],
    ["2번째 후보", "건대입구역", "모두 30~36분", 1, false],
    ["번화가 대안", "왕십리역", "모두 31~38분", 0, false],
  ] as const;
  return (
    <div className="recommend-list">
      {list.map(([label, name, range, votes, mine]) => (
        <div className={`recommend-card${mine ? " is-mine" : ""}`} key={name}>
          <div><p className="candidate-label">{label}</p><strong>{name}</strong><span>{range}</span></div>
          <span className="votes"><Icon name="heart" size={16} />{votes}</span>
        </div>
      ))}
    </div>
  );
}

function StoreButtons() {
  return (
    <div className="store-buttons" aria-label="앱 다운로드 준비 중">
      <span className="store-badge-wrap">
        <button className="store-badge-official" type="button" disabled aria-label="App Store 출시 준비 중">
          {/* width/height are each asset's intrinsic size — the rendered size comes from CSS. */}
          <img src="/app-store-badge-ko.svg" alt="App Store에서 다운로드" width={130} height={40} />
        </button>
        <small>출시 준비 중</small>
      </span>
      <span className="store-badge-wrap">
        <button className="store-badge-official google-play-badge" type="button" disabled aria-label="Google Play 출시 준비 중">
          <img src="/google-play-badge-ko.png" alt="Google Play에서 다운로드" width={646} height={250} />
        </button>
        <small>출시 준비 중</small>
      </span>
    </div>
  );
}
