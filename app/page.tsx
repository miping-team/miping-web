/* eslint-disable @next/next/no-img-element -- Vinext's image shim conflicts with the preview renderer; these local assets have explicit dimensions. */
import Link from "next/link";

const features = [
  {
    number: "01",
    eyebrow: "시간으로 찾는 중간",
    title: "직선거리보다\n실제 이동시간으로",
    body: "각자의 출발지와 이동수단을 함께 비교해, 누구 한 사람에게만 멀지 않은 후보를 찾아요.",
    visual: "time",
  },
  {
    number: "02",
    eyebrow: "최대 8명까지",
    title: "링크 하나로\n모두 한 방에",
    body: "방을 만들고 초대 링크나 코드만 공유하세요. 출발지를 입력하면 준비는 끝이에요.",
    visual: "people",
  },
  {
    number: "03",
    eyebrow: "후보부터 길찾기까지",
    title: "고르고, 투표하고,\n바로 출발해요",
    body: "공평한 후보를 함께 보고 최종 장소를 정한 뒤, 각자에게 맞는 경로까지 이어서 확인해요.",
    visual: "vote",
  },
];

const steps = [
  ["방 만들기", "새 모임을 만들고 이름을 정해요."],
  ["친구 초대", "링크나 코드로 최대 8명까지 모여요."],
  ["출발지 입력", "각자 위치와 이동수단을 선택해요."],
  ["중간지점 결정", "후보를 비교하고 함께 투표해요."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="미핑 홈으로">
          <img src="/app-icon.png" alt="" width={38} height={38} />
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
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> 모두에게 공평한 약속 장소</p>
          <h1>우리, 어디서 만날까?<br /><em>딱 좋은 중간에서.</em></h1>
          <p className="hero-description">
            미핑은 단순한 거리의 중간이 아니라, 각자의 실제 이동시간을 비교해
            모두가 납득할 수 있는 만남 장소를 찾아드려요.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#how">미핑 알아보기 <span>↘</span></a>
            <a className="text-link" href="mailto:tr_cycle-miping@naver.com">문의하기 <span>→</span></a>
          </div>
          <ul className="hero-points" aria-label="미핑 주요 특징">
            <li><i>✓</i> 최대 8명</li>
            <li><i>✓</i> 자가용 · 대중교통</li>
            <li><i>✓</i> 실시간 모임 공유</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="미핑 앱 중간지점 추천 화면 예시">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="float-chip chip-left"><span className="chip-avatar coral">수</span><b>수현</b><small>32분</small></div>
          <div className="float-chip chip-right"><span className="chip-avatar yellow">민</span><b>민준</b><small>29분</small></div>
          <div className="phone">
            <div className="phone-top"><span>9:41</span><i /></div>
            <div className="phone-screen">
              <div className="app-bar">
                <span aria-hidden="true">←</span>
                <div><strong>토요일 저녁 약속</strong><small>4명이 함께 찾는 중</small></div>
                <span aria-hidden="true">•••</span>
              </div>
              <div className="mini-map" aria-hidden="true">
                <div className="map-road road-a" />
                <div className="map-road road-b" />
                <div className="map-road road-c" />
                <span className="start-dot start-a">수</span>
                <span className="start-dot start-b">민</span>
                <span className="start-dot start-c">지</span>
                <span className="mid-pin"><i /></span>
                <span className="route route-a" />
                <span className="route route-b" />
                <span className="route route-c" />
              </div>
              <div className="result-sheet">
                <span className="sheet-handle" />
                <div className="result-label"><i /> 가장 공평한 후보</div>
                <div className="result-title"><div><strong>성수역</strong><span>2호선 · 수인분당선</span></div><b>1순위</b></div>
                <div className="time-bars">
                  <div><span>수현</span><i style={{ "--bar": "82%" } as React.CSSProperties} /><b>32분</b></div>
                  <div><span>민준</span><i style={{ "--bar": "74%" } as React.CSSProperties} /><b>29분</b></div>
                  <div><span>지우</span><i style={{ "--bar": "78%" } as React.CSSProperties} /><b>31분</b></div>
                </div>
                <button className="app-button">이 후보로 투표하기</button>
              </div>
            </div>
          </div>
          <div className="fair-chip"><span>↔</span><div><small>이동시간 차이</small><b>단 3분</b></div></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="미핑 서비스 요약">
        <p>모임의 중간을 찾는<br /><strong>가장 다정한 방법</strong></p>
        <div><strong>8</strong><span>명까지<br />함께</span></div>
        <div><strong>3</strong><span>개의 공평한<br />후보 추천</span></div>
        <div><strong>2</strong><span>가지 이동수단<br />비교</span></div>
      </section>

      <section className="intro section-pad" id="features">
        <div className="section-heading">
          <p className="section-index">01 · 핵심 기능</p>
          <h2>만남을 정하는 순간부터<br /><em>이미 좋은 약속이 되도록.</em></h2>
          <p>누군가의 양보로 정해지는 장소가 아니라,<br />모두의 이동을 함께 생각하는 만남을 만들어요.</p>
        </div>

        <div className="feature-list">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-copy">
                <span className="feature-number">{feature.number}</span>
                <p>{feature.eyebrow}</p>
                <h3>{feature.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                <div className="accent-line" />
                <p className="feature-body">{feature.body}</p>
              </div>
              <FeatureVisual type={feature.visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="how section-pad" id="how">
        <div className="how-top">
          <div className="section-heading light">
            <p className="section-index">02 · 이용 방법</p>
            <h2>약속 장소 고민,<br /><em>네 걸음이면 끝.</em></h2>
          </div>
          <p>복잡한 계산은 미핑이 할게요.<br />친구들은 각자 출발지만 알려주세요.</p>
        </div>
        <ol className="step-list">
          {steps.map(([title, body], index) => (
            <li key={title}>
              <div className="step-icon"><span>{index + 1}</span><i>{["＋", "↗", "⌖", "✓"][index]}</i></div>
              <span className="step-count">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="fairness section-pad" id="fairness">
        <div className="fairness-copy">
          <p className="section-index">03 · 공평함의 기준</p>
          <h2>평균보다 중요한 건,<br /><em>가장 먼 친구의 시간.</em></h2>
          <p>미핑은 후보마다 가장 오래 걸리는 사람의 이동시간을 먼저 살펴요. 모두의 이동시간 차이가 15분 이내인 후보만 남겨, 한 사람의 긴 이동을 평균 속에 숨기지 않아요.</p>
          <div className="fair-rule"><span>미핑의 기준</span><strong>최대 이동시간은 짧게,<br />서로의 시간 차이는 작게.</strong></div>
        </div>
        <div className="comparison" aria-label="중간지점 후보 이동시간 비교 예시">
          <div className="compare-head"><span>후보 비교</span><small>예상 이동시간</small></div>
          <div className="candidate winner">
            <div className="candidate-title"><span>A</span><div><strong>성수역</strong><small>추천 · 시간 차이 7분</small></div><b>1순위</b></div>
            <div className="candidate-bars"><i style={{ "--size": "62%" } as React.CSSProperties} /><i style={{ "--size": "76%" } as React.CSSProperties} /><i style={{ "--size": "70%" } as React.CSSProperties} /></div>
            <div className="candidate-times"><span>28분</span><span>35분</span><span>32분</span></div>
          </div>
          <div className="candidate muted-candidate">
            <div className="candidate-title"><span>B</span><div><strong>시청역</strong><small>시간 차이 32분</small></div></div>
            <div className="candidate-bars"><i style={{ "--size": "32%" } as React.CSSProperties} /><i style={{ "--size": "84%" } as React.CSSProperties} /><i style={{ "--size": "60%" } as React.CSSProperties} /></div>
            <div className="candidate-times"><span>18분</span><span>50분</span><span>34분</span></div>
          </div>
          <p className="compare-note"><span>✓</span> A가 모두에게 더 공평해요</p>
        </div>
      </section>

      <section className="privacy-teaser section-pad">
        <div className="character-wrap" aria-hidden="true">
          <div className="character-halo" />
          <img src="/miping-character.png" alt="" width={420} height={420} />
        </div>
        <div className="privacy-copy">
          <p className="section-index">04 · 안심하고 쓰도록</p>
          <h2>필요한 정보만,<br /><em>투명하게 다뤄요.</em></h2>
          <p>출발 위치는 사용자가 직접 선택할 때만 저장되고, 같은 모임의 참여자에게만 공유될 수 있어요. 개인정보의 수집 목적과 보관 기준도 숨김없이 안내합니다.</p>
          <div className="legal-links">
            <Link href="/privacy">개인정보처리방침 <span>→</span></Link>
            <Link href="/terms">서비스 이용약관 <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="final-cta" id="coming-soon">
        <div className="final-route route-left" aria-hidden="true" />
        <div className="final-route route-right" aria-hidden="true" />
        <div className="final-pin" aria-hidden="true"><i /></div>
        <p>우리의 다음 약속</p>
        <h2>이번에는,<br />미핑에서 만나요.</h2>
        <span>Android 앱을 준비하고 있어요.</span>
        <a className="button button-dark" href="mailto:tr_cycle-miping@naver.com?subject=미핑 출시 소식 신청">출시 소식 문의하기 <b>→</b></a>
      </section>

      <footer>
        <div className="footer-brand"><img src="/app-icon.png" alt="" width={34} height={34} /><strong>미핑</strong><span>우리 사이, 딱 좋은 중간</span></div>
        <div className="footer-links"><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">서비스 이용약관</Link><a href="mailto:tr_cycle-miping@naver.com">문의</a></div>
        <p>© 2026 MiPing. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "people") {
    return (
      <div className="feature-visual people-visual" aria-hidden="true">
        <div className="invite-card"><span>토요일 저녁 약속</span><strong>친구를 초대해 주세요</strong><div className="invite-code">MIPING24 <b>복사</b></div></div>
        <div className="avatar-stack"><i>수</i><i>민</i><i>지</i><i>현</i><i>+4</i></div>
        <div className="invite-link">초대 링크가 복사됐어요 <span>✓</span></div>
      </div>
    );
  }

  if (type === "vote") {
    return (
      <div className="feature-visual vote-visual" aria-hidden="true">
        <div className="vote-card active"><span><i>1</i><b>성수역</b><small>평균 31분</small></span><strong>3표</strong></div>
        <div className="vote-card"><span><i>2</i><b>건대입구역</b><small>평균 34분</small></span><strong>1표</strong></div>
        <div className="vote-card"><span><i>3</i><b>왕십리역</b><small>평균 36분</small></span><strong>0표</strong></div>
        <div className="vote-confirm">성수역에서 만나요! <span>✓</span></div>
      </div>
    );
  }

  return (
    <div className="feature-visual time-visual" aria-hidden="true">
      <div className="time-route route-card-a"><span>수현</span><i /><b>32분</b></div>
      <div className="time-route route-card-b"><span>민준</span><i /><b>29분</b></div>
      <div className="time-route route-card-c"><span>지우</span><i /><b>31분</b></div>
      <div className="center-marker"><i /><strong>성수역</strong><small>시간 차이 3분</small></div>
    </div>
  );
}
