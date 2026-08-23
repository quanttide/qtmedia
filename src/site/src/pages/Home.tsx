import { platforms } from "../data/platforms";

const contacts = [
  { label: "GitHub", value: "github.com/quanttide", href: "https://github.com/quanttide" },
];

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <h1 className="hero-tagline">
          量潮媒体中心。<br />
          统一入口：量潮在各媒体平台的账号矩阵与内容动态。
        </h1>
      </section>

      <section className="section">
        <h2>媒体矩阵</h2>
        {platforms.length === 0 ? (
          <p className="empty">待补充</p>
        ) : (
          platforms.map(platform => (
            <div className="platform-item" key={platform.slug}>
              <span className="platform-name">{platform.name}</span>
              <p className="platform-scope">{platform.scope}</p>
              {platform.url && (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  访问 →
                </a>
              )}
            </div>
          ))
        )}
      </section>

      <section className="section">
        <h2>联系</h2>
        <div className="contact-list">
          {contacts.map(contact => (
            <div className="contact-item" key={contact.label}>
              <span className="contact-label">{contact.label}</span>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
