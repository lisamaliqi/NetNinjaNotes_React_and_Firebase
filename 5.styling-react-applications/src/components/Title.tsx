interface Props {
    title: string;
    subtitle: string;
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

//react fragments would look something like this:

/**
export default function Title(props: Props) {
    return (
        <>  <-- This is a react fragment, when rendered to the dom it renders out all the child elements but not this
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">{props.subtitle}</h2>
        </>
    )
};

you can't create a fragment if it has a prop
if we want to create a fragment but it has a prop we have to write React.Fragment, ex:
export default function Title(props: Props) {
    return (
        <React.Fragment>  <-- This is a react fragment, when rendered to the dom it renders out all the child elements but not this
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">{props.subtitle}</h2>
        </React.Fragment>
    )
};

 */
