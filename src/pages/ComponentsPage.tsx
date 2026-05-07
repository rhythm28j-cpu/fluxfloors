import { componentRegistry } from '../registry/componentRegistry'

export default function ComponentsPage() {
  return (
    <main className="demo-page">
      <header className="demo-hero">
        <h1>Component Library</h1>
        <p>Live examples driven from the component registry metadata and JSON schemas.</p>
      </header>

      {componentRegistry.map((entry) => (
        <section key={entry.id} className="demo-section">
          <div className="demo-meta">
            <h2>{entry.name}</h2>
            <p>{entry.description}</p>
          </div>

          <div className="demo-grid">
            {entry.examples?.map((example, index) => (
              <article key={index} className="demo-card">
                <div className="demo-card__header">
                  <h3>{example.title}</h3>
                </div>
                <div className="demo-render">
                  {renderExample(entry.component, example.props)}
                </div>
                <pre className="demo-props">{formatProps(example.props)}</pre>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

function renderExample(Component: React.ComponentType<any>, props: Record<string, unknown>) {
  return <Component {...props} />
}

function formatProps(props: Record<string, unknown>) {
  return JSON.stringify(props, null, 2)
}
