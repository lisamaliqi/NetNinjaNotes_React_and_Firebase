interface Props {
    title: string;
    subtitle?: string;
  }


export default function Title(props: Props) {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    )
};