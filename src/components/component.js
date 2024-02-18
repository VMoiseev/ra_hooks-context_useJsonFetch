import useJsonFetch from "../hooks/useJsonFetch";

export default function Component(props) {
  const [data, loading, error] = useJsonFetch(props.url);

  return (
    <div className="component">
      <h1>{props.title}</h1>
      <div className="url">{props.url}</div>
      <div className="status-ok">{data.status}</div>
      {loading && <div className="status-loading">Загрузка...</div>}
      {error && <div className="status-error">{error.toString()}</div>}
    </div>
  );
}
